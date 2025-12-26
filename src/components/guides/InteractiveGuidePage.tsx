'use client';

import React, { useState, useEffect } from 'react';
import { AppSidebar } from '../sidebar/AppSidebar';
import { MinGatInterface } from '../mock/MinGatInterface';
import { MinGatPCInterface } from '../mock/MinGatPCInterface';
import { GuideCard } from './GuideCard'; // Assuming we reuse this for the guide content
import { categories } from '@/data/categories';
import { helpHierarchy } from '@/data/help-hierarchy';
import { Guide } from '@/lib/types';
import { BookOpen, Monitor, Smartphone } from 'lucide-react';
import { getGuideById } from '@/data/guides'; // Need to make sure this exists or import from correct path
import { useGuideProgress } from '@/hooks/useGuideProgress';
import { guideContent } from '@/data/guide-content';

// Helper to flatten hierarchy for searching titles by ID
const findSectionTitle = (id: string, items = helpHierarchy): string => {
  for (const item of items) {
    if (item.id === id) return item.title;
    if (item.children) {
      const found = findSectionTitle(id, item.children);
      if (found) return found;
    }
  }
  const cat = categories.find(c => c.id === id);
  if (cat) return cat.nameNo;

  const accessGuide = accessGuides.find(g => g.id === id);
  if (accessGuide) return accessGuide.titleNo;

  return id;
};

// Get metadata for a guide
const getGuideMetadata = (id: string) => {
  const guide = accessGuides.find(g => g.id === id);
  if (guide) {
    return {
      estimatedTime: guide.estimatedTime,
      complexity: guide.complexity,
      interface: guide.interface
    };
  }
  return null;
};

// Build searchable index
const buildSearchIndex = () => {
  const index: { id: string; title: string; keywords: string[] }[] = [];
  
  // Add access guides
  accessGuides.forEach(guide => {
    index.push({
      id: guide.id,
      title: guide.titleNo,
      keywords: guide.keywords || []
    });
  });
  
  // Add gatHelpData topics
  const addTopics = (topics: typeof gatHelpData) => {
    topics.forEach(topic => {
      index.push({
        id: topic.id,
        title: topic.title,
        keywords: [topic.title.toLowerCase()]
      });
      if (topic.subTopics) {
        addTopics(topic.subTopics);
      }
    });
  };
  addTopics(gatHelpData);
  
  // Add categories
  categories.forEach(cat => {
    index.push({
      id: cat.id,
      title: cat.nameNo,
      keywords: [cat.name.toLowerCase(), cat.nameNo.toLowerCase()]
    });
  });
  
  return index;
};

