'use client';

import React, { useState } from 'react';
import {
  Menu, Bell, User, Calendar, Clock, Home, Settings, LogOut,
  ChevronDown, Search, Printer, HelpCircle, Briefcase, FileText,
  Users, AlertCircle, CheckCircle, Smartphone
} from 'lucide-react';

export function MinGatPCInterface() {
  const [activeTab, setActiveTab] = useState('start');

  return (
    <div
      className="w-full h-full bg-[#f0f2f5] flex flex-col font-sans text-sm text-gray-800 border border-gray-300 shadow-2xl rounded-lg overflow-hidden"
      id="mcp-mingat-pc-container"
    >
      {/* 1. HEADER (Top Bar) */}
      <header
        className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0"
        id="mcp-mingat-header"
      >
        {/* Left: Logo/Title */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-[#005077] tracking-tight flex items-center gap-2">
            <span>MinGat</span>
            <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">v.2024.1</span>
          </div>
        </div>

        {/* Center: Search/Level (Nivå) */}
        <div className="flex-1 max-w-xl mx-8 hidden md:flex items-center gap-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Søk etter ansatt eller funksjon..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005077] focus:border-transparent text-sm"
              id="mcp-header-search"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-3 py-2 rounded-md whitespace-nowrap text-xs font-medium cursor-pointer hover:bg-gray-100" id="mcp-level-selector">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <span>Medisinsk Avd. A</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>

        {/* Right: User & Tools */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-[#005077]" title="Hjelp" id="mcp-header-help">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-[#005077]" title="Utskrift" id="mcp-header-print">
            <Printer className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-gray-200 mx-1"></div>
          <div className="flex items-center gap-3 cursor-pointer group" id="mcp-user-profile">
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-sm leading-tight text-gray-700 group-hover:text-[#005077]">Navn Navnesen</p>
              <p className="text-xs text-gray-500">Sykepleier</p>
            </div>
            <div className="w-9 h-9 bg-[#005077] text-white rounded-full flex items-center justify-center font-bold shadow-sm">
              NN
            </div>
          </div>
        </div>
      </header>

      {/* 2. NAVIGATION BAR (Main Menu) */}
      <nav
        className="bg-[#005077] text-white px-6 shadow-md flex-shrink-0"
        id="mcp-mingat-nav"
      >
        <ul className="flex items-center gap-1 overflow-x-auto">
          {[
            { id: 'start', label: 'Startsiden', icon: Home },
            { id: 'calendar', label: 'Min Kalender', icon: Calendar },
            { id: 'requests', label: 'Forespørsler', icon: FileText },
            { id: 'timelog', label: 'Min Timeliste', icon: Clock },
            { id: 'department', label: 'Vaktbok', icon: Users },
            { id: 'settings', label: 'Min Profil', icon: Settings },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-4 transition-colors
                  ${activeTab === item.id
                    ? 'border-white text-white bg-white/10'
                    : 'border-transparent text-blue-100 hover:bg-white/5 hover:text-white'}
                `}
                id={`mcp-menu-${item.id}`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. CONTENT AREA */}
      <main className="flex-1 p-6 overflow-y-auto bg-[#f0f2f5]" id="mcp-main-content">

        {activeTab === 'start' && (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Widget: Mine Vakter (Today/Tomorrow) */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden col-span-1 lg:col-span-2" id="mcp-widget-shifts">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-700">Mine vakter</h3>
                <span className="text-xs text-gray-500">Uke 42</span>
              </div>
              <div className="p-4 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-blue-50 border border-blue-100 rounded p-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">I dag</span>
                  <div className="flex justify-between items-end mt-1">
                    <div>
                      <p className="font-bold text-gray-800">07:30 - 15:00</p>
                      <p className="text-sm text-gray-600">Dagvakt, Medisinsk A</p>
                    </div>
                    <div className="h-2 w-2 bg-green-500 rounded-full" title="På jobb"></div>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded p-3 opacity-60">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">I morgen</span>
                  <div className="mt-1">
                    <p className="font-bold text-gray-800">14:45 - 22:15</p>
                    <p className="text-sm text-gray-600">Aftenvakt, Medisinsk A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget: Påminnelser */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" id="mcp-widget-reminders">
              <div className="bg-yellow-50 px-4 py-3 border-b border-yellow-100 flex justify-between items-center">
                <h3 className="font-semibold text-yellow-800 flex items-center gap-2">
                  <Bell className="w-4 h-4" /> Påminnelser
                </h3>
                <span className="bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full">2</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="p-3 hover:bg-gray-50 cursor-pointer">
                  <p className="text-sm font-medium text-gray-800">Timeliste ikke signert</p>
                  <p className="text-xs text-gray-500 mt-0.5">Uke 41 mangler godkjenning</p>
                </div>
                <div className="p-3 hover:bg-gray-50 cursor-pointer">
                  <p className="text-sm font-medium text-gray-800">Ny arbeidsplan</p>
                  <p className="text-xs text-gray-500 mt-0.5">Høst 2024 er publisert</p>
                </div>
              </div>
            </div>

            {/* Widget: Mine Apper / GatGo */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" id="mcp-widget-apps">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">Mine Apper</h3>
              </div>
              <div className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">GatGo</h4>
                  <p className="text-xs text-gray-500 mb-2">Mobil tilgang til vaktbok</p>
                  <button className="text-xs bg-[#005077] text-white px-3 py-1.5 rounded hover:bg-[#003d5c] transition-colors">
                    Vis oppsettkode
                  </button>
                </div>
              </div>
            </div>

            {/* Widget: Ledige vakter */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden lg:col-span-2" id="mcp-widget-vacant">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-700">Ledige vakter (JaTakk)</h3>
                <button className="text-xs text-blue-600 hover:underline">Se alle</button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs text-left">
                  <tr>
                    <th className="px-4 py-2 font-medium">Dato</th>
                    <th className="px-4 py-2 font-medium">Vakt</th>
                    <th className="px-4 py-2 font-medium">Avdeling</th>
                    <th className="px-4 py-2 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">Lør 17.02</td>
                    <td className="px-4 py-3"><span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">Aften</span></td>
                    <td className="px-4 py-3 text-gray-600">Medisinsk A</td>
                    <td className="px-4 py-3 text-right"><button className="text-blue-600 hover:underline text-xs font-medium">Søk</button></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Søn 18.02</td>
                    <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-medium">Dag</span></td>
                    <td className="px-4 py-3 text-gray-600">Medisinsk A</td>
                    <td className="px-4 py-3 text-right"><button className="text-blue-600 hover:underline text-xs font-medium">Søk</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Widget: Fleksitid */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden" id="mcp-widget-flex">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">Min Fleksitid</h3>
              </div>
              <div className="p-4 text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">+ 12:30</div>
                <p className="text-xs text-gray-500 mb-4">Saldo pr. i dag</p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-xs py-2 rounded font-medium">
                    Stemple inn
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-xs py-2 rounded font-medium">
                    Stemple ut
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeTab !== 'start' && (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-white rounded-lg border border-gray-200 border-dashed">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
              {activeTab === 'calendar' && <Calendar className="w-12 h-12" />}
              {activeTab === 'requests' && <FileText className="w-12 h-12" />}
              {activeTab === 'timelog' && <Clock className="w-12 h-12" />}
              {activeTab === 'department' && <Users className="w-12 h-12" />}
              {activeTab === 'settings' && <Settings className="w-12 h-12" />}
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-1">
              {activeTab === 'calendar' ? 'Min Kalender' :
               activeTab === 'requests' ? 'Mine Forespørsler' :
               activeTab === 'timelog' ? 'Timeliste' :
               activeTab === 'department' ? 'Vaktbok' : 'Innstillinger'}
            </h3>
            <p className="text-sm">Denne visningen er en demo.</p>
          </div>
        )}

      </main>

      {/* 4. FOOTER */}
      <footer className="bg-gray-100 border-t border-gray-200 px-6 py-2 text-xs text-gray-500 flex justify-between items-center flex-shrink-0">
        <div>&copy; 2024 Visma Enterprise AS</div>
        <div className="flex gap-4">
          <span>Personvern</span>
          <span>Informasjonskapsler</span>
        </div>
      </footer>
    </div>
  );
}
