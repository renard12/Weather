/**
 * Skeleton Component
 * Loading placeholder with shimmer animation
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { SkeletonVariant, SkeletonAnimation } from './type';
import {
  baseStyles,
  variantStyles,
  animationStyles,
  getDefaultHeight,
  getDefaultWidth,
} from './Skeleton.styles';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  animation?: SkeletonAnimation;
}

export const Skeleton = ({
  className,
  variant = SkeletonVariant.TEXT,
  width,
  height,
  animation = SkeletonAnimation.PULSE,
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn(baseStyles, variantStyles[variant], animationStyles[animation], className)}
      style={{
        width: width || getDefaultWidth(),
        height: height || getDefaultHeight(variant),
      }}
      {...props}
    />
  );
};
