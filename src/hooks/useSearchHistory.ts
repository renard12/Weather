/**
 * Custom Hook for Search History
 * Manages search history with localStorage persistence and undo functionality
 */

import { useState, useEffect, useCallback } from 'react';
import { useUniqueId } from '@/hooks/useUniqueId';
import { SEARCH_HISTORY_CONFIG } from '@/config/constants';

export interface SearchHistoryItem {
  id: string;
  city: string;
  country?: string;
  timestamp: number;
  lat?: number;
  lon?: number;
}

interface RemovedItem {
  id: string; // Unique ID for this removed item entry
  item: SearchHistoryItem;
  index: number;
  timestamp: number;
}

const { STORAGE_KEY, REMOVED_STORAGE_KEY, MAX_ITEMS: MAX_HISTORY_ITEMS, UNDO_TIMEOUT } = SEARCH_HISTORY_CONFIG;

export const useSearchHistory = () => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);
  const [removedItems, setRemovedItems] = useState<RemovedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { generateId } = useUniqueId();

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(STORAGE_KEY);
      const storedRemoved = localStorage.getItem(REMOVED_STORAGE_KEY);

      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }

      if (storedRemoved) {
        const removed = JSON.parse(storedRemoved) as RemovedItem[];
        // Filter out items older than undo timeout
        const validRemoved = removed.filter((item) => Date.now() - item.timestamp < UNDO_TIMEOUT);
        setRemovedItems(validRemoved);
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
      } catch (error) {
        console.error('Failed to save search history:', error);
      }
    }
  }, [history, isLoading]);

  // Save removed items to localStorage
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(REMOVED_STORAGE_KEY, JSON.stringify(removedItems));
      } catch (error) {
        console.error('Failed to save removed items:', error);
      }
    }
  }, [removedItems, isLoading]);

  // Clean up old removed items periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setRemovedItems((prev) => prev.filter((item) => Date.now() - item.timestamp < UNDO_TIMEOUT));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addToHistory = useCallback((city: string, country?: string, lat?: number, lon?: number) => {
    const newItem: SearchHistoryItem = {
      id: generateId('history'),
      city,
      country,
      lat,
      lon,
      timestamp: Date.now(),
    };

    setHistory((prev) => {
      // Remove duplicate if exists
      const filtered = prev.filter((item) => !(item.city === city && item.country === country));

      // Add new item at the beginning
      const updated = [newItem, ...filtered];

      // Limit to max items
      return updated.slice(0, MAX_HISTORY_ITEMS);
    });
  }, [generateId]);

  const removeFromHistory = useCallback((id: string) => {
    const currentHistory = history;
    const index = currentHistory.findIndex((item) => item.id === id);
    if (index === -1) return;

    const item = currentHistory[index];

    // Update history
    setHistory((prev) => prev.filter((h) => h.id !== id));

    // Add to removed items for undo functionality
    setRemovedItems((prevRemoved) => {
      // Check if this item is already in removed items to prevent duplicates
      const alreadyRemoved = prevRemoved.some(
        (r) => r.item.id === id && Date.now() - r.timestamp < 100
      );

      if (alreadyRemoved) {
        return prevRemoved;
      }

      return [
        ...prevRemoved,
        {
          id: generateId('removed'),
          item,
          index,
          timestamp: Date.now(),
        },
      ];
    });
  }, [history, generateId]);

  const undoRemove = useCallback((itemId: string) => {
    setRemovedItems((prev) => {
      const removedItem = prev.find((r) => r.item.id === itemId);
      if (!removedItem) return prev;

      // Restore item to history
      setHistory((prevHistory) => {
        // Check if this item already exists (by city and country)
        const alreadyExists = prevHistory.some(
          (item) => item.city === removedItem.item.city && item.country === removedItem.item.country
        );

        if (alreadyExists) {
          // If it already exists, don't add it again
          return prevHistory;
        }

        const restoredItem = {
          ...removedItem.item,
          id: generateId('history'), // Generate new ID to avoid conflicts
        };
        const newHistory = [...prevHistory];
        newHistory.splice(removedItem.index, 0, restoredItem);
        return newHistory;
      });

      // Remove from removed items
      return prev.filter((r) => r.item.id !== itemId);
    });
  }, [generateId]);

  const clearHistory = useCallback(() => {
    const timestamp = Date.now();
    const allItems = history.map((item, index) => ({
      id: generateId('removed'),
      item,
      index,
      timestamp: timestamp + index, // Add index to ensure unique timestamps
    }));

    setRemovedItems((prev) => [...prev, ...allItems]);
    setHistory([]);
  }, [history, generateId]);

  const clearRemovedItems = useCallback(() => {
    setRemovedItems([]);
    try {
      localStorage.removeItem(REMOVED_STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear removed items:', error);
    }
  }, []);

  const getRecentSearches = useCallback(
    (limit: number = 5) => {
      return history.slice(0, limit);
    },
    [history]
  );

  return {
    history,
    removedItems,
    isLoading,
    addToHistory,
    removeFromHistory,
    undoRemove,
    clearHistory,
    clearRemovedItems,
    getRecentSearches,
  };
};
