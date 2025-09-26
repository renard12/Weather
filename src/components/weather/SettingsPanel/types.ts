/**
 * SettingsPanel Component Types
 * Type definitions for SettingsPanel component
 */

import { TemperatureUnit, WindSpeedUnit } from '@/types';

export interface SettingsPanelProps {
  show: boolean;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
  onToggleTemperature: () => void;
  onToggleWindSpeed: () => void;
}