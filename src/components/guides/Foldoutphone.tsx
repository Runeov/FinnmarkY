'use client';

import React, { useState } from 'react';
import { MinGatInterface } from '../mock/MinGatInterface';
import { Maximize2, Minimize2, Smartphone } from 'lucide-react';

interface FoldOutPhoneProps {
  onNavigate?: (sectionId: string) => void;
  currentSection?: string;
  onElementClick?: (elementId: string) => void;
  highlightedElement?: string;
  defaultExpanded?: boolean;
}

export function FoldOutPhone({
  onNavigate,
  currentSection,
  onElementClick,
  highlightedElement,
  defaultExpanded = false
}: FoldOutPhoneProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <div className="relative">
      {/* Compact/Collapsed View */}
      {!isExpanded && (
        <div className="flex flex-col items-center gap-4">
          {/* Small preview */}
          <div className="relative group">
            <div 
              className="w-[200px] h-[400px] bg-white rounded-[1.5rem] shadow-xl overflow-hidden border-4 border-gray-800 cursor-pointer transition-transform hover:scale-105"
              onClick={() => setIsExpanded(true)}
            >
              {/* Mini phone content - just a preview */}
              <div className="h-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-sm font-semibold">MinGat Mobil</p>
                  <p className="text-xs opacity-80 mt-1">Klikk for å utvide</p>
                </div>
              </div>
            </div>
            
            {/* Expand button overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              title="Utvid telefon"
            >
              <Maximize2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          <button
            onClick={() => setIsExpanded(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Åpne Mobil Demo
          </button>
        </div>
      )}
      
      {/* Expanded View - Full interactive phone */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Click outside to close */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsExpanded(false)}
          />
          
          {/* Phone container */}
          <div className="relative z-10 animate-in zoom-in-95 duration-300">
            {/* Close button - top right */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-12 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Minimize2 className="w-4 h-4" />
              Minimer
            </button>
            
            {/* Phone frame */}
            <div className="w-[400px] h-[800px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-800 ring-1 ring-gray-900/5">
              <MinGatInterface
                onNavigate={onNavigate}
                currentSection={currentSection}
                onElementClick={onElementClick}
                highlightedElement={highlightedElement}
              />
            </div>
            
            {/* Phone details label */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm text-gray-700">
                <Smartphone className="w-4 h-4" />
                <span className="font-medium">MinGat Mobil (Interaktiv Demo)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Alternative: Slide-in from side version
 */
export function SlideInPhone({
  onNavigate,
  currentSection,
  onElementClick,
  highlightedElement,
  defaultExpanded = false
}: FoldOutPhoneProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  
  return (
    <>
      {/* Trigger button - always visible */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all hover:scale-110 z-40"
          title="Åpne mobil demo"
        >
          <Smartphone className="w-6 h-6" />
        </button>
      )}
      
      {/* Slide-in panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Phone panel - slides in from right */}
          <div className="fixed right-0 top-0 bottom-0 z-50 w-[440px] bg-gray-900 shadow-2xl animate-in slide-in-from-right duration-300 flex items-center justify-center p-5">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors"
              title="Lukk"
            >
              <Minimize2 className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Phone */}
            <div className="w-[400px] h-[800px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-800">
              <MinGatInterface
                onNavigate={onNavigate}
                currentSection={currentSection}
                onElementClick={onElementClick}
                highlightedElement={highlightedElement}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

/**
 * Alternative: Bottom drawer version (pulls up from bottom)
 */
export function DrawerPhone({
  onNavigate,
  currentSection,
  onElementClick,
  highlightedElement,
  defaultExpanded = false
}: FoldOutPhoneProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  
  return (
    <>
      {/* Trigger button */}
      {!isOpen && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Smartphone className="w-5 h-5" />
            Åpne Mobil Demo
          </button>
        </div>
      )}
      
      {/* Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Phone drawer - slides up from bottom */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col items-center p-6 max-h-[90vh]">
            {/* Handle bar */}
            <div className="w-12 h-1 bg-gray-600 rounded-full mb-4" />
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Minimize2 className="w-4 h-4" />
              Lukk
            </button>
            
            {/* Phone */}
            <div className="w-[400px] h-[800px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-800">
              <MinGatInterface
                onNavigate={onNavigate}
                currentSection={currentSection}
                onElementClick={onElementClick}
                highlightedElement={highlightedElement}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FoldOutPhone;