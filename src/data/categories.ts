import { 
  LogIn, 
  Calendar, 
  Clock, 
  FileText, 
  Smartphone, 
  Users, 
  Settings,
  AlertCircle,
  LucideIcon
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  nameNo: string;
  icon: LucideIcon;
  color: string;
  description?: string;
}

export const categories: Category[] = [
  {
    id: 'authentication',
    name: 'Login & Security',
    nameNo: 'Pålogging og Sikkerhet',
    icon: LogIn,
    color: '#3B82F6',
    description: 'Innlogging, passord og 2-faktor'
  },
  {
    id: 'navigation',
    name: 'Navigation',
    nameNo: 'Navigasjon',
    icon: Settings,
    color: '#8B5CF6',
    description: 'Hvordan bruke MinGat'
  },
  {
    id: 'shift-management',
    name: 'Calendar & Shifts',
    nameNo: 'Kalender og Vakter',
    icon: Calendar,
    color: '#10B981',
    description: 'Vaktplaner og kalender'
  },
  {
    id: 'time-tracking',
    name: 'Time Tracking',
    nameNo: 'Timeregistrering',
    icon: Clock,
    color: '#F59E0B',
    description: 'Timer og lønn'
  },
  {
    id: 'compliance',
    name: 'Requests',
    nameNo: 'Forespørsler',
    icon: FileText,
    color: '#EF4444',
    description: 'Fravær, bytter og søknader'
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    nameNo: 'Mobilapp (GatGo)',
    icon: Smartphone,
    color: '#06B6D4',
    description: 'GatGo oppsett og bruk'
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    nameNo: 'Feilsøking',
    icon: AlertCircle,
    color: '#6B7280',
    description: 'Hjelp med problemer'
  }
];

// Helper function to get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};