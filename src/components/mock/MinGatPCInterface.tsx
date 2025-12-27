'use client';

import React, { useState } from 'react';
import { 
  Home, Calendar, BookOpen, ClipboardList, List, Clock, 
  Building2, MessageSquare, Award, Users, FileText, Folder,
  Menu, HelpCircle, Bell, User, MapPin, ChevronDown, ChevronRight,
  Plus, X, CheckCircle, XCircle, AlertCircle, Phone, Search
} from 'lucide-react';

interface MinGatPCInterfaceProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
  currentSection?: string;
  onElementClick?: (elementId: string) => void;
  highlightedElement?: string;
}

export const MinGatPCInterface: React.FC<MinGatPCInterfaceProps> = ({ 
  className = '',
  onNavigate,
  currentSection: externalSection,
  onElementClick,
  highlightedElement
}) => {
  const [internalSection, setInternalSection] = useState<string>('home');
  
  // Use external section if provided, otherwise use internal
  const currentSection = externalSection || internalSection;
  
  const handleSectionChange = (sectionId: string) => {
    setInternalSection(sectionId);
    onNavigate?.(sectionId);
    onElementClick?.(sectionId);
  };
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  return (
    <div className={`flex flex-col h-full bg-gray-50 ${className}`} id="mcp-mingat-pc-root">
      {/* Top Horizontal Menu Bar */}
      <header 
        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 flex items-center justify-between shadow-md"
        id="mcp-mingat-header"
      >
        <div className="flex items-center gap-4">
          {/* Logo/Home */}
          <button 
            onClick={() => handleSectionChange('home')}
            className="flex items-center gap-2 hover:bg-red-700/50 px-3 py-2 rounded transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold text-lg" id="mcp-mingat-logo">MinGat</span>
          </button>

          {/* Dropdown Menu */}
          <button 
            className="flex items-center gap-2 hover:bg-red-700/50 px-3 py-2 rounded"
            id="mcp-mingat-main-menu"
          >
            <Menu className="w-5 h-5" />
            <span>Meny</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Version */}
          <span className="text-sm opacity-90" id="mcp-mingat-version">v 6.0.1.23929</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Department/Level Selector */}
          <button 
            className="flex items-center gap-2 hover:bg-red-700/50 px-3 py-2 rounded"
            id="mcp-mingat-department"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">130302 - Seksjon for ressursstyring</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* User Name */}
          <button 
            className="flex items-center gap-2 hover:bg-red-700/50 px-3 py-2 rounded"
            id="mcp-mingat-user"
          >
            <User className="w-4 h-4" />
            <span className="text-sm">Gunhild Horvli (test) (GUHV)</span>
          </button>

          {/* Help */}
          <button 
            className="hover:bg-red-700/50 p-2 rounded"
            id="mcp-mingat-help-button"
          >
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Vertical Sidebar */}
        <aside 
          className="w-16 bg-gray-700 text-white flex flex-col items-center py-4 gap-2"
          id="mcp-mingat-sidebar"
        >
          <SidebarIcon 
            icon={<Home />} 
            label="Startsiden" 
            active={currentSection === 'home'} 
            id="mcp-sidebar-home"
            onClick={() => handleSectionChange('home')}
          />
          <SidebarIcon 
            icon={<Calendar />} 
            label="Min kalender" 
            active={currentSection === 'calendar'}
            id="mcp-sidebar-calendar"
            onClick={() => handleSectionChange('calendar')}
          />
          <SidebarIcon 
            icon={<BookOpen />} 
            label="Vaktbok" 
            active={currentSection === 'vaktbok'}
            id="mcp-sidebar-vaktbok"
            onClick={() => handleSectionChange('vaktbok')}
          />
          <SidebarIcon 
            icon={<ClipboardList />} 
            label="Oppgaver" 
            active={currentSection === 'oppgaver'}
            id="mcp-sidebar-oppgaver"
            onClick={() => handleSectionChange('oppgaver')}
          />
          <SidebarIcon 
            icon={<List />} 
            label="Ukeliste" 
            active={currentSection === 'ukeliste'}
            id="mcp-sidebar-ukeliste"
            onClick={() => handleSectionChange('ukeliste')}
          />
          <SidebarIcon 
            icon={<Clock />} 
            label="Fleksitid" 
            active={currentSection === 'fleksitid'}
            id="mcp-sidebar-fleksitid"
            onClick={() => handleSectionChange('fleksitid')}
          />
          <SidebarIcon 
            icon={<Building2 />} 
            label="Mine banker" 
            active={currentSection === 'banker'}
            id="mcp-sidebar-banker"
            onClick={() => handleSectionChange('banker')}
          />
          <SidebarIcon 
            icon={<MessageSquare />} 
            label="Forespørsler" 
            badge={3} 
            active={currentSection === 'foresporsler'}
            id="mcp-sidebar-foresporsler"
            onClick={() => handleSectionChange('foresporsler')}
          />
          <SidebarIcon 
            icon={<Award />} 
            label="Kompetanse" 
            active={currentSection === 'kompetanse'}
            id="mcp-sidebar-kompetanse"
            onClick={() => handleSectionChange('kompetanse')}
          />
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-white" id="mcp-mingat-main-content">
          {currentSection === 'home' && <HomeSection onNavigate={handleSectionChange} isHighlighted={isHighlighted} />}
          {currentSection === 'calendar' && <CalendarSection isHighlighted={isHighlighted} />}
          {currentSection === 'vaktbok' && <VaktbokSection isHighlighted={isHighlighted} />}
          {currentSection === 'fleksitid' && <FleksitidSection isHighlighted={isHighlighted} />}
          {currentSection === 'foresporsler' && <ForesporslerSection isHighlighted={isHighlighted} />}
          {currentSection === 'jatakk' && <JatakkSection isHighlighted={isHighlighted} />}
          {currentSection === 'telefonliste' && <TelefonlisteSection isHighlighted={isHighlighted} />}
          {currentSection === 'paminnelser' && <PaminnelserSection isHighlighted={isHighlighted} />}
        </main>
      </div>
    </div>
  );
};

