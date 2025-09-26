/**
 * Forecast Card Component
 * Displays weather forecast for a single day
 */

import React, { useMemo } from 'react';
import { Droplets, Wind } from 'lucide-react';
import { Card, CardContent, CardVariant } from '@/components/ui/Card';
import type { DayForecast, WindSpeedUnit } from '@/types';
import { TemperatureUnit, TemperatureSymbol } from '@/types';
import { useFormattedDateTime } from '@/hooks/useWeatherUtils';
import {
  getCardClassName,
  containerStyles,
  dayNameStyles,
  dateStyles,
  iconContainerStyles,
  iconStyles,
  conditionStyles,
  tempContainerStyles,
  maxTempStyles,
  minTempStyles,
  detailsContainerStyles,
  detailRowStyles,
  detailLabelStyles,
  detailIconStyles,
  detailValueStyles,
} from './ForecastCard.styles';

interface ForecastCardProps {
  date: string;
  forecast: DayForecast;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  isToday?: boolean;
}

export const ForecastCard = ({
  date,
  forecast,
  temperatureUnit,
  windSpeedUnit,
  isToday = false,
}: ForecastCardProps) => {
  const dayName = useFormattedDateTime(date, 'EEE');
  const dateFormatted = useFormattedDateTime(date, 'MMM d');

  const maxTemp = useMemo(() => {
    const temp = temperatureUnit === TemperatureUnit.CELSIUS
      ? forecast.maxtemp_c
      : forecast.maxtemp_f;
    return `${Math.round(temp)}°`;
  }, [temperatureUnit, forecast.maxtemp_c, forecast.maxtemp_f]);

  const minTemp = useMemo(() => {
    const temp = temperatureUnit === TemperatureUnit.CELSIUS
      ? forecast.mintemp_c
      : forecast.mintemp_f;
    return `${Math.round(temp)}°`;
  }, [temperatureUnit, forecast.mintemp_c, forecast.mintemp_f]);

  const windSpeed = useMemo(() => {
    if (windSpeedUnit === 'kph') {
      return `${Math.round(forecast.maxwind_kph)} km/h`;
    }
    return `${Math.round(forecast.maxwind_mph)} mph`;
  }, [windSpeedUnit, forecast.maxwind_kph, forecast.maxwind_mph]);

  return (
    <Card
      variant={CardVariant.GLASS}
      className={getCardClassName(isToday)}
    >
      <CardContent>
        <div className={containerStyles}>
          <p className={dayNameStyles}>
            {isToday ? 'Today' : dayName}
          </p>
          <p className={dateStyles}>{dateFormatted}</p>

          <div className={iconContainerStyles}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https:${forecast.condition.icon}`}
              alt={forecast.condition.text}
              className={iconStyles}
            />
          </div>

          <p className={conditionStyles}>{forecast.condition.text}</p>

          <div className={tempContainerStyles}>
            <span className={maxTempStyles}>{maxTemp}</span>
            <span className={minTempStyles}>{minTemp}</span>
          </div>

          <div className={detailsContainerStyles}>
            <div className={detailRowStyles}>
              <span className={detailLabelStyles}>
                <Droplets className={detailIconStyles} />
                Rain
              </span>
              <span className={detailValueStyles}>
                {forecast.daily_chance_of_rain}%
              </span>
            </div>

            <div className={detailRowStyles}>
              <span className={detailLabelStyles}>
                <Wind className={detailIconStyles} />
                Wind
              </span>
              <span className={detailValueStyles}>
                {windSpeed}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};