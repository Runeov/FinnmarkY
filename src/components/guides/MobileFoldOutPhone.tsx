'use client';

import React, { useState } from 'react';
import { MinGatInterface } from '../mock/MinGatInterface';
import { Smartphone, X } from 'lucide-react';

interface MobileFoldOutPhoneProps {
  onNavigate?: (sectionId: string) => void;
  currentSection?: string;
  onElementClick?: (elementId: string) => void;
  highlightedElement?: string;
}

/**
 * Mobile-optimized fold-out phone
 * Shows a button on mobile screens that opens the full interactive demo
 */
export function MobileFoldOutPhone({
  onNavigate,
  currentSection,
  onElementClick,
  highlightedElement
}: MobileFoldOutPhoneProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Floating Action Button - Always visible when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 active:bg-blue-800 transition-all hover:scale-110 active:scale-95"
          aria-label="Åpne mobil demo"
        >
          <Smartphone className="w-7 h-7" />
        </button>
      )}
      
      {/* Full Screen Overlay when opened */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 animate-in fade-in duration-300">
          {/* Close button - Top right */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg active:bg-white transition-all active:scale-95"
            aria-label="Lukk demo"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* Title badge - Top left */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Smartphone className="w-4 h-4" />
              <span>MinGat Demo</span>
            </div>
          </div>
          
          {/* Phone container - Centered and responsive */}
          <div className="h-full w-full flex items-center justify-center p-4">
            <div 
              className="w-full max-w-md h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800"
              style={{
                // Ensure proper aspect ratio on different devices
                aspectRatio: '9/19.5'
              }}
            >
              <MinGatInterface
                onNavigate={onNavigate}
                currentSection={currentSection}
                onElementClick={onElementClick}
                highlightedElement={highlightedElement}
              />
            </div>
          </div>
          
          {/* Hint text - Bottom center */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm text-gray-600">
              Interaktiv demo - Trykk X for å lukke
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Alternative: Card-based trigger
 * Shows a card instead of floating button
 */
export function MobileDemoCard({
  onNavigate,
  currentSection,
  onElementClick,
  highlightedElement
}: MobileFoldOutPhoneProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Demo Card - Shows when closed */}
      {!isOpen && (
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl">
          <div className="text-center text-white mb-6">
            <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl font-bold mb-2">Prøv MinGat Demo</h3>
            <p className="text-sm text-blue-100">
              Utforsk alle funksjonene i en interaktiv mobilvisning
            </p>
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="w-full bg-white text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 active:bg-blue-100 transition-colors shadow-lg"
          >
            Åpne Interaktiv Demo
          </button>
        </div>
      )}
      
      {/* Full Screen Demo - Same as above */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 animate-in fade-in duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg active:bg-white transition-all active:scale-95"
            aria-label="Lukk demo"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Smartphone className="w-4 h-4" />
              <span>MinGat Demo</span>
            </div>
          </div>
          
          <div className="h-full w-full flex items-center justify-center p-4">
            <div 
              className="w-full max-w-md h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800"
              style={{ aspectRatio: '9/19.5' }}
            >
              <MinGatInterface
                onNavigate={onNavigate}
                currentSection={currentSection}
                onElementClick={onElementClick}
                highlightedElement={highlightedElement}
              />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm text-gray-600">
              Interaktiv demo - Trykk X for å lukke
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Simple bottom sheet version for mobile
 */
export function MobileBottomSheet({
  onNavigate,
  currentSection,
  onElementClick,
  highlightedElement
}: MobileFoldOutPhoneProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg flex items-center justify-center gap-3"
        >
          <Smartphone className="w-6 h-6" />
          <span>Åpne Mobil Demo</span>
        </button>
      )}
      
      {/* Bottom Sheet */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[95vh] flex flex-col">
            {/* Handle bar */}
            <div className="flex flex-col items-center pt-3 pb-2 px-4">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-3" />
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold text-gray-900">MinGat Demo</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-hidden">
              <div className="h-full max-w-md mx-auto">
                <MinGatInterface
                  onNavigate={onNavigate}
                  currentSection={currentSection}
                  onElementClick={onElementClick}
                  highlightedElement={highlightedElement}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MobileFoldOutPhone;