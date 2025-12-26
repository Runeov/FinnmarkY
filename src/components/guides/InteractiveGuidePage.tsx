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
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>('mobile'); // Default to mobile for demo
  const { markAsViewed } = useGuideProgress();

  useEffect(() => {
    if (selectedGuideId) {
      markAsViewed(selectedGuideId);
    }
  }, [selectedGuideId, markAsViewed]);

  // In a real app, we would fetch the actual guide content here.
  // For now, we'll try to load a guide if it exists in the curated list,
  // or show a placeholder for the scraped hierarchy items.

  // Note: getGuideById might return undefined if it's not a "curated" guide.
  // We need to handle that.

  let activeGuide: Guide | undefined;

  // Try to find if it's a known category/guide
  // The sidebar passes IDs. Some IDs match 'categories' (which usually have a main guide),
  // others match the hierarchy.

  // FIX: In the current codebase, `categories` are IDs like 'mobile', 'authentication'.
  // `getGuideById` expects a guide ID. Usually we have a 1:1 mapping or a list of guides per category.
  // For this demo, let's assume if the ID matches a category, we show a generic guide for that category
  // or a list of guides.

  // Since I don't have access to `src/data/guides.ts` content right now to check export,
  // I will assume I need to handle "Category Selection" vs "Specific Guide Selection".
  // The sidebar currently emits IDs.

  const sectionTitle = findSectionTitle(selectedGuideId || '');

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
                   {/*
                     Here we would render the actual guide content.
                     For the demo (since I haven't migrated all content), I will show a placeholder
                     unless it's one of the "Interactive" demos.
                   */}

                   {selectedGuideId === 'mobile' ? (
                       <div>
                           <h3>Slik setter du opp GatGo på din mobil</h3>
                           <p>For å bruke MinGat på mobilen må du koble enheten din til din bruker.</p>
                           <ol className="list-decimal pl-5 space-y-4 my-4">
                               <li>Logg inn på MinGat (bruk demomiljøet til høyre).</li>
                               <li>I hovedmenyen, se etter "Mobil app" modulen.</li>
                               <li>Trykk på <strong>"Vis oppsettkode"</strong> knappen.</li>
                               <li>Skann QR-koden som dukker opp med din mobiltelefon.</li>
                           </ol>
                           <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800 text-sm">
                               <strong>Tips:</strong> Prøv å klikke på "Vis oppsettkode" i demomiljøet til høyre for å se hvordan det fungerer!
                           </div>
                       </div>
                   ) : (
                       <div className="text-gray-500 py-12 text-center">
                           <p>Innhold for <strong>{sectionTitle}</strong> er under utarbeidelse.</p>
                           <p className="text-sm mt-2">Velg <strong>Mobil App (GatGo)</strong> i menyen for å se en interaktiv demo.</p>
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
