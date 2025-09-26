/**
 * Button Component
 * Reusable button with multiple variants using theme system
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';
import { Spinner, SpinnerColor } from '../Spinner';
import { ButtonSize, ButtonVariant } from './type';
import {
  variantStyles,
  sizeStyles,
  baseStyles,
  spinnerSizeMap,
  iconSpacings,
} from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  children,
  className,
  variant,
  size,
  isLoading = false,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner size={spinnerSizeMap[size]} showLabel={true} color={SpinnerColor.CURRENT} />
      ) : (
        <>
          {leftIcon && (
            <span
              className={cn(
                styled.layout.inline,
                styled.layout.itemsCenter,
                iconSpacings[size].left
              )}
            >
              {leftIcon}
            </span>
          )}
          {children}
          {rightIcon && (
            <span
              className={cn(
                styled.layout.inline,
                styled.layout.itemsCenter,
                iconSpacings[size].right
              )}
            >
              {rightIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};
