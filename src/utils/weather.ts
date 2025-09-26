/**
 * Weather Utility Functions
 * Pure functions for weather data transformation and formatting
 */

import { format } from 'date-fns';

// Note: Temperature and wind speed conversion functions have been removed.
// The Weather API already provides data in both units:
// - Temperature: temp_c/temp_f, feelslike_c/feelslike_f, etc.
// - Wind Speed: wind_kph/wind_mph, gust_kph/gust_mph, etc.
// - Visibility: vis_km/vis_miles
// Components should directly use the appropriate field based on user preferences.

/**
 * Get weather condition color class
 */
export const getWeatherColorClass = (code: number): string => {
  // Clear/Sunny
  if (code === 1000) return 'from-yellow-400 to-orange-500';

  // Partly cloudy
  if ([1003, 1006, 1009].includes(code)) return 'from-blue-400 to-blue-600';

  // Fog/Mist
  if ([1030, 1135, 1147].includes(code)) return 'from-gray-400 to-gray-600';

  // Thunderstorm
  if (code >= 1273 && code <= 1282) return 'from-gray-700 to-gray-900';

  // Snow (codes 1066-1225 are snow, 1237-1264 are also snow)
  if ((code >= 1066 && code <= 1225) || (code >= 1237 && code <= 1264)) return 'from-blue-300 to-gray-400';

  // Rain (other codes between 1063-1246)
  if (code >= 1063 && code <= 1246) return 'from-blue-500 to-blue-700';

  return 'from-blue-400 to-blue-600'; // Default
};

/**
 * Format date/time for display
 * @param date - Date string or Date object to format
 * @param formatStr - Format string (default: 'EEEE, MMMM d' for date)
 * Common formats:
 * - 'EEEE, MMMM d' - Full date (e.g., "Monday, January 1")
 * - 'h:mm a' - Time (e.g., "3:30 PM")
 * - 'MMM d, yyyy' - Short date (e.g., "Jan 1, 2024")
 */
export const formatDateTime = (date: string | Date, formatStr: string = 'EEEE, MMMM d'): string => {
  return format(new Date(date), formatStr);
};

/**
 * Get UV index description
 */
export const getUVIndexDescription = (uv: number): { text: string; color: string } => {
  if (uv <= 2) return { text: 'Low', color: 'text-green-600' };
  if (uv <= 5) return { text: 'Moderate', color: 'text-yellow-600' };
  if (uv <= 7) return { text: 'High', color: 'text-orange-600' };
  if (uv <= 10) return { text: 'Very High', color: 'text-red-600' };
  return { text: 'Extreme', color: 'text-purple-600' };
};

/**
 * Get humidity description
 */
export const getHumidityDescription = (humidity: number): string => {
  if (humidity < 30) return 'Dry';
  if (humidity < 60) return 'Comfortable';
  if (humidity < 80) return 'Humid';
  return 'Very Humid';
};


