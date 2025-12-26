import { Guide } from '@/lib/types';

/**
 * Detailed guides for MinGat Home Access, Two-Factor Authentication, and GatGo Mobile App
 * These guides are specifically for Finnmarkssykehuset employees
 * 
 * Guide 1: Setting Up Access from Home (MinGat Hjemmefra)
 * Guide 2: Logging In (Two-Factor Authentication)
 * Guide 3: Mobile App Setup (GatGo)
 */

export const accessGuides: Guide[] = [
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
    relatedGuides: ['two-factor-login', 'login-troubleshooting'],
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
          'Microsoft Authenticator (Alternativ): Hvis konfigurert, åpne appen på telefonen din og godkjenn forespørselen ved å matche tallet som vises på skjermen.'
        ],
        callout: {
          type: 'info',
          title: 'Ingen SMS mottatt?',
          content: 'Vent opptil 2 minutter. Sjekk at telefonen har dekning. Hvis SMS fortsatt ikke kommer, er mobilnummeret ditt kanskje ikke registrert korrekt - se Guide 1.'
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
    relatedGuides: ['home-access-setup', 'gatgo-mobile-setup', 'login-troubleshooting'],
    faq: [
      {
        question: 'Hva gjør jeg hvis jeg får "Feil brukernavn eller passord"?',
        answer: 'Dobbeltsjekk at du bruker riktig brukernavn (vanligvis dine initialer). Passordet er det samme som på jobb. Hvis du har glemt passordet, må du tilbakestille det fra en intern arbeidsstasjon eller kontakte Helse Nord IKT.'
      },
      {
        question: 'Kan jeg bruke Microsoft Authenticator i stedet for SMS?',
        answer: 'Ja, hvis dette er konfigurert for din konto. Authenticator-appen kan være raskere og mer pålitelig enn SMS, spesielt i områder med dårlig mobildekning.'
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
        answer: 'Koden er gyldig i kun noen minutter. Hvis den har utløpt, klikk for å få tilsendt en ny kode. Sørg for at du skriver inn koden nøyaktig som mottatt, uten mellomrom.'
      }
    ]
  },

  {
    id: 'gatgo-mobile-setup',
    title: 'Mobile App Setup (GatGo)',
    titleNo: 'Mobilapp-oppsett (GatGo)',
    summary: 'Authorize the GatGo mobile app on your personal device',
    summaryNo: 'Autoriser GatGo mobilappen på din personlige enhet',
    keywords: [
      'gatgo', 'gat go', 'mobil', 'mobile', 'app', 'telefon', 'phone',
      'ios', 'iphone', 'android', 'installere', 'install', 'download',
      'laste ned', 'qr', 'kode', 'code', 'paring', 'pair', 'koble',
      'connect', 'pin', 'fingeravtrykk', 'fingerprint', 'faceid', 'face id',
      'visma', 'mine apper', 'my apps', 'oppsett', 'setup', 'aktivere',
      'activate', 'biometri', 'biometrics', 'sikkerhet', 'security'
    ],
    category: 'mobile',
    interface: 'gatgo',
    complexity: 'intermediate',
    estimatedTime: '10-15 minutter',
    steps: [
      {
        id: 'gatgo-intro',
        title: 'Forutsetning: Forstå sikkerhetsmodellen',
        content: 'GatGo bruker en "device binding" sikkerhetsmodell. Dette betyr at appen må kryptografisk kobles til din MinGat-profil via en nettleser på PC. Du kan IKKE logge inn med kun brukernavn og passord.',
        callout: {
          type: 'info',
          title: 'Hvorfor device binding?',
          content: 'Denne sikkerhetsmodellen sikrer at sensitive vaktdata kun er tilgjengelig på autoriserte enheter. Hvis du mister telefonen din, kan du enkelt fjerne tilgangen fra MinGat på PC.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/mobilgat.png'
      },
      {
        id: 'gatgo-step1',
        title: 'Steg 1: Last ned appen',
        content: 'Åpne App Store (iPhone) eller Google Play (Android) på din mobilenhet og søk etter GatGo-appen.',
        subSteps: [
          'Åpne enhetens appbutikk',
          'Søk etter "Visma GatGo" eller bare "GatGo"',
          'VIKTIG: Kontroller at utgiveren er "Visma Enterprise"',
          'Trykk "Installer" og vent til nedlastingen er ferdig'
        ],
        callout: {
          type: 'warning',
          title: 'Sjekk utgiveren!',
          content: 'Sørg for at appen er fra "Visma Enterprise". Det finnes andre apper med lignende navn som IKKE er riktig app.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/gatmobil.png'
      },
      {
        id: 'gatgo-step1-links',
        title: 'Direkte nedlastingslenker',
        content: 'Bruk disse offisielle lenkene for å sikre at du laster ned riktig app:',
        subSteps: [
          'iPhone/iPad (App Store): https://apps.apple.com/no/app/visma-gatgo/id1303560961',
          'Android (Google Play): Søk "Visma GatGo" i Google Play Store'
        ],
        callout: {
          type: 'info',
          title: 'Systemkrav',
          content: 'iOS 12.0 eller nyere for iPhone. Android 7.0 eller nyere for Android-enheter.'
        }
      },
      {
        id: 'gatgo-step2',
        title: 'Steg 2: Generer paringsnøkkel (på PC)',
        content: 'Du må nå logge inn på MinGat fra en datamaskin for å generere en QR-kode som kobler mobilappen til din profil.',
        subSteps: [
          'Internt nettverk: Bruk snarveien "MinGat" på skrivebordet eller i startmenyen',
          'Hjemmefra: Gå til https://mingat.helsenord.no og logg inn med tofaktor'
        ],
        callout: {
          type: 'warning',
          title: 'Forutsetning',
          content: 'Du MÅ være logget inn på MinGat i en nettleser på PC for å fullføre dette steget. Appen kan ikke settes opp fra mobilen alene.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/mingat-intro-1024x572.png'
      },
      {
        id: 'gatgo-step2-navigate',
        title: 'Finn mobilapp-innstillinger',
        content: 'Når du er logget inn på MinGat, må du finne veiviseren for mobilapp-oppsett.',
        subSteps: [
          'Metode 1: Se etter knappen "Gå til mobil app" direkte på startsiden (Dashboard)',
          'Metode 2: Hvis knappen ikke er synlig, klikk på ditt navn/profil øverst til høyre',
          'Velg "Min Profil" fra menyen',
          'Se etter seksjonen "Mine Apper" eller "Mobilapper"',
          'Klikk på "Legg til enhet" eller "Ny mobilenhet"'
        ],
        callout: {
          type: 'info',
          title: 'Kan ikke finne knappen?',
          content: 'Plasseringen kan variere mellom versjoner. Prøv å søke etter "mobil" i MinGat-menyen, eller kontakt din leder hvis funksjonen ikke er tilgjengelig for din bruker.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/meny-mingat-1024x412.png'
      },
      {
        id: 'gatgo-step2-qr',
        title: 'QR-kode vises',
        content: 'En veiviser åpnes og viser en stor QR-kode på skjermen. IKKE lukk dette vinduet – du trenger det i neste steg.',
        callout: {
          type: 'warning',
          title: 'Hold vinduet åpent',
          content: 'QR-koden er tidsbegrenset og unik for denne paringsprosessen. Hvis du lukker vinduet, må du starte på nytt.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/mingat-configuracio.png'
      },
      {
        id: 'gatgo-step3',
        title: 'Steg 3: Synkroniser enheten (på mobil)',
        content: 'Nå bruker du mobiltelefonen din til å skanne QR-koden og fullføre paringen.',
        subSteps: [
          'Åpne GatGo-appen på mobilen',
          'Trykk på "Logg inn"',
          'Les og aksepter vilkårene ved å trykke "Aksepter vilkår"'
        ],
        image: 'https://mingat.info/wp-content/uploads/2022/10/mobilgat-oslo.png'
      },
      {
        id: 'gatgo-step3-scan',
        title: 'Skann QR-koden',
        content: 'Appen vil be om tilgang til kameraet for å skanne QR-koden.',
        subSteps: [
          'Trykk på "Scann QR-kode"',
          'Gi appen tillatelse til å bruke kameraet hvis den spør',
          'Rett kameraet mot QR-koden på PC-skjermen',
          'Hold telefonen stabil til koden er lest'
        ],
        callout: {
          type: 'info',
          title: 'Kamera fungerer ikke?',
          content: 'Hvis kameraet ikke fungerer eller er blokkert: Finn den alfanumeriske lenken under QR-koden på PC-skjermen. Du kan skrive denne URL-en manuelt i mobilnettleseren.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/data-mobilgat.png'
      },
      {
        id: 'gatgo-step3-verify',
        title: 'Verifiseringsloop',
        content: 'For å sikre at det er DU som kobler enheten, brukes en toveis verifisering.',
        subSteps: [
          'Etter skanning viser mobilen en 8-sifret kode (f.eks. "A1B2-C3D4")',
          'VIKTIG: Du må nå skrive denne koden inn på PC-skjermen',
          'Skriv koden nøyaktig som vist, med bindestrek',
          'Klikk "Neste" på PC-en for å fullføre håndtrykket'
        ],
        callout: {
          type: 'warning',
          title: 'Koden må matches',
          content: 'Hvis koden skrives feil, vil paringen mislykkes. Start på nytt hvis du får feilmelding.'
        }
      },
      {
        id: 'gatgo-step4',
        title: 'Steg 4: Sikkerhetskonfigurasjon',
        content: 'Etter vellykket paring må du sette opp sikkerhet for daglig bruk av appen.',
        image: 'https://mingat.info/wp-content/uploads/2022/10/sidevalg-1024x604.png'
      },
      {
        id: 'gatgo-step4-pin',
        title: 'Opprett PIN-kode',
        content: 'Du blir bedt om å opprette en 4-sifret PIN-kode. Denne brukes for å logge inn i appen daglig.',
        subSteps: [
          'Velg 4 siffer du kan huske',
          'UNNGÅ enkle kombinasjoner som 1234, 0000 eller fødselsdato',
          'Bekreft PIN-koden ved å skrive den inn på nytt'
        ],
        callout: {
          type: 'info',
          title: 'PIN vs. passord',
          content: 'PIN-koden er kun for appen og er IKKE det samme som ditt Helse Nord-passord. Du kan ha forskjellige koder.'
        }
      },
      {
        id: 'gatgo-step4-biometrics',
        title: 'Aktiver biometri (anbefalt)',
        content: 'For raskere innlogging anbefales det sterkt å aktivere biometrisk autentisering.',
        subSteps: [
          'Når du blir spurt, velg "Ja" for å aktivere FaceID (iPhone) eller Fingeravtrykk',
          'Følg instruksjonene for å registrere ansikt eller fingeravtrykk',
          'Dette gjør innlogging mye raskere i en travel hverdag'
        ],
        callout: {
          type: 'success',
          title: 'Sterkt anbefalt',
          content: 'Appen krever re-autentisering etter 5 minutters inaktivitet. Med biometri trenger du bare å se på telefonen eller bruke fingeren – ingen kode å huske!'
        }
      },
      {
        id: 'gatgo-step5',
        title: 'Steg 5: Flere arbeidsgivere (valgfritt)',
        content: 'Hvis du jobber for flere helseforetak (f.eks. UNN og Finnmarkssykehuset), kan du legge til flere profiler.',
        subSteps: [
          'Åpne "Innstillinger" (tannhjulikonet) i GatGo',
          'Velg "Legg til arbeidsgiver" eller "Ny profil"',
          'Gjenta paringsprosessen (Steg 2-4) for hver arbeidsgiver',
          'Du kan nå veksle mellom arbeidsgivere i innstillingene'
        ],
        callout: {
          type: 'warning',
          title: 'Separate visninger',
          content: 'MERK: Dataene fra forskjellige arbeidsgivere slås IKKE sammen. Du må aktivt bytte mellom dem i appen for å se vakter hos hver arbeidsgiver.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/Endre-niva-avdeling.png'
      },
      {
        id: 'gatgo-complete',
        title: 'Oppsett fullført!',
        content: 'GatGo er nå konfigurert og klar til bruk. Du kan se vaktplanen din, signere timelister og mye mer direkte fra mobilen.',
        callout: {
          type: 'success',
          title: 'Du er klar!',
          content: 'Appen vil nå vise dine vakter og gi deg tilgang til MinGat-funksjoner på farten. Husk å holde appen oppdatert for beste opplevelse.'
        },
        image: 'https://mingat.info/wp-content/uploads/2022/10/kalendar-mingat-1024x440.png'
      }
    ],
    relatedGuides: ['home-access-setup', 'two-factor-login', 'gatgo-troubleshooting'],
    faq: [
      {
        question: 'Jeg har byttet telefon. Hvordan overfører jeg GatGo?',
        answer: 'GatGo kan IKKE overføres mellom enheter. Du må: 1) Logge inn på MinGat på PC, 2) Gå til "Mine Apper" og fjern den gamle enheten ("Fjern tilgang"), 3) Gjenta hele paringsprosessen med den nye telefonen.'
      },
      {
        question: 'Jeg har glemt PIN-koden min. Hva gjør jeg?',
        answer: 'Du må slette appen og installere den på nytt, deretter gjenta paringsprosessen fra PC. Det finnes ingen "glemt PIN"-funksjon av sikkerhetshensyn.'
      },
      {
        question: 'Kan jeg bruke GatGo på nettbrett?',
        answer: 'Ja, GatGo fungerer på iPad og Android-nettbrett. Prosessen er identisk med mobiloppsett.'
      },
      {
        question: 'Hvorfor må appen ha tilgang til kameraet?',
        answer: 'Kameratilgang brukes kun for å skanne QR-koden ved oppsett. Appen bruker ikke kameraet til noe annet formål.'
      },
      {
        question: 'Hvor lenge varer innloggingen i appen?',
        answer: 'Du forblir innlogget, men appen krever PIN eller biometri etter 5 minutters inaktivitet. Du trenger ikke gjøre full paring på nytt med mindre du bytter telefon eller fjerner tilgang.'
      },
      {
        question: 'Hva er forskjellen mellom GatGo og MinGat i nettleseren?',
        answer: 'GatGo er en dedikert app optimalisert for mobil med raskere tilgang og offline-støtte. MinGat i nettleseren har flere funksjoner men krever internettforbindelse. Begge viser samme data.'
      },
      {
        question: 'Kan kollegaen min se mine vakter i GatGo?',
        answer: 'Nei, GatGo er personlig og kryptografisk bundet til DIN profil. Selv om noen får tilgang til telefonen din, trenger de din PIN eller biometri for å åpne appen.'
      },
      {
        question: 'Jeg får feilmelding under skanning av QR-kode. Hva gjør jeg?',
        answer: 'Prøv: 1) Hold telefonen stillere, 2) Øk lysstyrken på PC-skjermen, 3) Rengjør kameralinsen, 4) Bruk alternativet med manuell URL-inntasting under QR-koden.'
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