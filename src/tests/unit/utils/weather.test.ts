/**
 * Unit tests for weather utility functions
 * Testing pure functions with various inputs
 */

import {
  formatTemperature,
  formatWindSpeed,
  getWeatherColorClass,
  getUVIndexDescription,
  getHumidityDescription,
  getFeelsLikeDescription,
  getWindDirectionArrow,
} from '@/utils/weather';
import { TemperatureUnit, WindSpeedUnit } from '@/types';

describe('Weather Utilities', () => {
  describe('formatTemperature', () => {
    it('should format temperature in Celsius', () => {
      expect(formatTemperature(20, TemperatureUnit.CELSIUS)).toBe('20°C');
      expect(formatTemperature(20.7, TemperatureUnit.CELSIUS)).toBe('21°C');
      expect(formatTemperature(20.3, TemperatureUnit.CELSIUS)).toBe('20°C');
    });

    it('should format temperature in Fahrenheit', () => {
      expect(formatTemperature(20, TemperatureUnit.FAHRENHEIT)).toBe('68°F');
      expect(formatTemperature(0, TemperatureUnit.FAHRENHEIT)).toBe('32°F');
      expect(formatTemperature(-10, TemperatureUnit.FAHRENHEIT)).toBe('14°F');
    });

    it('should default to Celsius when no unit provided', () => {
      expect(formatTemperature(25)).toBe('25°C');
    });
  });

  describe('formatWindSpeed', () => {
    it('should format wind speed in km/h', () => {
      expect(formatWindSpeed(10, WindSpeedUnit.KPH)).toBe('10 km/h');
      expect(formatWindSpeed(10.7, WindSpeedUnit.KPH)).toBe('11 km/h');
    });

    it('should format wind speed in mph', () => {
      expect(formatWindSpeed(10, WindSpeedUnit.MPH)).toBe('6 mph');
      expect(formatWindSpeed(20, WindSpeedUnit.MPH)).toBe('12 mph');
    });

    it('should default to km/h when no unit provided', () => {
      expect(formatWindSpeed(15)).toBe('15 km/h');
    });
  });

  describe('getWeatherColorClass', () => {
    it('should return correct color class for clear weather', () => {
      expect(getWeatherColorClass(1000)).toBe('from-yellow-400 to-orange-500');
    });

    it('should return correct color class for cloudy weather', () => {
      expect(getWeatherColorClass(1003)).toBe('from-blue-400 to-blue-600');
      expect(getWeatherColorClass(1006)).toBe('from-blue-400 to-blue-600');
    });

    it('should return correct color class for rainy weather', () => {
      expect(getWeatherColorClass(1063)).toBe('from-blue-500 to-blue-700');
      expect(getWeatherColorClass(1230)).toBe('from-blue-500 to-blue-700');
    });

    it('should return correct color class for snowy weather', () => {
      expect(getWeatherColorClass(1066)).toBe('from-blue-300 to-gray-400');
      expect(getWeatherColorClass(1225)).toBe('from-blue-300 to-gray-400');
    });

    it('should return correct color class for thunderstorm', () => {
      expect(getWeatherColorClass(1273)).toBe('from-gray-700 to-gray-900');
      expect(getWeatherColorClass(1282)).toBe('from-gray-700 to-gray-900');
    });

    it('should return default color for unknown codes', () => {
      expect(getWeatherColorClass(9999)).toBe('from-blue-400 to-blue-600');
    });
  });

  describe('getUVIndexDescription', () => {
    it('should return correct UV index descriptions', () => {
      expect(getUVIndexDescription(0)).toEqual({ text: 'Low', color: 'text-green-600' });
      expect(getUVIndexDescription(2)).toEqual({ text: 'Low', color: 'text-green-600' });
      expect(getUVIndexDescription(3)).toEqual({ text: 'Moderate', color: 'text-yellow-600' });
      expect(getUVIndexDescription(5)).toEqual({ text: 'Moderate', color: 'text-yellow-600' });
      expect(getUVIndexDescription(6)).toEqual({ text: 'High', color: 'text-orange-600' });
      expect(getUVIndexDescription(7)).toEqual({ text: 'High', color: 'text-orange-600' });
      expect(getUVIndexDescription(8)).toEqual({ text: 'Very High', color: 'text-red-600' });
      expect(getUVIndexDescription(10)).toEqual({ text: 'Very High', color: 'text-red-600' });
      expect(getUVIndexDescription(11)).toEqual({ text: 'Extreme', color: 'text-purple-600' });
    });
  });

  describe('getHumidityDescription', () => {
    it('should return correct humidity descriptions', () => {
      expect(getHumidityDescription(20)).toBe('Dry');
      expect(getHumidityDescription(29)).toBe('Dry');
      expect(getHumidityDescription(30)).toBe('Comfortable');
      expect(getHumidityDescription(59)).toBe('Comfortable');
      expect(getHumidityDescription(60)).toBe('Humid');
      expect(getHumidityDescription(79)).toBe('Humid');
      expect(getHumidityDescription(80)).toBe('Very Humid');
      expect(getHumidityDescription(95)).toBe('Very Humid');
    });
  });

  describe('getFeelsLikeDescription', () => {
    it('should describe feels like temperature correctly', () => {
      expect(getFeelsLikeDescription(20, 20)).toBe('Feels like actual temperature');
      expect(getFeelsLikeDescription(20, 21)).toBe('Feels like actual temperature');
      expect(getFeelsLikeDescription(20, 25)).toBe('Feels 5° warmer');
      expect(getFeelsLikeDescription(20, 15)).toBe('Feels 5° cooler');
      expect(getFeelsLikeDescription(0, -5)).toBe('Feels 5° cooler');
    });
  });

  describe('getWindDirectionArrow', () => {
    it('should return correct wind direction arrows', () => {
      expect(getWindDirectionArrow('N')).toBe('↓');
      expect(getWindDirectionArrow('E')).toBe('←');
      expect(getWindDirectionArrow('S')).toBe('↑');
      expect(getWindDirectionArrow('W')).toBe('→');
      expect(getWindDirectionArrow('NE')).toBe('↙');
      expect(getWindDirectionArrow('SE')).toBe('↖');
      expect(getWindDirectionArrow('SW')).toBe('↗');
      expect(getWindDirectionArrow('NW')).toBe('↘');
    });

    it('should return default for unknown direction', () => {
      expect(getWindDirectionArrow('UNKNOWN')).toBe('•');
    });
  });
});