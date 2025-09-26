/**
 * Current Weather Component
 * Displays current weather conditions for a location
 */

import React from 'react';
import { Card, CardContent, CardVariant } from '@/components/ui/Card';
import { WeatherDetail } from '../WeatherDetail';
import { TemperatureSymbol } from '@/types';
import { useWeatherColorClass } from '@/hooks/useWeatherUtils';
import { useWeatherDetails } from '@/hooks/useWeatherDetails';
import { cn } from '@/utils/cn';
import type { CurrentWeatherProps } from './types';
import {
  containerStyles,
  mainInfoContainerStyles,
  locationNameStyles,
  locationDetailsStyles,
  weatherDisplayStyles,
  weatherIconStyles,
  temperatureStyles,
  conditionTextStyles,
  highLowStyles,
  feelsLikeStyles,
  detailsGridStyles,
  cardGradientBaseStyles,
} from './CurrentWeather.styles';

export const CurrentWeather = ({
  current,
  location,
  todayForecast,
  temperatureUnit,
  windSpeedUnit,
}: CurrentWeatherProps) => {
  const gradientClass = useWeatherColorClass(current.condition.code);
  const weatherDetails = useWeatherDetails({ current, windSpeedUnit });

  // Helper function to format temperature
  const formatTemp = (tempC: number, tempF: number): string => {
    const temp = temperatureUnit === 'celsius' ? tempC : tempF;
    return `${Math.round(temp)}${TemperatureSymbol[temperatureUnit]}`;
  };

  return (
    <Card variant={CardVariant.GRADIENT} className={cn(cardGradientBaseStyles, gradientClass)}>
      <CardContent>
        <div className={containerStyles}>
          {/* Main Weather Info */}
          <div className={mainInfoContainerStyles}>
            <h2 className={locationNameStyles}>{location.name}</h2>
            <p className={locationDetailsStyles}>
              {location.region}, {location.country}
            </p>
            <div className={weatherDisplayStyles}>
              <img
                src={`https:${current.condition.icon}`}
                alt={current.condition.text}
                className={weatherIconStyles}
              />
              <div>
                <p className={temperatureStyles}>{formatTemp(current.temp_c, current.temp_f)}</p>
                <p className={conditionTextStyles}>{current.condition.text}</p>
                {todayForecast && (
                  <p className={highLowStyles}>
                    H: {formatTemp(todayForecast.day.maxtemp_c, todayForecast.day.maxtemp_f)} • L:{' '}
                    {formatTemp(todayForecast.day.mintemp_c, todayForecast.day.mintemp_f)}
                  </p>
                )}
                <p className={feelsLikeStyles}>
                  Feels like {formatTemp(current.feelslike_c, current.feelslike_f)}
                </p>
              </div>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className={detailsGridStyles}>
            {weatherDetails.map((detail, index) => (
              <WeatherDetail
                key={`weather-detail-${index}`}
                icon={detail.icon}
                label={detail.label}
                value={detail.value}
                subValue={detail.subValue}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
