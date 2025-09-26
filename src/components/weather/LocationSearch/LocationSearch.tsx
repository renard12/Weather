/**
 * Location Search Component
 * Search and select weather locations
 */

import React, { useState, useMemo, useCallback } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button, ButtonVariant, ButtonSize } from '@/components/ui/Button';
import { useLocationSearch } from '@/hooks/useLocationSearch';
import type { SearchLocation } from '@/types';
import {
  containerStyles,
  iconStyles,
  clearButtonStyles,
  dropdownStyles,
  messageStyles,
  errorMessageStyles,
  resultsListStyles,
  resultItemStyles,
  resultItemContainerStyles,
  locationNameStyles,
  locationDetailsStyles,
  resultIconStyles,
} from './LocationSearch.styles';

interface LocationSearchProps {
  onLocationSelect: (location: string) => void;
}

export const LocationSearch = ({
  onLocationSelect,
}: LocationSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    searchQuery,
    updateQuery,
    clearSearch,
    data: searchResults,
    isLoading,
    error,
  } = useLocationSearch();

  const handleLocationSelect = useCallback((location: SearchLocation) => {
    onLocationSelect(`${location.name}, ${location.country}`);
    clearSearch();
    setIsOpen(false);
  }, [onLocationSelect, clearSearch]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value);
    setIsOpen(true);
  }, [updateQuery]);

  const handleClear = useCallback(() => {
    clearSearch();
    setIsOpen(false);
  }, [clearSearch]);

  const handleFocus = useCallback(() => {
    if (searchQuery) {
      setIsOpen(true);
    }
  }, [searchQuery]);

  const searchIcon = useMemo(() => (
    <Search className={iconStyles} />
  ), []);

  const clearButton = useMemo(() => (
    searchQuery ? (
      <Button
        onClick={handleClear}
        variant={ButtonVariant.GHOST}
        size={ButtonSize.SMALL}
        className={clearButtonStyles}
        type="button"
      >
        <X className={iconStyles} />
      </Button>
    ) : null
  ), [searchQuery, handleClear]);

  const dropdownContent = useMemo(() => {
    if (isLoading) {
      return <div className={messageStyles}>Searching...</div>;
    }

    if (error) {
      return <div className={errorMessageStyles}>Error loading results</div>;
    }

    if (searchResults && searchResults.length > 0) {
      return (
        <ul className={resultsListStyles}>
          {searchResults.map((location) => (
            <li key={location.id}>
              <Button
                onClick={() => handleLocationSelect(location)}
                variant={ButtonVariant.GHOST}
                size={ButtonSize.MEDIUM}
                className={resultItemStyles}
              >
                <div className={resultItemContainerStyles}>
                  <div>
                    <p className={locationNameStyles}>{location.name}</p>
                    <p className={locationDetailsStyles}>
                      {location.region}, {location.country}
                    </p>
                  </div>
                  <MapPin className={resultIconStyles} />
                </div>
              </Button>
            </li>
          ))}
        </ul>
      );
    }

    if (searchQuery.length >= 2) {
      return <div className={messageStyles}>No locations found</div>;
    }

    return null;
  }, [isLoading, error, searchResults, searchQuery, handleLocationSelect]);

  return (
    <div className={containerStyles}>
      <Input
        placeholder="Search for a location..."
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        leftIcon={searchIcon}
        rightIcon={clearButton}
      />

      {/* Search Results Dropdown */}
      {isOpen && searchQuery && (
        <div className={dropdownStyles}>
          {dropdownContent}
        </div>
      )}
    </div>
  );
};