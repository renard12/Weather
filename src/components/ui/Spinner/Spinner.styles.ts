/**
 * Spinner Component Styles
 * Centralized style configurations for Spinner component
 */

import { styled } from '@/theme/styled';
import { SpinnerSize, SpinnerColor } from './type';

export const containerStyles = [
  styled.layout.inline,
  styled.layout.itemsCenter,
  styled.spacing.gap[2],
].join(' ');

export const baseSpinnerStyles = [styled.animation.spin, styled.transition.base].join(' ');

export const sizeStyles = {
  [SpinnerSize.SMALL]: {
    spinner: [styled.size.w3, styled.size.h3].join(' '),
    text: styled.text.xs,
  },
  [SpinnerSize.MEDIUM]: {
    spinner: [styled.size.w4, styled.size.h4].join(' '),
    text: styled.text.sm,
  },
  [SpinnerSize.LARGE]: {
    spinner: [styled.size.w5, styled.size.h5].join(' '),
    text: styled.text.base,
  },
  [SpinnerSize.EXTRA_LARGE]: {
    spinner: [styled.size.w8, styled.size.h8].join(' '),
    text: styled.text.lg,
  },
};

export const colorStyles = {
  [SpinnerColor.PRIMARY]: styled.color.primary,
  [SpinnerColor.WHITE]: styled.color.white,
  [SpinnerColor.CURRENT]: styled.color.current,
};

export const labelStyles = {
  visible: styled.interactive.notSrOnly,
  hidden: styled.interactive.srOnly,
};
