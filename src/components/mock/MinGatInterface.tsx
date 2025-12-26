'use client';

import React, { useState } from 'react';
import { Menu, Bell, User, Calendar, Clock, Home, Settings, LogOut, Smartphone } from 'lucide-react';

export function MinGatInterface() {
  const [activeTab, setActiveTab] = useState('home');
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col font-sans text-sm select-none pointer-events-auto cursor-default">
      {/* Mock Header */}
      <div className="h-12 bg-[#005077] text-white flex items-center justify-between px-4 shadow-md flex-shrink-0">
        <div className="flex items-center gap-4">
          <Menu className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <span className="font-bold text-lg tracking-tight">MinGat</span>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-2 py-1 rounded">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Navn Navnesen</span>
          </div>
        </div>
      </div>

      {/* Mock Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-4 flex items-center gap-6 overflow-x-auto flex-shrink-0">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex items-center gap-2 py-3 border-b-2 transition-colors ${
            activeTab === 'home' ? 'border-[#005077] text-[#005077]' : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Home className="w-4 h-4" />
          Hjem
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex items-center gap-2 py-3 border-b-2 transition-colors ${
            activeTab === 'calendar' ? 'border-[#005077] text-[#005077]' : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Min Kalender
        </button>
        <button
          onClick={() => setActiveTab('hours')}
          className={`flex items-center gap-2 py-3 border-b-2 transition-colors ${
            activeTab === 'hours' ? 'border-[#005077] text-[#005077]' : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          Timeliste
        </button>
      </div>

      {/* Mock Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activeTab === 'home' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Dashboard Widgets */}
            <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-2 border-b pb-2">Meldinger</h3>
              <p className="text-gray-500 italic">Ingen nye meldinger</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-2 border-b pb-2">Neste vakt</h3>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">DAG</div>
                <div>
                  <p className="font-medium">Mandag 12.02</p>
                  <p className="text-gray-600">08:00 - 15:30</p>
                  <p className="text-gray-500 text-xs">Avdeling A</p>
                </div>
              </div>
            </div>

            {/* Interactive Widget for "Mobile App" guide */}
            <div
                className="bg-white p-4 rounded shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow ring-2 ring-transparent hover:ring-blue-400"
                onClick={() => setShowQR(!showQR)}
            >
              <h3 className="font-bold text-gray-700 mb-2 border-b pb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Mobil app
              </h3>
              {showQR ? (
                 <div className="text-center animate-in fade-in zoom-in duration-200">
                     <div className="bg-gray-800 w-32 h-32 mx-auto mb-2 rounded-lg flex items-center justify-center text-white text-xs">
                         [QR KODE]
                     </div>
                     <p className="text-xs text-gray-600">Skann for å koble til GatGo</p>
                     <button className="mt-2 text-blue-600 text-xs hover:underline">Avbryt</button>
                 </div>
              ) : (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">GatGo er ikke satt opp.</p>
                    <button className="w-full bg-[#005077] text-white py-1 px-3 rounded text-sm hover:bg-[#003d5c]">
                        Vis oppsettkode
                    </button>
                  </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
             <div className="bg-white p-8 rounded shadow-sm border border-gray-200 text-center text-gray-500">
                 <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
                 <p>Kalendervisning (Demo)</p>
             </div>
        )}

        {activeTab === 'hours' && (
             <div className="bg-white p-8 rounded shadow-sm border border-gray-200 text-center text-gray-500">
                 <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
                 <p>Timeliste (Demo)</p>
             </div>
        )}
      </div>

      {/* Mock Footer */}
      <div className="bg-gray-200 p-2 text-center text-xs text-gray-500 flex-shrink-0">
          MinGat v.2024.1.0 (Demo Mode)
      </div>
    </div>
  );
}
