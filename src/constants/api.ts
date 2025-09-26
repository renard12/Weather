/**
 * API Constants
 * Centralized configuration for API endpoints and settings
 */

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_WEATHER_API_URL || 'https://api.weatherapi.com/v1',
  API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY || '',
  DEFAULT_FORECAST_DAYS: 7,
  DEFAULT_AQI: 'yes',
  DEFAULT_ALERTS: 'yes',
  REQUEST_TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

export const API_ENDPOINTS = {
  CURRENT: '/current.json',
  FORECAST: '/forecast.json',
  SEARCH: '/search.json',
} as const;

export const ERROR_MESSAGES = {
  NO_API_KEY:
    'Weather API key is not configured. Please add your API key to the environment variables.',
  INVALID_LOCATION: 'Invalid location. Please enter a valid city name or coordinates.',
  NETWORK_ERROR: 'Network error. Please check your internet connection and try again.',
  API_ERROR: 'Unable to fetch weather data. Please try again later.',
  RATE_LIMIT: 'Too many requests. Please wait a moment and try again.',
  LOCATION_NOT_FOUND: 'Location not found. Please try a different search term.',
  TIMEOUT: 'Request timed out. Please try again.',
  UNKNOWN: 'An unexpected error occurred. Please try again.',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;
