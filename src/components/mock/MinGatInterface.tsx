'use client';

import React, { useState } from 'react';
import { Home, Calendar, MessageSquare, Clock, User, Bell, Menu, X, ChevronRight } from 'lucide-react';

/**
 * MinGatInterface - Complete Mobile Mock with Navigation
 * 
 * Features:
 * - Hamburger menu for mobile navigation
 * - Dynamic content based on currentSection
 * - Responsive bottom navigation
 * - Click handlers for scroll sync
 * - Element highlighting support
 */

interface MinGatInterfaceProps {
  onNavigate?: (sectionId: string) => void;
  currentSection?: string;
  onElementClick?: (elementId: string) => void;
  highlightedElement?: string;
}

export function MinGatInterface({ 
  onNavigate, 
  currentSection = 'home',
  onElementClick,
  highlightedElement
}: MinGatInterfaceProps = {}) {
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Helper to check if element should be highlighted
  const isHighlighted = (elementId: string) => highlightedElement === elementId;
  
  // Handle menu click
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    onElementClick?.('hamburger-menu');
  };
  
  // Handle navigation click
  const handleNavClick = (sectionId: string, elementId: string) => {
    onNavigate?.(sectionId);
    onElementClick?.(elementId);
    setMenuOpen(false);
  };
  
  return (
    <div className="h-full flex flex-col bg-gray-50 relative">
      {/* Status Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 flex items-center justify-between text-xs">
        <span>9:41</span>
        <span className="font-semibold">MinGat</span>
        <div className="flex items-center gap-2">
          <Bell className="w-3 h-3" />
          <span>100%</span>
        </div>
      </div>

      {/* Header with Hamburger Menu */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={handleMenuClick}
          className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
            isHighlighted('hamburger-menu') ? 'ring-2 ring-blue-400' : ''
          }`}
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
        <h1 className="text-lg font-bold text-gray-900">
          {currentSection === 'home' && 'Startsiden'}
          {currentSection === 'calendar' && 'Min Kalender'}
          {currentSection === 'requests' && 'Forespørsler'}
          {currentSection === 'flextime' && 'Fleksitid'}
          {currentSection === 'profile' && 'Min Profil'}
        </h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Slide-out Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bottom-0 z-50 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div 
            className="bg-white w-64 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 space-y-2">
              <button
                onClick={() => handleNavClick('home', 'menu-home')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  currentSection === 'home' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Startsiden</span>
              </button>
              
              <button
                onClick={() => handleNavClick('calendar', 'menu-calendar')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  currentSection === 'calendar' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Min Kalender</span>
              </button>
              
              <button
                onClick={() => handleNavClick('requests', 'menu-requests')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  currentSection === 'requests' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Forespørsler</span>
              </button>
              
              <button
                onClick={() => handleNavClick('flextime', 'menu-flextime')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  currentSection === 'flextime' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <Clock className="w-5 h-5" />
                <span className="font-medium">Fleksitid</span>
              </button>
              
              <button
                onClick={() => handleNavClick('profile', 'menu-profile')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  currentSection === 'profile' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Min Profil</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Changes based on currentSection */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {/* Home View */}
        {currentSection === 'home' && (
          <div className="space-y-3">
            {/* Today's shift */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">I dag</div>
              <div className="font-semibold text-sm">DH (07:30-15:00)</div>
              <div className="text-xs text-gray-500 mt-1">Kirurgisk avdeling</div>
            </div>

            {/* Tomorrow's shift */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="text-xs text-gray-600 mb-1">I morgen</div>
              <div className="font-semibold text-sm">AH (15:00-23:00)</div>
              <div className="text-xs text-gray-500 mt-1">Akuttmottak</div>
            </div>

            {/* Reminders */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs text-gray-600">Påminnelser</div>
                <div className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded-full">4</div>
              </div>
              <div className="text-sm font-medium">Nye meldinger</div>
              <div className="text-xs text-gray-600 mt-1">Klikk for å se detaljer</div>
            </div>

            {/* Flextime */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">+7:18</div>
              <div className="text-xs text-gray-600 mt-1">Fleksitid saldo</div>
            </div>

            {/* Quick actions */}
            <button 
              onClick={() => handleNavClick('requests', 'quick-action-request')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 mt-2 hover:bg-blue-700 transition-colors"
            >
              Ny forespørsel
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Calendar View */}
        {currentSection === 'calendar' && (
          <div>
            {/* Month view */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
              <div className="text-center mb-3 font-semibold">Desember 2024</div>
              
              <div className="grid grid-cols-7 gap-1 text-xs mb-1">
                {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map(day => (
                  <div key={day} className="text-center font-semibold text-gray-600 py-1">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-xs">
                {Array.from({ length: 31 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`text-center py-2 rounded ${
                      i === 26 
                        ? 'bg-blue-600 text-white font-bold' 
                        : i % 7 === 6 || i % 7 === 5
                        ? 'bg-gray-50 text-gray-400'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Today's schedule */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">I dag - 27. desember</div>
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <div className="font-semibold text-sm">Dagvakt</div>
                <div className="text-xs text-gray-600">07:30 - 15:00</div>
                <div className="text-xs text-gray-500 mt-1">Kirurgisk avdeling</div>
              </div>
            </div>
          </div>
        )}

        {/* Requests View */}
        {currentSection === 'requests' && (
          <div>
            <div className="space-y-2 mb-4">
              {/* Approved request */}
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-sm">Ferie</div>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Godkjent</div>
                </div>
                <div className="text-xs text-gray-600">10. juli - 24. august</div>
                <div className="text-xs text-gray-500 mt-1">Sommerferie</div>
              </div>

              {/* Pending request */}
              <div className="bg-white border-l-4 border-gray-300 p-3 rounded border border-gray-200">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-sm">Ekstravakt</div>
                  <div className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Ubehandlet</div>
                </div>
                <div className="text-xs text-gray-600">15. juli</div>
                <div className="text-xs text-gray-500 mt-1">Venter på godkjenning</div>
              </div>

              {/* Rejected request */}
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-sm">Vaktbytte</div>
                  <div className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">Avvist</div>
                </div>
                <div className="text-xs text-gray-600">20. juli</div>
                <div className="text-xs text-gray-500 mt-1">Ingen tilgjengelig</div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors">
              + Ny forespørsel
            </button>
          </div>
        )}

        {/* Flextime View */}
        {currentSection === 'flextime' && (
          <div>
            {/* Clock display */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center mb-4">
              <div className="text-4xl font-bold text-gray-900 mb-1">15:42</div>
              <div className="text-sm text-gray-600 mb-3">Klokken</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">+7:18</div>
              <div className="text-xs text-gray-600">Din saldo</div>
            </div>

            {/* Punch buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex flex-col items-center gap-1 transition-colors">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Stemple inn</span>
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 rounded-lg font-semibold flex flex-col items-center gap-1 transition-colors">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Stemple ut</span>
              </button>
            </div>

            {/* Recent stamps */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-700">Siste stemplinger</div>
              <div className="bg-gray-50 border border-gray-200 rounded p-2 text-xs">
                <div className="flex justify-between">
                  <span>Inn</span>
                  <span className="font-medium">07:28</span>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-2 text-xs">
                <div className="flex justify-between">
                  <span>Ut</span>
                  <span className="font-medium">11:00</span>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-2 text-xs">
                <div className="flex justify-between">
                  <span>Inn</span>
                  <span className="font-medium">11:30</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile View */}
        {currentSection === 'profile' && (
          <div>
            {/* Profile header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  GH
                </div>
                <div>
                  <div className="font-bold text-lg">Gunhild Horvli</div>
                  <div className="text-sm text-blue-100">GUHV</div>
                  <div className="text-xs text-blue-200">Kirurgisk avdeling</div>
                </div>
              </div>
            </div>

            {/* Profile details */}
            <div className="space-y-2">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">E-post</div>
                <div className="text-sm font-medium">gunhild.horvli@example.no</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Telefon</div>
                <div className="text-sm font-medium">+47 123 45 678</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Stillingsprosent</div>
                <div className="text-sm font-medium">100%</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-1">Ansiennitet</div>
                <div className="text-sm font-medium">5 år, 3 måneder</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Responsive */}
      <nav className="bg-white border-t border-gray-200 px-1 py-2 flex justify-around">
        <button
          onClick={() => handleNavClick('home', 'nav-home')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg transition-all ${
            currentSection === 'home' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          } ${isHighlighted('nav-home') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Hjem</span>
        </button>

        <button
          onClick={() => handleNavClick('calendar', 'nav-calendar')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg transition-all ${
            currentSection === 'calendar' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          } ${isHighlighted('nav-calendar') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-medium">Kalender</span>
        </button>

        <button
          onClick={() => handleNavClick('requests', 'nav-requests')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg transition-all ${
            currentSection === 'requests' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          } ${isHighlighted('nav-requests') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-medium">Forespørsler</span>
        </button>

        <button
          onClick={() => handleNavClick('flextime', 'nav-flextime')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg transition-all ${
            currentSection === 'flextime' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          } ${isHighlighted('nav-flextime') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-xs font-medium">Fleksitid</span>
        </button>

        <button
          onClick={() => handleNavClick('profile', 'nav-profile')}
          className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg transition-all ${
            currentSection === 'profile' 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          } ${isHighlighted('nav-profile') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs font-medium">Profil</span>
        </button>
      </nav>
    </div>
  );
}