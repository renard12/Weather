/**
 * WeatherHeader Component Types
 * Type definitions for WeatherHeader component
 */

export interface WeatherHeaderProps {
  isDark: boolean;
  geoLoading: boolean;
  onLocationSelect: (location: string) => void;
  onCurrentLocationClick: () => void;
  onToggleDarkMode: () => void;
  onToggleSettings: () => void;
}