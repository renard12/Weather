/**
 * WeatherContent Component
 * Main weather content display including alerts, current weather, and forecast
 */

'use client';

import React from 'react';
import { CurrentWeather } from '../CurrentWeather';
import { ForecastCard } from '../ForecastCard';
import { WeatherAlerts } from '../WeatherAlerts';
import type { WeatherContentProps } from './types';
import type { ForecastDay } from '@/types';
import { gridStyles, forecastTitleStyles, forecastGridStyles } from './WeatherContent.styles';

export const WeatherContent = ({
  data,
  temperatureUnit,
  windSpeedUnit,
}: WeatherContentProps) => {
  return (
    <div className={gridStyles}>
      {/* Weather Alerts */}
      {data.alerts && data.alerts.alert.length > 0 && <WeatherAlerts alerts={data.alerts} />}

      {/* Current Weather */}
      <CurrentWeather
        current={data.current}
        location={data.location}
        todayForecast={data.forecast?.forecastday[0]}
        temperatureUnit={temperatureUnit}
        windSpeedUnit={windSpeedUnit}
      />

      {/* Forecast */}
      {data.forecast && (
        <div>
          <h2 className={forecastTitleStyles}>7-Day Forecast</h2>
          <div className={forecastGridStyles}>
            {data.forecast.forecastday.map((day: ForecastDay, index: number) => (
              <ForecastCard
                key={day.date}
                date={day.date}
                forecast={day.day}
                temperatureUnit={temperatureUnit}
                windSpeedUnit={windSpeedUnit}
                isToday={index === 0}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};