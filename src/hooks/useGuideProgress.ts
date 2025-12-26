import { useState, useEffect } from 'react';

export function useGuideProgress() {
  const [viewedGuides, setViewedGuides] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load from storage on mount
    const saved = sessionStorage.getItem('viewedGuides');
    if (saved) {
      setViewedGuides(new Set(JSON.parse(saved)));
    }
  }, []);

  const markAsViewed = (guideId: string) => {
    setViewedGuides((prev) => {
      const next = new Set(prev);
      next.add(guideId);
      sessionStorage.setItem('viewedGuides', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const isViewed = (guideId: string) => viewedGuides.has(guideId);

  return { viewedGuides, markAsViewed, isViewed };
}
