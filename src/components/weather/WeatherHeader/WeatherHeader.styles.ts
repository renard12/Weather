/**
 * WeatherHeader Component Styles
 * Centralized style configurations for WeatherHeader component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Container styles
export const containerStyles = cn(
  styled.spacing.mb[4],
  styled.spacing.mb['sm:8'],
  styled.layout.textCenter
);

// Title styles
export const titleStyles = cn(
  styled.text['2xl'],
  styled.text['sm:3xl'],
  styled.font.bold,
  styled.color.heading,
  styled.layout.textCenter
);

// Search container styles
export const searchContainerStyles = cn(
  styled.layout.flex,
  styled.layout.flexCol,
  styled.layout.smFlexRow,
  styled.layout.itemsCenter,
  styled.layout.justifyCenter,
  styled.spacing.gap[3],
  styled.spacing.gap['sm:4']
);

// Search field wrapper styles
export const searchFieldWrapperStyles = cn(
  styled.layout.wFull,
  styled.layout.smMaxWMd
);

// Button group styles
export const buttonGroupStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[2],
  styled.spacing.gap['sm:3']
);

// Icon styles
export const iconStyles = cn(
  'w-3.5 h-3.5 sm:w-4 sm:h-4'
);

// Button text styles
export const buttonTextStyles = cn(
  styled.text.xs,
  styled.text['sm:sm']
);