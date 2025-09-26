/**
 * ForecastCard Component Styles
 * Centralized style configurations for ForecastCard component
 */

import { styled } from '@/theme/styled';
import { cn } from '@/utils/cn';

// Card styles
export const getCardClassName = (isToday: boolean) => cn(
  styled.shadow.hover.xl,
  styled.transition.base,
  isToday && styled.ring.blue
);

// Container styles
export const containerStyles = 'text-center';

// Day name styles
export const dayNameStyles = cn(
  styled.font.semibold,
  styled.color.heading,
  styled.spacing.mb[1]
);

// Date styles
export const dateStyles = cn(
  styled.text.xs,
  styled.color.icon,
  styled.spacing.mb[3]
);

// Icon container styles
export const iconContainerStyles = cn(
  styled.layout.flex,
  styled.layout.justifyCenter,
  styled.spacing.mb[3]
);

// Weather icon styles
export const iconStyles = cn(
  styled.size.w16,
  styled.size.h16
);

// Condition text styles
export const conditionStyles = cn(
  styled.text.sm,
  styled.color.label,
  styled.spacing.mb[3]
);

// Temperature container styles
export const tempContainerStyles = cn(
  styled.layout.flex,
  styled.layout.justifyCenter,
  styled.layout.itemsCenter,
  styled.spacing.gap[2],
  styled.spacing.mb[4]
);

// Max temperature styles
export const maxTempStyles = cn(
  styled.text['2xl'],
  styled.font.bold,
  styled.color.heading
);

// Min temperature styles
export const minTempStyles = cn(
  styled.text.lg,
  styled.color.icon
);

// Details container styles
export const detailsContainerStyles = styled.layout.spaceY2;

// Detail row styles
export const detailRowStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween,
  styled.text.sm
);

// Detail label styles
export const detailLabelStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[1],
  styled.color.muted
);

// Detail icon styles
export const detailIconStyles = cn(
  styled.size.w4,
  styled.size.h4
);

// Detail value styles
export const detailValueStyles = cn(
  styled.font.medium,
  styled.color.heading
);