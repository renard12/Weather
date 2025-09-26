/**
 * Skeleton Component Styles
 * Centralized style configurations for Skeleton component
 */

import { styled } from '@/theme/styled';
import { SkeletonVariant, SkeletonAnimation } from './type';

export const baseStyles = [styled.bg.skeleton].join(' ');

export const variantStyles = {
  [SkeletonVariant.TEXT]: styled.rounded.default,
  [SkeletonVariant.CIRCULAR]: styled.rounded.full,
  [SkeletonVariant.RECTANGULAR]: styled.rounded.lg,
};

export const animationStyles = {
  [SkeletonAnimation.PULSE]: styled.animation.pulse,
  [SkeletonAnimation.WAVE]: styled.animation.shimmer,
  [SkeletonAnimation.NONE]: styled.animation.none,
};

export const cardStyles = {
  container: [styled.bg.white, styled.rounded['2xl'], styled.shadow.lg, styled.spacing.p[6]].join(
    ' '
  ),
  wrapper: styled.layout.spaceY4,
  flexContainer: [styled.layout.flex, styled.layout.itemsCenter, styled.layout.spaceX4].join(' '),
  flexContent: [styled.layout.flex1, styled.layout.spaceY2].join(' '),
  gridContainer: [styled.layout.grid, styled.layout.gridCols2, styled.spacing.gap[4]].join(' '),
};

export const getDefaultHeight = (variant: SkeletonVariant): string => {
  switch (variant) {
    case SkeletonVariant.TEXT:
      return '1em';
    default:
      return '100%';
  }
};

export const getDefaultWidth = (): string => '100%';
