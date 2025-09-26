/**
 * LocationSearch Component Styles
 * Centralized style configurations for LocationSearch component
 */

import { styled } from '@/theme/styled';
import { cn } from '@/utils/cn';

// Container styles
export const containerStyles = cn(
  styled.layout.relative,
  styled.layout.wFull,
  styled.layout.smMaxWMd
);

// Icon styles
export const iconStyles = cn(
  styled.size.w5,
  styled.size.h5
);

// Clear button styles
export const clearButtonStyles = '';

// Dropdown styles
export const dropdownStyles = cn(
  styled.layout.absolute,
  styled.layout.topFull,
  styled.spacing.mt[2],
  styled.layout.wFull,
  styled.bg.white,
  styled.rounded.lg,
  styled.shadow.xl,
  styled.border.default,
  styled.layout.zIndex50,
  styled.layout.maxH80,
  styled.layout.overflowYAuto
);

// Loading/Error/Empty message styles
export const messageStyles = cn(
  styled.spacing.p[4],
  styled.layout.textCenter,
  styled.color.icon
);

export const errorMessageStyles = cn(
  styled.spacing.p[4],
  styled.layout.textCenter,
  styled.color.error
);

// Results list styles
export const resultsListStyles = styled.spacing.py[2];

// Result item button styles
export const resultItemStyles = cn(
  styled.layout.wFull,
  styled.spacing.px[4],
  styled.spacing.py[3],
  styled.layout.textLeft,
  styled.button.ghost.hover,
  styled.transition.base
);

// Result item container styles
export const resultItemContainerStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween
);

// Location name styles
export const locationNameStyles = cn(
  styled.font.medium,
  styled.color.heading
);

// Location details styles
export const locationDetailsStyles = cn(
  styled.text.sm,
  styled.color.icon
);

// Result icon styles
export const resultIconStyles = cn(
  styled.size.w4,
  styled.size.h4,
  styled.color.icon
);