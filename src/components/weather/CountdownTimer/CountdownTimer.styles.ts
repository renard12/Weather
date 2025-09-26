/**
 * CountdownTimer Component Styles
 * Centralized style configurations for CountdownTimer component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Container styles
export const containerStyles = cn(
  styled.layout.textCenter,
  styled.spacing.p[4],
  styled.bg.yellow50,
  styled.border.yellow200,
  styled.rounded.lg,
  styled.spacing.mb[4]
);

// Content wrapper styles
export const contentWrapperStyles = cn(
  styled.layout.flex,
  styled.layout.flexCol,
  styled.layout.itemsCenter,
  styled.layout.spaceY4
);

// SVG container styles
export const svgContainerStyles = cn(
  styled.layout.relative
);

// SVG styles
export const svgStyles = cn(
  'w-16 h-16 transform -rotate-90'
);

// Circle background styles
export const circleBackgroundStyles = cn(
  styled.color.gray200
);

// Circle progress styles
export const circleProgressStyles = cn(
  styled.color.blue500,
  styled.transition.all1000,
  'ease-linear'
);

// Counter display styles
export const counterContainerStyles = cn(
  styled.layout.absolute,
  styled.layout.insetZero,
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyCenter
);

export const counterTextStyles = cn(
  styled.text['2xl'],
  styled.font.bold,
  styled.color.heading
);

// Text styles
export const textStyles = cn(
  styled.color.yellow800
);