/**
 * Current Weather Types
 * Type definitions for Current Weather component
 */

import type {
  CurrentWeather as CurrentWeatherType,
  Location,
  WindSpeedUnit,
  ForecastDay
} from '@/types';
import { TemperatureUnit } from '@/types';

export interface CurrentWeatherProps {
  current: CurrentWeatherType;
  location: Location;
  todayForecast?: ForecastDay;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}