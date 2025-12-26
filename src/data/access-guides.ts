import { Guide } from '@/lib/types';

/**
 * Detailed guides for MinGat Home Access, Two-Factor Authentication, GatGo Mobile App,
 * and Microsoft Authenticator setup.
 * 
 * Guide 1: Setting Up Access from Home (MinGat Hjemmefra)
 * Guide 2: Logging In (Two-Factor Authentication)
 * Guide 3: Mobile App Setup (GatGo)
 * Guide 4: Microsoft Authenticator Setup (Comprehensive)
 */

export const accessGuides: Guide[] = [
  // ============================================
  // GUIDE 1: HOME ACCESS SETUP
  // ============================================
  {
    id: 'home-access-setup',
    title: 'Setting Up Access from Home',
    titleNo: 'Sette opp tilgang hjemmefra (MinGat Hjemmefra)',
    summary: 'First-time setup for external network access to MinGat',
    summaryNo: 'Førstegangs oppsett for tilgang til MinGat fra hjemmenettverket',
    keywords: [
      'hjemmekontor', 'oppsett', 'setup', 'første gang', 'first time',
      'mobilnummer', 'mobile number', 'registrere', 'register', 'telefon',
      'sms', 'otp', 'hjemmefra', 'ekstern', 'external', 'profil', 'directory',
      'telefonkatalog', 'helse nord', 'sync', 'synkronisere'
    ],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '15-20 minutter',
    steps: [
      {
        id: 'home-setup-prereq',
        title: 'Forutsetning: Du må være på sykehuset',
        content: 'For å sette opp hjemmetilgang første gang, MÅ du være fysisk til stede på sykehuset/klinikken og logget inn på det interne nettverket (Helsenettet). Dette steget kan IKKE gjøres hjemmefra.',
        callout: {
          type: 'warning',
          title: 'Viktig',
          content: 'Du må utføre Steg 1 fra en arbeidsstasjon på sykehuset. Uten dette vil ekstern pålogging feile.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/mingat-intro-1024x572.png'
      },
      {
        id: 'home-setup-step1',
        title: 'Steg 1: Registrer mobilnummer (kun internt)',
        content: 'Logg inn på den interne Helse Nord telefonkatalogen for å registrere ditt private mobilnummer. Dette nummeret brukes til å motta SMS-koder for tofaktorautentisering.',
        subSteps: [
          'Åpne telefonkatalogen fra intranett eller bruk direktelenken',
          'Naviger til "Min Profil" (My Profile)',
          'Finn feltet for privat mobilnummer',
          'Skriv inn ditt norske mobilnummer (8 siffer)',
          'Lagre endringene'
        ],
        callout: {
          type: 'info',
          title: 'Hvorfor er dette nødvendig?',
          content: 'Mobilnummeret ditt er destinasjonen for engangskoder (SMS OTP). Hvis dette mangler eller er feil, vil ekstern pålogging mislykkes.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/sms-perfil-1024x513.png'
      },
      {
        id: 'home-setup-step2',
        title: 'Steg 2: Vent på synkronisering',
        content: 'Etter at du har registrert mobilnummeret, må du vente på at katalogen synkroniserer med autentiseringsserverne.',
        callout: {
          type: 'info',
          title: 'Ventetid',
          content: 'Vent ca. 15 minutter før du prøver å logge inn hjemmefra. Synkroniseringen skjer automatisk.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/min-perfil-1024x611.png'
      },
      {
        id: 'home-setup-step3',
        title: 'Steg 3: Kontroller nettleserkrav',
        content: 'Før du prøver å logge inn hjemmefra, sørg for at enheten din oppfyller systemkravene.',
        subSteps: [
          'PC/Mac: Bruk en standard nettleser (Chrome, Edge, Safari, Firefox)',
          'iPhone/iPad: Safari eller Chrome anbefales',
          'Android: OS versjon 7.0 eller høyere er påkrevd',
          'Sørg for at nettleseren er oppdatert til siste versjon'
        ],
        callout: {
          type: 'warning',
          title: 'Android-brukere',
          content: 'Hvis du har Android versjon eldre enn 7.0, vil sikkerhetsprotokollene ikke fungere. Oppdater telefonen din eller bruk en annen enhet.'
        }
      },
      {
        id: 'home-setup-step4',
        title: 'Steg 4: Test tilgangen',
        content: 'Når du er hjemme, test at oppsettet fungerer ved å følge Guide 2: Pålogging med tofaktorautentisering.',
        callout: {
          type: 'success',
          title: 'Klar for hjemmetilgang!',
          content: 'Hvis du har fullført alle stegene over, er du klar til å logge inn på MinGat hjemmefra. Gå videre til påloggingsguiden.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/login-home.png'
      }
    ],
    relatedGuides: ['two-factor-login', 'microsoft-authenticator-setup'],
    faq: [
      {
        question: 'Jeg har ikke tilgang til sykehuset akkurat nå. Kan jeg registrere mobilnummeret hjemmefra?',
        answer: 'Nei, registrering av mobilnummer i telefonkatalogen krever at du er logget inn på det interne Helse Nord-nettverket. Du må vente til du er på jobb.'
      },
      {
        question: 'Jeg har byttet telefonnummer. Hva gjør jeg?',
        answer: 'Du må oppdatere nummeret i telefonkatalogen fra en intern arbeidsstasjon. Etter oppdatering, vent 15 minutter før du prøver ekstern pålogging.'
      },
      {
        question: 'Hvor lang tid tar synkroniseringen?',
        answer: 'Normalt tar det ca. 15 minutter. I sjeldne tilfeller kan det ta opptil 1 time. Hvis det fortsatt ikke fungerer etter 1 time, kontakt Helse Nord IKT på 07022.'
      },
      {
        question: 'Kan jeg bruke en gammel Android-telefon?',
        answer: 'Android 7.0 eller nyere er påkrevd for sikkerhetskompatibilitet. Eldre versjoner støttes ikke.'
      }
    ]
  },

  // ============================================
  // GUIDE 2: TWO-FACTOR LOGIN
  // ============================================
  {
    id: 'two-factor-login',
    title: 'Logging In (Two-Factor Authentication)',
    titleNo: 'Pålogging med tofaktorautentisering',
    summary: 'Secure login to MinGat from home or external network',
    summaryNo: 'Sikker pålogging til MinGat hjemmefra eller fra eksternt nettverk',
    keywords: [
      'login', 'pålogging', 'logg inn', '2fa', 'tofaktor', 'two-factor',
      'sms', 'kode', 'code', 'otp', 'authenticator', 'microsoft',
      'passord', 'password', 'brukernavn', 'username', 'ekstern', 'hjemme',
      'finnmarkssykehuset', 'foretak', 'velg', 'select'
    ],
    category: 'authentication',
    interface: 'mingat',
    complexity: 'basic',
    estimatedTime: '2-5 minutter',
    steps: [
      {
        id: '2fa-step1',
        title: 'Steg 1: Åpne riktig URL',
        content: 'Gå til den offisielle eksterne påloggingssiden for MinGat. Bruk ALLTID denne adressen når du logger inn hjemmefra.',
        callout: {
          type: 'warning',
          title: 'Viktig URL',
          content: 'https://mingat.helsenord.no — IKKE bruk interne snarveier eller bokmerker fra arbeidsPC-en din.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/palogging-minga-1024x418.png'
      },
      {
        id: '2fa-step2',
        title: 'Steg 2: Skriv inn påloggingsinfo',
        content: 'På innloggingsskjermen, skriv inn dine standard Helse Nord-legitimasjoner.',
        subSteps: [
          'Brukernavn: Skriv inn ditt Helse Nord brukernavn (f.eks. dine initialer som "ABC" eller "GUHV")',
          'Passord: Skriv inn det samme passordet du bruker på jobb-PC-en din'
        ],
        callout: {
          type: 'info',
          title: 'Samme passord som på jobb',
          content: 'Du bruker nøyaktig samme brukernavn og passord som når du logger på datamaskinen på sykehuset.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/glemt-password-mingat.png'
      },
      {
        id: '2fa-step3',
        title: 'Steg 3: Tofaktorutfordring',
        content: 'Etter at du har skrevet inn legitimasjonen, vil systemet be om en verifiseringskode. Du har to alternativer:',
        subSteps: [
          'SMS-metode: En engangskode (OTP) sendes til ditt registrerte mobilnummer. Skriv inn denne koden på skjermen.',
          'Microsoft Authenticator (Anbefalt): Åpne appen på telefonen og godkjenn forespørselen ved å matche tallet som vises. Se egen guide for oppsett.'
        ],
        callout: {
          type: 'info',
          title: 'Anbefalt: Microsoft Authenticator',
          content: 'Authenticator-appen er raskere og mer pålitelig enn SMS. Se vår guide "Microsoft Authenticator oppsett" for å komme i gang.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/password-recovery-mingat-1024x378.png'
      },
      {
        id: '2fa-step4',
        title: 'Steg 4: Velg organisasjon',
        content: 'Hvis du har ansettelsesforhold på tvers av flere helseforetak, vil en valgskjerm vises.',
        subSteps: [
          'Se på listen over tilgjengelige organisasjoner',
          'Velg "Finnmarkssykehuset" for å få tilgang til dine vakter og data her',
          'Hvis du jobber på UNN eller andre foretak, kan du velge dem i stedet'
        ],
        callout: {
          type: 'warning',
          title: 'Velg riktig foretak',
          content: 'Hvis du velger feil foretak, vil du se vakter og data for feil arbeidsgiver. Du må logge ut og inn igjen for å bytte.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/Endre-niva-avdeling.png'
      },
      {
        id: '2fa-step5',
        title: 'Steg 5: Dashboard-tilgang',
        content: 'Etter vellykket autentisering blir du omdirigert til MinGat-startsiden. Her kan du se dine vakter, forespørsler og meldinger.',
        callout: {
          type: 'success',
          title: 'Du er nå innlogget!',
          content: 'Du har full tilgang til MinGat. Sesjonen din varer vanligvis i flere timer, men du bør logge ut når du er ferdig.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/mingat-oslo-1024x522.png'
      }
    ],
    relatedGuides: ['home-access-setup', 'microsoft-authenticator-setup', 'gatgo-mobile-setup'],
    faq: [
      {
        question: 'Hva gjør jeg hvis jeg får "Feil brukernavn eller passord"?',
        answer: 'Dobbeltsjekk at du bruker riktig brukernavn (vanligvis dine initialer). Passordet er det samme som på jobb. Hvis du har glemt passordet, må du tilbakestille det fra en intern arbeidsstasjon eller kontakte Helse Nord IKT.'
      },
      {
        question: 'Kan jeg bruke Microsoft Authenticator i stedet for SMS?',
        answer: 'Ja, og det anbefales! Authenticator-appen er raskere og mer pålitelig enn SMS, spesielt i områder med dårlig mobildekning. Se vår separate guide for oppsett.'
      },
      {
        question: 'Hvorfor ser jeg flere organisasjoner på valglisten?',
        answer: 'Dette betyr at du har aktive ansettelsesforhold på flere helseforetak i Helse Nord. Velg det foretaket du ønsker å jobbe med akkurat nå.'
      },
      {
        question: 'Hvor lenge varer påloggingssesjonen?',
        answer: 'Sesjonen varer vanligvis i flere timer ved inaktivitet. For sikkerhets skyld anbefales det å logge ut når du er ferdig, spesielt på delte enheter.'
      },
      {
        question: 'Hva hvis SMS-koden ikke fungerer?',
        answer: 'Koden er gyldig i kun noen minutter. Hvis den har utløpt, klikk for å få tilsendt en ny kode. Vurder å sette opp Microsoft Authenticator for mer pålitelig verifisering.'
      }
    ]
  },

  // ============================================
  // GUIDE 3: GATGO MOBILE SETUP (COMPREHENSIVE)
  // ============================================
  {
    id: 'gatgo-mobile-setup',
    title: 'Mobile App Setup (GatGo)',
    titleNo: 'Brukerveiledning GatGo',
    summary: 'Complete guide to setting up and using the GatGo mobile app',
    summaryNo: 'Komplett veiledning for oppsett og bruk av GatGo mobilappen',
    keywords: [
      'gatgo', 'gat go', 'mobil', 'mobile', 'app', 'telefon', 'phone',
      'ios', 'iphone', 'android', 'installere', 'install', 'download',
      'laste ned', 'qr', 'kode', 'code', 'paring', 'pair', 'koble',
      'connect', 'pin', 'fingeravtrykk', 'fingerprint', 'faceid', 'face id',
      'visma', 'mine apper', 'my apps', 'oppsett', 'setup', 'aktivere',
      'activate', 'biometri', 'biometrics', 'sikkerhet', 'security',
      'vakter', 'ledige vakter', 'timeliste', 'banker', 'vaktbok',
      'tilgjengelighet', 'forespørsel', 'ja-takk', 'signering'
    ],
    category: 'mobile',
    interface: 'gatgo',
    complexity: 'intermediate',
    estimatedTime: '10-15 minutter',
    steps: [
      // --- INTRO ---
      {
        id: 'gatgo-intro',
        title: 'Hva er GatGo?',
        content: 'GatGo er en mobilapplikasjon som effektiviserer og forenkler kommunikasjonen mellom leder og den enkelte ansatte. Appen har mye av den samme funksjonaliteten som MinGat på PC.',
        subSteps: [
          '📅 Oversikt over egne vakter og godkjent fravær',
          '🔔 Se og søke på ledige vakter (Ja-takk)',
          '💰 Sjekk banker (avspasering, ferie, veto)',
          '📝 Timeliste med signering av lønn',
          '📖 Vaktbok - se hvem som jobber',
          '📞 Telefonliste til kolleger',
          '✅ Registrer tilgjengelighet'
        ],
        callout: {
          type: 'info',
          title: 'Siste oppdatering',
          content: 'Denne veiledningen er basert på GatGo versjon oktober 2024.'
        }
      },
      // --- DOWNLOAD ---
      {
        id: 'gatgo-step1',
        title: 'Steg 1: Last ned appen',
        content: 'Appen GatGo kan lastes ned fra App Store og Google Play. Søkeord: "GatGo" eller "Visma GatGo".',
        subSteps: [
          'iPhone: Åpne App Store → Søk "GatGo" eller "Visma GatGo"',
          'Android: Åpne Google Play → Søk "GatGo" eller "Visma GatGo"',
          'VIKTIG: Kontroller at utgiveren er "Visma Enterprise"',
          'Trykk "Installer" / "Hent" og vent til nedlastingen er ferdig'
        ],
        callout: {
          type: 'warning',
          title: 'Sjekk utgiveren!',
          content: 'Sørg for at appen er fra "Visma Enterprise". Det finnes andre apper med lignende navn som IKKE er riktig app.'
        }
      },
      // --- ACTIVATION ---
      {
        id: 'gatgo-step2',
        title: 'Steg 2: Start aktivering på PC',
        content: 'Ved første gangs pålogging må du være pålogget MinGat på PC. GatGo aktiveres og kobles via MinGat med QR-kode.',
        subSteps: [
          'Logg inn i MinGat på PC',
          'Klikk på "Gå til mobil app" på startsiden i MinGat',
          'Alternativt: Gå til "Mine apper" i menyen',
          'Klikk "Koble enhet..." for å starte veiviseren',
          'Klikk "Neste" når appen er lastet ned på telefonen'
        ],
        callout: {
          type: 'warning',
          title: 'Forutsetning',
          content: 'Du MÅ være logget inn på MinGat i en nettleser på PC for å fullføre dette steget. Ha mobiltelefonen din tilgjengelig.'
        }
      },
      // --- QR CODE ---
      {
        id: 'gatgo-step3',
        title: 'Steg 3: Skann QR-koden',
        content: 'QR-koden vises på skjermen i MinGat. Bruk GatGo-appen til å skanne den.',
        subSteps: [
          'Åpne GatGo-appen på mobiltelefonen',
          'Trykk på "Logg inn"',
          'Trykk "Aksepter vilkår"',
          'Trykk "Scann QR-kode"',
          'Hold kameraet slik at du ser veiviserens QR-kode i GatGo',
          'Når QR-koden gjenkjennes, vises en 8-sifret kode (bokstaver/tall) på mobilen'
        ],
        callout: {
          type: 'info',
          title: 'Kamera fungerer ikke?',
          content: 'Du kan skrive inn URL-en manuelt som vises under QR-koden på PC-skjermen.'
        }
      },
      // --- CONFIRMATION CODE ---
      {
        id: 'gatgo-step4',
        title: 'Steg 4: Bekreft koblingen',
        content: 'Skriv inn bekreftelseskoden fra mobilen i MinGat på PC for å fullføre koblingen.',
        subSteps: [
          'Se den 8-sifrede koden som vises på mobilen',
          'Skriv denne koden inn i MinGat på PC',
          'Klikk "Neste" i MinGat',
          'Koblingen verifiseres i både GatGo og MinGat',
          'Appen er nå klar til bruk!'
        ],
        callout: {
          type: 'success',
          title: 'Ferdig!',
          content: 'Når appen er installert, vil et nytt ikon "Mine apper" være tilgjengelig i menyen i MinGat. Du kan nå bruke GatGo!'
        }
      },
      // --- MENU: ALLE VAKTER ---
      {
        id: 'gatgo-menu-alle-vakter',
        title: 'Meny: Alle vakter',
        content: '"Alle vakter" viser oversikt over egne vakter og godkjent fravær, i tillegg til ledige vakter på avdelingen.',
        subSteps: [
          'Bla fremover/bakover: 1 måned tilbake, 1 år fremover',
          'Trykk på en vakt for mer informasjon',
          'Dagens dato vises med blå skrift',
          'Søndager og røde dager vises med rød skrift',
          'Dag-ikonet (øverst høyre): Vis kun dagens vakt',
          'Kalender-ikonet: Bytt mellom dag- og listevisning'
        ],
        callout: {
          type: 'info',
          title: 'Registrer forespørsler',
          content: 'Trykk på det grønne plusstegnet (+) for å registrere Ekstra, Fravær eller Fleks. Tilgjengelige forespørsler avhenger av avdelingsoppsettet.'
        }
      },
      // --- MENU: MINE VAKTER ---
      {
        id: 'gatgo-menu-mine-vakter',
        title: 'Meny: Mine vakter',
        content: '"Mine vakter" viser kun dine egne vakter og godkjent fravær. Dette er standardsiden ved innlogging.',
        subSteps: [
          'Vises automatisk ved oppstart av appen',
          'Bla fremover/bakover: 1 måned tilbake, 1 år fremover',
          'Trykk på en vakt for detaljer',
          'Registrer forespørsler med grønt pluss-ikon'
        ]
      },
      // --- MENU: LEDIGE VAKTER ---
      {
        id: 'gatgo-menu-ledige-vakter',
        title: 'Meny: Ledige vakter (Ja-takk)',
        content: 'Se og søk på ledige vakter fra alle avdelinger du har rettighet til.',
        subSteps: [
          'Ledige vakter vises med rødt vaktsymbol',
          'Vakter som overlapper med dine egne vises IKKE',
          'Vakter merket "skal ikke dekkes" i Gat vises IKKE',
          'Trykk på en ledig vakt for å åpne Ja-takk skjema',
          'Legg inn kommentar (valgfritt) og klikk "Jatakk"',
          'Vakten vises med "Tommel opp" symbol mens den behandles',
          'Du kan endre/slette forespørselen inntil den er godkjent'
        ],
        callout: {
          type: 'success',
          title: 'Ja-takk systemet',
          content: 'Når leder godkjenner din Ja-takk forespørsel, vil vakten automatisk vises som en vanlig vakt i din kalender.'
        }
      },
      // --- MENU: TILGJENGELIGHET ---
      {
        id: 'gatgo-menu-tilgjengelighet',
        title: 'Meny: Tilgjengelighet',
        content: 'Legg inn når du er tilgjengelig for ekstra vakter. Forutsetter at dette er aktivert i avdelingsoppsettet.',
        subSteps: [
          'Velg dato i kalenderen',
          'Velg mellom: Dag, Aften, Natt',
          'For å fjerne tilgjengelighet: Klikk på registreringen',
          'Trykk på linjen for å legge inn kommentar',
          'Leder kan se din tilgjengelighet ved behov for vikar'
        ]
      },
      // --- MENU: TELEFONLISTE ---
      {
        id: 'gatgo-menu-telefonliste',
        title: 'Meny: Telefonliste',
        content: 'Se telefonnummer til kolleger på valgt avdeling.',
        subSteps: [
          'Viser liste over ansatte på din avdeling',
          'Trykk på ønsket navn for å se telefonnummer',
          'Viser kun nummer hvis det er registrert mobilnummer på den ansatte'
        ]
      },
      // --- MENU: BANKER ---
      {
        id: 'gatgo-menu-banker',
        title: 'Meny: Banker',
        content: 'Se oversikt og verdier i dine tilgjengelige banker.',
        subSteps: [
          'Avspasering: Timer/minutter til gode',
          'Ferie - vakter: Feriedager som vakter',
          'Ferie 6 dgr/uke: Feriedager (standard)',
          'Veto: Veto-poeng for ønsketurnus',
          'Egendefinerte banker vises også her'
        ]
      },
      // --- MENU: TIMELISTE ---
      {
        id: 'gatgo-menu-timeliste',
        title: 'Meny: Timeliste og signering',
        content: '"Timeliste" viser vakter og fravær med lønnsberegning som må signeres eller allerede er signert.',
        subSteps: [
          'Usignerte vakter: Ingen hake',
          'Signerte vakter: Grønn hake ✓',
          'Trykk på en vakt for å se konteringer og signere',
          'Trykk "Signer" for å godkjenne lønnslinjen',
          'For å angre: Trykk vakten → "Fjern signering"'
        ],
        callout: {
          type: 'info',
          title: 'Hurtigsignering',
          content: 'Du kan også signere ved å holde på vakten og dra mot høyre. For å fjerne signering, dra mot venstre.'
        }
      },
      // --- MENU: VAKTBOK ---
      {
        id: 'gatgo-menu-vaktbok',
        title: 'Meny: Vaktbok',
        content: '"Vaktbok" viser en listevisning av alle planlagte vakter med ansatte for totalt 90 dager.',
        subSteps: [
          'Første visning: Dagens dato',
          'Kan se 30 dager tilbake og 60 dager fremover',
          'Viser hvem som jobber hvilke vakter (Dag, Aften, Natt)',
          'Hvis du tilhører flere avdelinger: Trykk på avdelingsnavn for å bytte',
          'Se hvilke kolleger som jobber samme dag som deg'
        ]
      },
      // --- SETTINGS ---
      {
        id: 'gatgo-innstillinger',
        title: 'Innstillinger og utlogging',
        content: 'Under "Innstillinger" finner du språkvalg og mulighet for å logge ut.',
        subSteps: [
          'Språkvalg: Norsk, Svensk, Engelsk',
          'Vis ditt kontonavn',
          'Vilkår og personverninformasjon',
          'Logg ut: Kobler fra enheten'
        ],
        callout: {
          type: 'warning',
          title: 'Fjerne enhet',
          content: 'Fra MinGat på PC: Gå til "Mine apper" → "Fjern tilgang" på den enheten som ikke lenger skal brukes. Fra GatGo: Velg "Innstillinger" → "Logg ut".'
        }
      }
    ],
    relatedGuides: ['home-access-setup', 'two-factor-login', 'microsoft-authenticator-setup'],
    faq: [
      {
        question: 'Jeg har byttet telefon. Hvordan overfører jeg GatGo?',
        answer: 'GatGo kan IKKE overføres direkte. Du må fjerne den gamle enheten i MinGat på PC ("Mine apper" → "Fjern tilgang"), og deretter gjenta oppsettet med QR-kode på den nye telefonen.'
      },
      {
        question: 'Jeg har glemt PIN-koden min. Hva gjør jeg?',
        answer: 'Du må slette appen og installere den på nytt, deretter gjenta paringsprosessen med QR-kode fra MinGat på PC.'
      },
      {
        question: 'Kan jeg bruke GatGo på nettbrett?',
        answer: 'Ja, GatGo fungerer på iPad og Android-nettbrett. Prosessen er identisk med mobiltelefon.'
      },
      {
        question: 'Hvor lenge varer innloggingen i appen?',
        answer: 'Du forblir innlogget permanent, men appen krever PIN eller biometri (fingeravtrykk/ansikt) etter 5 minutters inaktivitet.'
      },
      {
        question: 'Hvorfor ser jeg ikke alle ledige vakter?',
        answer: 'Ledige vakter som overlapper med dine egne vakter vises ikke. Vakter merket "skal ikke dekkes" i Gat vises heller ikke.'
      },
      {
        question: 'Kan jeg registrere fravær i GatGo?',
        answer: 'Ja, trykk på det grønne plusstegnet (+) i "Alle vakter" eller "Mine vakter" og velg "Fravær". Du må velge fraværskode og om det gjelder en eller flere dager.'
      },
      {
        question: 'Hva betyr timeglassymbolet på en vakt?',
        answer: 'Timeglassymbolet viser at du har en ubehandlet forespørsel (f.eks. Ja-takk eller ekstravakt) som venter på godkjenning fra leder.'
      },
      {
        question: 'Hvordan signerer jeg timelisten min?',
        answer: 'Gå til "Timeliste", trykk på vakten du vil signere, og trykk "Signer". Alternativt kan du holde på vakten og dra mot høyre for hurtigsignering.'
      },
      {
        question: 'Kan jeg se hvem som jobber i dag?',
        answer: 'Ja, gå til "Vaktbok" for å se alle planlagte vakter med ansattnavn. Du kan se 30 dager tilbake og 60 dager fremover.'
      },
      {
        question: 'Hva er forskjellen på "Alle vakter" og "Mine vakter"?',
        answer: '"Mine vakter" viser kun dine egne vakter og fravær. "Alle vakter" viser i tillegg ledige vakter på avdelingen som du kan søke på.'
      },
      {
        question: 'Hvordan registrerer jeg at jeg kan jobbe ekstra?',
        answer: 'Bruk "Tilgjengelighet" i menyen for å markere når du er tilgjengelig for dag-, aften- eller nattevakter. Leder kan se dette ved behov.'
      },
      {
        question: 'Krever GatGo brukernavn og passord?',
        answer: 'Nei, etter første gangs oppsett med QR-kode krever appen kun PIN eller biometri (fingeravtrykk/ansikt). Du trenger ikke huske brukernavn/passord.'
      }
    ]
  },

  // ============================================
  // GUIDE 4: MICROSOFT AUTHENTICATOR SETUP (COMPREHENSIVE)
  // ============================================
  {
    id: 'microsoft-authenticator-setup',
    title: 'Microsoft Authenticator Setup',
    titleNo: 'Microsoft Authenticator oppsett',
    summary: 'Complete guide to setting up Microsoft Authenticator for healthcare workers',
    summaryNo: 'Komplett guide til oppsett av Microsoft Authenticator for helseansatte',
    keywords: [
      'microsoft', 'authenticator', 'app', 'mfa', '2fa', 'tofaktor',
      'push', 'notification', 'varsling', 'godkjenn', 'approve',
      'sikkerhet', 'security', 'azure', 'entra', 'ad', 'konto',
      'account', 'oppsett', 'setup', 'installere', 'install',
      'qr', 'kode', 'code', 'alternativ', 'alternative', 'sms',
      'normen', 'helse nord', 'helse vest', 'sykehuspartner', 'totp',
      'backup', 'gjenoppretting', 'feilsøking', 'troubleshooting'
    ],
    category: 'authentication',
    interface: 'all',
    complexity: 'basic',
    estimatedTime: '10-15 minutter',
    steps: [
      // --- INTRO ---
      {
        id: 'auth-intro',
        title: 'Hvorfor Microsoft Authenticator?',
        content: 'Microsoft Authenticator er nå standardløsningen for tofaktorautentisering (2FA) i norske helseforetak, inkludert Helse Nord, Finnmarkssykehuset og alle regionale helseforetak.',
        subSteps: [
          '✓ Normen-krav: Tofaktorautentisering er obligatorisk for hjemmekontor og mobiltilgang',
          '✓ Sikrere enn SMS: Beskyttet mot SIM-svindel og SMS-avlytting',
          '✓ Raskere: Godkjenn med ett trykk i stedet for å vente på SMS',
          '✓ Mer pålitelig: Fungerer selv uten mobildekning (kun internett)',
          '✓ Fungerer offline: Kan generere 6-sifrede koder uten nett'
        ],
        callout: {
          type: 'info',
          title: 'Sikkerhetsnivå iht. Normen',
          content: 'Microsoft Authenticator oppfyller kravene til sikkerhetsnivå "betydelig" og er godkjent for tilgang til pasientjournaler, MinGat, Microsoft 365 og VDI-løsninger.'
        }
      },
      // --- DOWNLOAD ---
      {
        id: 'auth-step1',
        title: 'Steg 1: Last ned Microsoft Authenticator',
        content: 'Installer appen fra din enhets appbutikk. Appen er gratis og utgitt av Microsoft Corporation.',
        subSteps: [
          'iPhone: Åpne App Store → Søk "Microsoft Authenticator" → Velg appen fra Microsoft Corporation → Trykk "Hent"',
          'Android: Åpne Google Play → Søk "Microsoft Authenticator" → Velg appen fra Microsoft Corporation → Trykk "Installer"',
          'VIKTIG: Tillat varslinger når appen spør - dette er nødvendig for push-godkjenninger'
        ],
        callout: {
          type: 'warning',
          title: 'Sjekk at det er riktig app',
          content: 'Det finnes mange authenticator-apper. Sørg for at du laster ned den offisielle Microsoft Authenticator fra Microsoft Corporation.'
        }
      },
      // --- HELSE NORD SETUP ---
      {
        id: 'auth-step2',
        title: 'Steg 2: Oppsett for Helse Nord-ansatte',
        content: 'Helse Nord IKT benytter workspace.helsenord.no for VDI-tilgang og Microsoft 365. Førstegangsoppsett MÅ gjøres på helsenettet.',
        subSteps: [
          'Åpne nettleser på en arbeidsstasjon (må være på helsenettet)',
          'Gå til: https://mysignins.microsoft.com/security-info (eller https://aka.ms/mfasetup)',
          'Logg inn med din Helse Nord e-postadresse og passord',
          'Klikk "Legg til påloggingsmetode" (Add sign-in method)',
          'Velg "Authenticator-app" fra nedtrekksmenyen',
          'Klikk "Legg til"'
        ],
        callout: {
          type: 'warning',
          title: 'Må gjøres på sykehusnettet',
          content: 'Første gangs oppsett krever at du er logget inn på det interne nettverket. Du kan ikke gjøre dette hjemmefra.'
        }
      },
      // --- MOBILE SETUP ---
      {
        id: 'auth-step3',
        title: 'Steg 3: Koble appen til kontoen din',
        content: 'Nå skal du koble Microsoft Authenticator-appen til din Helse Nord-konto ved å skanne QR-koden.',
        subSteps: [
          'Åpne Microsoft Authenticator-appen på telefonen',
          'Trykk "+" (pluss-ikonet) øverst til høyre',
          'Velg "Jobb- eller skolekonto"',
          'Trykk "Skann en QR-kode"',
          'Tillat kameratilgang hvis appen spør',
          'Rett kameraet mot QR-koden på PC-skjermen',
          'Appen vil vise din Helse Nord-konto'
        ],
        callout: {
          type: 'info',
          title: 'Kan ikke skanne QR-koden?',
          content: 'Klikk "Kan ikke skanne bildet?" på PC-skjermen og skriv inn koden manuelt. Sjekk lysforhold og at kameraet ikke er tildekket.'
        }
      },
      // --- TEST ---
      {
        id: 'auth-step4',
        title: 'Steg 4: Test godkjenningen',
        content: 'Microsoft sender en testforespørsel til appen for å bekrefte at alt fungerer. Dette bruker "number matching" for ekstra sikkerhet.',
        subSteps: [
          'Et tosifret tall vises på PC-skjermen (f.eks. "47")',
          'En push-varsling kommer på telefonen din',
          'Åpne varslingen i Authenticator-appen',
          'Skriv inn det samme tallet som vises på PC-skjermen',
          'Trykk "Godkjenn" (eller "Approve")',
          'På PC-skjermen klikker du "Ferdig"'
        ],
        callout: {
          type: 'success',
          title: 'Gratulerer!',
          content: 'Microsoft Authenticator er nå satt opp. Neste gang du logger inn på MinGat hjemmefra, kan du godkjenne med appen i stedet for SMS.'
        }
      },
      // --- DEFAULT METHOD ---
      {
        id: 'auth-step5',
        title: 'Steg 5: Sett som standard metode (anbefalt)',
        content: 'Du kan gjøre Authenticator til din foretrukne metode slik at du slipper å velge hver gang.',
        subSteps: [
          'Gå tilbake til https://mysignins.microsoft.com/security-info',
          'Finn "Standard påloggingsmetode" (Default sign-in method)',
          'Klikk "Endre"',
          'Velg "Microsoft Authenticator - varsling" fra listen',
          'Klikk "Bekreft"'
        ],
        callout: {
          type: 'info',
          title: 'Behold SMS som backup',
          content: 'Ikke fjern SMS-metoden helt. Den fungerer som backup hvis du mister telefonen eller appen ikke fungerer.'
        }
      },
      // --- SWITCH FROM SMS ---
      {
        id: 'auth-step6',
        title: 'Bytte fra SMS til Authenticator',
        content: 'Hvis du allerede bruker SMS-koder for tofaktorautentisering, kan du enkelt bytte til Authenticator.',
        subSteps: [
          'Gå til https://mysignins.microsoft.com/security-info',
          'Logg inn med eksisterende 2FA (SMS-kode)',
          'Under "Påloggingsmetoder" klikk "Legg til metode"',
          'Velg "Authenticator-app" og følg QR-kode-oppsettet',
          'Etter vellykket oppsett, klikk på SMS-metoden og velg "Endre" eller "Fjern"',
          'Sett Microsoft Authenticator som standard metode'
        ],
        callout: {
          type: 'info',
          title: 'Automatisk migrasjon',
          content: 'IT-administratorer kan aktivere en "nudge"-funksjon. Ved innlogging ser du meldingen "Forbedre påloggingsopplevelsen". Du kan utsette opptil 3 ganger før det blir obligatorisk.'
        }
      },
      // --- MINGAT SPECIFIC ---
      {
        id: 'auth-step7',
        title: 'MinGat-spesifikt oppsett',
        content: 'MinGat støtter to autentiseringsmetoder. Hvilken som gjelder for deg avhenger av ditt helseforetak.',
        subSteps: [
          'Alternativ A (TOTP): Logg inn på MinGat → Kontoinnstillinger → "Sett opp autentiseringsapp" → Skann QR-kode → Velg "Annen konto" i Authenticator',
          'Alternativ B (Azure AD - Helse Vest-modellen): Ditt Microsoft 365-oppsett gjelder automatisk for MinGat',
          'Ved pålogging på MinGat utenfra sykehusnettet, godkjenn push-varselet på telefonen'
        ],
        callout: {
          type: 'info',
          title: 'Helse Bergen sier:',
          content: '"For å logge inn på MinGat frå mobil/privat PC utanfor sjukehusnettet må du først laste ned og aktivere Microsoft Authenticator på din mobil."'
        }
      },
      // --- BACKUP ---
      {
        id: 'auth-step8',
        title: 'Sikkerhetskopering (viktig!)',
        content: 'Aktiver sikkerhetskopiering slik at du enkelt kan gjenopprette kontoene dine på en ny telefon.',
        subSteps: [
          'Android: Åpne Authenticator → Meny (≡) → Innstillinger → Aktiver "Skybasert sikkerhetskopi" → Velg en personlig Microsoft-konto',
          'iOS: Aktiver iCloud Drive og iCloud Keychain → Innstillinger → [Ditt navn] → iCloud → Vis alle → Authenticator → Aktiver',
          'VIKTIG: Sikkerhetskopier kan IKKE flyttes mellom iOS og Android'
        ],
        callout: {
          type: 'warning',
          title: 'Gjenoppretting på ny telefon',
          content: 'Ved bytte av telefon: Installer appen → Ikke logg inn først → Trykk "Start gjenoppretting" → Logg inn med backup-kontoen. Jobbkontoer må reaktiveres manuelt.'
        }
      }
    ],
    relatedGuides: ['two-factor-login', 'home-access-setup', 'gatgo-mobile-setup'],
    faq: [
      {
        question: 'Jeg mottar ikke push-varsler. Hva gjør jeg?',
        answer: 'Sjekk at varslinger er aktivert: Innstillinger → Apper → Microsoft Authenticator → Varslinger → Aktiver. Deaktiver "Ikke forstyrr"-modus. Android: Sett batteribruk til "Ubegrenset" for Authenticator. iOS: Kontroller at iCloud-tjenester er aktivert. Prøv å bytte mellom Wi-Fi og mobildata.'
      },
      {
        question: 'Den 6-sifrede koden fungerer ikke. Hvorfor?',
        answer: 'Årsaken er vanligvis feil tidssynkronisering mellom telefon og server. Android: Innstillinger → System → Dato og tid → Aktiver "Bruk nettverksbasert tid". iOS: Innstillinger → Generelt → Dato og tid → Aktiver "Angi automatisk". Start telefonen på nytt etterpå.'
      },
      {
        question: 'Jeg får feilmelding "Kontoen finnes allerede". Hva gjør jeg?',
        answer: 'Åpne Microsoft Authenticator → Hold inne på den eksisterende kontoen → Velg "Fjern konto" og bekreft → Start appen på nytt → Legg til kontoen på nytt via QR-kode.'
      },
      {
        question: 'Jeg er låst ute etter for mange forsøk. Hjelp!',
        answer: 'Vent 10-15 minutter før nytt forsøk. Kontakt IT-brukerstøtte (Helse Nord: 07022) som kan utstede Temporary Access Pass (TAP) - en midlertidig engangskode.'
      },
      {
        question: 'Kan jeg bruke Authenticator på flere enheter?',
        answer: 'Ja, men du må sette opp hver enhet separat. Det anbefales å ha appen på kun én enhet for sikkerhet.'
      },
      {
        question: 'Hva skjer hvis jeg bytter telefon?',
        answer: 'Du må sette opp Authenticator på nytt på den nye telefonen. Husk å ha SMS som backup-metode slik at du kan logge inn for å legge til den nye enheten. Se også steget om sikkerhetskopering.'
      },
      {
        question: 'Fungerer dette uten internett?',
        answer: 'Push-varsler krever internett, men appen kan også generere 6-sifrede engangskoder (TOTP) som fungerer offline. Trykk på kontoen i appen for å se koden. Den oppdateres hvert 30. sekund.'
      },
      {
        question: 'Er dette tryggere enn SMS?',
        answer: 'Ja, betydelig. SMS kan avlyttes eller omdirigeres via SIM-svindel. Authenticator bruker kryptografiske nøkler som er bundet til din spesifikke enhet. Normen klassifiserer SMS som mindre sikker enn app-basert autentisering.'
      },
      {
        question: 'Hva er "number matching" / tallet jeg må matche?',
        answer: 'Microsoft bruker "number matching" som ekstra sikkerhet. Du må skrive inn det samme tallet som vises på skjermen for å bevise at det er du som logger inn, ikke en angriper som har lurt deg til å godkjenne.'
      },
      {
        question: 'Kan jeg bruke Google Authenticator i stedet?',
        answer: 'For noen systemer ja (f.eks. MinGat med TOTP), men Microsoft Authenticator anbefales fordi den støtter push-varsler og er bedre integrert med Microsoft 365 og Azure AD som brukes i Helse Nord.'
      },
      {
        question: 'Hva med Visma Connect?',
        answer: 'Visma Connect støtter Microsoft Authenticator via TOTP. Gå til https://accountsettings.connect.visma.com → Sikkerhet → Aktiver 2FA → Skann QR-koden. SMS kan beholdes som backup.'
      },
      {
        question: 'Hvor finner jeg IT-støtte?',
        answer: 'Helse Nord IKT / Finnmarkssykehuset: 07022 | Helse Vest IKT: 55 97 65 40 | Sykehuspartner (Helse Sør-Øst): Via BAT-systemet på intranett.'
      }
    ]
  }
];

/**
 * Helper function to get a specific access guide
 */
export const getAccessGuideById = (id: string): Guide | undefined => {
  return accessGuides.find((g) => g.id === id);
};
