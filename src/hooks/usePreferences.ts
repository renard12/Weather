/**
 * Custom Hook for User Preferences
 * Manages user settings with localStorage persistence
 */

import { useState, useEffect, useCallback } from 'react';
import { TemperatureUnit, WindSpeedUnit, UserPreferences } from '@/types';

const STORAGE_KEY = 'weather-app-preferences';

const DEFAULT_PREFERENCES: UserPreferences = {
  temperatureUnit: TemperatureUnit.CELSIUS,
  windSpeedUnit: WindSpeedUnit.KPH,
  location: undefined,
};

/**
 * Hook to manage user preferences with localStorage
 */
export const usePreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [isLoading, setIsLoading] = useState(true);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          ...DEFAULT_PREFERENCES,
          ...parsed,
        });
      }
    } catch (error) {
      console.error('Failed to load preferences:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      } catch (error) {
        console.error('Failed to save preferences:', error);
      }
    }
  }, [preferences, isLoading]);

  const updatePreferences = useCallback((updates: Partial<UserPreferences>) => {
    setPreferences((prev) => ({
      ...prev,
      ...updates,
    }));
  }, []);

  const resetPreferences = useCallback(() => {
    setPreferences(DEFAULT_PREFERENCES);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to reset preferences:', error);
    }
  }, []);

  const toggleTemperatureUnit = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      temperatureUnit:
        prev.temperatureUnit === TemperatureUnit.CELSIUS
          ? TemperatureUnit.FAHRENHEIT
          : TemperatureUnit.CELSIUS,
    }));
  }, []);

  const toggleWindSpeedUnit = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      windSpeedUnit:
        prev.windSpeedUnit === WindSpeedUnit.KPH
          ? WindSpeedUnit.MPH
          : WindSpeedUnit.KPH,
    }));
  }, []);

  return {
    preferences,
    isLoading,
    updatePreferences,
    resetPreferences,
    toggleTemperatureUnit,
    toggleWindSpeedUnit,
  };
};