/**
 * Custom Hooks for Weather Utilities
 * Optimized weather data transformation and formatting with memoization
 */

import { useMemo } from 'react';
import { format } from 'date-fns';

/**
 * Hook to get weather condition color class
 * @param code - Weather condition code
 * @returns Memoized gradient color class string
 */
export const useWeatherColorClass = (code: number | undefined): string => {
  return useMemo(() => {
    if (code === undefined) return 'from-blue-400 to-blue-600';

    // Clear/Sunny
    if (code === 1000) return 'from-yellow-400 to-orange-500';

    // Partly cloudy
    if ([1003, 1006, 1009].includes(code)) return 'from-blue-400 to-blue-600';

    // Fog/Mist
    if ([1030, 1135, 1147].includes(code)) return 'from-gray-400 to-gray-600';

    // Thunderstorm
    if (code >= 1273 && code <= 1282) return 'from-gray-700 to-gray-900';

    // Snow (codes 1066-1225 are snow, 1237-1264 are also snow)
    if ((code >= 1066 && code <= 1225) || (code >= 1237 && code <= 1264)) {
      return 'from-blue-300 to-gray-400';
    }

    // Rain (other codes between 1063-1246)
    if (code >= 1063 && code <= 1246) return 'from-blue-500 to-blue-700';

    return 'from-blue-400 to-blue-600'; // Default
  }, [code]);
};

/**
 * Hook to format date/time for display
 * @param date - Date string or Date object to format
 * @param formatStr - Format string (default: 'EEEE, MMMM d' for date)
 * @returns Memoized formatted date string
 */
export const useFormattedDateTime = (
  date: string | Date | undefined,
  formatStr: string = 'EEEE, MMMM d'
): string => {
  return useMemo(() => {
    if (!date) return '';
    try {
      return format(new Date(date), formatStr);
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  }, [date, formatStr]);
};

/**
 * Hook to get UV index description
 * @param uv - UV index value
 * @returns Memoized UV description with text and color
 */
export const useUVIndexDescription = (uv: number | undefined): { text: string; color: string } => {
  return useMemo(() => {
    if (uv === undefined) return { text: 'Unknown', color: 'text-gray-500' };

    if (uv <= 2) return { text: 'Low', color: 'text-green-600' };
    if (uv <= 5) return { text: 'Moderate', color: 'text-yellow-600' };
    if (uv <= 7) return { text: 'High', color: 'text-orange-600' };
    if (uv <= 10) return { text: 'Very High', color: 'text-red-600' };
    return { text: 'Extreme', color: 'text-purple-600' };
  }, [uv]);
};

/**
 * Hook to get humidity description
 * @param humidity - Humidity percentage
 * @returns Memoized humidity description string
 */
export const useHumidityDescription = (humidity: number | undefined): string => {
  return useMemo(() => {
    if (humidity === undefined) return 'Unknown';

    if (humidity < 30) return 'Dry';
    if (humidity < 60) return 'Comfortable';
    if (humidity < 80) return 'Humid';
    return 'Very Humid';
  }, [humidity]);
};

/**
 * Hook to get visibility description
 * @param visibility - Visibility in km
 * @returns Memoized visibility description
 */
export const useVisibilityDescription = (visibility: number | undefined): string => {
  return useMemo(() => {
    if (visibility === undefined) return 'Unknown';

    if (visibility >= 10) return 'Excellent';
    if (visibility >= 5) return 'Good';
    if (visibility >= 2) return 'Moderate';
    if (visibility >= 1) return 'Poor';
    return 'Very Poor';
  }, [visibility]);
};

/**
 * Hook to get wind speed description
 * @param speed - Wind speed in km/h
 * @returns Memoized wind description
 */
export const useWindDescription = (speed: number | undefined): string => {
  return useMemo(() => {
    if (speed === undefined) return 'Unknown';

    if (speed < 2) return 'Calm';
    if (speed < 12) return 'Light';
    if (speed < 20) return 'Moderate';
    if (speed < 29) return 'Fresh';
    if (speed < 39) return 'Strong';
    if (speed < 50) return 'Near Gale';
    if (speed < 62) return 'Gale';
    if (speed < 75) return 'Strong Gale';
    if (speed < 89) return 'Storm';
    if (speed < 103) return 'Violent Storm';
    return 'Hurricane Force';
  }, [speed]);
};

/**
 * Hook to get air quality description
 * @param index - Air quality index (US EPA or GB DEFRA)
 * @returns Memoized air quality description with color
 */
export const useAirQualityDescription = (
  index: number | undefined
): { text: string; color: string } => {
  return useMemo(() => {
    if (index === undefined) return { text: 'Unknown', color: 'text-gray-500' };

    switch (index) {
      case 1:
        return { text: 'Good', color: 'text-green-600' };
      case 2:
        return { text: 'Moderate', color: 'text-yellow-600' };
      case 3:
        return { text: 'Unhealthy for Sensitive', color: 'text-orange-600' };
      case 4:
        return { text: 'Unhealthy', color: 'text-red-600' };
      case 5:
        return { text: 'Very Unhealthy', color: 'text-purple-600' };
      case 6:
        return { text: 'Hazardous', color: 'text-red-900' };
      default:
        return { text: 'Unknown', color: 'text-gray-500' };
    }
  }, [index]);
};

/**
 * Hook to get precipitation chance description
 * @param chance - Precipitation chance percentage
 * @returns Memoized precipitation description
 */
export const usePrecipitationDescription = (chance: number | undefined): string => {
  return useMemo(() => {
    if (chance === undefined) return 'Unknown';

    if (chance === 0) return 'No chance';
    if (chance < 20) return 'Very unlikely';
    if (chance < 40) return 'Unlikely';
    if (chance < 60) return 'Possible';
    if (chance < 80) return 'Likely';
    return 'Very likely';
  }, [chance]);
};