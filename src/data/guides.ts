import { Guide } from '@/lib/types';

export const guides: Guide[] = [
  {
    id: 'simple-login',
    title: 'Enkel innlogging',
    titleNo: 'Enkel innlogging',
    summary: 'Rask guide for hvordan du logger inn i MinGat',
    summaryNo: 'Rask guide for hvordan du logger inn i MinGat',
    keywords: ['innlogging', 'login', 'enkel', 'guide', 'passord', 'brukernavn'],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '1 minutt',
    steps: [
      { id: 'simple-1', title: 'Gå til nettsiden', content: 'Åpne nettleseren og gå til MinGat-adressen.' },
      { 
        id: 'simple-2', 
        title: 'Skriv inn brukernavn og passord', 
        content: 'Fyll inn ditt brukernavn og passord i feltene.',
        image: '/images/guides/login-screen.png'
      },
      { id: 'simple-3', title: 'Trykk Logg inn', content: 'Klikk på knappen "Logg inn" for å komme til startsiden.' }
    ]
  },
  {
    id: 'home-access-setup',
    title: 'Setting up Home Access (MinGat from Home)',
    titleNo: 'Sette opp tilgang hjemmefra (MinGat Hjemmefra)',
    summary: 'First-time setup for accessing MinGat from home network',
    summaryNo: 'Førstegangs oppsett for tilgang til MinGat fra hjemmenettverket',
    keywords: ['hjemmekontor', 'home office', 'remote', 'setup', 'oppsett', 'tilgang', 'hjemmefra', 'førstegang', 'nettverk'],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '15-20 minutter',
    steps: [
      { id: 'setup-1', title: 'Forbered hjemmenettverket', content: 'Sørg for stabil internettforbindelse og oppdatert nettleser.', callout: { type: 'info', title: 'Krav', content: 'Stabil internett og moderne nettleser (Chrome, Firefox, Edge)' } },
      { id: 'setup-2', title: 'Kontakt IT-support', content: 'Ring Helse Nord IKT for å aktivere hjemmetilgang.', subSteps: ['Ring 07022', 'Oppgi navn og stilling', 'Be om aktivering av hjemmetilgang'] },
      { id: 'setup-3', title: 'Motta tilgangsinformasjon', content: 'Få bekreftet at tilgangen er aktivert.', callout: { type: 'warning', title: 'Viktig', content: 'Vent på bekreftelse før du prøver å logge inn' } },
      { id: 'setup-4', title: 'Test tilgangen', content: 'Prøv å logge inn fra hjemme første gang.', subSteps: ['Gå til https://mingat.helsenord.no', 'Logg inn med vanlige legitimasjon', 'Følg 2FA-prosessen'] },
      { id: 'setup-5', title: 'Lagre bokmerke', content: 'Lagre den eksterne URL-en som bokmerke.', callout: { type: 'success', title: 'Ferdig!', content: 'Du kan nå logge inn hjemmefra' } }
    ],
    relatedGuides: ['remote-login', 'gatgo-setup'],
    faq: [
      { question: 'Hvor lang tid tar aktiveringen?', answer: 'Vanligvis 1-2 arbeidsdager.' },
      { question: 'Kan jeg bruke hvilken som helst nettleser?', answer: 'Anbefaler Chrome, Firefox eller Edge.' }
    ]
  },
  {
    id: 'remote-login',
    title: 'Login with Two-Factor Authentication',
    titleNo: 'Pålogging med tofaktorautentisering',
    summary: 'Secure login to MinGat from home or external network',
    summaryNo: 'Sikker pålogging til MinGat hjemmefra eller fra eksternt nettverk',
    keywords: ['pålogging', 'login', '2fa', 'tofaktor', 'sms', 'sikkerhet', 'hjemmefra', 'ekstern', 'autentisering'],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '2-5 minutter',
    steps: [
      { id: 'login-1', title: 'Gå til ekstern URL', content: 'Åpne https://mingat.helsenord.no i nettleseren.', callout: { type: 'warning', title: 'Viktig URL', content: 'Bruk kun den eksterne adressen - IKKE interne snarveier' } },
      { id: 'login-2', title: 'Skriv inn legitimasjon', content: 'Skriv inn ditt Helse Nord brukernavn og passord.', subSteps: ['Brukernavn: Ditt vanlige Helse Nord brukernavn', 'Passord: Ditt nettverkspassord'] },
      { 
        id: 'login-3', 
        title: 'Vent på SMS-kode', 
        content: 'Systemet sender automatisk en verifiseringskode til din registrerte mobiltelefon. Sjekk at "Godta SMS" er slått på i profilen din.', 
        image: '/images/guides/profile-sms-toggle.png',
        callout: { type: 'info', title: 'Ingen SMS?', content: 'Vent 2 minutter. Kontakt 07022 hvis du fortsatt ikke får SMS' } 
      },
      { id: 'login-4', title: 'Skriv inn SMS-koden', content: 'Skriv inn den 6-sifrede koden nøyaktig som mottatt.' },
      { id: 'login-5', title: 'Velg Finnmarkssykehuset', content: 'Velg ditt foretak fra dropdown-listen.', callout: { type: 'success', title: 'Innlogget!', content: 'Du er nå sikret innlogget i MinGat' } }
    ],
    relatedGuides: ['home-access-setup'],
    faq: [
      { question: 'Glemt passord?', answer: 'Kontakt Helse Nord IKT på 07022.' },
      { question: 'Får ikke SMS?', answer: 'Sjekk at mobilnummeret er riktig registrert i personalfilen.' }
    ]
  },
  {
    id: 'gatgo-setup',
    title: 'Mobile App Setup (GatGo)',
    titleNo: 'Mobilapp-oppsett (GatGo)',
    summary: 'Authorize GatGo mobile app on your personal device',
    summaryNo: 'Autoriser GatGo mobilappen på din personlige enhet',
    keywords: ['gatgo', 'mobil', 'app', 'oppsett', 'autorisering', 'qr', 'kode', 'paring', 'telefon', 'personlig', 'enhet'],
    category: 'mobile',
    interface: 'gatgo',
    complexity: 'basic',
    estimatedTime: '10-15 minutter',
    steps: [
      { id: 'mobile-1', title: 'Last ned GatGo-appen', content: 'Installer GatGo fra App Store (iOS) eller Google Play (Android).', callout: { type: 'info', title: 'Krav', content: 'Personlig smarttelefon med internettilgang' } },
      { id: 'mobile-2', title: 'Logg inn på MinGat (PC)', content: 'Åpne MinGat på datamaskinen og gå til startsiden.', subSteps: ['Logg inn på MinGat', 'Naviger til startsiden', 'Finn "Gå til mobil app"-knappen'] },
      { id: 'mobile-3', title: 'Generer QR-kode', content: 'Klikk "Gå til mobil app" for å generere en QR-kode på PC-skjermen.' },
      { id: 'mobile-4', title: 'Åpne GatGo-appen', content: 'Start GatGo på telefonen, velg "Logg inn" og godta brukervilkårene.' },
      { id: 'mobile-5', title: 'Skann QR-koden', content: 'Velg "Scann QR-kode" og rett kameraet mot PC-skjermen.', callout: { type: 'info', title: 'Kamera fungerer ikke?', content: 'Du kan skrive inn URL-en manuelt' } },
      { id: 'mobile-6', title: 'Skriv inn bekreftelseskode', content: 'Skriv den 8-sifrede koden som vises på mobilen inn på PC-en.' },
      { id: 'mobile-7', title: 'Sett opp sikkerhet', content: 'Opprett en PIN-kode og aktiver biometrisk pålogging (fingeravtrykk/ansiktsgjenkjenning).', callout: { type: 'success', title: 'Ferdig!', content: 'GatGo er nå autorisert og klar til bruk' } }
    ],
    faq: [
      { question: 'Kan jeg bruke GatGo på flere enheter?', answer: 'Ja, men hver enhet må autoriseres separat.' },
      { question: 'Hva hvis jeg bytter telefon?', answer: 'Du må gjenta oppsettet på den nye telefonen.' }
    ]
  }
];

