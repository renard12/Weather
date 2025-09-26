/**
 * WeatherAlerts Component Styles
 * Centralized style configurations for WeatherAlerts component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';
import { AlertSeverity } from './types';

// Container styles
export const containerStyles = cn(
  styled.layout.spaceY4
);

// Header styles
export const headerTitleStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[2]
);

// Content styles
export const contentContainerStyles = cn(
  styled.layout.spaceY2
);

export const descriptionStyles = cn(
  styled.color.label
);

// Instruction box styles
export const instructionContainerStyles = cn(
  styled.spacing.mt[3],
  styled.spacing.p[3],
  styled.bg.blue50,
  styled.rounded.lg
);

export const instructionTitleStyles = cn(
  styled.font.semibold,
  styled.color.blue900,
  styled.spacing.mb[1]
);

export const instructionTextStyles = cn(
  styled.color.blue800
);

// DateTime display styles
export const dateTimeContainerStyles = cn(
  styled.layout.flex,
  styled.layout.flexWrap,
  styled.spacing.gap[4],
  styled.spacing.mt[3],
  styled.text.sm,
  styled.color.gray600
);

// Badge styles
export const badgeContainerStyles = cn(
  styled.layout.flex,
  styled.layout.flexWrap,
  styled.spacing.gap[2],
  styled.spacing.mt[3]
);

export const badgeStyles = cn(
  styled.spacing.px[2],
  styled.spacing.py[1],
  styled.text.xs,
  styled.font.medium,
  styled.rounded.full,
  styled.bg.gray200
);

// Dynamic styles functions
export const getCardStyles = (severity: AlertSeverity): string => {
  const baseStyles = styled.border.l4;

  switch (severity) {
    case AlertSeverity.EXTREME:
    case AlertSeverity.SEVERE:
      return cn(baseStyles, styled.border.red500, styled.bg.red50);
    case AlertSeverity.MODERATE:
      return cn(baseStyles, styled.border.orange500, styled.bg.orange50);
    case AlertSeverity.MINOR:
    default:
      return cn(baseStyles, styled.border.yellow500, styled.bg.yellow50);
  }
};

export const getIconStyles = (severity: AlertSeverity): string => {
  const baseStyles = cn(styled.size.w5, styled.size.h5);

  switch (severity) {
    case AlertSeverity.EXTREME:
    case AlertSeverity.SEVERE:
      return cn(baseStyles, styled.color.red500);
    case AlertSeverity.MODERATE:
      return cn(baseStyles, styled.color.orange500);
    case AlertSeverity.MINOR:
    default:
      return cn(baseStyles, styled.color.yellow500);
  }
};

export const getSeverityBadgeStyles = (severity: AlertSeverity): string => {
  const baseStyles = cn(
    styled.spacing.px[2],
    styled.spacing.py[1],
    styled.text.xs,
    styled.font.medium,
    styled.rounded.full
  );

  switch (severity) {
    case AlertSeverity.EXTREME:
    case AlertSeverity.SEVERE:
      return cn(
        baseStyles,
        styled.bg.red200,
        styled.color.red800
      );
    case AlertSeverity.MODERATE:
      return cn(
        baseStyles,
        styled.bg.orange200,
        styled.color.orange800
      );
    case AlertSeverity.MINOR:
      return cn(
        baseStyles,
        styled.bg.yellow200,
        styled.color.yellow800
      );
    default:
      return cn(
        baseStyles,
        styled.bg.gray200,
        styled.color.gray800
      );
  }
};