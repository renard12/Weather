/**
 * Input Component
 * Reusable input field with consistent styling
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { InputSize, InputVariant } from './type';
import {
  baseInputStyles,
  variantStyles,
  sizeStyles,
  errorStyles,
  labelStyles,
  errorMessageStyles,
  iconContainerStyles,
  iconStyles,
  wrapperStyles,
  inputContainerStyles,
} from './Input.styles';
import { styled } from '@/theme/styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: InputVariant;
  inputSize?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      leftIcon,
      rightIcon,
      variant = InputVariant.DEFAULT,
      inputSize = InputSize.MEDIUM,
      ...props
    },
    ref
  ) => {
    return (
      <div className={wrapperStyles}>
        {label && <label className={labelStyles}>{label}</label>}
        <div className={inputContainerStyles}>
          {leftIcon && (
            <div className={iconContainerStyles.left}>
              <span className={iconStyles}>{leftIcon}</span>
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              baseInputStyles,
              variantStyles[variant],
              sizeStyles[inputSize],
              leftIcon && styled.spacing.pl[10],
              rightIcon && styled.spacing.pr[10],
              rightIcon && styled.spacing.pr[24],
              error && errorStyles,
              className
            )}
            {...props}
          />
          {rightIcon && <div className={iconContainerStyles.right}>{rightIcon}</div>}
        </div>
        {error && <p className={errorMessageStyles}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