// ============================================================================
// SECTIONS
// ============================================================================

const HomeSection = ({ onNavigate, isHighlighted }: { onNavigate: (id: string) => void, isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800" id="mcp-mingat-page-title">Startsiden</h1>
    </div>

    <div className="p-6 grid grid-cols-3 gap-4" id="mcp-mingat-dashboard-grid">
      {/* Widget: I dag og i morgen */}
      <DashboardWidget
        title="I dag og i morgen"
        id="mcp-widget-today-tomorrow"
        footerLink="GÅ TIL KALENDER"
        onFooterClick={() => onNavigate('calendar')}
        isHighlighted={isHighlighted('widget-today')}
      >
        <div className="space-y-2">
          <ShiftCard
            date="JUL 4"
            day="Fredag"
            type="Vakt / oppgave"
            time="DH"
            period="07:30-15:00 - 130302 - 130302"
            variant="green"
          />
          <div className="text-sm text-gray-600 py-2">Du har ingen vakter eller oppgaver i morgen!</div>
        </div>
      </DashboardWidget>

      {/* Widget: Påminnelser */}
      <DashboardWidget
        title="Påminnelser"
        badge={4}
        id="mcp-widget-reminders"
        footerLink="GÅ TIL PÅMINNELSER"
        onFooterClick={() => onNavigate('paminnelser')}
        isHighlighted={isHighlighted('widget-reminders')}
      >
        <div className="text-sm text-gray-600">
          Viser ulike viktige meldinger her viser meldinger som er lagt ut av systemansvarlig. Viktig at du alltid leser disse!
        </div>
      </DashboardWidget>

      {/* Widget: Uleste forespørsler */}
      <DashboardWidget
        title="Uleste forespørsler"
        id="mcp-widget-unread-requests"
        footerLink="GÅ TIL FORESPØRSLER"
        onFooterClick={() => onNavigate('foresporsler')}
        isHighlighted={isHighlighted('widget-requests')}
      >
        <div className="text-sm text-gray-600">
          Du har ingen uleste forespørsler!
        </div>
      </DashboardWidget>

      {/* Widget: Fleksitid */}
      <DashboardWidget
        title="Fleksitid"
        id="mcp-widget-flextime"
        footerLink="GÅ TIL FLEKSITID"
        onFooterClick={() => onNavigate('fleksitid')}
        isHighlighted={isHighlighted('widget-flextime')}
      >
        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-4xl font-bold text-gray-800" id="mcp-flextime-clock">08:13</div>
          <div className="text-xs text-gray-500 mt-1">SALDO: -257.52M</div>
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
              Inn
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400 transition-colors">
              Ut
            </button>
          </div>
        </div>
      </DashboardWidget>

      {/* Widget: På jobb i dag */}
      <DashboardWidget
        title="På jobb i dag"
        id="mcp-widget-on-duty"
        footerLink="GÅ TIL VAKTBOK"
        onFooterClick={() => onNavigate('vaktbok')}
        isHighlighted={isHighlighted('widget-vaktbok')}
      >
        <div className="space-y-1 text-sm">
          <div className="flex justify-between border-b pb-1">
            <span className="font-semibold">Navn</span>
            <span className="font-semibold">Vakt</span>
          </div>
          <div className="flex justify-between py-1 hover:bg-gray-50">
            <span>A.Test (Herslt), Ea...</span>
            <span className="text-gray-600">D (07:30-15:00)</span>
          </div>
          <div className="flex justify-between py-1 hover:bg-gray-50">
            <span>Falker (Herslt), Ella...</span>
            <span className="text-gray-600">D (07:30-15:00)</span>
          </div>
          <div className="flex justify-between py-1 hover:bg-gray-50">
            <span>Mikkela (Herslt), Gea...</span>
            <span className="text-gray-600">D (07:30-15:00)</span>
          </div>
        </div>
      </DashboardWidget>

      {/* Widget: Ledige vakter */}
      <DashboardWidget
        title="Ledige vakter"
        id="mcp-widget-available-shifts"
        footerLink="GÅ TIL JATAKK"
        onFooterClick={() => onNavigate('jatakk')}
        isHighlighted={isHighlighted('widget-jatakk')}
      >
        <div className="text-sm text-gray-600">
          <div className="font-semibold mb-2">11672</div>
          <div className="text-xs">Ledige vikarvakter til søknadsfrist til nå</div>
          <div className="mt-2 text-xs">
            <div>146338 - Felles informasjon</div>
            <div className="text-gray-500">2 ledige vakter</div>
          </div>
        </div>
      </DashboardWidget>

      {/* Widget: Telefonliste */}
      <DashboardWidget
        title="Telefonliste"
        id="mcp-widget-phone-list"
        footerLink="GÅ TIL NAVNELISTE"
        onFooterClick={() => onNavigate('telefonliste')}
        isHighlighted={isHighlighted('widget-phone')}
      >
        <div className="space-y-1 text-sm">
          <div className="flex justify-between border-b pb-1">
            <span className="font-semibold">Navn</span>
            <span className="font-semibold">Telefon</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Bekkeli (Herslt), Gra...</span>
            <span className="text-gray-600">97513429</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Falker (Herslt), Ella...</span>
            <span className="text-gray-600">94435811</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Haugland (Herslt)</span>
            <span className="text-gray-600">51513408</span>
          </div>
        </div>
      </DashboardWidget>
    </div>
  </>
);

const CalendarSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800">Min kalender</h1>
    </div>
    <div className="p-6">
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 hover:bg-gray-100 rounded">&lt;</button>
          <h2 className="text-lg font-semibold">Desember 2024</h2>
          <button className="p-2 hover:bg-gray-100 rounded">&gt;</button>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'].map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 p-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
            <div
              key={day}
              className={`text-center p-3 border rounded cursor-pointer hover:bg-blue-50 ${
                day === 4 ? 'bg-green-100 border-green-400 font-semibold' : 'bg-white'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Today's shifts */}
        <div className="mt-6 space-y-2">
          <h3 className="font-semibold mb-3">Vakter 4. desember:</h3>
          <ShiftCard
            date="DES 4"
            day="Fredag"
            type="Dagvakt"
            time="DH"
            period="07:30-15:00"
            variant="green"
          />
        </div>
      </div>
    </div>
  </>
);

const VaktbokSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800">Vaktbok</h1>
    </div>
    <div className="p-6">
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Navn</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Vakt</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tid</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Avdeling</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">A.Test (Herslt), Ea...</td>
              <td className="px-4 py-3 text-sm">D</td>
              <td className="px-4 py-3 text-sm">07:30-15:00</td>
              <td className="px-4 py-3 text-sm">130302</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">Falker (Herslt), Ella...</td>
              <td className="px-4 py-3 text-sm">D</td>
              <td className="px-4 py-3 text-sm">07:30-15:00</td>
              <td className="px-4 py-3 text-sm">130302</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">Mikkela (Herslt), Gea...</td>
              <td className="px-4 py-3 text-sm">D</td>
              <td className="px-4 py-3 text-sm">07:30-15:00</td>
              <td className="px-4 py-3 text-sm">130302</td>
            </tr>
            <tr className="bg-green-50 hover:bg-green-100">
              <td className="px-4 py-3 text-sm font-semibold">Gunhild Horvli (test)</td>
              <td className="px-4 py-3 text-sm">DH</td>
              <td className="px-4 py-3 text-sm">07:30-15:00</td>
              <td className="px-4 py-3 text-sm">130302</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
);

const FleksitidSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800">Min fleksitid</h1>
    </div>
    <div className="p-6 space-y-6">
      {/* Clock widget */}
      <div className="bg-white border rounded-lg p-6">
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-gray-800 mb-2">08:13</div>
          <div className="text-sm text-gray-500 mb-6">SALDO: -257.52 minutter</div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Stemple Inn
            </button>
            <button className="px-8 py-3 bg-red-600 text-white text-lg rounded-lg hover:bg-red-700 transition-colors font-semibold">
              Stemple Ut
            </button>
          </div>
        </div>
      </div>

      {/* Recent stamps */}
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Siste stemplinger</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <div>
              <div className="font-medium">4. desember 2024</div>
              <div className="text-sm text-gray-600">Inn: 07:28 | Ut: 15:02</div>
            </div>
            <div className="text-sm text-gray-600">7t 34m</div>
          </div>
          <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
            <div>
              <div className="font-medium">3. desember 2024</div>
              <div className="text-sm text-gray-600">Inn: 07:31 | Ut: 15:05</div>
            </div>
            <div className="text-sm text-gray-600">7t 34m</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ForesporslerSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Mine forespørsler</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Ny forespørsel
      </button>
    </div>
    <div className="p-6 space-y-3">
      <RequestCard
        type="Fravær"
        date="5-6. desember 2024"
        status="approved"
        reason="Ferie"
      />
      <RequestCard
        type="Merarbeid"
        date="3. desember 2024"
        status="pending"
        reason="Overtid 2 timer"
      />
      <RequestCard
        type="Vaktbytte"
        date="8. desember 2024"
        status="rejected"
        reason="Bytte med kollega"
      />
    </div>
  </>
);

const PaminnelserSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        Påminnelser
        <span className="bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">4</span>
      </h1>
    </div>
    <div className="p-6 space-y-3">
      <ReminderCard
        type="system"
        title="Viktig informasjon fra IT"
        message="Husk å oppdatere passordet ditt før 31. desember."
        date="I dag"
      />
      <ReminderCard
        type="absence"
        title="Manglende fraværsdokumentasjon"
        message="Du mangler dokumentasjon for fravær 28. november."
        date="I går"
      />
      <ReminderCard
        type="timelist"
        title="Signering av timeliste"
        message="Timeliste for november må signeres."
        date="3 dager siden"
      />
      <ReminderCard
        type="competence"
        title="Kompetanse utløper snart"
        message="Din godkjenning for 'Hjertestarter' utløper om 30 dager."
        date="1 uke siden"
      />
    </div>
  </>
);

const JatakkSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800">Ledige vakter (Ja takk)</h1>
    </div>
    <div className="p-6 space-y-3">
      <AvailableShiftCard
        date="10. desember 2024"
        shift="Dagvakt"
        time="07:30-15:00"
        department="130302 - Seksjon for ressursstyring"
        deadline="8. desember 14:00"
      />
      <AvailableShiftCard
        date="12. desember 2024"
        shift="Kveldsvakt"
        time="15:00-22:30"
        department="130302 - Seksjon for ressursstyring"
        deadline="10. desember 14:00"
      />
      <AvailableShiftCard
        date="15. desember 2024"
        shift="Dagvakt"
        time="07:30-15:00"
        department="146338 - Felles informasjon"
        deadline="13. desember 14:00"
      />
    </div>
  </>
);

const TelefonlisteSection = ({ isHighlighted }: { isHighlighted: (id: string) => boolean }) => (
  <>
    <div className="bg-gray-100 border-b px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-800">Navneliste / Telefonliste</h1>
    </div>
    <div className="p-6">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Søk etter navn eller telefonnummer..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Navn</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Stilling</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Telefon</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">E-post</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">Bekkeli (Herslt), Gra...</td>
              <td className="px-4 py-3 text-sm">Sykepleier</td>
              <td className="px-4 py-3 text-sm">97513429</td>
              <td className="px-4 py-3 text-sm text-blue-600">g.bekkeli@sykehus.no</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">Falker (Herslt), Ella...</td>
              <td className="px-4 py-3 text-sm">Lege</td>
              <td className="px-4 py-3 text-sm">94435811</td>
              <td className="px-4 py-3 text-sm text-blue-600">e.falker@sykehus.no</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm">Haugland (Herslt)</td>
              <td className="px-4 py-3 text-sm">Hjelpepleier</td>
              <td className="px-4 py-3 text-sm">51513408</td>
              <td className="px-4 py-3 text-sm text-blue-600">haugland@sykehus.no</td>
            </tr>
            <tr className="bg-green-50 hover:bg-green-100">
              <td className="px-4 py-3 text-sm font-semibold">Gunhild Horvli (test)</td>
              <td className="px-4 py-3 text-sm">Administrator</td>
              <td className="px-4 py-3 text-sm">98765432</td>
              <td className="px-4 py-3 text-sm text-blue-600">g.horvli@sykehus.no</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
);

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  id?: string;
  onClick?: () => void;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, label, active, badge, id, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`relative w-12 h-12 flex items-center justify-center rounded transition-colors ${
        active 
          ? 'bg-gray-600 text-white' 
          : 'text-gray-300 hover:bg-gray-600 hover:text-white'
      }`}
      title={label}
    >
      {icon}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

interface DashboardWidgetProps {
  title: string;
  children: React.ReactNode;
  footerLink?: string;
  onFooterClick?: () => void;
  badge?: number;
  id?: string;
  isHighlighted?: boolean;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ 
  title, 
  children, 
  footerLink,
  onFooterClick,
  badge,
  id,
  isHighlighted
}) => {
  return (
    <div 
      id={id}
      className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all ${
        isHighlighted ? 'ring-2 ring-blue-400 ring-offset-2' : ''
      }`}
    >
      {/* Widget Header */}
      <div className="bg-gray-50 border-b px-4 py-2 flex items-center justify-between">
        <h3 className="font-semibold text-gray-700 text-sm">{title}</h3>
        {badge && (
          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>

      {/* Widget Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Widget Footer */}
      {footerLink && (
        <div className="border-t bg-gray-50 px-4 py-2">
          <button 
            onClick={onFooterClick}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors"
          >
            <span>{footerLink}</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};

interface ShiftCardProps {
  date: string;
  day: string;
  type: string;
  time: string;
  period: string;
  variant?: 'green' | 'blue' | 'default';
}

const ShiftCard: React.FC<ShiftCardProps> = ({ 
  date, 
  day, 
  type, 
  time, 
  period, 
  variant = 'default' 
}) => {
  const bgColor = {
    green: 'bg-green-100 border-green-300',
    blue: 'bg-blue-100 border-blue-300',
    default: 'bg-gray-100 border-gray-300'
  }[variant];

  return (
    <div className={`border rounded p-3 ${bgColor}`}>
      <div className="flex items-start gap-3">
        <div className="text-center">
          <div className="text-red-600 text-xs font-semibold">{date.split(' ')[0]}</div>
          <div className="text-2xl font-bold text-red-600">{date.split(' ')[1]}</div>
          <div className="text-xs text-gray-600">{day}</div>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-800">{type}</div>
          <div className="text-sm text-gray-600">{time}</div>
          <div className="text-xs text-gray-500 mt-1">{period}</div>
        </div>
      </div>
    </div>
  );
};

const RequestCard = ({ type, date, status, reason }: { 
  type: string; 
  date: string; 
  status: 'approved' | 'pending' | 'rejected';
  reason: string;
}) => {
  const statusConfig = {
    approved: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50 border-green-200', label: 'Godkjent' },
    pending: { icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', label: 'Under behandling' },
    rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50 border-red-200', label: 'Avslått' }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`border rounded-lg p-4 ${config.bg}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{type}</div>
          <div className="text-sm text-gray-600 mt-1">{date}</div>
          <div className="text-sm text-gray-600">{reason}</div>
        </div>
        <div className={`flex items-center gap-2 ${config.color}`}>
          <Icon className="w-5 h-5" />
          <span className="text-sm font-medium">{config.label}</span>
        </div>
      </div>
    </div>
  );
};

const ReminderCard = ({ type, title, message, date }: {
  type: 'system' | 'absence' | 'timelist' | 'competence';
  title: string;
  message: string;
  date: string;
}) => {
  const typeConfig = {
    system: { bg: 'bg-blue-50 border-blue-200', icon: 'bg-blue-100 text-blue-600' },
    absence: { bg: 'bg-pink-50 border-pink-200', icon: 'bg-pink-100 text-pink-600' },
    timelist: { bg: 'bg-purple-50 border-purple-200', icon: 'bg-purple-100 text-purple-600' },
    competence: { bg: 'bg-orange-50 border-orange-200', icon: 'bg-orange-100 text-orange-600' }
  };

  const config = typeConfig[type];

  return (
    <div className={`border rounded-lg p-4 ${config.bg}`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full ${config.icon} flex items-center justify-center flex-shrink-0`}>
          <Bell className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{title}</div>
          <div className="text-sm text-gray-600 mt-1">{message}</div>
          <div className="text-xs text-gray-500 mt-2">{date}</div>
        </div>
      </div>
    </div>
  );
};

const AvailableShiftCard = ({ date, shift, time, department, deadline }: {
  date: string;
  shift: string;
  time: string;
  department: string;
  deadline: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all bg-white">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-semibold text-gray-800 mb-1">{date} - {shift}</div>
          <div className="text-sm text-gray-600">{time}</div>
          <div className="text-sm text-gray-600">{department}</div>
          <div className="text-xs text-red-600 mt-2">Søknadsfrist: {deadline}</div>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors font-medium">
          Søk på vakt
        </button>
      </div>
    </div>
  );
};

export default MinGatPCInterface;