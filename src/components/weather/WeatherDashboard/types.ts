/**
 * Weather Dashboard Types
 * Type definitions for Weather Dashboard component
 */

export interface HistoryItemClickHandler {
  (item: { city: string; country?: string; lat?: number; lon?: number }): void;
}

export interface LocationSelectHandler {
  (location: string): void;
}

export interface SettingsState {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
}

export interface LocationState {
  location: string;
  setLocation: (location: string) => void;
  useCurrentLocation: boolean;
  setUseCurrentLocation: (use: boolean) => void;
}
