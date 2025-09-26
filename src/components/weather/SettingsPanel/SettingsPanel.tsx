/**
 * SettingsPanel Component
 * Displays weather unit preferences settings
 */

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TemperatureSymbol } from '@/types';
import type { SettingsPanelProps } from './types';
import {
  panelStyles,
  gridStyles,
  settingButtonStyles,
  labelStyles,
  valueStyles,
} from './SettingsPanel.styles';

export const SettingsPanel = ({
  show,
  temperatureUnit,
  windSpeedUnit,
  onToggleTemperature,
  onToggleWindSpeed,
}: SettingsPanelProps) => {
  if (!show) {
    return null;
  }

  return (
    <Card className={panelStyles}>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={gridStyles}>
          <button onClick={onToggleTemperature} className={settingButtonStyles}>
            <span className={labelStyles}>Temperature Unit</span>
            <span className={valueStyles}>{TemperatureSymbol[temperatureUnit]}</span>
          </button>
          <button onClick={onToggleWindSpeed} className={settingButtonStyles}>
            <span className={labelStyles}>Wind Speed Unit</span>
            <span className={valueStyles}>
              {windSpeedUnit === 'kph' ? 'km/h' : 'mph'}
            </span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};