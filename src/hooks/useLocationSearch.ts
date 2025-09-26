/**
 * Custom Hook for Location Search
 * Implements debounced search with React Query
 */

import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import weatherService from '@/services/weatherService';

interface UseLocationSearchOptions {
  debounceMs?: number;
  minLength?: number;
}

const DEFAULT_OPTIONS: UseLocationSearchOptions = {
  debounceMs: 500,
  minLength: 2,
};

/**
 * Hook to search for locations with debouncing
 */
export const useLocationSearch = (
  initialQuery: string = '',
  options: UseLocationSearchOptions = {}
) => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  // Debounce the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, mergedOptions.debounceMs);

    return () => clearTimeout(timer);
  }, [searchQuery, mergedOptions.debounceMs]);

  const queryResult = useQuery({
    queryKey: ['locations', 'search', debouncedQuery],
    queryFn: async () => {
      const response = await weatherService.searchLocations(debouncedQuery);
      if (response.error) {
        throw response.error;
      }
      return response.data || [];
    },
    enabled: debouncedQuery.length >= mergedOptions.minLength!,
    staleTime: 30 * 60 * 1000, // 30 minutes
    retry: 1,
  });

  const updateQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setDebouncedQuery('');
  }, []);

  return {
    searchQuery,
    debouncedQuery,
    updateQuery,
    clearSearch,
    ...queryResult,
  };
};

/**
 * Hook to get user's location from browser
 */
export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<{
    lat: number | null;
    lon: number | null;
  }>({
    lat: null,
    lon: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);

    // Try getting location with different accuracy settings
    const tryGetLocation = (enableHighAccuracy: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {

          // If high accuracy failed, try without it
          if (enableHighAccuracy && error.code === error.POSITION_UNAVAILABLE) {
            tryGetLocation(false);
            return;
          }

          let errorMessage = 'Unable to retrieve your location';

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location permission denied. Please check your browser and system settings.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location unavailable. Please enter a city name.';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out. Please try again.';
              break;
            default:
              errorMessage = 'Location error. Please enter a city name.';
          }

          setError(errorMessage);
          setCoordinates({ lat: null, lon: null });
          setLoading(false);
        },
        {
          enableHighAccuracy,
          timeout: enableHighAccuracy ? 10000 : 5000,
          maximumAge: 60000, // Allow cached position up to 1 minute
        }
      );
    };

    // Start with low accuracy for faster response
    tryGetLocation(false);
  }, []);

  return {
    coordinates,
    error,
    loading,
    getCurrentLocation,
  };
};