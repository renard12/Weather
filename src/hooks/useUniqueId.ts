/**
 * Custom Hook for Unique ID Generation
 * Generates and memoizes unique IDs for React components
 */

import { useMemo, useCallback } from 'react';

type GenerateIdFunction = (customPrefix?: string) => string;

interface SingleIdReturn {
  id: string;
  generateId: GenerateIdFunction;
}

interface MultipleIdsReturn {
  ids: string[];
  generateId: GenerateIdFunction;
}

/**
 * Hook to generate unique IDs - single ID version
 * @param prefix - Optional prefix for the ID (default: 'id')
 * @returns An object with id and generateId function
 */
export function useUniqueId(prefix?: string): SingleIdReturn;

/**
 * Hook to generate unique IDs - multiple IDs version
 * @param prefix - Optional prefix for the ID (default: 'id')
 * @param count - Number of IDs to generate
 * @returns An object with ids array and generateId function
 */
export function useUniqueId(prefix: string, count: number): MultipleIdsReturn;

export function useUniqueId(
  prefix: string = 'id',
  count: number = 1
): SingleIdReturn | MultipleIdsReturn {
  // Memoized IDs for stable references
  const ids = useMemo(() => {
    if (count === 1) {
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 9);
      return `${prefix}-${timestamp}-${random}`;
    }

    return Array.from({ length: count }, (_, index) => {
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 9);
      return `${prefix}-${index}-${timestamp}-${random}`;
    });
  }, [prefix, count]);

  // Generator function for dynamic ID creation
  const generateId = useCallback<GenerateIdFunction>((customPrefix?: string) => {
    const finalPrefix = customPrefix || prefix;
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `${finalPrefix}-${timestamp}-${random}`;
  }, [prefix]);

  if (count === 1) {
    return { id: ids as string, generateId };
  }

  return { ids: ids as string[], generateId };
}