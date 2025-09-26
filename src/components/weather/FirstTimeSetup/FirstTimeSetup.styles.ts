/**
 * FirstTimeSetup Component Styles
 * Centralized style configurations for FirstTimeSetup component
 */

import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';

// Container styles
export const containerStyles = cn(
  styled.layout.minHScreen,
  styled.gradient.toBr,
  styled.gradient.fromBlue50,
  styled.gradient.toBlue100,
  styled.gradient.darkFromGray900,
  styled.gradient.darkToGray800,
  styled.spacing.p[4]
);

// Wrapper styles
export const wrapperStyles = cn(
  styled.layout.maxW4xl,
  styled.layout.mxAuto,
  styled.layout.pt20
);

// Content styles
export const contentContainerStyles = cn(
  styled.layout.spaceY4
);

export const descriptionStyles = cn(
  styled.color.gray600
);

// Instruction list styles
export const instructionListStyles = cn(
  styled.layout.listDecimal,
  styled.layout.listInside,
  styled.layout.spaceY2,
  styled.color.label
);

// Code block styles
export const codeBlockStyles = cn(
  styled.bg.gray100,
  styled.spacing.p[2],
  styled.rounded.default,
  styled.font.mono,
  styled.text.sm
);

// Link styles
export const linkStyles = cn(
  styled.color.blue600,
  styled.interactive.underline
);