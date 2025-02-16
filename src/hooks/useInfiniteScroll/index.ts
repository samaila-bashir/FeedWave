import { useRef, useCallback } from 'react';

interface UseInfiniteScrollProps {
  loading: boolean;
  lastVisible: any;
  onLoadMore: (lastVisible: any) => void;
}

export const useInfiniteScroll = ({
  loading,
  lastVisible,
  onLoadMore,
}: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && lastVisible) {
          onLoadMore(lastVisible);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, lastVisible, onLoadMore]
  );

  return { lastElementRef };
};
