/**
 * CurrentWeather Component Styles
 * Centralized style configurations for CurrentWeather component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Container styles
export const containerStyles = cn(
  styled.layout.flex,
  styled.layout.flexCol,
  styled.layout.lgFlexRow,
  styled.layout.lgItemsCenter,
  styled.layout.lgJustifyBetween
);

// Main weather info container
export const mainInfoContainerStyles = cn(
  styled.spacing.mb[6],
  styled.spacing.mb['lg:0']
);

// Location styles
export const locationNameStyles = cn(
  styled.text['3xl'],
  styled.font.bold,
  styled.spacing.mb[2]
);

export const locationDetailsStyles = cn(
  styled.text.lg,
  styled.opacity[90],
  styled.spacing.mb[4]
);

// Weather display container
export const weatherDisplayStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[4]
);

// Weather icon styles
export const weatherIconStyles = cn(
  styled.size.w20,
  styled.size.h20
);

// Temperature styles
export const temperatureStyles = cn(
  styled.text['5xl'],
  styled.font.bold
);

export const conditionTextStyles = cn(
  styled.text.lg,
  styled.opacity[90]
);

export const highLowStyles = cn(
  styled.text.sm,
  styled.opacity[90],
  styled.spacing.mt[1]
);

export const feelsLikeStyles = cn(
  styled.text.sm,
  styled.opacity[75]
);

// Details grid styles
export const detailsGridStyles = cn(
  styled.layout.grid,
  styled.layout.gridCols2,
  styled.layout.mdGridCols3,
  styled.spacing.gap[4],
  styled.spacing.gap['lg:6']
);

// Card gradient base styles (without color)
export const cardGradientBaseStyles = cn(
  styled.gradient.toBr,
  styled.text.white
);