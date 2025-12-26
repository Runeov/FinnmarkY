'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AppSidebar } from '../sidebar/AppSidebar';
import { MinGatInterface } from '../mock/MinGatInterface';
import { categories } from '@/data/categories';
import { helpHierarchy } from '@/data/help-hierarchy';
import { BookOpen, Clock, Smartphone, Monitor } from 'lucide-react';
import { useGuideProgress } from '@/hooks/useGuideProgress';
import { guideContent, setGuideNavigator } from '@/data/guide-content';
import { accessGuides } from '@/data/access-guides';

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

  // Check access guides
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

export function InteractiveGuidePage() {
  // Start with first quick start step
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>('home-access-setup');
  const { markAsViewed } = useGuideProgress();

  // Set up the navigator callback so guide links work
  const handleNavigate = useCallback((guideId: string) => {
    setSelectedGuideId(guideId);
    // Scroll to top of content area
    const contentArea = document.getElementById('guide-content-area');
    if (contentArea) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Register the navigator callback
  useEffect(() => {
    setGuideNavigator(handleNavigate);
    return () => setGuideNavigator(() => {}); // Cleanup
  }, [handleNavigate]);

  useEffect(() => {
    if (selectedGuideId) {
      markAsViewed(selectedGuideId);
    }
  }, [selectedGuideId, markAsViewed]);

  const activeContent = selectedGuideId ? guideContent[selectedGuideId] : null;
  const sectionTitle = activeContent ? activeContent.title : findSectionTitle(selectedGuideId || '');
  const metadata = selectedGuideId ? getGuideMetadata(selectedGuideId) : null;

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Left Sidebar */}
      <AppSidebar
        onSelectGuide={handleNavigate}
        selectedGuideId={selectedGuideId}
      />

      {/* Main Content Area - Split View */}
      <div className="flex-1 flex overflow-hidden">

        {/* Guide Content (Middle) */}
        <div 
          id="guide-content-area"
          className="w-1/2 overflow-y-auto bg-white border-r border-gray-200 shadow-inner"
        >
          <div className="p-8">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{sectionTitle}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Veiledning</span>
                  </div>
                  {metadata && (
                    <>
                      {metadata.estimatedTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{metadata.estimatedTime}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        {metadata.interface === 'gatgo' ? (
                          <Smartphone className="w-4 h-4" />
                        ) : (
                          <Monitor className="w-4 h-4" />
                        )}
                        <span>
                          {metadata.interface === 'gatgo' ? 'GatGo' : metadata.interface === 'mingat' ? 'MinGat' : 'Alle'}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-blue max-w-none">
                {activeContent ? (
                  activeContent.content
                ) : (
                  <div className="text-gray-500 py-12 text-center">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg">Innhold for <strong>{sectionTitle}</strong> er under utarbeidelse.</p>
                    <p className="text-sm mt-2">
                      Prøv å velge en av <strong>Hurtigstart</strong>-stegene i menyen for å se detaljert veiledning.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Mock (Right) */}
        <div className="w-1/2 bg-gray-50 flex flex-col relative">
          <div className="absolute top-4 right-4 z-10 bg-black/75 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            Interaktiv Demo
          </div>
          <div className="flex-1 p-8 flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-md aspect-[9/16] md:aspect-auto md:h-[800px] md:w-[400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-gray-800 ring-1 ring-gray-900/5">
              <MinGatInterface />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
