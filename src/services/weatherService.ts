/**
 * Weather Service
 * Implements the Repository pattern for weather data operations
 * Following SOLID principles - specifically Single Responsibility and Dependency Inversion
 */

import { API_ENDPOINTS, API_CONFIG } from '@/constants/api';
import apiClient from '@/lib/axios';
import type {
  WeatherData,
  SearchLocation,
  ApiResponse,
  WeatherError
} from '@/types';

interface WeatherServiceInterface {
  getCurrentWeather(location: string): Promise<ApiResponse<WeatherData>>;
  getForecast(location: string, days?: number): Promise<ApiResponse<WeatherData>>;
  searchLocations(query: string): Promise<ApiResponse<SearchLocation[]>>;
  getWeatherByCoordinates(lat: number, lon: number): Promise<ApiResponse<WeatherData>>;
}

class WeatherService implements WeatherServiceInterface {
  /**
   * Get current weather for a location
   */
  async getCurrentWeather(location: string): Promise<ApiResponse<WeatherData>> {
    try {
      const response = await apiClient.get<WeatherData>(API_ENDPOINTS.CURRENT, {
        params: {
          q: location,
          aqi: API_CONFIG.DEFAULT_AQI,
        },
      });

      return { data: response.data };
    } catch (error) {
      return { error: error as WeatherError };
    }
  }

  /**
   * Get weather forecast for a location
   */
  async getForecast(
    location: string,
    days: number = API_CONFIG.DEFAULT_FORECAST_DAYS
  ): Promise<ApiResponse<WeatherData>> {
    try {
      const response = await apiClient.get<WeatherData>(API_ENDPOINTS.FORECAST, {
        params: {
          q: location,
          days,
          aqi: API_CONFIG.DEFAULT_AQI,
          alerts: API_CONFIG.DEFAULT_ALERTS,
        },
      });

      return { data: response.data };
    } catch (error) {
      return { error: error as WeatherError };
    }
  }

  /**
   * Search for locations
   */
  async searchLocations(query: string): Promise<ApiResponse<SearchLocation[]>> {
    if (!query || query.trim().length < 2) {
      return {
        error: {
          code: 'INVALID_QUERY',
          message: 'Search query must be at least 2 characters long',
        },
      };
    }

    try {
      const response = await apiClient.get<SearchLocation[]>(API_ENDPOINTS.SEARCH, {
        params: {
          q: query,
        },
      });

      return { data: response.data };
    } catch (error) {
      return { error: error as WeatherError };
    }
  }

  /**
   * Get weather by coordinates
   */
  async getWeatherByCoordinates(
    lat: number,
    lon: number
  ): Promise<ApiResponse<WeatherData>> {
    const location = `${lat},${lon}`;
    return this.getForecast(location);
  }


  /**
   * Validate API key
   */
  async validateApiKey(): Promise<boolean> {
    if (!API_CONFIG.API_KEY) {
      return false;
    }

    try {
      const response = await this.getCurrentWeather('London');
      return !response.error;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
const weatherService = new WeatherService();
export default weatherService;

// Export type for dependency injection
export type { WeatherServiceInterface };