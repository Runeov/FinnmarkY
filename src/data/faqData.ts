// Frequently Asked Questions for MinGat/GAT system
// Based on common support issues and documentation

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'login' | 'mobile' | 'shifts' | 'time' | 'absence' | 'pay' | 'general';
  keywords: string[];
  relatedGuideId?: string;
}

export const faqData: FAQItem[] = [
  // LOGIN & AUTHENTICATION
  {
    id: 'faq-login-external',
    question: 'Hvorfor får jeg "Siden kan ikke vises" når jeg prøver å logge inn hjemmefra?',
    answer: 'Du bruker sannsynligvis en intern URL som kun fungerer på sykehusnettet. Hjemmefra må du bruke den eksterne URL-en: https://mingat.helsenord.no. Interne snarveier (http://gat...) fungerer ikke via internett.',
    category: 'login',
    keywords: ['innlogging', 'hjemmefra', 'url', 'ekstern', 'side ikke funnet', 'feil'],
    relatedGuideId: 'pålogging'
  },
  {
    id: 'faq-sms-code',
    question: 'Jeg mottar ikke SMS-kode for innlogging. Hva gjør jeg?',
    answer: 'Sjekk at mobilnummeret ditt er riktig registrert i telefonkatalogen/Min Profil. Dette må gjøres fra en PC på sykehuset. Vent minst 2 minutter mellom forsøk. Hvis problemet vedvarer, kontakt Helse Nord IKT på 07022.',
    category: 'login',
    keywords: ['sms', 'kode', '2fa', 'tofaktor', 'mobilnummer', 'verifisering'],
    relatedGuideId: 'two-factor-login'
  },
  {
    id: 'faq-forgot-password',
    question: 'Jeg har glemt passordet mitt. Kan jeg tilbakestille det hjemmefra?',
    answer: 'Nei, av sikkerhetshensyn kan passord kun tilbakestilles fra en PC på sykehusnettet eller ved å ringe Helse Nord IKT på 07022. "Glemt passord"-funksjonen fungerer kun fra interne IP-adresser.',
    category: 'login',
    keywords: ['passord', 'glemt', 'tilbakestille', 'reset', 'hjemmefra'],
    relatedGuideId: 'pålogging'
  },
  {
    id: 'faq-authenticator-vs-sms',
    question: 'Hva er forskjellen mellom SMS-kode og Microsoft Authenticator?',
    answer: 'Microsoft Authenticator er raskere og sikrere enn SMS. Du trenger ikke vente på en melding - bare åpne appen og godkjenn. Den fungerer også offline og i områder med dårlig mobildekning. Helse Nord anbefaler alle å bytte til Authenticator.',
    category: 'login',
    keywords: ['authenticator', 'sms', 'app', 'sikkerhet', '2fa', 'forskjell'],
    relatedGuideId: 'microsoft-authenticator-setup'
  },
  {
    id: 'faq-wrong-foretak',
    question: 'Jeg ser ingen data etter innlogging - bare en tom side.',
    answer: 'Du har sannsynligvis valgt feil foretak/helsetrust. Logg helt ut og inn igjen, og velg riktig organisasjon fra "Velg ditt foretak"-menyen (f.eks. Finnmarkssykehuset, UNN, Nordlandssykehuset).',
    category: 'login',
    keywords: ['tom', 'blank', 'foretak', 'ingen data', 'velg'],
    relatedGuideId: 'pålogging'
  },

  // MOBILE APP (GATGO)
  {
    id: 'faq-gatgo-qr',
    question: 'QR-koden fungerer ikke når jeg prøver å koble GatGo. Hva gjør jeg?',
    answer: 'Prøv: 1) Hold telefonen stillere, 2) Øk lysstyrken på PC-skjermen, 3) Rengjør kameralinsen. Alternativt kan du bruke URL-lenken som vises under QR-koden og skrive den inn manuelt i mobilens nettleser.',
    category: 'mobile',
    keywords: ['qr', 'kode', 'skanne', 'kamera', 'koble', 'gatgo'],
    relatedGuideId: 'gatgo-mobile-setup'
  },
  {
    id: 'faq-gatgo-logout',
    question: 'GatGo logger meg ut hele tiden. Hva er galt?',
    answer: 'Appen krever PIN eller biometri etter 5 minutters inaktivitet - dette er normalt. Hvis du blir bedt om å pare på nytt, kan det skyldes en app-oppdatering. Gå til MinGat på PC → "Mine apper" → Fjern enheten → Generer ny QR-kode → Par på nytt.',
    category: 'mobile',
    keywords: ['utlogget', 'timeout', 'pin', 'biometri', 'pare', 'koble'],
    relatedGuideId: 'gatgo-mobile-setup'
  },
  {
    id: 'faq-gatgo-multiple-employers',
    question: 'Kan jeg se vakter fra flere arbeidsgivere i GatGo samtidig?',
    answer: 'Nei, GatGo kan kun vise én arbeidsgiver om gangen av juridiske og sikkerhetsmessige årsaker. Du må bytte "Aktiv arbeidsgiver" i innstillingene for å se data fra en annen organisasjon.',
    category: 'mobile',
    keywords: ['flere', 'arbeidsgivere', 'bytte', 'arbeidsgiver', 'samtidig'],
    relatedGuideId: 'gatgo-mobile-setup'
  },
  {
    id: 'faq-jatakk-not-confirmed',
    question: 'Jeg trykket JaTakk på en vakt, men fikk den ikke. Hvorfor?',
    answer: 'JaTakk er et ØNSKE, ikke en booking. Når du trykker JaTakk, sender du et bud. Lederen velger deretter blant alle som har meldt interesse basert på kompetanse, kostnader og rettferdighet. Du får svar i forespørsel-listen under "Godkjent" eller "Avvist".',
    category: 'mobile',
    keywords: ['jatakk', 'vakt', 'avvist', 'ikke fått', 'ledig'],
    relatedGuideId: 'jatakk'
  },

  // SHIFTS & SCHEDULING
  {
    id: 'faq-shift-swap-rejected',
    question: 'Hvorfor ble vaktbyttet mitt avvist automatisk?',
    answer: 'GAT sjekker automatisk mot Arbeidsmiljøloven: 1) Minimum 11 timers hvile mellom vakter, 2) Maksimalt antall timer per uke, 3) Forbud mot dobbeltvakter uten hvile. Velg en annen vaktkombinasjon som ikke bryter reglene.',
    category: 'shifts',
    keywords: ['bytte', 'avvist', 'aml', 'hvile', 'timer', 'regler'],
    relatedGuideId: 'vaktbytte'
  },
  {
    id: 'faq-see-other-department',
    question: 'Jeg jobber på flere avdelinger men ser bare én. Hvordan bytter jeg?',
    answer: 'Bruk "Aktivt nivå"-velgeren i toppmenyen. Klikk på avdelingsnavnet og velg den avdelingen du vil se. MinGat oppretter automatisk en "virtuell profil" når du får tilgang til nye avdelinger.',
    category: 'shifts',
    keywords: ['avdeling', 'bytte', 'nivå', 'flere', 'se'],
    relatedGuideId: 'navigasjon'
  },
  {
    id: 'faq-red-days',
    question: 'Hva betyr røde datoer i kalenderen?',
    answer: 'Røde datoer er helligdager (røde dager). Arbeid på disse dagene gir høyere kompensasjon (høytidstillegg, typisk 133% av timelønn) og kan gi F3-dager (kompenserende fridag). Leger har egne regler med vaktlønn i stedet.',
    category: 'shifts',
    keywords: ['rød', 'helligdag', 'tillegg', 'f3', 'kompensasjon', 'høytid'],
    relatedGuideId: 'min_kalender'
  },
  {
    id: 'faq-onskeplan',
    question: 'Hva er forskjellen på Ønskeplan fase 1 og fase 2?',
    answer: 'Fase 1: Du legger inn dine ønsker for vakter og fri. Fase 2: Du kan flytte deg fra "overdekkede" vakter (for mange ansatte) til "underdekkede" vakter (for få ansatte) og tjene vetopoeng. Fase 3: Planen er låst og iverksatt.',
    category: 'shifts',
    keywords: ['ønskeplan', 'fase', 'veto', 'turnus', 'ønske'],
    relatedGuideId: 'min_onskeplan'
  },

  // TIME & ATTENDANCE
  {
    id: 'faq-flexi-negative',
    question: 'Fleksisaldoen min er negativ. Hva betyr det?',
    answer: 'Du skylder timer til arbeidsgiver. Du må jobbe inn disse timene eller ta ut mindre avspasering fremover. Sjekk "Min fleksitid" for detaljer om hver dag. Manglende stempling vises ofte som -8 timer og må korrigeres.',
    category: 'time',
    keywords: ['fleks', 'negativ', 'saldo', 'minus', 'timer'],
    relatedGuideId: 'min_fleksitid'
  },
  {
    id: 'faq-forgot-stamp',
    question: 'Jeg glemte å stemple ut. Hva skjer?',
    answer: 'Systemet oppretter en "glemt utstempling" som vises som -8 timer. Du må korrigere dette via listen i "Min fleksitid" (innen tidsbegrensningen) eller be leder om å korrigere i Gat.',
    category: 'time',
    keywords: ['stemple', 'glemte', 'utstempling', 'korrigere'],
    relatedGuideId: 'min_fleksitid'
  },
  {
    id: 'faq-timesheet-status',
    question: 'Timelisten min står på "Nivå 1". Hva betyr det?',
    answer: 'Timelisten har flere statuser: Usignert → Signert av deg → Nivå 1 (godkjent av leder) → Nivå 2 (godkjent av HR/Lønn) → Overført til bank. "Nivå 1" betyr at den venter på godkjenning fra HR/Lønn før utbetaling.',
    category: 'time',
    keywords: ['nivå', 'status', 'godkjent', 'timeliste', 'venter'],
    relatedGuideId: 'min_timeliste'
  },

  // ABSENCE
  {
    id: 'faq-egenmelding-blocked',
    question: 'Jeg kan ikke registrere egenmelding. Systemet blokkerer meg.',
    answer: 'GAT håndhever 16-dagers regelen: Du kan ikke bruke egenmelding før du har vært tilbake på jobb i 16 sammenhengende dager etter lengre sykdom. Kontakt leder hvis du mener dette er feil.',
    category: 'absence',
    keywords: ['egenmelding', 'blokkert', '16 dager', 'syk', 'regel'],
    relatedGuideId: 'fravaer'
  },
  {
    id: 'faq-sykt-barn-quota',
    question: 'Hvor mange dager med sykt barn har jeg igjen?',
    answer: 'Standard kvote er 10 dager/år (20 for enslige forsørgere). Sjekk "Mine banker" for gjenstående saldo. Ved 3+ barn får du ekstra dager (kode 205), men disse kan først brukes når standardkvoten (kode 200) er brukt opp.',
    category: 'absence',
    keywords: ['sykt barn', 'kvote', 'dager', 'bank', 'saldo'],
    relatedGuideId: 'mine_banker'
  },
  {
    id: 'faq-vacation-double-deduction',
    question: 'Jeg fikk dobbelt trekk for ferie. Hva skjedde?',
    answer: 'Dette skjer hvis du bruker kode 450 (ferie uten lønn) mellom januar og juni. Standard ferietrekk skjer automatisk i juni. Bruk ALDRI kode 450 før juni - kontakt lønn for korrigering hvis dette har skjedd.',
    category: 'absence',
    keywords: ['ferie', 'trekk', 'dobbelt', '450', 'lønn'],
    relatedGuideId: 'fravaer'
  },

  // PAY & COMPENSATION
  {
    id: 'faq-missing-overtime',
    question: 'Overtiden min mangler på lønnsslippen. Hvor er den?',
    answer: 'Sjekk statusen på timelisten: 1) Har DU signert den? 2) Har LEDER godkjent den (Nivå 1)? 3) Har HR godkjent den (Nivå 2)? Hvis den står på Nivå 1, må du kontakte lederen din - ikke lønnsavdelingen.',
    category: 'pay',
    keywords: ['overtid', 'mangler', 'lønn', 'lønnsslipp', 'nivå'],
    relatedGuideId: 'min_timeliste'
  },
  {
    id: 'faq-pay-codes',
    question: 'Hva betyr kodene på lønnsslippen min (1405, 1411, 2162)?',
    answer: '1405/1425 = Helgetillegg (lørdag/søndag). 1411/1431 = Kveld/natt-tillegg. 2160 = Overtid 50% (sykdomsdekning). 2162 = Overtid 100% (helg/høytid). 1010 = Fastlønn. Sjekk "Min timeliste" for detaljer.',
    category: 'pay',
    keywords: ['kode', 'lønnsart', 'tillegg', 'lønnsslipp', '1405', '1411'],
    relatedGuideId: 'min_timeliste'
  },
  {
    id: 'faq-divisor-change',
    question: 'Hvorfor endret timeraten min når jeg byttet avdeling?',
    answer: 'Ulike turnusordninger har ulik "divisor": Dagtid = 37,5 t/uke. Todelt turnus = 35,5 t/uke. Helkontinuerlig (24/7) = 33,6 t/uke. Jo mer belastende turnus, jo færre timer må du jobbe for full lønn. GAT justerer automatisk.',
    category: 'pay',
    keywords: ['divisor', 'timerate', 'turnus', 'byttet', 'timer'],
    relatedGuideId: 'min_timeliste'
  },

  // GENERAL
  {
    id: 'faq-support-contact',
    question: 'Hvem kontakter jeg ved ulike problemer?',
    answer: 'Teknisk (innlogging, SMS, Citrix): Helse Nord IKT 07022. Funksjonelt (vakter, rettigheter): Din leder eller lokal GAT-ansvarlig. Lønn/HR (skatt, satser): Ansatteservice via Personalportalen.',
    category: 'general',
    keywords: ['kontakt', 'support', 'hjelp', 'telefon', '07022'],
    relatedGuideId: 'feilsøking'
  },
  {
    id: 'faq-onskeplan-desktop-only',
    question: 'Kan jeg bruke Ønskeplan i GatGo-appen?',
    answer: 'Nei, Ønskeplan fase 1 og 2 er kun tilgjengelig på PC via MinGat. Mobilappen er optimalisert for daglige oppgaver (neste par uker), mens langsiktig planlegging krever full skjerm.',
    category: 'general',
    keywords: ['ønskeplan', 'mobil', 'app', 'gatgo', 'pc'],
    relatedGuideId: 'min_onskeplan'
  },
  {
    id: 'faq-calendar-export',
    question: 'Kan jeg eksportere vaktene mine til Outlook eller Google Kalender?',
    answer: 'Ja! Gå til "Min Kalender" → Innstillinger (tannhjul) → Velg synkroniseringsmetode (Exchange/Outlook) eller eksporter til iCal-format (.ics). Merk: iCal-eksport oppdateres ikke automatisk - du må eksportere på nytt ved endringer.',
    category: 'general',
    keywords: ['eksport', 'kalender', 'outlook', 'google', 'ical', 'synkronisere'],
    relatedGuideId: 'min_kalender'
  }
];

// Get FAQ by category
export const getFAQByCategory = (category: FAQItem['category']): FAQItem[] => {
  return faqData.filter(faq => faq.category === category);
};

// Search FAQ
export const searchFAQ = (query: string): FAQItem[] => {
  const lowerQuery = query.toLowerCase();
  return faqData.filter(faq => 
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery) ||
    faq.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
  );
};

// Get all unique categories
export const faqCategories = [
  { id: 'login', name: 'Innlogging', nameNo: 'Innlogging og Sikkerhet' },
  { id: 'mobile', name: 'Mobilapp', nameNo: 'GatGo Mobilapp' },
  { id: 'shifts', name: 'Vakter', nameNo: 'Vakter og Turnus' },
  { id: 'time', name: 'Timer', nameNo: 'Timer og Fleksitid' },
  { id: 'absence', name: 'Fravær', nameNo: 'Fravær og Permisjon' },
  { id: 'pay', name: 'Lønn', nameNo: 'Lønn og Tillegg' },
  { id: 'general', name: 'Generelt', nameNo: 'Generelle spørsmål' }
] as const;