export function InteractiveGuidePage() {
  // Default to 'mine-apper' to show the GatGo demo first, or 'mingat-hjelp' as root
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>('mine-apper');
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile');
  const { markAsViewed } = useGuideProgress();

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Handle navigation
  const handleNavigate = useCallback((guideId: string) => {
    setSelectedGuideId(guideId);
    setSidebarOpen(false);
    setShowFAQ(false);
    setSearchQuery('');
    setShowSearchDropdown(false);
    const contentArea = document.getElementById('guide-content-area');
    if (contentArea) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Register navigator callback
  useEffect(() => {
    setGuideNavigator(handleNavigate);
    return () => setGuideNavigator(() => {});
  }, [handleNavigate]);

  useEffect(() => {
    if (selectedGuideId) {
      markAsViewed(selectedGuideId);

      // Auto-switch view based on content type if possible
      // This is a simple heuristic based on the ID or title
      if (selectedGuideId === 'mine-apper' || selectedGuideId.includes('gatgo')) {
        setViewMode('mobile');
      } else {
        // Default to desktop for most other things as MinGat is primarily a web app
        setViewMode('desktop');
      }
    }
  }, [effectiveGuideId, showFAQ, markAsViewed]);

  // Search handling
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const lowerQuery = searchQuery.toLowerCase();
      
      // Search guides
      const guideResults = searchIndex.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(kw => kw.includes(lowerQuery))
      ).slice(0, 8);
      
      setSearchResults(guideResults);
      
      // Search FAQ
      const faqMatches = searchFAQ(searchQuery).slice(0, 5);
      setFaqResults(faqMatches);
      
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setFaqResults([]);
      setShowSearchDropdown(false);
    }
  }, [searchQuery, searchIndex]);

  // Close sidebar on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleFaqCategory = (categoryId: string) => {
    setExpandedFaqCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const activeContent = effectiveGuideId ? guideContent[effectiveGuideId] : null;
  const sectionTitle = activeContent ? activeContent.title : findSectionTitle(effectiveGuideId || '');
  const metadata = effectiveGuideId ? getGuideMetadata(effectiveGuideId) : null;

  // FAQ Component
  const FAQSection = () => (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="h-10 lg:hidden" />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            Ofte stilte spørsmål (FAQ)
          </h1>
          <p className="text-gray-600">Finn svar på de vanligste spørsmålene om MinGat og GatGo</p>
        </div>

        <div className="space-y-4">
          {faqCategories.map(category => {
            const categoryFaqs = faqData.filter(f => f.category === category.id);
            const isExpanded = expandedFaqCategories.has(category.id);
            
            return (
              <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaqCategory(category.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{category.nameNo}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{categoryFaqs.length} spørsmål</span>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="divide-y divide-gray-100">
                    {categoryFaqs.map(faq => (
                      <div key={faq.id} className="p-4 bg-white">
                        <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm mb-3">{faq.answer}</p>
                        {faq.relatedGuideId && (
                          <button
                            onClick={() => handleNavigate(faq.relatedGuideId!)}
                            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                          >
                            Les mer i veiledningen
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
        aria-label="Åpne meny"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Lukk meny"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        <AppSidebar
          onSelectGuide={handleNavigate}
          selectedGuideId={selectedGuideId}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Search Bar */}
        <div className="bg-white border-b border-gray-200 p-3 sm:p-4 lg:pl-4">
          <div className="flex items-center gap-3 max-w-2xl mx-auto lg:mx-0">
            {/* Spacer for mobile menu button */}
            <div className="w-10 lg:hidden" />
            
            <div className="flex-1 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Søk i veiledninger og FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.length >= 2 && setShowSearchDropdown(true)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Search Dropdown */}
              {showSearchDropdown && (searchResults.length > 0 || faqResults.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                  {searchResults.length > 0 && (
                    <div className="p-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">Veiledninger</div>
                      {searchResults.map(result => (
                        <button
                          key={result.id}
                          onClick={() => handleNavigate(result.id)}
                          className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md flex items-center gap-2"
                        >
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{result.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {faqResults.length > 0 && (
                    <div className="p-2 border-t border-gray-100">
                      <div className="text-xs font-semibold text-gray-500 uppercase px-2 py-1">FAQ</div>
                      {faqResults.map(faq => (
                        <button
                          key={faq.id}
                          onClick={() => {
                            if (faq.relatedGuideId) {
                              handleNavigate(faq.relatedGuideId);
                            } else {
                              setShowFAQ(true);
                              setExpandedFaqCategories(new Set([faq.category]));
                              setShowSearchDropdown(false);
                            }
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md"
                        >
                          <div className="flex items-start gap-2">
                            <HelpCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                            <div>
                              <div className="text-sm text-gray-700 font-medium">{faq.question}</div>
                              <div className="text-xs text-gray-500 line-clamp-1">{faq.answer}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* FAQ Button */}
            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${showFAQ 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              <HelpCircle className="w-5 h-5" />
              <span className="hidden sm:inline">FAQ</span>
            </button>
          </div>
        </div>

        {/* Interactive Mock (Right) */}
        <div className="w-1/2 bg-gray-100 flex flex-col relative border-l border-gray-200">
            {/* View Toggle */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex bg-white p-1 rounded-full shadow-lg border border-gray-200">
              <button
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'mobile'
                    ? 'bg-[#005077] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Mobil
              </button>
              <button
                onClick={() => setViewMode('desktop')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'desktop'
                    ? 'bg-[#005077] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Monitor className="w-4 h-4" />
                PC
              </button>
            </div>

            <div className="absolute top-4 right-4 z-10 bg-black/75 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              Interaktiv Demo
            </div>

            <div className="flex-1 p-8 flex items-center justify-center overflow-hidden bg-dot-pattern">
                {viewMode === 'mobile' ? (
                  <div className="w-full max-w-md aspect-[9/16] md:aspect-auto md:h-[800px] md:w-[400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-gray-800 ring-1 ring-gray-900/5 transition-all duration-500 ease-in-out">
                      <MinGatInterface />
                  </div>
                ) : (
                  <div className="w-full h-full max-w-5xl max-h-[800px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 ring-1 ring-black/5 transition-all duration-500 ease-in-out">
                      <MinGatPCInterface />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}