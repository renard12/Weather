/**
 * Spinner Component
 * Reusable loading spinner with different sizes
 */

import React from 'react';
import { cn } from '@/utils/cn';
import { styled } from '@/theme/styled';
import { SpinnerSize, SpinnerColor } from './type';
import {
  containerStyles,
  baseSpinnerStyles,
  sizeStyles,
  colorStyles,
  labelStyles,
} from './Spinner.styles';

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
  label?: string;
  showLabel?: boolean;
  color?: SpinnerColor;
}

export const Spinner = ({
  size = SpinnerSize.MEDIUM,
  className,
  label = 'Loading...',
  showLabel = false,
  color = SpinnerColor.CURRENT,
}: SpinnerProps) => {
  const spinnerStyles = cn(baseSpinnerStyles, sizeStyles[size].spinner, colorStyles[color]);

  return (
    <span className={cn(containerStyles, className)} role="status" aria-live="polite">
      <svg
        className={spinnerStyles}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className={styled.opacity[25]}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className={styled.opacity[75]}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {showLabel && (
        <span className={cn(sizeStyles[size].text, labelStyles.hidden, labelStyles.visible)}>
          {label}
        </span>
      )}
      {!showLabel && <span className={labelStyles.hidden}>{label}</span>}
    </span>
  );
};
