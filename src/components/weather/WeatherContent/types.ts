/**
 * WeatherContent Component Types
 * Type definitions for WeatherContent component
 */

import type { WeatherData, ForecastDay, TemperatureUnit, WindSpeedUnit } from '@/types';

export interface WeatherContentProps {
  data: WeatherData;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}