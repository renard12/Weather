/**
 * Global Constants
 * Centralized configuration values for the application
 */

// Time constants in milliseconds
export const TIME = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
} as const;

// React Query cache configuration
export const QUERY_CONFIG = {
  STALE_TIME: 5 * TIME.MINUTE, // Data considered stale after 5 minutes
  GC_TIME: 10 * TIME.MINUTE, // Garbage collection after 10 minutes (formerly cacheTime)
  RETRY_COUNT: 2, // Number of retry attempts
  RETRY_DELAY: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
} as const;

// Weather API configuration
export const WEATHER_CONFIG = {
  DEFAULT_LOCATION: 'London',
  MAX_FORECAST_DAYS: 7,
  REFRESH_INTERVAL: 10 * TIME.MINUTE, // Auto-refresh weather data every 10 minutes
} as const;

// Search history configuration
export const SEARCH_HISTORY_CONFIG = {
  MAX_ITEMS: 10,
  UNDO_TIMEOUT: 10 * TIME.SECOND, // 10 seconds to undo removal
  STORAGE_KEY: 'weather-search-history',
  REMOVED_STORAGE_KEY: 'weather-removed-history',
} as const;

// User preferences configuration
export const PREFERENCES_CONFIG = {
  STORAGE_KEY: 'weather-preferences',
  DEFAULT_TEMPERATURE_UNIT: 'celsius' as const,
  DEFAULT_WIND_SPEED_UNIT: 'kph' as const,
} as const;

// Geolocation configuration
export const GEOLOCATION_CONFIG = {
  TIMEOUT: 10 * TIME.SECOND, // 10 seconds timeout for geolocation
  MAXIMUM_AGE: 5 * TIME.MINUTE, // Cache geolocation for 5 minutes
  HIGH_ACCURACY: true,
  FALLBACK_DELAY: 3 * TIME.SECOND, // Delay before fallback to default location
} as const;

// API endpoints (if needed for future expansion)
export const API_ENDPOINTS = {
  BASE_URL: 'https://api.weatherapi.com/v1',
  CURRENT: '/current.json',
  FORECAST: '/forecast.json',
  SEARCH: '/search.json',
} as const;

// UI Animation durations
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  VERY_SLOW: 700,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;