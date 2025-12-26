'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { BookOpen, Search as SearchIcon, Sparkles, ArrowRight, RefreshCw, Star, Grid3X3 } from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import { CategoryFilter, InterfaceFilter } from '@/components/ui/CategoryFilter';
import { GuideCard } from './GuideCard';
import { SupportContacts } from './SupportContacts';
import { FeaturedGuides } from './FeaturedGuides';
import { useSearch } from '@/hooks';
import { categories } from '@/data';

export function GATUserGuide() {
  const { query, results, suggestions, selectedCategory, selectedInterface, showSuggestions, allGuides, setQuery, search, setSelectedCategory, setSelectedInterface, clearSearch, handleSuggestionSelect, setShowSuggestions } = useSearch();

  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(null);
  const [showAllGuides, setShowAllGuides] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== query) {
        setQuery(searchInput);
        if (searchInput.length >= 2) search(searchInput);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput, query, setQuery, search]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchInput(value);
    if (!value) setExpandedGuideId(null);
    if (value.length >= 2) {
      setActiveTab('all'); // Switch to all guides tab when searching
    }
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchInput('');
    clearSearch();
    setExpandedGuideId(null);
  }, [clearSearch]);

  const handleSearch = useCallback((q: string) => {
    search(q);
    setShowSuggestions(false);
    if (q.length >= 2) {
      setActiveTab('all'); // Switch to all guides tab when searching
    }
  }, [search, setShowSuggestions]);

  const displayGuides = searchInput.length >= 2 ? results.map((r) => r.guide) : showAllGuides ? allGuides : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><BookOpen className="w-6 h-6" /></div>
            <div>
              <h1 className="text-3xl font-bold">GAT Brukerveiledning</h1>
              <p className="text-blue-100">Finnmarkssykehuset HF</p>
            </div>
          </div>
          <p className="text-blue-100 mb-8 max-w-2xl">Søk etter hjelp med MinGat og GatGo. Finn veiledninger for innlogging, vaktbytte, timeregistrering og mer.</p>

          <SearchBar
            value={searchInput}
            onChange={handleSearchChange}
            onSearch={handleSearch}
            onClear={handleClearSearch}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
            onSuggestionSelect={(s) => { handleSuggestionSelect(s); if (s.guideId) { setSearchInput(s.text); search(s.text); setActiveTab('all'); } }}
            onShowSuggestionsChange={setShowSuggestions}
          />

          {!searchInput && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-blue-200 text-sm">Populære søk:</span>
              {['hjemmekontor', 'GatGo oppsett', 'vaktbytte', 'timeliste'].map((term) => (
                <button key={term} onClick={() => { setSearchInput(term); search(term); setActiveTab('all'); }} className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white">{term}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Featured Guides at Top */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Viktigste veiledninger</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De tre mest essensielle veiledningene for å komme i gang med MinGat hjemmefra og GatGo mobilapp.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Guide 1: Home Access Setup */}
            <div className="bg-white rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">MINGAT</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sette opp tilgang hjemmefra (MinGat Hjemmefra)</h3>
              <p className="text-gray-600 mb-4">Førstegangs oppsett for tilgang til MinGat fra hjemmenettverket</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Enkel
                </span>
                <span>15-20 minutter</span>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Vis veiledning
              </button>
            </div>

            {/* Guide 2: Two-Factor Login */}
            <div className="bg-white rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">MINGAT</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pålogging med tofaktorautentisering</h3>
              <p className="text-gray-600 mb-4">Sikker pålogging til MinGat hjemmefra eller fra eksternt nettverk</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Enkel
                </span>
                <span>2-5 minutter</span>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Vis veiledning
              </button>
            </div>

            {/* Guide 3: GatGo Mobile Setup */}
            <div className="bg-white rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">GATGO</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobilapp-oppsett (GatGo)</h3>
              <p className="text-gray-600 mb-4">Autoriser GatGo mobilappen på din personlige enhet</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Middels
                </span>
                <span>10-15 minutter</span>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Vis veiledning
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('featured')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'featured'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Viktigste veiledninger
                </div>
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Grid3X3 className="w-4 h-4" />
                  Alle veiledninger ({allGuides.length})
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'featured' ? (
          <FeaturedGuides />
        ) : (
          <>
            {/* Filters for All Guides Tab */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <CategoryFilter categories={categories} selected={selectedCategory} onSelect={(c) => { setSelectedCategory(c); if (searchInput) search(searchInput); }} />
                <InterfaceFilter selected={selectedInterface} onSelect={(i) => { setSelectedInterface(i); if (searchInput) search(searchInput); }} />
              </div>
            </div>

            {searchInput.length >= 2 ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{results.length} resultat{results.length !== 1 && 'er'} for "{searchInput}"</h2>
                  <button onClick={handleClearSearch} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"><RefreshCw className="w-4 h-4" />Tøm søk</button>
                </div>
                {results.length > 0 ? (
                  <div className="space-y-4">{displayGuides.map((g) => <GuideCard key={g.id} guide={g} isExpanded={expandedGuideId === g.id} onToggle={() => setExpandedGuideId(expandedGuideId === g.id ? null : g.id)} />)}</div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl border-2 border-gray-200">
                    <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ingen resultater</h3>
                    <p className="text-gray-600 mb-4">Prøv andre søkeord.</p>
                    <button onClick={() => { handleClearSearch(); setShowAllGuides(true); }} className="text-blue-600 hover:text-blue-700 font-medium">Vis alle veiledninger</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-8">
                {!showAllGuides ? (
                  <>
                    <div className="text-center">
                      <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Hva trenger du hjelp med?</h2>
                      <p className="text-gray-600">Bruk søkefeltet eller velg en kategori.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {categories.map((cat) => {
                        const Icon = cat.icon;
                        const count = allGuides.filter((g) => g.category === cat.id).length;
                        return (
                          <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setShowAllGuides(true); }} className="bg-white rounded-xl border-2 border-gray-200 p-6 text-left hover:border-gray-300 hover:shadow-md group">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${cat.color}15` }}><Icon className="w-6 h-6" style={{ color: cat.color }} /></div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">{cat.nameNo}</h3>
                                <p className="text-sm text-gray-600 mb-2">{cat.descriptionNo}</p>
                                <span className="text-xs text-gray-400">{count} veiledning{count !== 1 && 'er'}</span>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="text-center">
                      <button onClick={() => setShowAllGuides(true)} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Vis alle veiledninger ({allGuides.length})</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900">{selectedCategory === 'all' ? 'Alle veiledninger' : categories.find((c) => c.id === selectedCategory)?.nameNo} ({displayGuides.length})</h2>
                      <button onClick={() => { setShowAllGuides(false); setSelectedCategory('all'); }} className="text-sm text-blue-600 hover:text-blue-700">← Tilbake</button>
                    </div>
                    <div className="space-y-4">{displayGuides.map((g) => <GuideCard key={g.id} guide={g} isExpanded={expandedGuideId === g.id} onToggle={() => setExpandedGuideId(expandedGuideId === g.id ? null : g.id)} />)}</div>
                  </>
                )}
              </div>
            )}
          </>
        )}

        <div className="mt-12"><SupportContacts /></div>
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>GAT Brukerveiledning for Finnmarkssykehuset HF</p>
          <p className="mt-1">MinGat • GatGo • Vaktplanlegging • Timeregistrering</p>
        </footer>
      </div>
    </div>
  );
}
