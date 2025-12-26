'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  Bell, 
  User, 
  Calendar, 
  Clock, 
  Home, 
  Settings, 
  Smartphone,
  CalendarDays,
  CalendarCheck,
  CalendarPlus,
  Phone,
  Wallet,
  FileText,
  BookOpen,
  X,
  ChevronRight
} from 'lucide-react';

// Menu items based on GatGo menu from PDF (SideNr7)
const gatgoMenuItems = [
  { id: 'alle-vakter', label: 'Alle vakter', icon: CalendarDays, description: 'Oversikt over egne vakter og godkjent fravær' },
  { id: 'mine-vakter', label: 'Mine vakter', icon: CalendarCheck, description: 'Dine planlagte vakter' },
  { id: 'ledige-vakter', label: 'Ledige vakter', icon: CalendarPlus, description: 'Ledige vakter på avdelingen' },
  { id: 'tilgjengelighet', label: 'Tilgjengelighet', icon: Calendar, description: 'Angi din tilgjengelighet' },
  { id: 'telefonliste', label: 'Telefonliste', icon: Phone, description: 'Kontaktinformasjon' },
  { id: 'banker', label: 'Banker', icon: Wallet, description: 'Dine timebanker og saldoer' },
  { id: 'timeliste', label: 'Timeliste', icon: FileText, description: 'Registrerte timer' },
  { id: 'vaktbok', label: 'Vaktbok', icon: BookOpen, description: 'Avdelingens vaktbok' },
  { id: 'innstillinger', label: 'Innstillinger', icon: Settings, description: 'App-innstillinger' },
];

interface MinGatInterfaceProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function MinGatInterface({ highlightedElement, onElementClick }: MinGatInterfaceProps) {
  const [activeTab, setActiveTab] = useState('home');
  const [showQR, setShowQR] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const handleMenuItemClick = (itemId: string) => {
    setSelectedMenuItem(itemId);
    setMenuOpen(false);
    onElementClick?.(itemId);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    onElementClick?.('menu');
  };

