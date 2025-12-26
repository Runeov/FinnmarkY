import { Guide } from '@/lib/types';

export const guides: Guide[] = [
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
      { id: 'login-3', title: 'Vent på SMS-kode', content: 'Systemet sender automatisk en verifiseringskode til din registrerte mobiltelefon.', callout: { type: 'info', title: 'Ingen SMS?', content: 'Vent 2 minutter. Kontakt 07022 hvis du fortsatt ikke får SMS' } },
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
