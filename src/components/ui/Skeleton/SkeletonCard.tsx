/**
 * Skeleton Card Component
 * Pre-defined skeleton loading state for card layouts
 */

import React from 'react';
import { Skeleton } from './Skeleton';
import { SkeletonVariant } from './type';
import { cardStyles } from './Skeleton.styles';

export const SkeletonCard = () => {
  return (
    <div className={cardStyles.container}>
      <div className={cardStyles.wrapper}>
        <Skeleton variant={SkeletonVariant.TEXT} width="60%" height={28} />
        <Skeleton variant={SkeletonVariant.TEXT} width="40%" height={20} />
        <div className={cardStyles.flexContainer}>
          <Skeleton variant={SkeletonVariant.CIRCULAR} width={60} height={60} />
          <div className={cardStyles.flexContent}>
            <Skeleton variant={SkeletonVariant.TEXT} width="80%" />
            <Skeleton variant={SkeletonVariant.TEXT} width="60%" />
          </div>
        </div>
        <div className={cardStyles.gridContainer}>
          <Skeleton variant={SkeletonVariant.RECTANGULAR} height={80} />
          <Skeleton variant={SkeletonVariant.RECTANGULAR} height={80} />
        </div>
      </div>
    </div>
  );
};
