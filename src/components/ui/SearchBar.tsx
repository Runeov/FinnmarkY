'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X, ArrowRight, Tag, FolderOpen, FileText } from 'lucide-react';
import { SearchSuggestion } from '@/lib/types';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  onClear: () => void;
  suggestions: SearchSuggestion[];
  showSuggestions: boolean;
  onSuggestionSelect: (suggestion: SearchSuggestion) => void;
  onShowSuggestionsChange: (show: boolean) => void;
}

export function SearchBar({ value, onChange, onSearch, onClear, suggestions, showSuggestions, onSuggestionSelect, onShowSuggestionsChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onShowSuggestionsChange(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onShowSuggestionsChange]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onShowSuggestionsChange(false);
    else if (e.key === 'Enter') { onShowSuggestionsChange(false); onSearch(value); }
  };

  const getSuggestionIcon = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'guide': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'category': return <FolderOpen className="w-4 h-4 text-amber-500" />;
      case 'keyword': return <Tag className="w-4 h-4 text-green-500" />;
      default: return <Search className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => value.length >= 2 && onShowSuggestionsChange(true)}
          placeholder='Søk etter hjelp... (f.eks. "hjemmekontor", "vaktbytte")'
          className="w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-xl text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all"
        />
        {value && (
          <button onClick={onClear} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Forslag</div>
            {suggestions.map((s) => (
              <button key={s.id} onClick={() => onSuggestionSelect(s)} className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-left">
                {getSuggestionIcon(s.type)}
                <span className="flex-1 text-gray-900">{s.text}</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
