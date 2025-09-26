/**
 * SettingsPanel Component Styles
 * Centralized style configurations for SettingsPanel component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Panel styles
export const panelStyles = cn(
  styled.spacing.mb[6],
  styled.spacing.p[4],
  styled.bg.white,
  styled.rounded.lg,
  styled.shadow.md
);

// Grid styles
export const gridStyles = cn(
  styled.layout.grid,
  styled.layout.gridCols1,
  styled.layout.smGridCols2,
  styled.spacing.gap[4]
);

// Button styles
export const settingButtonStyles = cn(
  styled.layout.flex,
  styled.layout.itemsCenter,
  styled.layout.justifyBetween,
  styled.spacing.p[3],
  styled.bg.gray50,
  styled.rounded.lg,
  styled.interactive.hoverBgGray100,
  styled.transition.colors
);

// Label styles
export const labelStyles = cn(
  styled.color.label
);

// Value styles
export const valueStyles = cn(
  styled.font.medium,
  styled.color.heading
);