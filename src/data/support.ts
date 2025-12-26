import { SupportContact } from '@/lib/types';

export const supportContacts: SupportContact[] = [
  {
    id: 'helse-nord-ikt',
    categoryNo: 'Tekniske innloggingsproblemer',
    descriptionNo: 'Passordfeil, låste kontoer, SMS ikke mottatt',
    contactPoint: 'Helse Nord IKT',
    contactDetails: 'Telefon: 07022 eller 77 78 50 00',
    escalationCriteria: ['Når ikke SMS-steget', 'Konto låst', 'Passordtilbakestilling']
  },
  {
    id: 'local-manager',
    categoryNo: 'Funksjonelle/GAT-problemer',
    descriptionNo: 'Manglende vakter, feil tilgang',
    contactPoint: 'Lokal leder / GAT-ansvarlig',
    contactDetails: 'Via sentralbord: 78 96 70 00',
    escalationCriteria: ['Kan ikke se vakter', 'Tilgangsproblemer', 'Godkjenningsforsinkelser']
  },
  {
    id: 'hr-payroll',
    categoryNo: 'HR/Lønnsproblemer',
    descriptionNo: 'Feil lønnsdata, skattekort',
    contactPoint: 'Ansatteservice',
    contactDetails: 'Via Personalportalen',
    escalationCriteria: ['Manglende lønn', 'Feil overtidsberegning']
  }
];
