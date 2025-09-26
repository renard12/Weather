/**
 * Custom Hook for Weather Data
 * Implements data fetching with React Query for optimal caching and state management
 */

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import weatherService from '@/services/weatherService';
import type { WeatherData, WeatherError } from '@/types';
import { WEATHER_CONFIG, QUERY_CONFIG } from '@/config/constants';

interface UseWeatherOptions {
  enabled?: boolean;
  refetchInterval?: number;
  staleTime?: number;
}

const DEFAULT_OPTIONS: UseWeatherOptions = {
  enabled: true,
  refetchInterval: WEATHER_CONFIG.REFRESH_INTERVAL,
  staleTime: QUERY_CONFIG.STALE_TIME,
};

/**
 * Hook to fetch current weather data
 */
export const useCurrentWeather = (
  location: string,
  options: UseWeatherOptions = {}
): UseQueryResult<WeatherData, WeatherError> => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

  return useQuery({
    queryKey: ['weather', 'current', location],
    queryFn: async () => {
      const response = await weatherService.getCurrentWeather(location);
      if (response.error) {
        throw response.error;
      }
      return response.data!;
    },
    enabled: mergedOptions.enabled && !!location,
    refetchInterval: mergedOptions.refetchInterval,
    staleTime: mergedOptions.staleTime,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

/**
 * Hook to fetch weather forecast
 */
export const useForecast = (
  location: string,
  days: number = 7,
  options: UseWeatherOptions = {}
): UseQueryResult<WeatherData, WeatherError> => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

  return useQuery({
    queryKey: ['weather', 'forecast', location, days],
    queryFn: async () => {
      const response = await weatherService.getForecast(location, days);
      if (response.error) {
        throw response.error;
      }
      return response.data!;
    },
    enabled: mergedOptions.enabled && !!location,
    refetchInterval: mergedOptions.refetchInterval,
    staleTime: mergedOptions.staleTime,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

/**
 * Hook to fetch weather by coordinates
 */
export const useWeatherByCoordinates = (
  lat: number | null,
  lon: number | null,
  options: UseWeatherOptions = {}
): UseQueryResult<WeatherData, WeatherError> => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

  return useQuery({
    queryKey: ['weather', 'coordinates', lat, lon],
    queryFn: async () => {
      if (lat === null || lon === null) {
        throw new Error('Coordinates are required');
      }
      const response = await weatherService.getWeatherByCoordinates(lat, lon);
      if (response.error) {
        throw response.error;
      }
      return response.data!;
    },
    enabled: mergedOptions.enabled && lat !== null && lon !== null,
    refetchInterval: mergedOptions.refetchInterval,
    staleTime: mergedOptions.staleTime,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
