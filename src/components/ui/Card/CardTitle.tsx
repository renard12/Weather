/**
 * Card Title Component
 * Title element for Card component
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { HeadingLevel } from './type';
import { titleSizeStyles, titleBaseStyles } from './Card.styles';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: HeadingLevel;
}

export const CardTitle = ({
  children,
  className,
  as = HeadingLevel.H3,
  ...props
}: CardTitleProps) => {
  // Map enum values to actual HTML element types
  const headingElements = {
    [HeadingLevel.H1]: 'h1',
    [HeadingLevel.H2]: 'h2',
    [HeadingLevel.H3]: 'h3',
    [HeadingLevel.H4]: 'h4',
  } as const;

  const Component = headingElements[as];

  return React.createElement(
    Component,
    {
      className: cn(titleBaseStyles, titleSizeStyles[as], className),
      ...props,
    },
    children
  );
};