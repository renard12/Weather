/**
 * Search History Types
 * Type definitions for Search History component
 */

import { SearchHistoryItem } from '@/hooks/useSearchHistory';

export interface RemovedItem {
  id: string;
  item: SearchHistoryItem;
  index: number;
  timestamp: number;
}

export interface SearchHistoryProps {
  history: SearchHistoryItem[];
  removedItems: RemovedItem[];
  onItemClick: (item: SearchHistoryItem) => void;
  onRemove: (id: string) => void;
  onUndo: (id: string) => void;
  onClear: () => void;
}

export type DisplayItem =
  | { type: 'removed'; data: RemovedItem }
  | { type: 'history'; data: SearchHistoryItem };