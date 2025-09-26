/**
 * Weather Alerts Component
 * Displays weather alerts and warnings
 */

import React from 'react';
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useFormattedDateTime } from '@/hooks/useWeatherUtils';
import {
  AlertSeverity,
  type WeatherAlertsProps,
  type AlertDateTimeDisplayProps
} from './types';
import {
  containerStyles,
  headerTitleStyles,
  contentContainerStyles,
  descriptionStyles,
  instructionContainerStyles,
  instructionTitleStyles,
  instructionTextStyles,
  dateTimeContainerStyles,
  badgeContainerStyles,
  badgeStyles,
  getCardStyles,
  getIconStyles,
  getSeverityBadgeStyles,
} from './WeatherAlerts.styles';

// Helper functions
const getSeverityLevel = (severity?: string): AlertSeverity => {
  if (!severity) return AlertSeverity.UNKNOWN;

  const normalizedSeverity = severity.toLowerCase();
  switch (normalizedSeverity) {
    case AlertSeverity.EXTREME:
      return AlertSeverity.EXTREME;
    case AlertSeverity.SEVERE:
      return AlertSeverity.SEVERE;
    case AlertSeverity.MODERATE:
      return AlertSeverity.MODERATE;
    case AlertSeverity.MINOR:
      return AlertSeverity.MINOR;
    default:
      return AlertSeverity.UNKNOWN;
  }
};

const getSeverityIcon = (severity: AlertSeverity): React.ReactNode => {
  const iconStyles = getIconStyles(severity);

  switch (severity) {
    case AlertSeverity.EXTREME:
    case AlertSeverity.SEVERE:
      return <AlertTriangle className={iconStyles} />;
    case AlertSeverity.MODERATE:
      return <AlertCircle className={iconStyles} />;
    case AlertSeverity.MINOR:
    case AlertSeverity.UNKNOWN:
    default:
      return <Info className={iconStyles} />;
  }
};

// Sub-component
const AlertDateTimeDisplay = ({ effective, expires, areas }: AlertDateTimeDisplayProps) => {
  const effectiveFormatted = useFormattedDateTime(effective, 'MMM d, h:mm a');
  const expiresFormatted = useFormattedDateTime(expires, 'MMM d, h:mm a');

  return (
    <div className={dateTimeContainerStyles}>
      {effective && (
        <span>
          <strong>Effective:</strong> {effectiveFormatted}
        </span>
      )}
      {expires && (
        <span>
          <strong>Expires:</strong> {expiresFormatted}
        </span>
      )}
      {areas && (
        <span>
          <strong>Areas:</strong> {areas}
        </span>
      )}
    </div>
  );
};

// Main component
export const WeatherAlerts = ({ alerts }: WeatherAlertsProps) => {
  if (!alerts?.alert || alerts.alert.length === 0) {
    return null;
  }

  return (
    <div className={containerStyles}>
      {alerts.alert.map((alert, index) => {
        const severity = getSeverityLevel(alert.severity);

        return (
          <Card key={index} className={getCardStyles(severity)}>
            <CardHeader>
              <CardTitle className={headerTitleStyles}>
                {getSeverityIcon(severity)}
                <span>{alert.headline || alert.event}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={contentContainerStyles}>
                {alert.desc && (
                  <p className={descriptionStyles}>{alert.desc}</p>
                )}

                {alert.instruction && (
                  <div className={instructionContainerStyles}>
                    <p className={instructionTitleStyles}>
                      Instructions:
                    </p>
                    <p className={instructionTextStyles}>
                      {alert.instruction}
                    </p>
                  </div>
                )}

                <AlertDateTimeDisplay
                  effective={alert.effective}
                  expires={alert.expires}
                  areas={alert.areas}
                />

                <div className={badgeContainerStyles}>
                  {alert.severity && (
                    <span className={getSeverityBadgeStyles(severity)}>
                      {alert.severity}
                    </span>
                  )}
                  {alert.urgency && (
                    <span className={badgeStyles}>
                      {alert.urgency}
                    </span>
                  )}
                  {alert.certainty && (
                    <span className={badgeStyles}>
                      {alert.certainty}
                    </span>
                  )}
                  {alert.category && (
                    <span className={badgeStyles}>
                      {alert.category}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};