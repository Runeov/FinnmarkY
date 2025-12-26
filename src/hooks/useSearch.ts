'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Fuse, { IFuseOptions } from 'fuse.js';
import { Guide, SearchSuggestion, GuideCategory } from '@/lib/types';
import { guides, categories, accessGuides } from '@/data';

// Combine all guides from both sources
const allGuidesSource: Guide[] = [...guides, ...accessGuides];

const fuseOptions: IFuseOptions<Guide> = {
  keys: [
    { name: 'titleNo', weight: 0.3 },
    { name: 'title', weight: 0.25 },
    { name: 'keywords', weight: 0.25 },
    { name: 'summaryNo', weight: 0.1 },
    { name: 'summary', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
};

const popularTerms = [
  { term: 'hjemmekontor', guideId: 'home-access-setup' },
  { term: 'hjemmefra', guideId: 'home-access-setup' },
  { term: 'pålogging', guideId: 'two-factor-login' },
  { term: 'tofaktor', guideId: 'two-factor-login' },
  { term: '2fa', guideId: 'two-factor-login' },
  { term: 'sms kode', guideId: 'two-factor-login' },
  { term: 'vaktbytte', guideId: 'shift-exchange' },
  { term: 'gatgo', guideId: 'gatgo-mobile-setup' },
  { term: 'mobilapp', guideId: 'gatgo-mobile-setup' },
  { term: 'qr kode', guideId: 'gatgo-mobile-setup' },
  { term: 'timeliste', guideId: 'time-registration' },
  { term: 'jatakk', guideId: 'jatakk-bidding' },
  { term: 'vaktbok', guideId: 'vaktbok-navigation' },
  { term: 'feil', guideId: 'login-troubleshooting' },
  { term: 'problem', guideId: 'login-troubleshooting' },
  { term: 'sms', guideId: 'two-factor-login' },
  { term: 'banker', guideId: 'time-banks' },
  { term: 'fleksitid', guideId: 'time-banks' },
];

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ guide: Guide; score: number }[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<GuideCategory | 'all'>('all');
  const [selectedInterface, setSelectedInterface] = useState<'mingat' | 'gatgo' | 'all'>('all');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fuse = useMemo(() => new Fuse(allGuidesSource, fuseOptions), []);

  const generateSuggestions = useCallback((q: string): SearchSuggestion[] => {
    if (!q || q.length < 2) return [];
    const normalized = q.toLowerCase().trim();
    const list: SearchSuggestion[] = [];

    // Popular terms
    popularTerms.forEach(({ term, guideId }) => {
      if (term.includes(normalized)) {
        const guide = allGuidesSource.find((g) => g.id === guideId);
        if (guide) list.push({ id: `term-${term}`, text: term, type: 'keyword', guideId });
      }
    });

    // Guide titles
    allGuidesSource.forEach((guide) => {
      if (guide.titleNo.toLowerCase().includes(normalized)) {
        list.push({ id: `guide-${guide.id}`, text: guide.titleNo, type: 'guide', guideId: guide.id });
      }
    });

    // Categories
    categories.forEach((cat) => {
      if (cat.nameNo.toLowerCase().includes(normalized)) {
        list.push({ id: `cat-${cat.id}`, text: cat.nameNo, type: 'category', category: cat.id });
      }
    });

    // Fuse results
    fuse.search(normalized).slice(0, 5).forEach((result) => {
      if (!list.find((s) => s.guideId === result.item.id)) {
        list.push({ id: `fuse-${result.item.id}`, text: result.item.titleNo, type: 'guide', guideId: result.item.id });
      }
    });

    // Remove duplicates
    const unique = list.reduce((acc, curr) => {
      if (!acc.find((i) => i.text.toLowerCase() === curr.text.toLowerCase())) acc.push(curr);
      return acc;
    }, [] as SearchSuggestion[]);

    return unique.slice(0, 8);
  }, [fuse]);

  const search = useCallback((q: string) => {
    if (!q || q.length < 2) {
      setResults([]);
      return;
    }

    const fuseResults = fuse.search(q);
    const filtered = fuseResults
      .map((r) => ({ guide: r.item, score: 1 - (r.score || 0) }))
      .filter((r) => {
        const catMatch = selectedCategory === 'all' || r.guide.category === selectedCategory;
        const ifaceMatch = selectedInterface === 'all' || r.guide.interface === 'all' || r.guide.interface === selectedInterface;
        return catMatch && ifaceMatch;
      });

    setResults(filtered);
  }, [fuse, selectedCategory, selectedInterface]);

  useEffect(() => {
    if (query.length >= 2) {
      setSuggestions(generateSuggestions(query));
    } else {
      setSuggestions([]);
    }
  }, [query, generateSuggestions]);

  const handleQueryChange = useCallback((q: string) => {
    setQuery(q);
    setShowSuggestions(true);
  }, []);

  const handleSuggestionSelect = useCallback((s: SearchSuggestion) => {
    setShowSuggestions(false);
    if (s.type === 'category' && s.category) {
      setSelectedCategory(s.category);
      setQuery('');
      setResults([]);
    } else if (s.guideId) {
      setQuery(s.text);
      search(s.text);
    }
  }, [search]);

  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setSuggestions([]);
    setShowSuggestions(false);
  }, []);

  const allGuides = useMemo(() => {
    return allGuidesSource.filter((g) => {
      const catMatch = selectedCategory === 'all' || g.category === selectedCategory;
      const ifaceMatch = selectedInterface === 'all' || g.interface === 'all' || g.interface === selectedInterface;
      return catMatch && ifaceMatch;
    });
  }, [selectedCategory, selectedInterface]);

  return {
    query, results, suggestions, selectedCategory, selectedInterface, showSuggestions, allGuides,
    setQuery: handleQueryChange, search, setSelectedCategory, setSelectedInterface,
    clearSearch, handleSuggestionSelect, setShowSuggestions
  };
}
