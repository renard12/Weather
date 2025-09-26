/**
 * Button Styles Configuration
 * Centralized styling definitions for Button component
 */

import { styled, themeClasses } from '@/theme/styled';
import { ButtonSize, ButtonVariant } from './type';
import { SpinnerSize } from '../Spinner';

export const variantStyles = {
  [ButtonVariant.PRIMARY]: themeClasses(
    styled.button.primary.base,
    styled.button.primary.hover,
    styled.button.primary.active,
    styled.button.primary.disabled,
    styled.ring.primary,
    styled.shadow.md,
    styled.shadow.hover.lg,
    styled.shadow.active.sm,
    styled.border.transparent
  ),
  [ButtonVariant.SECONDARY]: themeClasses(
    styled.button.secondary.base,
    styled.button.secondary.hover,
    styled.button.secondary.active,
    styled.button.secondary.disabled,
    styled.ring.secondary,
    styled.shadow.sm,
    styled.shadow.hover.md,
    styled.shadow.active.none,
    styled.border.secondary
  ),
  [ButtonVariant.GHOST]: themeClasses(
    styled.button.ghost.base,
    styled.button.ghost.hover,
    styled.button.ghost.active,
    styled.button.ghost.disabled,
    styled.button.ghost.border,
    styled.ring.gray,
    styled.shadow.none,
    styled.shadow.hover.sm,
    styled.bgOpacity[0],
    styled.bgOpacity.hover,
    styled.border.base
  ),
  [ButtonVariant.DANGER]: themeClasses(
    styled.button.danger.base,
    styled.button.danger.hover,
    styled.button.danger.active,
    styled.button.danger.disabled,
    styled.ring.danger,
    styled.shadow.md,
    styled.shadow.hover.lg,
    styled.shadow.active.sm,
    styled.border.transparent
  ),
};

export const sizeStyles = {
  [ButtonSize.SMALL]: themeClasses(
    styled.spacing.px[3],
    styled.spacing.py[1.5],
    styled.text.xs,
    styled.font.medium,
    styled.leading[4],
    styled.rounded.md,
    styled.spacing.gap[1],
    styled.minHeight[8]
  ),
  [ButtonSize.MEDIUM]: themeClasses(
    styled.spacing.px[4],
    styled.spacing.py[2],
    styled.text.sm,
    styled.font.medium,
    styled.leading[5],
    styled.rounded.lg,
    styled.spacing.gap[2],
    styled.minHeight[10]
  ),
  [ButtonSize.LARGE]: themeClasses(
    styled.spacing.px[6],
    styled.spacing.py[3],
    styled.text.base,
    styled.font.semibold,
    styled.leading[6],
    styled.rounded.lg,
    styled.spacing.gap[2],
    styled.minHeight[12]
  ),
};

export const baseStyles = themeClasses(
  styled.layout.itemsCenter,
  styled.layout.justifyCenter,
  styled.font.medium,
  styled.transition.base,
  styled.interactive.focusOutline,
  styled.interactive.disabledCursor,
  styled.layout.relative,
  styled.layout.overflowHidden,
  styled.interactive.whitespaceNowrap,
  styled.interactive.selectNone,
  styled.interactive.touchManipulation
);

export const spinnerSizeMap = {
  [ButtonSize.SMALL]: SpinnerSize.SMALL,
  [ButtonSize.MEDIUM]: SpinnerSize.MEDIUM,
  [ButtonSize.LARGE]: SpinnerSize.LARGE,
};

export const iconSpacings = {
  [ButtonSize.SMALL]: {
    left: styled.spacing.mr[1.5],
    right: styled.spacing.ml[1.5],
  },
  [ButtonSize.MEDIUM]: {
    left: styled.spacing.mr[2],
    right: styled.spacing.ml[2],
  },
  [ButtonSize.LARGE]: {
    left: styled.spacing.mr[2.5],
    right: styled.spacing.ml[2.5],
  },
};
