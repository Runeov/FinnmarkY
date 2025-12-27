import { useState, useEffect, useCallback } from 'react';

export function useGuideProgress() {
  const [viewedGuides, setViewedGuides] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load from storage on mount
    const saved = sessionStorage.getItem('viewedGuides');
    if (saved) {
      try {
        setViewedGuides(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to parse viewedGuides from sessionStorage', e);
      }
    }
  }, []);

  // Wrap in useCallback to prevent infinite loops in useEffects
  const markAsViewed = useCallback((guideId: string) => {
    setViewedGuides((prev) => {
      // Optimization: If already viewed, return the exact same Set object
      // This prevents React from triggering a re-render
      if (prev.has(guideId)) {
        return prev;
      }

      // Otherwise, create a new Set and update storage
      const next = new Set(prev);
      next.add(guideId);
      sessionStorage.setItem('viewedGuides', JSON.stringify(Array.from(next)));
      return next;
    });
  }, []);

  const isViewed = useCallback((guideId: string) => {
    return viewedGuides.has(guideId);
  }, [viewedGuides]);

  return { viewedGuides, markAsViewed, isViewed };
}