/**
 * Weather Detail Component
 * Displays a single weather metric with icon and value
 */

import React from 'react';
import type { WeatherDetailItem } from '@/hooks/useWeatherDetails';
import {
  containerStyles,
  headerStyles,
  labelStyles,
  valueStyles,
  subValueStyles,
} from './WeatherDetail.styles';

export const WeatherDetail = ({ icon, label, value, subValue }: WeatherDetailItem) => {
  return (
    <div className={containerStyles}>
      <div className={headerStyles}>
        {icon}
        <span className={labelStyles}>{label}</span>
      </div>
      <p className={valueStyles}>{value}</p>
      {subValue && <p className={subValueStyles}>{subValue}</p>}
    </div>
  );
};