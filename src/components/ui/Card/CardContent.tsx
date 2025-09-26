/**
 * Card Content Component
 * Content container for Card component
 */

import React from 'react';
import { cn } from '@/utils/cn';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
};