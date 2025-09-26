/**
 * WeatherDashboard Component Styles
 * Centralized style configurations for WeatherDashboard component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Main container styles
export const mainContainerStyles = cn(
  styled.layout.minHScreen,
  styled.gradient.toBr,
  styled.gradient.fromBlue50,
  styled.gradient.toBlue100,
  styled.gradient.darkFromGray900,
  styled.gradient.darkToGray800,
  styled.spacing.p[4]
);

// Content wrapper styles
export const contentWrapperStyles = cn(
  styled.layout.maxW7xl,
  styled.layout.mxAuto,
  styled.spacing.py[4],
  styled.spacing.py['sm:8']
);

// Header styles
export const headerContainerStyles = cn(
  styled.spacing.mb[4],
  styled.spacing.mb['sm:8'],
  styled.layout.textCenter
);

export const titleStyles = cn(
  styled.text['2xl'],
  styled.text['sm:3xl'],
  styled.font.bold,
  styled.color.heading,
  styled.layout.textCenter
);

// Search and controls container
export const searchContainerStyles = cn(
  styled.layout.flex,
  styled.layout.flexCol,
  styled.layout.smFlexRow,
  styled.layout.itemsCenter,
  styled.layout.justifyCenter,
  styled.spacing.gap[3],
  styled.spacing.gap['sm:4']
);

export const searchFieldWrapperStyles = cn(
  styled.layout.wFull,
  styled.layout.smMaxWMd
);

export const buttonGroupStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.spacing.gap[2],
  styled.spacing.gap['sm:3']
);

// Settings panel styles
export const settingsPanelStyles = cn(
  styled.spacing.mb[6],
  styled.spacing.p[4],
  styled.bg.white,
  styled.rounded.lg,
  styled.shadow.md
);

export const settingsTitleStyles = cn(
  styled.text.lg,
  styled.font.semibold,
  styled.spacing.mb[3],
  styled.color.heading
);

export const settingsGridStyles = cn(
  styled.layout.grid,
  styled.layout.gridCols1,
  styled.layout.smGridCols2,
  styled.spacing.gap[4]
);

export const settingItemStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween
);

export const settingLabelStyles = cn(
  styled.color.label
);

// Content grid styles
export const contentGridStyles = cn(
  styled.layout.grid,
  styled.spacing.gap[4],
  styled.spacing.gap['sm:6']
);

// Forecast grid styles
export const forecastGridStyles = cn(
  styled.layout.grid,
  styled.layout.gridCols1,
  styled.layout.smGridCols2,
  styled.layout.lgGridCols3,
  styled.layout.xlGridCols4,
  styled.spacing.gap[3],
  styled.spacing.gap['sm:4']
);

// History section styles
export const historySectionStyles = cn(
  styled.spacing.mt[6]
);

// Loading skeleton styles
export const skeletonContainerStyles = cn(
  styled.layout.spaceY4,
  styled.layout.smSpaceY6
);

export const skeletonForecastGridStyles = cn(
  styled.layout.grid,
  styled.layout.gridCols1,
  styled.layout.smGridCols2,
  styled.layout.lgGridCols3,
  styled.spacing.gap[3],
  styled.spacing.gap['sm:4']
);

// Error styles
export const errorMessageStyles = cn(
  styled.layout.textCenter,
  styled.color.error,
  styled.spacing.py[4]
);

// Countdown styles
export const countdownContainerStyles = cn(
  styled.layout.textCenter,
  styled.spacing.p[4],
  styled.bg.yellow50,
  styled.border.yellow200,
  styled.rounded.lg,
  styled.spacing.mb[4]
);

export const countdownTextStyles = cn(
  styled.color.yellow800
);

// First time user styles
export const firstTimeContainerStyles = cn(
  styled.layout.minHScreen,
  styled.gradient.toBr,
  styled.gradient.fromBlue50,
  styled.gradient.toBlue100,
  styled.gradient.darkFromGray900,
  styled.gradient.darkToGray800,
  styled.spacing.p[4]
);

export const firstTimeWrapperStyles = cn(
  styled.layout.maxW4xl,
  styled.layout.mxAuto,
  styled.layout.pt20
);

export const instructionListStyles = cn(
  styled.layout.listDecimal,
  styled.layout.listInside,
  styled.layout.spaceY2,
  styled.color.label
);

export const codeBlockStyles = cn(
  styled.bg.gray100,
  styled.spacing.p[2],
  styled.rounded.default,
  styled.font.mono,
  styled.text.sm
);

// Button styles
export const themeToggleButtonStyles = cn(
  styled.text.xs,
  styled.text['sm:sm']
);

export const settingsButtonStyles = cn(
  styled.text.xs,
  styled.text['sm:sm']
);