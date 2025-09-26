/**
 * Card Component
 * Reusable card container following composition pattern
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { CardVariant, CardPadding } from './type';
import { variantStyles, paddingStyles, baseCardStyles } from './Card.styles';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
}

export const Card = ({
  children,
  className,
  variant = CardVariant.DEFAULT,
  padding = CardPadding.MEDIUM,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(baseCardStyles, variantStyles[variant], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
};
