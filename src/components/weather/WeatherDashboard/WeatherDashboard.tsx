/**
 * Weather Dashboard Component
 * Main container for weather application
 */

'use client';

import React, { useState, useEffect } from 'react';
import { ErrorDisplay } from '../ErrorDisplay';
import { SearchHistory } from '../SearchHistory';
import { FirstTimeSetup } from '../FirstTimeSetup';
import { SettingsPanel } from '../SettingsPanel';
import { WeatherHeader } from '../WeatherHeader';
import { CountdownTimer } from '../CountdownTimer';
import { WeatherContent } from '../WeatherContent';
import { SkeletonCard } from '@/components/ui/Skeleton';
import { useForecast, useWeatherByCoordinates } from '@/hooks/useWeather';
import { useGeolocation } from '@/hooks/useLocationSearch';
import { usePreferences } from '@/hooks/usePreferences';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { useTheme } from '@/theme/ThemeProvider';
import type {
  HistoryItemClickHandler,
  LocationSelectHandler,
} from './types';
import {
  mainContainerStyles,
  contentWrapperStyles,
  contentGridStyles,
  historySectionStyles,
  skeletonContainerStyles,
  skeletonForecastGridStyles,
} from './WeatherDashboard.styles';

export const WeatherDashboard = () => {
  const [location, setLocation] = useState<string>('');
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [shouldAddToHistory, setShouldAddToHistory] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const { isDark, toggleDarkMode } = useTheme();

  const { preferences, toggleTemperatureUnit, toggleWindSpeedUnit, updatePreferences } =
    usePreferences();

  const { history, removedItems, addToHistory, removeFromHistory, undoRemove, clearHistory } =
    useSearchHistory();

  const {
    coordinates,
    error: geoError,
    loading: geoLoading,
    getCurrentLocation,
  } = useGeolocation();

  // Use saved location on mount
  useEffect(() => {
    if (preferences.location && !location) {
      setLocation(preferences.location);
    }
  }, [preferences.location, location]);

  // Fetch weather based on location or coordinates
  const coordinatesQuery = useWeatherByCoordinates(
    useCurrentLocation && coordinates.lat ? coordinates.lat : null,
    useCurrentLocation && coordinates.lon ? coordinates.lon : null
  );

  const forecastQuery = useForecast(location || preferences.location || 'London', 7, {
    enabled: !useCurrentLocation,
  });

  const weatherQuery =
    useCurrentLocation && coordinates.lat && coordinates.lon ? coordinatesQuery : forecastQuery;
  const { data, error, isLoading } = weatherQuery;

  useEffect(() => {
    if (data && data.location && shouldAddToHistory) {
      const { name, country, lat, lon } = data.location;
      addToHistory(name, country, lat, lon);
      setShouldAddToHistory(false);
    }
  }, [data, shouldAddToHistory, addToHistory]);

  const handleLocationSelect: LocationSelectHandler = (newLocation) => {
    setLocation(newLocation);
    setUseCurrentLocation(false);
    setShouldAddToHistory(true);
    updatePreferences({ location: newLocation });
  };

  const handleHistoryItemClick: HistoryItemClickHandler = (item) => {
    const locationString = item.country ? `${item.city}, ${item.country}` : item.city;
    setLocation(locationString);
    setUseCurrentLocation(false);
    setShouldAddToHistory(false);
    updatePreferences({ location: locationString });
  };

  const handleCurrentLocationClick = () => {
    setUseCurrentLocation(true);
    setShouldAddToHistory(true);
    setLocation('');
    getCurrentLocation();
  };

  const isFirstTime = !process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (isFirstTime) {
    return <FirstTimeSetup />;
  }

  return (
    <div className={mainContainerStyles}>
      <div className={contentWrapperStyles}>
        {/* Header */}
        <WeatherHeader
          isDark={isDark}
          geoLoading={geoLoading}
          onLocationSelect={handleLocationSelect}
          onCurrentLocationClick={handleCurrentLocationClick}
          onToggleDarkMode={toggleDarkMode}
          onToggleSettings={() => setShowSettings(!showSettings)}
        />

        {/* Search History */}
        {history.length > 0 && (
          <div className={historySectionStyles}>
            <SearchHistory
              history={history}
              removedItems={removedItems}
              onItemClick={handleHistoryItemClick}
              onRemove={removeFromHistory}
              onUndo={undoRemove}
              onClear={clearHistory}
            />
          </div>
        )}

        {/* Settings Panel */}
        <SettingsPanel
          show={showSettings}
          temperatureUnit={preferences.temperatureUnit}
          windSpeedUnit={preferences.windSpeedUnit}
          onToggleTemperature={toggleTemperatureUnit}
          onToggleWindSpeed={toggleWindSpeedUnit}
        />

        {/* Main Content */}
        {geoError && useCurrentLocation ? (
          <div className={contentGridStyles}>
            <ErrorDisplay
              error={new Error(geoError)}
              onRetry={() => {
                getCurrentLocation();
                setCountdown(null);
              }}
            />
            <div className="flex flex-col items-center space-y-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Enter a city name in the search box
              </span>
            </div>
            {countdown !== null && <CountdownTimer countdown={countdown} />}
          </div>
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : isLoading || (useCurrentLocation && geoLoading) ? (
          <div className={skeletonContainerStyles}>
            <SkeletonCard />
            <div className={skeletonForecastGridStyles}>
              {[...Array(7)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        ) : data ? (
          <WeatherContent
            data={data}
            temperatureUnit={preferences.temperatureUnit}
            windSpeedUnit={preferences.windSpeedUnit}
          />
        ) : null}
      </div>
    </div>
  );
};
