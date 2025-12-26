import { Guide } from '@/lib/types';

export const guides: Guide[] = [
  {
    id: 'remote-login',
    title: 'Logging in from Home',
    titleNo: 'Pålogging hjemmefra (Hjemmekontor)',
    summary: 'Complete guide to accessing MinGat remotely with 2FA',
    summaryNo: 'Komplett veiledning for å logge inn på MinGat hjemmefra med 2FA',
    keywords: ['hjemmekontor', 'home office', 'remote', 'login', 'pålogging', '2fa', 'sms', 'passcode', 'hjemmefra', 'passord', 'innlogging'],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '5 minutter',
    steps: [
      { id: 'remote-1', title: 'Bruk riktig ekstern URL', content: 'Gå til den eksterne MinGat-adressen.', callout: { type: 'warning', title: 'Viktig URL', content: 'Bruk https://mingat.helsenord.no - IKKE interne snarveier' } },
      { id: 'remote-2', title: 'Skriv inn Helse Nord-pålogging', content: 'Skriv inn ditt brukernavn og passord.', subSteps: ['Brukernavn: Ditt Helse Nord brukernavn', 'Passord: Ditt nettverkspassord'] },
      { id: 'remote-3', title: 'Vent på SMS-verifiseringskode', content: 'Systemet sender en kode via SMS.', callout: { type: 'info', title: 'Ingen SMS?', content: 'Vent 2 min. Kontakt Helse Nord IKT: 07022' } },
      { id: 'remote-4', title: 'Skriv inn SMS-koden', content: 'Skriv inn koden nøyaktig.' },
      { id: 'remote-5', title: 'Velg Finnmarkssykehuset', content: 'Velg ditt foretak fra listen.', callout: { type: 'warning', title: 'Feil foretak?', content: 'Logg ut og prøv igjen.' } }
    ],
    relatedGuides: ['gatgo-setup', 'login-troubleshooting'],
    faq: [
      { question: 'Glemt passord?', answer: 'Kontakt Helse Nord IKT på 07022.' },
      { question: 'Ingen SMS?', answer: 'Sjekk mobilnummer i personalfilen.' }
    ]
  },
  {
    id: 'gatgo-setup',
    title: 'Setting up GatGo Mobile App',
    titleNo: 'Sette opp GatGo mobilapp',
    summary: 'Device pairing with QR code',
    summaryNo: 'Paring av enhet med QR-kode',
    keywords: ['gatgo', 'mobil', 'app', 'qr', 'kode', 'paring', 'oppsett', 'installere', 'telefon', 'ios', 'android', 'skann'],
    category: 'mobile',
    interface: 'gatgo',
    complexity: 'intermediate',
    estimatedTime: '10 minutter',
    steps: [
      { id: 'gatgo-1', title: 'Forutsetninger', content: 'Du trenger PC med MinGat og mobil med GatGo-app.', callout: { type: 'info', title: 'Krav', content: 'PC + Mobil med GatGo installert' } },
      { id: 'gatgo-2', title: 'Generer QR-kode', content: 'I MinGat, klikk "Gå til mobil app".', subSteps: ['Logg inn på MinGat', 'Gå til Startsiden', 'Klikk "Gå til mobil app"'] },
      { id: 'gatgo-3', title: 'Forbered mobilappen', content: 'Åpne GatGo, velg "Logg inn", godta vilkår.' },
      { id: 'gatgo-4', title: 'Skann QR-koden', content: 'Velg "Scann QR-kode" på mobilen.', callout: { type: 'info', title: 'Kamera fungerer ikke?', content: 'URL kan skrives manuelt.' } },
      { id: 'gatgo-5', title: 'Skriv inn bekreftelseskode', content: 'Skriv 8-sifret kode fra mobil inn på PC.' },
      { id: 'gatgo-6', title: 'Sett opp PIN', content: 'Opprett PIN og aktiver biometri.', callout: { type: 'success', title: 'Ferdig!', content: 'Enheten er nå paret.' } }
    ],
    faq: [{ question: 'Flere arbeidsgivere?', answer: 'Bytt i innstillinger.' }]
  },
  {
    id: 'shift-exchange',
    title: 'Exchanging Shifts',
    titleNo: 'Vaktbytte',
    summary: 'How to swap shifts',
    summaryNo: 'Hvordan bytte vakter',
    keywords: ['vaktbytte', 'bytte', 'swap', 'shift', 'vakt', 'gi bort', 'overta', 'kollega', 'fri', 'forespørsel'],
    category: 'shift-management',
    interface: 'mingat',
    complexity: 'intermediate',
    estimatedTime: '5-10 minutter',
    steps: [
      { id: 'exchange-1', title: 'Naviger til Vaktbytte', content: 'Finn "Vaktbytte" i menyen.' },
      { id: 'exchange-2', title: 'Velg type bytte', content: 'Velg riktig byttetype:', subSteps: ['Gi bort min vakt', 'Overta vakt', 'Bytte vakt med ansatt', 'Få fri en vakt'], callout: { type: 'info', title: 'Tips', content: 'Har du erstatning? Det avgjør byttetype.' } },
      { id: 'exchange-3', title: 'Fyll ut skjema', content: 'Fullfør alle felt.', subSteps: ['Dag du vil ha fri', 'Kolleganavn', 'Måldato'] },
      { id: 'exchange-4', title: 'Send inn', content: 'Sjekk "Mine forespørsler" for status.', callout: { type: 'warning', title: 'Viktig', content: 'Ikke bekreftet før leder godkjenner.' } }
    ],
    relatedGuides: ['jatakk-bidding']
  },
  {
    id: 'jatakk-bidding',
    title: 'Bidding for Open Shifts (JaTakk)',
    titleNo: 'By på ledige vakter (JaTakk)',
    summary: 'Express interest in vacant shifts',
    summaryNo: 'Vis interesse for ledige vakter',
    keywords: ['jatakk', 'ja takk', 'ledig', 'åpen vakt', 'ekstravakt', 'ledige vakter', 'ta vakt'],
    category: 'shift-management',
    interface: 'all',
    complexity: 'basic',
    estimatedTime: '2 minutter',
    steps: [
      { id: 'jatakk-1', title: 'Finn ledige vakter', content: 'Se "Ledige vakter" i MinGat/GatGo. Røde i Vaktboken.' },
      { id: 'jatakk-2', title: 'Klikk JaTakk', content: 'Klikk "JaTakk" på ønsket vakt.', callout: { type: 'info', title: 'Bekreftelse', content: 'Tommel opp-ikon vises.' } },
      { id: 'jatakk-3', title: 'Vent på utvelgelse', content: 'Leder velger fra alle bud.', callout: { type: 'warning', title: 'Merk', content: 'Dette er et BUD, ikke booking.' } }
    ]
  },
  {
    id: 'time-registration',
    title: 'Registering Hours',
    titleNo: 'Timeregistrering',
    summary: 'Log working hours',
    summaryNo: 'Føre arbeidstimer',
    keywords: ['time', 'timer', 'registrering', 'timeliste', 'føre', 'levere', 'godkjent', 'arbeidstid', 'timeføring'],
    category: 'time-tracking',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '5-10 minutter',
    steps: [
      { id: 'time-1', title: 'Gå til Timeregistrering', content: 'Åpne "Min Timeregistrering".' },
      { id: 'time-2', title: 'Forstå statusene', content: 'Timer går gjennom:', subSteps: ['Ikke påbegynt', 'Påbegynt', 'Under behandling', 'Godkjent'], callout: { type: 'info', title: 'Viktig', content: 'Kun godkjente timer utbetales.' } },
      { id: 'time-3', title: 'Fyll inn timer', content: 'Registrer timer per dag.' },
      { id: 'time-4', title: 'Lever uken', content: 'Lever for godkjenning.', callout: { type: 'warning', title: 'Merk', content: 'Kan ikke redigere etter innsending.' } }
    ],
    faq: [{ question: 'Endre etter innsending?', answer: 'Leder må avvise først.' }]
  },
  {
    id: 'time-banks',
    title: 'Time Banks',
    titleNo: 'Banker (Fleksitid, Ferie)',
    summary: 'Flex time and vacation balances',
    summaryNo: 'Fleksitid og ferie',
    keywords: ['bank', 'banker', 'fleksitid', 'ferie', 'avspasering', 'saldo', 'overtid'],
    category: 'time-tracking',
    interface: 'all',
    complexity: 'intermediate',
    estimatedTime: '5 minutter',
    steps: [
      { id: 'banks-1', title: 'Finn Banker', content: 'Gå til "Banker" i MinGat/GatGo.' },
      { id: 'banks-2', title: 'Banktyper', content: 'Det finnes:', subSteps: ['Flexibank - Fleksitid', 'Feriebank - Feriedager', 'Avspasering'] },
      { id: 'banks-3', title: 'Dynamiske saldoer', content: 'Oppdateres ved godkjenning.', callout: { type: 'info', title: 'Tips', content: 'Sjekk jevnlig.' } }
    ]
  },
  {
    id: 'keyboard-shortcuts',
    title: 'Keyboard Shortcuts',
    titleNo: 'Tastatursnarveier',
    summary: 'Work faster',
    summaryNo: 'Jobb raskere',
    keywords: ['tastatur', 'snarveier', 'hurtigtaster', 'ctrl', 'alt', 'effektiv'],
    category: 'navigation',
    interface: 'mingat',
    complexity: 'advanced',
    estimatedTime: '3 minutter',
    steps: [
      { id: 'kb-1', title: 'Hjem', content: 'Ctrl + Alt + H = Startsiden', callout: { type: 'success', title: 'Tips', content: 'Bruk når du går deg bort!' } },
      { id: 'kb-2', title: 'Søk', content: 'Ctrl + Alt + S = Søkefelt' },
      { id: 'kb-3', title: 'Paneler', content: 'Ctrl + Alt + F = Favoritter. Ctrl + Alt + D = Dokumenter.' }
    ]
  },
  {
    id: 'vaktbok-navigation',
    title: 'Understanding the Vaktbok',
    titleNo: 'Forstå Vaktboken',
    summary: 'Read shift overview',
    summaryNo: 'Lese vaktoversikten',
    keywords: ['vaktbok', 'roster', 'oversikt', 'farger', 'rød', 'grå', 'grønn prikk', 'fravær'],
    category: 'navigation',
    interface: 'mingat',
    complexity: 'intermediate',
    estimatedTime: '5 minutter',
    steps: [
      { id: 'vaktbok-1', title: 'Visuelt oppsett', content: 'Oversikt over avdelingen:', subSteps: ['Dine vakter: FET øverst', 'Åpne vakter: RØD nederst', 'Svarte linjer: Ukeslutt', 'Stiplede: Månedsslutt'] },
      { id: 'vaktbok-2', title: 'Fravær', content: 'Fraværsindikatorer:', subSteps: ['Grå: Totalt fravær', 'Kursiv: Delvis fravær'] },
      { id: 'vaktbok-3', title: 'Tilstedeværelse', content: 'Grønn prikk = inne. Rød = ute.' }
    ]
  },
  {
    id: 'login-troubleshooting',
    title: 'Login Problems',
    titleNo: 'Innloggingsproblemer',
    summary: 'Common issues',
    summaryNo: 'Vanlige problemer',
    keywords: ['problem', 'feil', 'kan ikke logge inn', 'feil passord', 'låst', 'sms', 'fungerer ikke', 'hjelp', 'timeout'],
    category: 'troubleshooting',
    interface: 'all',
    complexity: 'basic',
    estimatedTime: '5 minutter',
    steps: [
      { id: 'trouble-1', title: 'Sjekk URL', content: 'Riktig adresse?', callout: { type: 'error', title: 'Vanlig feil', content: 'Hjemme: bruk https://mingat.helsenord.no' } },
      { id: 'trouble-2', title: 'Ingen SMS?', content: 'Sjekk:', subSteps: ['Vent 2 min', 'Sjekk dekning', 'Verifiser mobilnummer', 'Ring 07022'] },
      { id: 'trouble-3', title: 'Feil passord', content: 'Hvor oppstår feilen?', subSteps: ['Før SMS = URL/pålogging feil', 'Etter SMS = Timeout/foretak feil'] },
      { id: 'trouble-4', title: 'Konto låst', content: 'Ring Helse Nord IKT: 07022 eller 77 78 50 00' }
    ],
    relatedGuides: ['remote-login']
  },
  {
    id: 'gatgo-troubleshooting',
    title: 'GatGo Problems',
    titleNo: 'GatGo problemer',
    summary: 'App issues',
    summaryNo: 'App-problemer',
    keywords: ['gatgo', 'app', 'krasj', 'synkronisering', 'laster ikke', 'feil', 'treg'],
    category: 'troubleshooting',
    interface: 'gatgo',
    complexity: 'basic',
    estimatedTime: '5 minutter',
    steps: [
      { id: 'gatgo-trouble-1', title: 'App krasjer', content: 'Prøv:', subSteps: ['Lukk og åpne på nytt', 'Oppdater appen', 'Restart telefon', 'Reinstaller'], callout: { type: 'warning', title: 'Merk', content: 'Reinstallering krever ny paring.' } },
      { id: 'gatgo-trouble-2', title: 'Synkroniserer ikke', content: 'Sjekk internett.' },
      { id: 'gatgo-trouble-3', title: 'Feil arbeidsgiver', content: 'Bytt i innstillinger. Aktiv har mørk bakgrunn.' }
    ],
    relatedGuides: ['gatgo-setup']
  },
  {
    id: 'missing-shifts',
    title: 'Missing Shifts',
    titleNo: 'Mangler vakter',
    summary: 'Shifts not showing',
    summaryNo: 'Vakter vises ikke',
    keywords: ['mangler', 'ikke synlig', 'vakter borte', 'tomt', 'finner ikke', 'forsvunnet'],
    category: 'troubleshooting',
    interface: 'all',
    complexity: 'basic',
    estimatedTime: '5 minutter',
    steps: [
      { id: 'missing-1', title: 'Sjekk periode', content: 'Riktig uke/måned?' },
      { id: 'missing-2', title: 'Sjekk avdeling', content: 'Riktig avdeling valgt?' },
      { id: 'missing-3', title: 'Kontakt leder', content: 'Ring din leder.', callout: { type: 'info', title: 'Kontakt', content: 'Sentralbord: 78 96 70 00' } }
    ]
  }
];

export const getGuideById = (id: string) => guides.find((g) => g.id === id);
export const getGuidesByCategory = (category: string) => guides.filter((g) => g.category === category);
