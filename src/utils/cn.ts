/**
 * Utility for merging Tailwind CSS classes
 * Uses clsx and tailwind-merge for conflict resolution
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};