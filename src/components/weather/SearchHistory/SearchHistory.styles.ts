/**
 * SearchHistory Component Styles
 * Centralized style configurations for SearchHistory component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Container styles
export const containerStyles = cn(
  styled.layout.spaceY2
);

// Header styles
export const headerStyles = cn(
  styled.layout.flex,
  styled.layout.flexRow,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween
);

export const titleStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[2]
);

export const titleIconStyles = cn(
  styled.size.w5,
  styled.size.h5
);

// Clear button styles
export const clearButtonStyles = cn(
  styled.color.gray500,
  styled.interactive.hoverTextGray700
);

// Item container styles
export const removedItemStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween,
  styled.spacing.p[3],
  styled.bg.red50,
  styled.border.red200,
  styled.rounded.lg,
  styled.animation.fadeIn
);

export const historyItemStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween,
  styled.spacing.p[3],
  styled.bg.gray50,
  styled.rounded.lg,
  styled.interactive.hoverBgGray100,
  styled.transition.all200,
  styled.interactive.group
);

// Content styles
export const removedItemContentStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[2],
  styled.color.gray500
);

export const removedItemTextStyles = cn(
  styled.interactive.lineThrough
);

export const removedLabelStyles = cn(
  styled.text.xs
);

// Button styles
export const itemButtonStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[3],
  styled.layout.flex1,
  styled.layout.textLeft
);

export const itemIconStyles = cn(
  styled.size.w4,
  styled.size.h4,
  styled.color.gray400
);

export const itemCityStyles = cn(
  styled.font.medium,
  styled.color.heading
);

export const itemCountryStyles = cn(
  styled.color.gray500,
  styled.spacing.ml[1]
);

export const itemTimeStyles = cn(
  styled.text.xs,
  styled.color.gray500
);

// Undo button styles
export const undoButtonStyles = cn(
  styled.color.red600,
  styled.interactive.hoverTextRed700
);

// Remove button styles
export const removeButtonStyles = cn(
  styled.opacity[0],
  styled.interactive.groupHoverOpacity100,
  styled.transition.opacity200
);

export const removeIconStyles = cn(
  styled.size.w4,
  styled.size.h4
);