export const getGuideById = (id: string) => guides.find((g) => g.id === id);
export const getGuidesByCategory = (category: string) => guides.filter((g) => g.category === category);

export const additionalGuides: Guide[] = [
  // --- AUTHENTICATION (PÅLOGGING) ---
  {
    id: 'forgot-password',
    title: 'Glemt passord / Endre passord',
    titleNo: 'Glemt passord / Endre passord',
    summary: 'Guide for recovering or changing your password',
    summaryNo: 'Hva du må gjøre hvis du har glemt passordet eller må endre det',
    keywords: ['passord', 'glemt', 'endre', 'reset', 'password', 'innlogging'],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '2-5 minutter',
    steps: [
      { 
        id: 'fp-1', 
        title: 'Er du på jobbnettverket?', 
        content: 'Det er strengere regler for å endre passord enn å logge inn.', 
        callout: { type: 'warning', title: 'Begrensning', content: 'Passordbytte må vanligvis skje fra en PC på sykehusets interne nettverk.' } 
      },
      { 
        id: 'fp-2', 
        title: 'Bruk "Glemt passord"-funksjonen', 
        content: 'På innloggingsskjermen (når du er på jobb), klikk på lenken "Glemt passord".',
        subSteps: ['Følg instruksjonene på skjermen', 'Du trenger ofte din ansatt-ID eller fødselsnummer'],
        image: '/images/guides/forgot-password.png'
      },
      { 
        id: 'fp-3', 
        title: 'Hjemmefra (Ekstern tilgang)', 
        content: 'Du kan vanligvis IKKE endre passordet hjemmefra via MinGat.',
        callout: { type: 'error', title: 'Låst ute hjemme?', content: 'Hvis passordet ditt har utløpt mens du er hjemme, må du ringe Helse Nord IKT (07022) for bistand.' }
      }
    ],
    faq: [
      { question: 'Hvor ofte må jeg bytte passord?', answer: 'Dette følger helseforetakets standardpolicy, ofte hver 3. måned.' },
      { question: 'Kan jeg bruke BankID?', answer: 'Noen regioner støtter passordreset via ID-porten/BankID, sjekk lokal IT-policy.' }
    ]
  },

  // --- VAKTPLANLEGGING (SHIFT MANAGEMENT) ---
  {
    id: 'jatakk-bidding',
    title: 'Slik bruker du JaTakk (Ønske vakt)',
    titleNo: 'Slik bruker du JaTakk (Ønske vakt)',
    summary: 'How to bid on available shifts using JaTakk',
    summaryNo: 'Hvordan melde interesse for ledige vakter med "JaTakk"-funksjonen',
    keywords: ['jatakk', 'ledig', 'vakt', 'ekstravakt', 'bidding', 'ønske'],
    category: 'shift-management',
    interface: 'all',
    complexity: 'basic',
    estimatedTime: '1 minutt',
    steps: [
      { 
        id: 'ja-1', 
        title: 'Finn ledige vakter', 
        content: 'Gå til "Ledige vakter" i menyen (MinGat) eller appen (GatGo).',
        subSteps: ['Se etter røde vaktsymboler', 'Sjekk dato og klokkeslett nøye'],
        image: '/images/guides/new-request-menu.png'
      },
      { 
        id: 'ja-2', 
        title: 'Send JaTakk', 
        content: 'Klikk på vakten og velg "JaTakk".',
        callout: { type: 'info', title: 'Dette er et ønske', content: 'Å klikke JaTakk betyr ikke at du har fått vakten ennå. Du melder kun din interesse.' }
      },
      { 
        id: 'ja-3', 
        title: 'Avvent tildeling', 
        content: 'Leder fordeler vakten basert på kompetanse og kostnad. Du får beskjed (SMS/E-post) hvis du får vakten.',
        callout: { type: 'success', title: 'Tommel opp', content: 'I GatGo vises en tommel opp på vakter du har ønsket deg.' }
      }
    ]
  },
  {
    id: 'shift-swap',
    title: 'Bytte vakt med kollega',
    titleNo: 'Bytte vakt med kollega',
    summary: 'Process for swapping shifts while maintaining compliance',
    summaryNo: 'Prosess for å bytte vakt med en annen ansatt og regler for dette',
    keywords: ['bytte', 'vakt', 'kollega', 'swap', 'hviletid', 'aml'],
    category: 'shift-management',
    interface: 'mingat',
    complexity: 'intermediate',
    estimatedTime: '3-5 minutter',
    steps: [
      { 
        id: 'swap-1', 
        title: 'Velg vakt å bytte', 
        content: 'Gå til din kalender, klikk på vakten du vil bytte bort.',
      },
      { 
        id: 'swap-2', 
        title: 'Velg byttetype', 
        content: 'Du må velge riktig handling:',
        subSteps: [
          'Gi bort vakt: Du gir vakten uten å få noe tilbake (kollegaen får timene)',
          'Bytte vakt: Dere bytter to spesifikke datoer likt mot likt'
        ]
      },
      { 
        id: 'swap-3', 
        title: 'Velg mottaker', 
        content: 'Søk opp kollegaen du har avtalt med.',
        callout: { type: 'warning', title: 'Automatiske sperrer', content: 'GAT vil nekte byttet hvis det bryter med 11-timers hviletid eller gir for mange timer den uken.' }
      },
      { 
        id: 'swap-4', 
        title: 'Send forespørsel', 
        content: 'Kollegaen må godkjenne forespørselen, deretter må leder godkjenne endelig.'
      }
    ],
    faq: [
      { question: 'Hvorfor får jeg feilmelding når jeg prøver å bytte?', answer: 'Mest sannsynlig bryter byttet med Arbeidsmiljøloven (f.eks. for kort hviletid mellom vakter).' },
      { question: 'Kan jeg bytte en dagvakt mot en nattevakt?', answer: 'Ja, så lenge kompetansekravene er oppfylt og det ikke bryter hviletidsbestemmelsene.' }
    ]
  },

  // --- TIMEREGISTRERING (TIME TRACKING) ---
  {
    id: 'sign-timesheet',
    title: 'Signering av timeliste',
    titleNo: 'Signering av timeliste',
    summary: 'How to check and sign your hours for payroll',
    summaryNo: 'Hvordan kontrollere og signere timer for utbetaling',
    keywords: ['time', 'timeliste', 'signere', 'lønn', 'godkjenne'],
    category: 'time-tracking',
    interface: 'all',
    complexity: 'basic',
    estimatedTime: '2 minutter',
    steps: [
      { 
        id: 'sign-1', 
        title: 'Åpne timeliste', 
        content: 'Gå til "Timeliste" i GatGo eller MinGat. Her ser du vakter med variabel lønn (overtid, tillegg).',
      },
      { 
        id: 'sign-2', 
        title: 'Kontroller linjene', 
        content: 'Sjekk at klokkeslett og koder stemmer. (F.eks. kode 1411 for kveldstillegg).',
      },
      { 
        id: 'sign-3', 
        title: 'Signer vakt', 
        content: 'I GatGo: Trykk på vakten og velg "Signer". En grønn hake vil vises.',
        subSteps: ['Sveip til høyre på vakten i GatGo for hurtigsignering', 'På PC: Marker rader og klikk "Signer valgte"'],
        image: '/images/guides/timesheet-signing.png'
      },
      { 
        id: 'sign-4', 
        title: 'Angre signering?', 
        content: 'Hvis du oppdager feil etter signering (men før leder har godkjent), kan du velge "Fjern signering" for å åpne den igjen.'
      }
    ]
  },
  {
    id: 'missing-overtime',
    title: 'Feilsøking: Mangler lønn/overtid?',
    titleNo: 'Feilsøking: Mangler lønn/overtid?',
    summary: 'Steps to take if your payslip is missing hours',
    summaryNo: 'Hva du gjør hvis overtid eller tillegg mangler på lønnsslippen',
    keywords: ['lønn', 'mangler', 'overtid', 'utbetaling', 'feil'],
    category: 'time-tracking',
    interface: 'mingat',
    complexity: 'intermediate',
    estimatedTime: '5 minutter',
    steps: [
      { 
        id: 'pay-1', 
        title: 'Sjekk statusnivå i MinGat', 
        content: 'Gå til timelisten din. Hvilket nivå står linjen på?',
        subSteps: [
          'Usignert: Du må signere den først',
          'Til godkjenning (Nivå 1): Ligger hos din avdelingsleder',
          'Godkjent (Nivå 2): Godkjent av leder, sendt til lønn',
          'Overført: Sendt til bank/utbetaling'
        ]
      },
      { 
        id: 'pay-2', 
        title: 'Ligger den på Nivå 1?', 
        content: 'Hvis listen står som "Godkjent av ansatt" eller "Nivå 1", har ikke din leder godkjent den ennå.',
        callout: { type: 'info', title: 'Kontakt leder', content: 'Ikke ring lønningskontoret (Ansatteservice) hvis listen står i Nivå 1. Kontakt din nærmeste leder.' }
      },
      { 
        id: 'pay-3', 
        title: 'Er fristen ute?', 
        content: 'Husk at timer må være godkjent av leder før lønnskjøringsfristen (ofte rundt den 10. i måneden) for å komme med på neste utbetaling.'
      }
    ]
  },

  // --- NAVIGASJON (NAVIGATION) ---
  {
    id: 'simple-nav-dashboard',
    title: 'Bli kjent med startsiden',
    titleNo: 'Bli kjent med startsiden',
    summary: 'Overview of the main dashboard elements',
    summaryNo: 'En rask omvisning på startsiden i MinGat',
    keywords: ['navigasjon', 'startside', 'dashboard', 'meny', 'widgets'],
    category: 'navigation',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '2 minutter',
    steps: [
      { 
        id: 'nav-1', 
        title: 'Dine Widgets (Bokser)', 
        content: 'Startsiden består av bokser som gir rask info.',
        subSteps: [
          'I dag og i morgen: Din timeplan for de neste 48 timene',
          'Påminnelser: Røde varsler om ting du må gjøre (f.eks. signere timer)',
          'Mine apper: Snarvei til GatGo-oppsett'
        ],
        image: '/images/guides/dashboard-overview.png'
      },
      { 
        id: 'nav-2', 
        title: 'Hovedmenyen (Venstre)', 
        content: 'Her finner du dine personlige verktøy.',
        subSteps: [
          'Kalender: Hele din turnusplan',
          'Forespørsler: Status på ferieønsker og bytter',
          'Timeliste: For lønnskontroll'
        ],
        image: '/images/guides/main-menu-icons.png'
      },
      { 
        id: 'nav-3', 
        title: 'Avdelingsvelger (Topp)', 
        content: 'Jobber du flere steder? Sjekk nedtrekksmenyen øverst.',
        callout: { type: 'warning', title: 'Ser du feil vaktbok?', content: 'Husk å bytte avdeling øverst hvis du jobber på tvers av poster (f.eks. Kirurgi vs Akuttmottak).' },
        image: '/images/guides/department-switcher.png'
      }
    ]
  },

  // --- GODKJENNINGER (COMPLIANCE) ---
  {
    id: 'approval-levels',
    title: 'Forstå godkjenningsnivåer',
    titleNo: 'Forstå godkjenningsnivåer',
    summary: 'Explanation of Level 1 and Level 2 approvals',
    summaryNo: 'Hva betyr Nivå 1 og Nivå 2 i GAT?',
    keywords: ['nivå', 'godkjenning', 'level', 'status', 'lønnskjøring'],
    category: 'compliance',
    interface: 'mingat',
    complexity: 'intermediate',
    estimatedTime: '3 minutter',
    steps: [
      { 
        id: 'appr-1', 
        title: 'Nivå 1: Ledergodkjenning', 
        content: 'Dette er den lokale kontrollen. Din avdelingsleder sjekker at du faktisk var på jobb og at kodene stemmer.',
      },
      { 
        id: 'appr-2', 
        title: 'Nivå 2: Lønn/HR', 
        content: 'Etter nivå 1 går listen til sentral kontroll (HR/Lønn). De ser etter formelle feil eller brudd på tariffavtaler.',
      },
      { 
        id: 'appr-3', 
        title: 'Låst for endringer', 
        content: 'Når en vakt har nådd Nivå 2, kan den ikke endres av deg eller din leder. Da må lønningskontoret kontaktes for korrigering.',
      }
    ]
  },

  // --- FEILSØKING (TROUBLESHOOTING) ---
  {
    id: 'login-troubleshoot',
    title: 'Feilsøking: Får ikke logget inn',
    titleNo: 'Feilsøking: Får ikke logget inn',
    summary: 'Solving common login problems from home',
    summaryNo: 'Løsninger på de vanligste innloggingsproblemene hjemmefra',
    keywords: ['feil', 'error', 'innlogging', 'hjemmefra', 'sms', 'page not found'],
    category: 'troubleshooting',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '3 minutter',
    steps: [
      { 
        id: 'trb-1', 
        title: 'Feilmelding: "Siden kan ikke vises"', 
        content: 'Dette skjer ofte hvis du bruker en "intern" lenke hjemmefra.',
        callout: { type: 'success', title: 'Løsning', content: 'Sjekk at adressen starter med https://mingat... (ikke http://gat...). Bruk alltid den offisielle eksterne lenken.' }
      },
      { 
        id: 'trb-2', 
        title: 'Mottar ikke SMS-kode', 
        content: 'Systemet sender kode til nummeret registrert i personalportalen.',
        subSteps: [
          'Vent 2 minutter, noen ganger er SMS forsinket',
          'Har du byttet nummer nylig? Da må det oppdateres i systemet (krever at du er på jobb eller kontakter leder)'
        ]
      },
      { 
        id: 'trb-3', 
        title: 'Tomt skjermbilde etter innlogging?', 
        content: 'Du har kanskje logget inn, men ser ingen data.',
        callout: { type: 'info', title: 'Velg Foretak', content: 'Sjekk om du må velge helseforetak (f.eks. "Finnmarkssykehuset") i en meny før du kommer videre.' }
      }
    ]
  }
];