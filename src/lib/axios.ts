/**
 * Axios Instance Configuration
 * Implements interceptors for consistent error handling and request/response transformation
 */

import axios, { AxiosError, AxiosInstance } from 'axios';
import { API_CONFIG, ERROR_MESSAGES, HTTP_STATUS } from '@/constants/api';
import { WeatherError } from '@/types';

class ApiClient {
  private instance: AxiosInstance;
  private retryCount: Map<string, number> = new Map();

  constructor() {
    this.instance = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.REQUEST_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        // Add API key to all requests
        if (config.params) {
          config.params.key = API_CONFIG.API_KEY;
        } else {
          config.params = { key: API_CONFIG.API_KEY };
        }

        // Add timestamp for cache busting if needed
        config.params.t = Date.now();

        return config;
      },
      (error) => {
        return Promise.reject(this.handleError(error));
      }
    );

    // Response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        // Clear retry count on successful response
        const requestId = this.getRequestId(response.config);
        this.retryCount.delete(requestId);

        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config;

        if (!originalRequest) {
          return Promise.reject(this.handleError(error));
        }

        const requestId = this.getRequestId(originalRequest);
        const currentRetryCount = this.retryCount.get(requestId) || 0;

        // Implement exponential backoff retry logic
        if (
          this.shouldRetry(error) &&
          currentRetryCount < API_CONFIG.RETRY_ATTEMPTS
        ) {
          this.retryCount.set(requestId, currentRetryCount + 1);

          const delay = API_CONFIG.RETRY_DELAY * Math.pow(2, currentRetryCount);
          await this.delay(delay);

          return this.instance(originalRequest);
        }

        // Clear retry count if max retries reached
        this.retryCount.delete(requestId);

        return Promise.reject(this.handleError(error));
      }
    );
  }

  private getRequestId(config: { method?: string; url?: string; params?: Record<string, unknown> }): string {
    return `${config.method}-${config.url}-${JSON.stringify(config.params || {})}`;
  }

  private shouldRetry(error: AxiosError): boolean {
    if (!error.response) {
      // Network error - retry
      return true;
    }

    const status = error.response.status;

    // Retry on specific status codes
    return (
      status === HTTP_STATUS.SERVICE_UNAVAILABLE ||
      status === HTTP_STATUS.INTERNAL_SERVER_ERROR ||
      status === HTTP_STATUS.TOO_MANY_REQUESTS ||
      status === 408 // Request Timeout
    );
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private handleError(error: AxiosError | Error): WeatherError {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const data = error.response.data as { error?: { message?: string } };

        switch (status) {
          case HTTP_STATUS.UNAUTHORIZED:
            return {
              code: 'UNAUTHORIZED',
              message: ERROR_MESSAGES.NO_API_KEY,
              details: data,
            };
          case HTTP_STATUS.NOT_FOUND:
            return {
              code: 'NOT_FOUND',
              message: ERROR_MESSAGES.LOCATION_NOT_FOUND,
              details: data,
            };
          case HTTP_STATUS.TOO_MANY_REQUESTS:
            return {
              code: 'RATE_LIMIT',
              message: ERROR_MESSAGES.RATE_LIMIT,
              details: data,
            };
          case HTTP_STATUS.BAD_REQUEST:
            return {
              code: 'BAD_REQUEST',
              message: data?.error?.message || ERROR_MESSAGES.INVALID_LOCATION,
              details: data,
            };
          default:
            return {
              code: 'API_ERROR',
              message: ERROR_MESSAGES.API_ERROR,
              details: data,
            };
        }
      } else if (error.request) {
        // Request made but no response received
        if (error.code === 'ECONNABORTED') {
          return {
            code: 'TIMEOUT',
            message: ERROR_MESSAGES.TIMEOUT,
            details: error,
          };
        }
        return {
          code: 'NETWORK_ERROR',
          message: ERROR_MESSAGES.NETWORK_ERROR,
          details: error,
        };
      }
    }

    // Unknown error
    return {
      code: 'UNKNOWN',
      message: error.message || ERROR_MESSAGES.UNKNOWN,
      details: error,
    };
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

// Export singleton instance
const apiClient = new ApiClient();
export default apiClient.getInstance();