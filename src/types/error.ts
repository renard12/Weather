/**
 * Error Types and Enums
 * Centralized error definitions for the application
 */

export enum ErrorCode {
  NETWORK_ERROR = 'NETWORK_ERROR',
  LOCATION_NOT_FOUND = 'LOCATION_NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  RATE_LIMIT = 'RATE_LIMIT',
}

export enum ErrorTitle {
  CONNECTION_PROBLEM = 'Connection Problem',
  LOCATION_NOT_FOUND = 'Location Not Found',
  API_KEY_MISSING = 'API Key Missing',
  TOO_MANY_REQUESTS = 'Too Many Requests',
  SOMETHING_WENT_WRONG = 'Something Went Wrong',
}

export enum ErrorActionText {
  CHECK_API_CONFIG = 'Check API Configuration',
  TRY_AGAIN = 'Try Again',
}

export const DEFAULT_ERROR_MESSAGE = 'An unexpected error occurred. Please try again.';