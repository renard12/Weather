/**
 * Custom Hook for Weather Details
 * Generates formatted weather detail items for display
 */

import { useMemo } from 'react';
import { Cloud, Droplets, Wind, Eye, Gauge, Sun } from 'lucide-react';
import type { CurrentWeather, WindSpeedUnit } from '@/types';
import { useUVIndexDescription, useHumidityDescription } from './useWeatherUtils';

export interface WeatherDetailItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
}

interface UseWeatherDetailsParams {
  current: CurrentWeather;
  windSpeedUnit: WindSpeedUnit;
}

export const useWeatherDetails = ({
  current,
  windSpeedUnit
}: UseWeatherDetailsParams): WeatherDetailItem[] => {
  const uvIndex = useUVIndexDescription(current.uv);
  const humidityDesc = useHumidityDescription(current.humidity);

  return useMemo<WeatherDetailItem[]>(() => [
    {
      icon: <Wind className="w-5 h-5" />,
      label: "Wind Speed",
      value: windSpeedUnit === 'kph'
        ? `${Math.round(current.wind_kph)} km/h`
        : `${Math.round(current.wind_mph)} mph`,
      subValue: `${current.wind_dir} • Gust: ${
        windSpeedUnit === 'kph'
          ? `${Math.round(current.gust_kph)} km/h`
          : `${Math.round(current.gust_mph)} mph`
      }`,
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: "Humidity",
      value: `${current.humidity}%`,
      subValue: humidityDesc,
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      label: "Pressure",
      value: `${current.pressure_mb} mb`,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Visibility",
      value: windSpeedUnit === 'kph'
        ? `${current.vis_km} km`
        : `${current.vis_miles} mi`,
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      label: "Cloud Cover",
      value: `${current.cloud}%`,
    },
    {
      icon: <Sun className="w-5 h-5" />,
      label: "UV Index",
      value: current.uv.toString(),
      subValue: uvIndex.text,
    },
  ], [
    current.wind_kph,
    current.wind_mph,
    current.wind_dir,
    current.gust_kph,
    current.gust_mph,
    current.humidity,
    current.pressure_mb,
    current.vis_km,
    current.vis_miles,
    current.cloud,
    current.uv,
    windSpeedUnit,
    uvIndex.text,
    humidityDesc,
  ]);
};