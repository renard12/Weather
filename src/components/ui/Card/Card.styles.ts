/**
 * Card Styles Configuration
 * Centralized styling definitions for Card components
 */

import { styled, themeClasses } from '@/theme/styled';
import { CardVariant, CardPadding, HeadingLevel } from './type';

export const variantStyles = {
  [CardVariant.DEFAULT]: themeClasses(styled.bg.white, styled.shadow.lg),
  [CardVariant.GRADIENT]: themeClasses(styled.gradient.toBr, styled.shadow.xl),
  [CardVariant.GLASS]: themeClasses(styled.bg.glass, styled.effects.backdropBlur, styled.shadow.lg),
};

export const paddingStyles = {
  [CardPadding.NONE]: '',
  [CardPadding.SMALL]: styled.spacing.p[3],
  [CardPadding.MEDIUM]: styled.spacing.p[6],
  [CardPadding.LARGE]: styled.spacing.p[8],
};

export const baseCardStyles = themeClasses(styled.rounded['2xl'], styled.transition.base);

export const headerStyles = styled.spacing.mb[4];

export const titleSizeStyles = {
  [HeadingLevel.H1]: styled.text['3xl'],
  [HeadingLevel.H2]: styled.text['2xl'],
  [HeadingLevel.H3]: styled.text.xl,
  [HeadingLevel.H4]: styled.text.lg,
};

export const titleBaseStyles = themeClasses(styled.font.bold, styled.color.heading);
