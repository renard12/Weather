/**
 * Weather Alerts Types
 * Type definitions for Weather Alerts component
 */

import type { Alerts } from '@/types';

export enum AlertSeverity {
  EXTREME = 'extreme',
  SEVERE = 'severe',
  MODERATE = 'moderate',
  MINOR = 'minor',
  UNKNOWN = 'unknown',
}

export enum AlertUrgency {
  IMMEDIATE = 'immediate',
  EXPECTED = 'expected',
  FUTURE = 'future',
  PAST = 'past',
  UNKNOWN = 'unknown',
}

export enum AlertCertainty {
  OBSERVED = 'observed',
  LIKELY = 'likely',
  POSSIBLE = 'possible',
  UNLIKELY = 'unlikely',
  UNKNOWN = 'unknown',
}

export enum AlertCategory {
  MET = 'met',
  GEO = 'geo',
  SAFETY = 'safety',
  SECURITY = 'security',
  RESCUE = 'rescue',
  FIRE = 'fire',
  HEALTH = 'health',
  ENV = 'env',
  TRANSPORT = 'transport',
  INFRA = 'infra',
  CBRNE = 'cbrne',
  OTHER = 'other',
}

export interface WeatherAlertsProps {
  alerts: Alerts;
}

export interface AlertDateTimeDisplayProps {
  effective?: string;
  expires?: string;
  areas?: string;
}