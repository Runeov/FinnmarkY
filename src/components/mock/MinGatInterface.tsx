'use client';

import React, { useState } from 'react';
import { 
  Home, Calendar, MessageSquare, Clock, User, Bell, Menu, X, ChevronRight,
  BookOpen, Users, Phone, CheckSquare, Wallet, FileText, Search, Plus,
  CheckCircle, XCircle, AlertCircle, Download
} from 'lucide-react';

interface MinGatInterfaceProps {
  onNavigate?: (sectionId: string) => void;
  currentSection?: string;
  onElementClick?: (elementId: string) => void;
  highlightedElement?: string;
}

export function MinGatInterface({ 
  onNavigate, 
  currentSection: externalSection,
  onElementClick,
  highlightedElement
}: MinGatInterfaceProps = {}) {
  
  const [internalSection, setInternalSection] = useState<string>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Use external section if provided, otherwise use internal
  const currentSection = externalSection || internalSection;
  
  // Helper to check if element should be highlighted
  const isHighlighted = (elementId: string) => highlightedElement === elementId;
  
  // Handle menu click
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    onElementClick?.('hamburger-menu');
  };
  
  // Handle navigation click
  const handleNavClick = (sectionId: string, elementId: string) => {
    setInternalSection(sectionId);
    onNavigate?.(sectionId);
    onElementClick?.(elementId);
    setMenuOpen(false);
  };
  
  // Get page title
  const getPageTitle = () => {
    const titles: Record<string, string> = {
      home: 'Startsiden',
      calendar: 'Min Kalender',
      requests: 'Forespørsler',
      flextime: 'Fleksitid',
      profile: 'Min Profil',
      jatakk: 'Ja-takk (Ledige vakter)',
      banker: 'Mine banker',
      timeliste: 'Min timeliste',
      vaktbok: 'Vaktbok',
      telefonliste: 'Telefonliste',
      tilgjengelighet: 'Min tilgjengelighet'
    };
    return titles[currentSection] || 'MinGat';
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
        <h1 className="text-lg font-bold text-gray-900">{getPageTitle()}</h1>
        <div className="w-10"></div>
      </div>

      {/* Slide-out Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bottom-0 z-50 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div 
            className="bg-white w-72 h-full shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 space-y-1">
              <MenuItem
                icon={<Home className="w-5 h-5" />}
                label="Startsiden"
                active={currentSection === 'home'}
                onClick={() => handleNavClick('home', 'menu-home')}
              />
              
              <MenuItem
                icon={<Calendar className="w-5 h-5" />}
                label="Min Kalender"
                active={currentSection === 'calendar'}
                onClick={() => handleNavClick('calendar', 'menu-calendar')}
              />
              
              <MenuItem
                icon={<Bell className="w-5 h-5" />}
                label="Ja-takk (Ledige vakter)"
                active={currentSection === 'jatakk'}
                onClick={() => handleNavClick('jatakk', 'menu-jatakk')}
              />
              
              <MenuItem
                icon={<Wallet className="w-5 h-5" />}
                label="Mine banker"
                active={currentSection === 'banker'}
                onClick={() => handleNavClick('banker', 'menu-banker')}
              />
              
              <MenuItem
                icon={<FileText className="w-5 h-5" />}
                label="Min timeliste"
                active={currentSection === 'timeliste'}
                onClick={() => handleNavClick('timeliste', 'menu-timeliste')}
              />
              
              <MenuItem
                icon={<BookOpen className="w-5 h-5" />}
                label="Vaktbok"
                active={currentSection === 'vaktbok'}
                onClick={() => handleNavClick('vaktbok', 'menu-vaktbok')}
              />
              
              <MenuItem
                icon={<Phone className="w-5 h-5" />}
                label="Telefonliste"
                active={currentSection === 'telefonliste'}
                onClick={() => handleNavClick('telefonliste', 'menu-telefonliste')}
              />
              
              <MenuItem
                icon={<CheckSquare className="w-5 h-5" />}
                label="Min tilgjengelighet"
                active={currentSection === 'tilgjengelighet'}
                onClick={() => handleNavClick('tilgjengelighet', 'menu-tilgjengelighet')}
              />
              
              <MenuItem
                icon={<MessageSquare className="w-5 h-5" />}
                label="Forespørsler"
                active={currentSection === 'requests'}
                onClick={() => handleNavClick('requests', 'menu-requests')}
              />
              
              <MenuItem
                icon={<Clock className="w-5 h-5" />}
                label="Fleksitid"
                active={currentSection === 'flextime'}
                onClick={() => handleNavClick('flextime', 'menu-flextime')}
              />
              
              <MenuItem
                icon={<User className="w-5 h-5" />}
                label="Min Profil"
                active={currentSection === 'profile'}
                onClick={() => handleNavClick('profile', 'menu-profile')}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-white">
        {currentSection === 'home' && <HomeSection onNavigate={handleNavClick} />}
        {currentSection === 'calendar' && <CalendarSection />}
        {currentSection === 'jatakk' && <JatakkSection />}
        {currentSection === 'banker' && <BankerSection />}
        {currentSection === 'timeliste' && <TimelisteSection />}
        {currentSection === 'vaktbok' && <VaktbokSection />}
        {currentSection === 'telefonliste' && <TelefonlisteSection />}
        {currentSection === 'tilgjengelighet' && <TilgjengelighetSection />}
        {currentSection === 'requests' && <RequestsSection />}
        {currentSection === 'flextime' && <FlextimeSection />}
        {currentSection === 'profile' && <ProfileSection />}
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-1 py-2 flex justify-around">
        <NavButton
          icon={<Home className="w-5 h-5" />}
          label="Hjem"
          active={currentSection === 'home'}
          onClick={() => handleNavClick('home', 'nav-home')}
          isHighlighted={isHighlighted('nav-home')}
        />
        <NavButton
          icon={<Calendar className="w-5 h-5" />}
          label="Kalender"
          active={currentSection === 'calendar'}
          onClick={() => handleNavClick('calendar', 'nav-calendar')}
          isHighlighted={isHighlighted('nav-calendar')}
        />
        <NavButton
          icon={<MessageSquare className="w-5 h-5" />}
          label="Forespørsler"
          active={currentSection === 'requests'}
          onClick={() => handleNavClick('requests', 'nav-requests')}
          isHighlighted={isHighlighted('nav-requests')}
        />
        <NavButton
          icon={<Menu className="w-5 h-5" />}
          label="Meny"
          active={false}
          onClick={handleMenuClick}
          isHighlighted={isHighlighted('nav-menu')}
        />
      </nav>
    </div>
  );
}

// ============================================================================
// SECTIONS
// ============================================================================

const HomeSection = ({ onNavigate }: { onNavigate: (id: string, el: string) => void }) => (
  <div className="p-4 space-y-3">
    {/* Today's shift */}
    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
      <div className="text-xs text-gray-600 mb-1">I dag - 4. desember</div>
      <div className="font-semibold text-sm">DH (07:30-15:00)</div>
      <div className="text-xs text-gray-500 mt-1">Kirurgisk avdeling</div>
    </div>

    {/* Tomorrow's shift */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
      <div className="text-xs text-gray-600 mb-1">I morgen - 5. desember</div>
      <div className="font-semibold text-sm">AH (15:00-23:00)</div>
      <div className="text-xs text-gray-500 mt-1">Akuttmottak</div>
    </div>

    {/* Reminders */}
    <button 
      onClick={() => onNavigate('requests', 'home-reminders')}
      className="w-full bg-amber-50 border border-amber-200 rounded-lg p-3 text-left hover:bg-amber-100 transition-colors"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="text-xs text-gray-600">Påminnelser</div>
        <div className="bg-amber-600 text-white text-xs px-2 py-0.5 rounded-full">4</div>
      </div>
      <div className="text-sm font-medium">Nye meldinger</div>
      <div className="text-xs text-gray-600 mt-1">Klikk for å se detaljer</div>
    </button>

    {/* Flextime */}
    <button 
      onClick={() => onNavigate('flextime', 'home-flextime')}
      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
    >
      <div className="text-3xl font-bold text-gray-900">+7:18</div>
      <div className="text-xs text-gray-600 mt-1">Fleksitid saldo</div>
    </button>

    {/* Quick actions grid */}
    <div className="grid grid-cols-2 gap-2">
      <QuickActionCard
        icon={<Bell className="w-5 h-5" />}
        label="Ledige vakter"
        onClick={() => onNavigate('jatakk', 'quick-jatakk')}
      />
      <QuickActionCard
        icon={<Wallet className="w-5 h-5" />}
        label="Mine banker"
        onClick={() => onNavigate('banker', 'quick-banker')}
      />
      <QuickActionCard
        icon={<BookOpen className="w-5 h-5" />}
        label="Vaktbok"
        onClick={() => onNavigate('vaktbok', 'quick-vaktbok')}
      />
      <QuickActionCard
        icon={<Phone className="w-5 h-5" />}
        label="Telefonliste"
        onClick={() => onNavigate('telefonliste', 'quick-phone')}
      />
    </div>
  </div>
);

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState(4);
  
  return (
    <div className="p-4">
      {/* Month selector */}
      <div className="flex items-center justify-between mb-4">
        <button className="p-2 hover:bg-gray-100 rounded">&lt;</button>
        <h2 className="font-semibold">Desember 2024</h2>
        <button className="p-2 hover:bg-gray-100 rounded">&gt;</button>
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map(day => (
          <div key={day} className="text-center text-xs font-semibold text-gray-600 p-1">
            {day}
          </div>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDate(day)}
            className={`text-center p-2 text-sm rounded transition-colors ${
              day === selectedDate
                ? 'bg-blue-600 text-white font-semibold'
                : day === 4
                ? 'bg-green-100 text-green-800 font-semibold'
                : 'hover:bg-gray-100'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Selected day's shifts */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Vakter {selectedDate}. desember:</h3>
        <div className="space-y-2">
          <ShiftCard
            date={`${selectedDate}. desember`}
            shift="Dagvakt"
            time="07:30-15:00"
            department="Kirurgisk avdeling"
            type="approved"
          />
        </div>
      </div>
    </div>
  );
};

const JatakkSection = () => (
  <div className="p-4">
    {/* Search */}
    <div className="mb-4 relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Søk etter ledige vakter..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
      />
    </div>

    {/* Available shifts */}
    <div className="space-y-3">
      <AvailableShift
        date="10. desember"
        shift="Dagvakt"
        time="07:30-15:00"
        department="130302 - Ressursstyring"
        deadline="8. des 14:00"
      />
      <AvailableShift
        date="12. desember"
        shift="Kveldsvakt"
        time="15:00-22:30"
        department="130302 - Ressursstyring"
        deadline="10. des 14:00"
      />
      <AvailableShift
        date="15. desember"
        shift="Nattevakt"
        time="22:30-07:30"
        department="Akuttmottak"
        deadline="13. des 14:00"
      />
    </div>
  </div>
);

const BankerSection = () => (
  <div className="p-4 space-y-3">
    <BankCard
      title="Feriebank"
      balance="23.5 dager"
      details="Opptjent i år: 5.5 dager"
      color="blue"
    />
    <BankCard
      title="Avspasering"
      balance="14.2 timer"
      details="Tilgjengelig nå"
      color="green"
    />
    <BankCard
      title="Vetobank"
      balance="12 poeng"
      details="Brukt: 3 av 15"
      color="purple"
    />
    <BankCard
      title="Kompbank"
      balance="7.5 timer"
      details="Opptjent overtid"
      color="orange"
    />
  </div>
);

const TimelisteSection = () => (
  <div className="p-4">
    <div className="mb-4">
      <h3 className="font-semibold mb-2">November 2024</h3>
      <p className="text-sm text-gray-600">Venter på signering</p>
    </div>

    <div className="space-y-2">
      <TimelistEntry
        date="1. nov"
        shift="DH"
        hours="7.5"
        signed={true}
      />
      <TimelistEntry
        date="2. nov"
        shift="AH"
        hours="7.5"
        signed={true}
      />
      <TimelistEntry
        date="3. nov"
        shift="DH"
        hours="8.0"
        signed={false}
      />
      <TimelistEntry
        date="4. nov"
        shift="Fri"
        hours="-"
        signed={true}
      />
    </div>

    <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
      Signer timeliste
    </button>
  </div>
);

const VaktbokSection = () => (
  <div className="p-4">
    <div className="mb-4">
      <h3 className="font-semibold mb-2">På jobb i dag - 4. desember</h3>
    </div>

    <div className="space-y-2">
      <StaffEntry
        name="A.Test (Herslt)"
        shift="D"
        time="07:30-15:00"
        department="130302"
        isYou={false}
      />
      <StaffEntry
        name="Falker, Ella"
        shift="D"
        time="07:30-15:00"
        department="130302"
        isYou={false}
      />
      <StaffEntry
        name="Gunhild Horvli (test)"
        shift="DH"
        time="07:30-15:00"
        department="130302"
        isYou={true}
      />
      <StaffEntry
        name="Mikkela, Gea"
        shift="D"
        time="07:30-15:00"
        department="130302"
        isYou={false}
      />
    </div>
  </div>
);

const TelefonlisteSection = () => (
  <div className="p-4">
    {/* Search */}
    <div className="mb-4 relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Søk etter navn..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
      />
    </div>

    <div className="space-y-2">
      <ContactEntry
        name="Bekkeli, Gra"
        position="Sykepleier"
        phone="97513429"
        email="g.bekkeli@sykehus.no"
      />
      <ContactEntry
        name="Falker, Ella"
        position="Lege"
        phone="94435811"
        email="e.falker@sykehus.no"
      />
      <ContactEntry
        name="Gunhild Horvli"
        position="Administrator"
        phone="98765432"
        email="g.horvli@sykehus.no"
        isYou={true}
      />
      <ContactEntry
        name="Haugland"
        position="Hjelpepleier"
        phone="51513408"
        email="haugland@sykehus.no"
      />
    </div>
  </div>
);

const TilgjengelighetSection = () => (
  <div className="p-4">
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Registrer din tilgjengelighet</h3>
      <p className="text-sm text-gray-600">
        Marker dagene du er tilgjengelig eller utilgjengelig for ekstravakter
      </p>
    </div>

    {/* Week view */}
    <div className="space-y-2 mb-4">
      <AvailabilityDay date="4. des (i dag)" available={true} />
      <AvailabilityDay date="5. des" available={true} />
      <AvailabilityDay date="6. des" available={false} />
      <AvailabilityDay date="7. des" available={null} />
      <AvailabilityDay date="8. des" available={null} />
    </div>

    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
      + Legg til periode
    </button>
  </div>
);

const RequestsSection = () => (
  <div className="p-4 space-y-3">
    <RequestCard
      type="Ferie"
      date="5-6. desember"
      status="approved"
      reason="Godkjent ferie"
    />
    <RequestCard
      type="Ekstravakt"
      date="15. desember"
      status="pending"
      reason="Venter på godkjenning"
    />
    <RequestCard
      type="Vaktbytte"
      date="20. desember"
      status="rejected"
      reason="Ingen tilgjengelig"
    />

    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
      + Ny forespørsel
    </button>
  </div>
);

const FlextimeSection = () => (
  <div className="p-4">
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
      <button className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold flex flex-col items-center gap-1 transition-colors">
        <Clock className="w-5 h-5" />
        <span className="text-sm">Stemple ut</span>
      </button>
    </div>

    {/* Recent stamps */}
    <div className="space-y-2">
      <div className="text-sm font-semibold text-gray-700">Siste stemplinger - 4. desember</div>
      <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
        <div className="flex justify-between mb-1">
          <span className="text-gray-600">Inn</span>
          <span className="font-medium">07:28</span>
        </div>
        <div className="flex justify-between mb-1">
          <span className="text-gray-600">Ut</span>
          <span className="font-medium">11:00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Inn</span>
          <span className="font-medium">11:30</span>
        </div>
      </div>
    </div>
  </div>
);

const ProfileSection = () => (
  <div className="p-4">
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
      <ProfileDetail label="E-post" value="gunhild.horvli@sykehus.no" />
      <ProfileDetail label="Telefon" value="+47 123 45 678" />
      <ProfileDetail label="Stillingsprosent" value="100%" />
      <ProfileDetail label="Ansiennitet" value="5 år, 3 måneder" />
    </div>
  </div>
);

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const MenuItem = ({ icon, label, active, onClick }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
      active ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'
    }`}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const NavButton = ({ icon, label, active, onClick, isHighlighted }: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  isHighlighted: boolean;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg transition-all ${
      active 
        ? 'text-blue-600 bg-blue-50' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    } ${isHighlighted ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const QuickActionCard = ({ icon, label, onClick }: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors flex flex-col items-center gap-2"
  >
    <div className="text-blue-600">{icon}</div>
    <span className="text-xs font-medium text-gray-700">{label}</span>
  </button>
);

const ShiftCard = ({ date, shift, time, department, type }: {
  date: string;
  shift: string;
  time: string;
  department: string;
  type: 'approved' | 'pending';
}) => {
  const bgColor = type === 'approved' ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200';
  
  return (
    <div className={`border rounded-lg p-3 ${bgColor}`}>
      <div className="text-xs text-gray-600 mb-1">{date}</div>
      <div className="font-semibold text-sm">{shift} ({time})</div>
      <div className="text-xs text-gray-500 mt-1">{department}</div>
    </div>
  );
};

const AvailableShift = ({ date, shift, time, department, deadline }: {
  date: string;
  shift: string;
  time: string;
  department: string;
  deadline: string;
}) => (
  <div className="border border-gray-200 rounded-lg p-3 bg-white">
    <div className="flex justify-between items-start mb-2">
      <div className="flex-1">
        <div className="font-semibold text-sm mb-1">{date} - {shift}</div>
        <div className="text-xs text-gray-600">{time}</div>
        <div className="text-xs text-gray-600">{department}</div>
      </div>
      <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors">
        Søk
      </button>
    </div>
    <div className="text-xs text-red-600">Frist: {deadline}</div>
  </div>
);

const BankCard = ({ title, balance, details, color }: {
  title: string;
  balance: string;
  details: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };
  
  return (
    <div className={`bg-gradient-to-r ${colors[color]} text-white rounded-lg p-4`}>
      <div className="text-sm opacity-90 mb-1">{title}</div>
      <div className="text-2xl font-bold mb-1">{balance}</div>
      <div className="text-xs opacity-80">{details}</div>
    </div>
  );
};

const TimelistEntry = ({ date, shift, hours, signed }: {
  date: string;
  shift: string;
  hours: string;
  signed: boolean;
}) => (
  <div className="bg-gray-50 border border-gray-200 rounded p-3 flex items-center justify-between">
    <div className="flex-1">
      <div className="text-sm font-medium">{date}</div>
      <div className="text-xs text-gray-600">{shift}</div>
    </div>
    <div className="text-sm font-medium mr-4">{hours}t</div>
    {signed ? (
      <CheckCircle className="w-5 h-5 text-green-600" />
    ) : (
      <XCircle className="w-5 h-5 text-gray-400" />
    )}
  </div>
);

const StaffEntry = ({ name, shift, time, department, isYou }: {
  name: string;
  shift: string;
  time: string;
  department: string;
  isYou: boolean;
}) => (
  <div className={`border rounded-lg p-3 ${isYou ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`}>
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <div className={`text-sm font-medium ${isYou ? 'text-green-900' : ''}`}>{name}</div>
        <div className="text-xs text-gray-600">{shift} ({time})</div>
        <div className="text-xs text-gray-500">{department}</div>
      </div>
      {isYou && <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">Du</div>}
    </div>
  </div>
);

const ContactEntry = ({ name, position, phone, email, isYou = false }: {
  name: string;
  position: string;
  phone: string;
  email: string;
  isYou?: boolean;
}) => (
  <div className={`border rounded-lg p-3 ${isYou ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`}>
    <div className="flex justify-between items-start mb-2">
      <div className="flex-1">
        <div className={`text-sm font-medium ${isYou ? 'text-green-900' : ''}`}>{name}</div>
        <div className="text-xs text-gray-600">{position}</div>
      </div>
      {isYou && <div className="text-xs bg-green-600 text-white px-2 py-1 rounded">Du</div>}
    </div>
    <div className="flex items-center gap-4 text-xs">
      <a href={`tel:${phone}`} className="text-blue-600 hover:underline">{phone}</a>
      <a href={`mailto:${email}`} className="text-blue-600 hover:underline flex-1 truncate">{email}</a>
    </div>
  </div>
);

const AvailabilityDay = ({ date, available }: {
  date: string;
  available: boolean | null;
}) => (
  <div className={`border rounded-lg p-3 flex items-center justify-between ${
    available === true ? 'bg-green-50 border-green-300' :
    available === false ? 'bg-red-50 border-red-300' :
    'bg-white border-gray-200'
  }`}>
    <div className="text-sm font-medium">{date}</div>
    <div className="flex gap-2">
      <button className={`px-3 py-1 rounded text-xs transition-colors ${
        available === true ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}>
        Tilgjengelig
      </button>
      <button className={`px-3 py-1 rounded text-xs transition-colors ${
        available === false ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}>
        Utilgjengelig
      </button>
    </div>
  </div>
);

const RequestCard = ({ type, date, status, reason }: {
  type: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  reason: string;
}) => {
  const statusConfig = {
    approved: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50 border-green-200', label: 'Godkjent' },
    pending: { icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200', label: 'Venter' },
    rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50 border-red-200', label: 'Avslått' }
  };
  
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <div className={`border rounded-lg p-3 ${config.bg}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="font-semibold text-sm">{type}</div>
          <div className="text-xs text-gray-600 mt-1">{date}</div>
        </div>
        <div className={`flex items-center gap-1 ${config.color}`}>
          <Icon className="w-4 h-4" />
          <span className="text-xs font-medium">{config.label}</span>
        </div>
      </div>
      <div className="text-xs text-gray-600">{reason}</div>
    </div>
  );
};

const ProfileDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
    <div className="text-xs text-gray-600 mb-1">{label}</div>
    <div className="text-sm font-medium">{value}</div>
  </div>
);

export default MinGatInterface;