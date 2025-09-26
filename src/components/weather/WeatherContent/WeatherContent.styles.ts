/**
 * WeatherContent Component Styles
 * Centralized style configurations for WeatherContent component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Grid styles
export const gridStyles = cn(
  styled.layout.grid,
  styled.spacing.gap[4],
  styled.spacing.gap['sm:6']
);

// Forecast section styles
export const forecastTitleStyles = cn(
  styled.text['2xl'],
  styled.font.bold,
  styled.color.heading,
  styled.spacing.mb[4]
);

export const forecastGridStyles = cn(
  styled.layout.grid,
  styled.layout.gridCols1,
  styled.layout.smGridCols2,
  styled.layout.lgGridCols3,
  styled.layout.xlGridCols4,
  styled.spacing.gap[3],
  styled.spacing.gap['sm:4']
);