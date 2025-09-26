/**
 * Input Styles Configuration
 * Centralized styling definitions for Input component
 */

import { styled, themeClasses } from '@/theme/styled';
import { InputSize, InputVariant } from './type';

export const baseInputStyles = themeClasses(
  styled.layout.wFull,
  styled.rounded.lg,
  styled.bg.white,
  styled.color.heading,
  styled.spacing.px[4],
  styled.spacing.py[2],
  styled.ring.input,
  styled.color.placeholder,
  styled.transition.fast,
  'disabled:opacity-50 disabled:cursor-not-allowed'
);

export const variantStyles = {
  [InputVariant.DEFAULT]: themeClasses(styled.border.input, styled.bg.white),
  [InputVariant.FILLED]: themeClasses(
    'bg-gray-100 dark:bg-gray-700',
    'border-transparent',
    'focus:bg-white dark:focus:bg-gray-800'
  ),
  [InputVariant.OUTLINE]: themeClasses(styled.border.input, 'bg-transparent'),
};

export const sizeStyles = {
  [InputSize.SMALL]: themeClasses(styled.spacing.px[3], styled.spacing.py[1.5], styled.text.sm),
  [InputSize.MEDIUM]: themeClasses(styled.spacing.px[4], styled.spacing.py[2], styled.text.base),
  [InputSize.LARGE]: themeClasses(styled.spacing.px[5], styled.spacing.py[3], styled.text.lg),
};

export const errorStyles = themeClasses(styled.border.error, styled.ring.inputError);

export const labelStyles = themeClasses(
  styled.layout.block,
  styled.text.sm,
  styled.font.medium,
  styled.color.label,
  styled.spacing.mb[1]
);

export const errorMessageStyles = themeClasses(
  styled.spacing.mt[1],
  styled.text.sm,
  styled.color.error
);

export const iconContainerStyles = {
  left: themeClasses(
    styled.layout.absolute,
    styled.layout.insetY0,
    styled.layout.left0,
    styled.spacing.pl[3],
    styled.layout.flex,
    styled.layout.itemsCenter,
    styled.layout.pointerEventsNone
  ),
  right: themeClasses(
    styled.layout.absolute,
    styled.layout.insetY0,
    styled.layout.right0,
    styled.spacing.pr[3],
    styled.layout.flex,
    styled.layout.itemsCenter
  ),
};

export const iconStyles = styled.color.icon;

export const wrapperStyles = styled.layout.wFull;

export const inputContainerStyles = styled.layout.relative;
