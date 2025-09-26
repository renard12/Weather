/**
 * WeatherHeader Component
 * Header section with title, search, and action buttons
 */

'use client';

import React from 'react';
import { Settings, Moon, Sun, MapPin } from 'lucide-react';
import { LocationSearch } from '../LocationSearch';
import { Button, ButtonVariant, ButtonSize } from '@/components/ui/Button';
import type { WeatherHeaderProps } from './types';
import {
  containerStyles,
  titleStyles,
  searchContainerStyles,
  searchFieldWrapperStyles,
  buttonGroupStyles,
  iconStyles,
  buttonTextStyles,
} from './WeatherHeader.styles';

export const WeatherHeader = ({
  isDark,
  geoLoading,
  onLocationSelect,
  onCurrentLocationClick,
  onToggleDarkMode,
  onToggleSettings,
}: WeatherHeaderProps) => {
  return (
    <header className={containerStyles}>
      <div>
        <h1 className={titleStyles}>Weather Forecast</h1>

        <div className={searchContainerStyles}>
          <div className={searchFieldWrapperStyles}>
            <LocationSearch onLocationSelect={onLocationSelect} />
          </div>

          <div className={buttonGroupStyles}>
            <Button
              variant={ButtonVariant.GHOST}
              size={ButtonSize.SMALL}
              onClick={onCurrentLocationClick}
              leftIcon={<MapPin className={iconStyles} />}
              className={buttonTextStyles}
              disabled={geoLoading}
            >
              {geoLoading ? 'Loading...' : 'Current'}
            </Button>

            <Button
              variant={ButtonVariant.GHOST}
              size={ButtonSize.SMALL}
              onClick={onToggleDarkMode}
              leftIcon={
                isDark ? (
                  <Sun className={iconStyles} />
                ) : (
                  <Moon className={iconStyles} />
                )
              }
              className={buttonTextStyles}
            >
              {isDark ? 'Light' : 'Dark'}
            </Button>

            <Button
              variant={ButtonVariant.SECONDARY}
              size={ButtonSize.SMALL}
              onClick={onToggleSettings}
              leftIcon={<Settings className={iconStyles} />}
              className={buttonTextStyles}
            >
              Settings
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};