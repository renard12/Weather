/**
 * Card Header Component
 * Header section for Card component
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { headerStyles } from './Card.styles';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <div className={cn(headerStyles, className)} {...props}>
      {children}
    </div>
  );
};