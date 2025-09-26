/**
 * Error Display Component Styles
 * Centralized style configurations for ErrorDisplay component
 */

import { styled } from '@/theme/styled';
import { cn } from '@/utils/cn';

export const iconClassName = cn(styled.size.w12, styled.size.h12);

export const errorIconContainerStyles = cn(
  styled.layout.flex,
  styled.layout.justifyCenter,
  styled.spacing.mb[4],
  styled.color.error
);

export const titleStyles = cn(
  styled.text.xl,
  styled.font.semibold,
  styled.color.heading,
  styled.spacing.mb[2]
);

export const messageStyles = cn(
  styled.color.muted,
  styled.spacing.mb[6]
);

export const debugSummaryStyles = cn(
  'cursor-pointer',
  styled.text.sm,
  styled.color.icon
);

export const debugPreStyles = cn(
  styled.spacing.mt[2],
  styled.spacing.p[3],
  styled.bg.muted,
  styled.rounded.default,
  styled.text.xs,
  'overflow-auto'
);

export const containerStyles = cn('text-center', styled.spacing.py[8]);

export const debugContainerStyles = cn(styled.spacing.mt[6], 'text-left');