  // Check if an element should be highlighted
  const isHighlighted = (elementId: string) => highlightedElement === elementId;

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col font-sans text-sm select-none pointer-events-auto cursor-default relative overflow-hidden">
      {/* Menu Overlay */}
      {menuOpen && (
        <div 
          className="absolute inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-out Menu (GatGo style based on PDF) */}
      <div 
        className={`absolute top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header with GatGo branding */}
        <div className="h-16 bg-[#0088cc] text-white flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0088cc]" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="font-bold text-lg">GatGo</span>
          </div>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items - Matching PDF structure */}
        <div className="py-2 overflow-y-auto h-[calc(100%-4rem)]">
          {gatgoMenuItems.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedMenuItem === item.id;
            const shouldHighlight = isHighlighted(item.id);
            
            return (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`w-full px-4 py-3.5 flex items-center gap-4 transition-all duration-200 border-b border-gray-100 ${
                  isSelected 
                    ? 'bg-blue-50 text-[#0088cc]' 
                    : 'text-gray-700 hover:bg-gray-50'
                } ${
                  shouldHighlight 
                    ? 'ring-2 ring-yellow-400 ring-inset bg-yellow-50' 
                    : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-[#0088cc]/10' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-[#0088cc]' : 'text-gray-500'}`} />
                </div>
                <span className={`flex-1 text-left ${isSelected ? 'font-semibold' : 'font-medium'}`}>
                  {item.label}
                </span>
                <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#0088cc]' : 'text-gray-300'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* App Header */}
      <div className="h-12 bg-[#005077] text-white flex items-center justify-between px-4 shadow-md flex-shrink-0 z-30">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleMenuToggle}
            className={`p-1.5 rounded transition-all duration-200 ${
              isHighlighted('menu') 
                ? 'ring-2 ring-yellow-400 ring-offset-1 ring-offset-[#005077] bg-yellow-400/20 animate-pulse' 
                : 'hover:bg-white/10'
            }`}
            title="Klikk for å åpne menyen"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold text-lg tracking-tight">MinGat</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-2 py-1 rounded">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Navn Navnesen</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
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

      {/* Content Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === 'home' && !selectedMenuItem && (
          <div className="grid grid-cols-1 gap-4">
            {/* Messages Widget */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-2 border-b pb-2">Meldinger</h3>
              <p className="text-gray-500 italic text-sm">Ingen nye meldinger</p>
            </div>

            {/* Next Shift Widget */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-2 border-b pb-2">Neste vakt</h3>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">DAG</div>
                <div>
                  <p className="font-medium">Mandag 12.02</p>
                  <p className="text-gray-600 text-sm">08:00 - 15:30</p>
                  <p className="text-gray-500 text-xs">Avdeling A</p>
                </div>
              </div>
            </div>

            {/* Mobile App Widget */}
            <div
              className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all ${
                isHighlighted('mobile-app') ? 'ring-2 ring-yellow-400 bg-yellow-50' : ''
              }`}
              onClick={() => setShowQR(!showQR)}
            >
              <h3 className="font-bold text-gray-700 mb-2 border-b pb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Mobil app
              </h3>
              {showQR ? (
                <div className="text-center animate-in fade-in zoom-in duration-200">
                  <div className="bg-gray-800 w-28 h-28 mx-auto mb-2 rounded-lg flex items-center justify-center text-white text-xs">
                    [QR KODE]
                  </div>
                  <p className="text-xs text-gray-600">Skann for å koble til GatGo</p>
                  <button className="mt-2 text-blue-600 text-xs hover:underline">Avbryt</button>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-2">GatGo er ikke satt opp.</p>
                  <button className="w-full bg-[#005077] text-white py-2 px-3 rounded text-sm hover:bg-[#003d5c] transition-colors">
                    Vis oppsettkode
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Selected Menu Item Content */}
        {selectedMenuItem && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <button 
                onClick={() => setSelectedMenuItem(null)}
                className="text-blue-600 hover:underline text-sm"
              >
                ← Tilbake
              </button>
            </div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">
              {gatgoMenuItems.find(i => i.id === selectedMenuItem)?.label}
            </h3>
            <p className="text-gray-600 mb-4">
              {gatgoMenuItems.find(i => i.id === selectedMenuItem)?.description}
            </p>
            
            {/* Alle vakter - All shifts view */}
            {selectedMenuItem === 'alle-vakter' && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 mb-3">
                  Du kan bla én måned bakover og ett år fremover i tid.
                </div>
                <div className="bg-gray-50 p-3 rounded border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-600 font-medium">I dag - 26. des</span>
                    <div className="flex gap-2">
                      <button className="p-1 bg-white rounded border text-xs" title="Kalendervisning">📅</button>
                      <button className="p-1 bg-white rounded border text-xs" title="Dagsvisning">📆</button>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between py-1 border-b">
                      <span>Man 23.12</span>
                      <span className="text-green-600">Dag 08:00-15:30</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span>Tir 24.12</span>
                      <span className="text-red-600">Ferie</span>
                    </div>
                    <div className="flex justify-between py-1 border-b bg-blue-50">
                      <span className="text-blue-600 font-medium">Tor 26.12 (i dag)</span>
                      <span className="text-gray-400">Fri</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-red-600">Søn 29.12</span>
                      <span className="text-gray-400">Fri</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span>Man 30.12</span>
                      <span className="text-green-600">Dag 08:00-15:30</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mine vakter - My shifts */}
            {selectedMenuItem === 'mine-vakter' && (
              <div className="space-y-3">
                <div className="flex gap-2 mb-3">
                  <button className="px-3 py-1.5 bg-[#0088cc] text-white rounded text-xs font-medium">Kommende</button>
                  <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded text-xs">Tidligere</button>
                </div>
                <div className="space-y-2">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">DAG</span>
                        <p className="font-medium mt-1">Mandag 30. desember</p>
                        <p className="text-sm text-gray-600">08:00 - 15:30</p>
                      </div>
                      <span className="text-xs text-gray-500">7.5 t</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Avdeling A • Post 1</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">KVELD</span>
                        <p className="font-medium mt-1">Tirsdag 31. desember</p>
                        <p className="text-sm text-gray-600">15:00 - 22:30</p>
                      </div>
                      <span className="text-xs text-gray-500">7.5 t</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Avdeling A • Post 1</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">DAG</span>
                        <p className="font-medium mt-1">Torsdag 2. januar</p>
                        <p className="text-sm text-gray-600">08:00 - 15:30</p>
                      </div>
                      <span className="text-xs text-gray-500">7.5 t</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Avdeling A • Post 1</p>
                  </div>
                </div>
              </div>
            )}

            {/* Ledige vakter - Available shifts */}
            {selectedMenuItem === 'ledige-vakter' && (
              <div className="space-y-3">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                  <p className="text-yellow-800">💡 Trykk på en vakt for å melde interesse</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-white border border-orange-200 rounded-lg p-3 hover:bg-orange-50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">LEDIG</span>
                        <p className="font-medium mt-1">Fredag 27. desember</p>
                        <p className="text-sm text-gray-600">08:00 - 15:30 (Dag)</p>
                      </div>
                      <button className="text-xs bg-[#0088cc] text-white px-2 py-1 rounded">Ta vakt</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Avdeling B • Post 2</p>
                  </div>
                  <div className="bg-white border border-orange-200 rounded-lg p-3 hover:bg-orange-50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">LEDIG</span>
                        <p className="font-medium mt-1">Lørdag 28. desember</p>
                        <p className="text-sm text-gray-600">15:00 - 22:30 (Kveld)</p>
                      </div>
                      <button className="text-xs bg-[#0088cc] text-white px-2 py-1 rounded">Ta vakt</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Avdeling A • Post 1</p>
                  </div>
                  <div className="bg-white border border-purple-200 rounded-lg p-3 hover:bg-purple-50 cursor-pointer transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">NATT</span>
                        <p className="font-medium mt-1">Søndag 29. desember</p>
                        <p className="text-sm text-gray-600">22:00 - 07:30</p>
                      </div>
                      <button className="text-xs bg-[#0088cc] text-white px-2 py-1 rounded">Ta vakt</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Avdeling A • Post 3</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tilgjengelighet - Availability */}
            {selectedMenuItem === 'tilgjengelighet' && (
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                  <p className="text-blue-800">📅 Angi når du kan jobbe ekstra</p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-gray-700 text-sm">Uke 1, 2025</div>
                  {['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'].map((day, i) => (
                    <div key={day} className="flex items-center justify-between bg-gray-50 p-2 rounded border">
                      <span className="text-sm w-12">{day}</span>
                      <div className="flex gap-1">
                        <button className={`px-2 py-1 text-xs rounded ${i < 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>Dag</button>
                        <button className={`px-2 py-1 text-xs rounded ${i === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>Kveld</button>
                        <button className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-600">Natt</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-[#0088cc] text-white py-2 rounded text-sm font-medium">
                  Lagre tilgjengelighet
                </button>
              </div>
            )}

            {/* Telefonliste - Contact list */}
            {selectedMenuItem === 'telefonliste' && (
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Søk etter navn..." 
                  className="w-full p-2 border rounded text-sm mb-3"
                />
                <div className="space-y-1">
                  {[
                    { name: 'Hansen, Anne Marie', role: 'Sykepleier', phone: '912 34 567' },
                    { name: 'Johansen, Per', role: 'Hjelpepleier', phone: '923 45 678' },
                    { name: 'Larsen, Kari', role: 'Avdelingsleder', phone: '934 56 789' },
                    { name: 'Nilsen, Ole', role: 'Sykepleier', phone: '945 67 890' },
                    { name: 'Olsen, Eva', role: 'Hjelpepleier', phone: '956 78 901' },
                  ].map((contact) => (
                    <div key={contact.name} className="flex items-center justify-between bg-gray-50 p-2.5 rounded border hover:bg-gray-100 cursor-pointer">
                      <div>
                        <p className="font-medium text-sm">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.role}</p>
                      </div>
                      <a href={`tel:${contact.phone}`} className="text-[#0088cc] text-sm flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Banker - Time banks */}
            {selectedMenuItem === 'banker' && (
              <div className="space-y-3">
                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Timebank</span>
                    <span className="text-green-600 font-bold">+12.5 t</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Maks: 50 timer</p>
                </div>
                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Fleksitid</span>
                    <span className="text-blue-600 font-bold">+3.25 t</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '32%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Maks: 10 timer</p>
                </div>
                <div className="bg-white border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Feriedager</span>
                    <span className="text-purple-600 font-bold">18 dager</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Brukt: 7 av 25 dager</p>
                </div>
              </div>
            )}

            {/* Timeliste - Hour list */}
            {selectedMenuItem === 'timeliste' && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">Desember 2025</span>
                  <div className="flex gap-1">
                    <button className="p-1 bg-gray-100 rounded text-xs">◀</button>
                    <button className="p-1 bg-gray-100 rounded text-xs">▶</button>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded border">
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-white p-2 rounded border">
                      <p className="text-gray-500 text-xs">Planlagt</p>
                      <p className="font-bold text-lg">142.5</p>
                      <p className="text-xs text-gray-400">timer</p>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <p className="text-gray-500 text-xs">Jobbet</p>
                      <p className="font-bold text-lg text-green-600">127.0</p>
                      <p className="text-xs text-gray-400">timer</p>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <p className="text-gray-500 text-xs">Differanse</p>
                      <p className="font-bold text-lg text-red-600">-15.5</p>
                      <p className="text-xs text-gray-400">timer</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span>23. des (Man)</span>
                    <span className="text-green-600">7.5 t ✓</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>24. des (Tir)</span>
                    <span className="text-orange-500">Ferie</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>25. des (Ons)</span>
                    <span className="text-red-500">Helligdag</span>
                  </div>
                </div>
              </div>
            )}

            {/* Vaktbok - Shift book */}
            {selectedMenuItem === 'vaktbok' && (
              <div className="space-y-3">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                  <p className="text-amber-800">📖 Avdelingens felles loggbok</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-white border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm">26. des - Dagvakt</span>
                      <span className="text-xs text-gray-400">09:45</span>
                    </div>
                    <p className="text-sm text-gray-700">Pasient rom 204 skal til røntgen kl 11:00. Fastende.</p>
                    <p className="text-xs text-gray-500 mt-2">- Anne Hansen</p>
                  </div>
                  <div className="bg-white border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm">25. des - Kveldsvakt</span>
                      <span className="text-xs text-gray-400">22:15</span>
                    </div>
                    <p className="text-sm text-gray-700">Ny pasient innlagt rom 210. Se journal for detaljer.</p>
                    <p className="text-xs text-gray-500 mt-2">- Per Johansen</p>
                  </div>
                  <div className="bg-white border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm">25. des - Dagvakt</span>
                      <span className="text-xs text-gray-400">14:30</span>
                    </div>
                    <p className="text-sm text-gray-700">Medisinskap etterfylt. Mangler Paracet 500mg - bestilt.</p>
                    <p className="text-xs text-gray-500 mt-2">- Kari Larsen</p>
                  </div>
                </div>
                <button className="w-full bg-[#0088cc] text-white py-2 rounded text-sm font-medium">
                  + Ny innføring
                </button>
              </div>
            )}

            {/* Innstillinger - Settings */}
            {selectedMenuItem === 'innstillinger' && (
              <div className="space-y-3">
                <div className="bg-white border rounded-lg divide-y">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">Push-varsler</p>
                      <p className="text-xs text-gray-500">Få beskjed om nye vakter</p>
                    </div>
                    <div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer">
                      <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">E-postvarsler</p>
                      <p className="text-xs text-gray-500">Ukentlig oppsummering</p>
                    </div>
                    <div className="w-10 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">Mørk modus</p>
                      <p className="text-xs text-gray-500">Nattmodus for skjermen</p>
                    </div>
                    <div className="w-10 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border rounded-lg p-3">
                  <p className="font-medium text-sm mb-2">Språk</p>
                  <select className="w-full p-2 border rounded text-sm">
                    <option>Norsk (Bokmål)</option>
                    <option>Norsk (Nynorsk)</option>
                    <option>English</option>
                  </select>
                </div>
                <div className="bg-white border rounded-lg p-3">
                  <p className="font-medium text-sm mb-1">Versjon</p>
                  <p className="text-sm text-gray-500">GatGo v2024.1.0</p>
                </div>
                <button className="w-full bg-red-500 text-white py-2 rounded text-sm font-medium">
                  Logg ut
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'calendar' && !selectedMenuItem && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Kalendervisning (Demo)</p>
          </div>
        )}

        {activeTab === 'hours' && !selectedMenuItem && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-gray-500">
            <Clock className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>Timeliste (Demo)</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-200 p-2 text-center text-xs text-gray-500 flex-shrink-0">
        MinGat v.2024.1.0 (Demo Mode)
      </div>
    </div>
  );
}