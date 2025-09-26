/**
 * Weather Detail Component Styles
 * Centralized style configurations for WeatherDetail component
 */

import { styled } from '@/theme/styled';
import { cn } from '@/utils/cn';

export const containerStyles = cn(
  styled.bg.glass,
  styled.effects.backdropBlur,
  styled.rounded.lg,
  styled.spacing.p[3]
);

export const headerStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[2],
  styled.spacing.mb[1]
);

export const labelStyles = cn(
  styled.text.xs,
  styled.opacity[75]
);

export const valueStyles = cn(
  styled.text.lg,
  styled.font.semibold
);

export const subValueStyles = cn(
  styled.text.xs,
  styled.opacity[75]
);