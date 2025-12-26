import { LogIn, Smartphone, CalendarClock, Clock, Navigation, FileCheck, AlertTriangle } from 'lucide-react';
import { CategoryInfo } from '@/lib/types';

export const categories: CategoryInfo[] = [
  { id: 'authentication', nameNo: 'Pålogging', descriptionNo: 'Innlogging, 2FA, fjerntilgang', icon: LogIn, color: '#3b82f6' },
  { id: 'mobile', nameNo: 'Mobil App (GatGo)', descriptionNo: 'GatGo oppsett og funksjoner', icon: Smartphone, color: '#10b981' },
  { id: 'shift-management', nameNo: 'Vaktplanlegging', descriptionNo: 'Vaktbytte, JaTakk', icon: CalendarClock, color: '#f59e0b' },
  { id: 'time-tracking', nameNo: 'Timeregistrering', descriptionNo: 'Timeføring, timelister', icon: Clock, color: '#8b5cf6' },
  { id: 'navigation', nameNo: 'Navigasjon', descriptionNo: 'Grensesnitt, snarveier', icon: Navigation, color: '#06b6d4' },
  { id: 'compliance', nameNo: 'Godkjenninger', descriptionNo: 'Godkjenningsflyt', icon: FileCheck, color: '#ec4899' },
  { id: 'troubleshooting', nameNo: 'Feilsøking', descriptionNo: 'Vanlige problemer', icon: AlertTriangle, color: '#ef4444' },
];

export const getCategoryById = (id: string) => categories.find((c) => c.id === id);
