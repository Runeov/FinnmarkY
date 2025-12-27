import React from 'react';
import { 
  Home, Calendar, BookOpen, ClipboardList, List, Clock, 
  Building2, MessageSquare, Award, Users, FileText, Folder,
  Menu, HelpCircle, Bell, User, MapPin, ChevronDown
} from 'lucide-react';

interface MinGatPCInterfaceProps {
  className?: string;
}

export const MinGatPCInterface: React.FC<MinGatPCInterfaceProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col h-full bg-gray-50 ${className}`} id="mcp-mingat-pc-root">
      {/* Top Horizontal Menu Bar */}
      <header 
        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 flex items-center justify-between shadow-md"
        id="mcp-mingat-header"
      >
        <div className="flex items-center gap-4">
          {/* Logo/Home */}
          <button className="flex items-center gap-2 hover:bg-red-700/50 px-3 py-2 rounded">
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
          <SidebarIcon icon={<Home />} label="Startsiden" active={true} id="mcp-sidebar-home" />
          <SidebarIcon icon={<Calendar />} label="Min kalender" id="mcp-sidebar-calendar" />
          <SidebarIcon icon={<BookOpen />} label="Vaktbok" id="mcp-sidebar-vaktbok" />
          <SidebarIcon icon={<ClipboardList />} label="Oppgaver" id="mcp-sidebar-oppgaver" />
          <SidebarIcon icon={<List />} label="Ukeliste" id="mcp-sidebar-ukeliste" />
          <SidebarIcon icon={<Clock />} label="Fleksitid" id="mcp-sidebar-fleksitid" />
          <SidebarIcon icon={<Building2 />} label="Mine banker" id="mcp-sidebar-banker" />
          <SidebarIcon icon={<MessageSquare />} label="Forespørsler" badge={3} id="mcp-sidebar-foresporsler" />
          <SidebarIcon icon={<Award />} label="Kompetanse" id="mcp-sidebar-kompetanse" />
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-white" id="mcp-mingat-main-content">
          {/* Page Title */}
          <div className="bg-gray-100 border-b px-6 py-3">
            <h1 className="text-xl font-semibold text-gray-800" id="mcp-mingat-page-title">Startsiden</h1>
          </div>

          {/* Dashboard Grid */}
          <div className="p-6 grid grid-cols-3 gap-4" id="mcp-mingat-dashboard-grid">
            {/* Widget: I dag og i morgen */}
            <DashboardWidget
              title="I dag og i morgen"
              id="mcp-widget-today-tomorrow"
              footerLink="GÅ TIL KALENDER"
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
            >
              <div className="flex flex-col items-center justify-center py-4">
                <div className="text-4xl font-bold text-gray-800" id="mcp-flextime-clock">08:13</div>
                <div className="text-xs text-gray-500 mt-1">SALDO: -257.52M</div>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                    Inn
                  </button>
                  <button className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400">
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
        </main>
      </div>
    </div>
  );
};

// Helper Components

interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
  id?: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, label, active, badge, id }) => {
  return (
    <button
      id={id}
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
  badge?: number;
  id?: string;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ 
  title, 
  children, 
  footerLink,
  badge,
  id 
}) => {
  return (
    <div 
      id={id}
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col"
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
          <button className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
            <span>{footerLink}</span>
            <ChevronDown className="w-3 h-3 rotate-270" />
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

export default MinGatPCInterface;