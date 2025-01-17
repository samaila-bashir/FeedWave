import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind class names.
 * It combines `clsx` for conditional class handling and `twMerge` for deduplication.
 */
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
