'use client';

import React, { useState } from 'react';
import { AppSidebar } from '../sidebar/AppSidebar';
import { MinGatInterface } from '../mock/MinGatInterface';
import { GuideCard } from './GuideCard'; // Assuming we reuse this for the guide content
import { categories } from '@/data/categories';
import { helpHierarchy } from '@/data/help-hierarchy';
import { Guide } from '@/lib/types';
import { BookOpen } from 'lucide-react';
import { getGuideById } from '@/data/guides'; // Need to make sure this exists or import from correct path
import { useGuideProgress } from '@/hooks/useGuideProgress';
import { useEffect } from 'react';
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

    return id;
};

export function InteractiveGuidePage() {
  // Default to 'mine-apper' to show the GatGo demo first, or 'mingat-hjelp' as root
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>('mine-apper');
  const { markAsViewed } = useGuideProgress();

  useEffect(() => {
    if (selectedGuideId) {
      markAsViewed(selectedGuideId);
    }
  }, [selectedGuideId, markAsViewed]);

  const activeContent = selectedGuideId ? guideContent[selectedGuideId] : null;
  const sectionTitle = activeContent ? activeContent.title : findSectionTitle(selectedGuideId || '');

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Left Sidebar */}
      <AppSidebar
        onSelectGuide={setSelectedGuideId}
        selectedGuideId={selectedGuideId}
      />

      {/* Main Content Area - Split View */}
      <div className="flex-1 flex overflow-hidden">

        {/* Guide Content (Middle) */}
        <div className="w-1/2 overflow-y-auto bg-white border-r border-gray-200 p-8 shadow-inner">
           <div className="max-w-2xl mx-auto">
               <div className="mb-6 pb-6 border-b border-gray-100">
                   <h1 className="text-3xl font-bold text-gray-900 mb-2">{sectionTitle}</h1>
                   <div className="flex items-center gap-2 text-sm text-gray-500">
                       <BookOpen className="w-4 h-4" />
                       <span>Veiledning</span>
                   </div>
               </div>

               <div className="prose prose-blue max-w-none">
                   {activeContent ? (
                     activeContent.content
                   ) : (
                     <div className="text-gray-500 py-12 text-center">
                         <p>Innhold for <strong>{sectionTitle}</strong> er under utarbeidelse.</p>
                         <p className="text-sm mt-2">Prøv å velge <strong>Mobil App (GatGo)</strong>, <strong>Innlogging</strong>, eller <strong>Min Timeliste</strong> for å se innhold.</p>
                     </div>
                   )}
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
                    {/* Mobile/App Frame styling */}
                     <MinGatInterface />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
