/**
 * Search History Component
 * Displays recent search history with remove and undo functionality
 */

'use client';

import React from 'react';
import { X, Clock, MapPin, Undo2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/Button';
import { SEARCH_HISTORY_CONFIG } from '@/config/constants';
import type { SearchHistoryProps, DisplayItem } from './types';
import {
  containerStyles,
  headerStyles,
  titleStyles,
  titleIconStyles,
  clearButtonStyles,
  removedItemStyles,
  historyItemStyles,
  removedItemContentStyles,
  removedItemTextStyles,
  removedLabelStyles,
  itemButtonStyles,
  itemIconStyles,
  itemCityStyles,
  itemCountryStyles,
  itemTimeStyles,
  undoButtonStyles,
  removeButtonStyles,
  removeIconStyles,
} from './SearchHistory.styles';

export const SearchHistory = ({
  history,
  removedItems,
  onItemClick,
  onRemove,
  onUndo,
  onClear,
}: SearchHistoryProps) => {
  console.log('>>>>>>>>>>', history, removedItems);
  if (history.length === 0 && removedItems.length === 0) {
    return null;
  }

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const getRemainingUndoTime = (timestamp: number) => {
    const remaining = SEARCH_HISTORY_CONFIG.UNDO_TIMEOUT - (Date.now() - timestamp);
    return Math.max(0, Math.ceil(remaining / 1000));
  };

  const createDisplayItems = (): DisplayItem[] => {
    const displayItems: DisplayItem[] = [];
    let historyIndex = 0;

    // Calculate the max index we need to display
    const maxIndex = Math.max(
      history.length - 1,
      ...removedItems.filter((r) => getRemainingUndoTime(r.timestamp) > 0).map((r) => r.index)
    );

    for (let i = 0; i <= maxIndex; i++) {
      // Check if this position has a removed item
      const removedItem = removedItems.find(
        (r) => r.index === i && getRemainingUndoTime(r.timestamp) > 0
      );

      if (removedItem) {
        displayItems.push({ type: 'removed', data: removedItem });
      } else if (historyIndex < history.length) {
        displayItems.push({ type: 'history', data: history[historyIndex] });
        historyIndex++;
      }
    }

    // Add any remaining history items
    while (historyIndex < history.length) {
      displayItems.push({ type: 'history', data: history[historyIndex] });
      historyIndex++;
    }

    return displayItems;
  };

  const renderRemovedItem = (removed: (typeof removedItems)[0], idx: number) => {
    const remainingTime = getRemainingUndoTime(removed.timestamp);

    return (
      <div key={`removed-${removed.id}-${idx}`} className={removedItemStyles}>
        <div className={removedItemContentStyles}>
          <MapPin className={itemIconStyles} />
          <span className={removedItemTextStyles}>
            {removed.item.city}
            {removed.item.country && `, ${removed.item.country}`}
          </span>
          <span className={removedLabelStyles}>Removed</span>
        </div>
        <Button
          variant={ButtonVariant.GHOST}
          size={ButtonSize.SMALL}
          onClick={() => onUndo(removed.item.id)}
          leftIcon={<Undo2 className={itemIconStyles} />}
          className={undoButtonStyles}
        >
          Undo ({remainingTime}s)
        </Button>
      </div>
    );
  };

  const renderHistoryItem = (historyItem: (typeof history)[0], idx: number) => {
    return (
      <div key={`history-${historyItem.id}-${idx}`} className={historyItemStyles}>
        <button onClick={() => onItemClick(historyItem)} className={itemButtonStyles}>
          <MapPin className={itemIconStyles} />
          <div>
            <div className={itemCityStyles}>
              {historyItem.city}
              {historyItem.country && (
                <span className={itemCountryStyles}>{historyItem.country}</span>
              )}
            </div>
            <div className={itemTimeStyles}>{formatTime(historyItem.timestamp)}</div>
          </div>
        </button>
        <Button
          variant={ButtonVariant.GHOST}
          size={ButtonSize.SMALL}
          onClick={(e) => {
            e.stopPropagation();
            onRemove(historyItem.id);
          }}
          className={removeButtonStyles}
        >
          <X className={removeIconStyles} />
        </Button>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className={headerStyles}>
        <CardTitle className={titleStyles}>
          <Clock className={titleIconStyles} />
          Recent Searches
        </CardTitle>
        {history.length > 0 && (
          <Button
            variant={ButtonVariant.GHOST}
            size={ButtonSize.SMALL}
            onClick={onClear}
            className={clearButtonStyles}
          >
            Clear All
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className={containerStyles}>
          {createDisplayItems().map((item, idx) => {
            if (item.type === 'removed') {
              return renderRemovedItem(item.data, idx);
            } else {
              return renderHistoryItem(item.data, idx);
            }
          })}
        </div>
      </CardContent>
    </Card>
  );
};
