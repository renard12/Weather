/**
 * Error Display Component
 * User-friendly error messages with retry functionality
 */

import React, { useMemo } from 'react';
import { AlertCircle, WifiOff, MapPinOff, KeyRound } from 'lucide-react';
import { Card, CardContent, CardVariant } from '@/components/ui/Card';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/Button';
import type { WeatherError } from '@/types';
import {
  ErrorCode,
  ErrorTitle,
  ErrorActionText,
  DEFAULT_ERROR_MESSAGE,
} from '@/types/error';
import {
  iconClassName,
  errorIconContainerStyles,
  titleStyles,
  messageStyles,
  debugSummaryStyles,
  debugPreStyles,
  containerStyles,
  debugContainerStyles,
} from './ErrorDisplay.styles';

interface ErrorDisplayProps {
  error: WeatherError | Error;
  onRetry?: () => void;
}

export const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
  const errorCode = useMemo(
    () => ('code' in error ? error.code : ''),
    [error]
  );

  const errorIcon = useMemo(() => {
    switch (errorCode) {
      case ErrorCode.NETWORK_ERROR:
        return <WifiOff className={iconClassName} />;
      case ErrorCode.LOCATION_NOT_FOUND:
        return <MapPinOff className={iconClassName} />;
      case ErrorCode.UNAUTHORIZED:
        return <KeyRound className={iconClassName} />;
      default:
        return <AlertCircle className={iconClassName} />;
    }
  }, [errorCode]);

  const errorTitle = useMemo(() => {
    switch (errorCode) {
      case ErrorCode.NETWORK_ERROR:
        return ErrorTitle.CONNECTION_PROBLEM;
      case ErrorCode.LOCATION_NOT_FOUND:
        return ErrorTitle.LOCATION_NOT_FOUND;
      case ErrorCode.UNAUTHORIZED:
        return ErrorTitle.API_KEY_MISSING;
      case ErrorCode.RATE_LIMIT:
        return ErrorTitle.TOO_MANY_REQUESTS;
      default:
        return ErrorTitle.SOMETHING_WENT_WRONG;
    }
  }, [errorCode]);

  const errorMessage = useMemo(() => {
    if ('message' in error && error.message) {
      return error.message;
    }
    return DEFAULT_ERROR_MESSAGE;
  }, [error]);

  const actionText = useMemo(() => {
    if (errorCode === ErrorCode.UNAUTHORIZED) {
      return ErrorActionText.CHECK_API_CONFIG;
    }
    return ErrorActionText.TRY_AGAIN;
  }, [errorCode]);

  return (
    <Card variant={CardVariant.GLASS} className="max-w-md mx-auto">
      <CardContent>
        <div className={containerStyles}>
          <div className={errorIconContainerStyles}>{errorIcon}</div>

          <h3 className={titleStyles}>{errorTitle}</h3>

          <p className={messageStyles}>{errorMessage}</p>

          {onRetry && (
            <Button onClick={onRetry} size={ButtonSize.MEDIUM} variant={ButtonVariant.PRIMARY}>
              {actionText}
            </Button>
          )}

          {/* Debug info in development */}
          {process.env.NODE_ENV === 'development' && (
            <details className={debugContainerStyles}>
              <summary className={debugSummaryStyles}>Debug Info</summary>
              <pre className={debugPreStyles}>
                {JSON.stringify(error, null, 2)}
              </pre>
            </details>
          )}
        </div>
      </CardContent>
    </Card>
  );
};