/**
 * CountdownTimer Component
 * Displays a countdown timer with circular progress
 */

'use client';

import React from 'react';
import type { CountdownTimerProps } from './types';
import {
  containerStyles,
  contentWrapperStyles,
  svgContainerStyles,
  svgStyles,
  circleBackgroundStyles,
  circleProgressStyles,
  counterContainerStyles,
  counterTextStyles,
  textStyles,
} from './CountdownTimer.styles';

export const CountdownTimer = ({ countdown }: CountdownTimerProps) => {
  return (
    <div className={containerStyles}>
      <div className={contentWrapperStyles}>
        <div className={svgContainerStyles}>
          <svg className={svgStyles}>
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className={circleBackgroundStyles}
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${(countdown / 3) * 176} 176`}
              className={circleProgressStyles}
            />
          </svg>
          <div className={counterContainerStyles}>
            <span className={counterTextStyles}>{countdown}</span>
          </div>
        </div>
        <div className={textStyles}>
          Falling back to default location in {countdown} second
          {countdown !== 1 ? 's' : ''}...
        </div>
      </div>
    </div>
  );
};