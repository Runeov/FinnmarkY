import { HelpSection } from '@/lib/hierarchy-types';

export const helpHierarchy: HelpSection[] = [
  {
    id: 'mingat-hjelp',
    title: 'MinGat Hjelp',
    children: [
      { id: 'innlogging', title: 'Innlogging' },
      { id: 'startsiden', title: 'Startsiden' },
      { id: 'min-profil', title: 'Min Profil' },
      { id: 'e-laering', title: 'e-Læring' },
      {
        id: 'min-kalender',
        title: 'Min Kalender',
        children: [
          { id: 'eksport-til-kalender', title: 'Eksport til kalender med iCal format' }
        ]
      },
      {
        id: 'mine-forespoersler',
        title: 'Mine forespørsler',
        children: [
          { id: 'jatakk-ledig-vakt', title: 'JaTakk (Ledig vakt)' },
          { id: 'melding', title: 'Melding' },
          { id: 'utrykning', title: 'Utrykning' },
          { id: 'honorar', title: 'Honorar' },
          { id: 'fravaer', title: 'Fravær' },
          { id: 'overtid-ekstravakt', title: 'Overtid/Ekstravakt' },
          { id: 'vaktbytte', title: 'Vaktbytte' },
          { id: 'multibytte', title: 'Multibytte' },
          { id: 'forskjovet-vakt', title: 'Forskjøvet vakt' },
          { id: 'tillegg', title: 'Tillegg' },
          { id: 'bank', title: 'Bank' },
          { id: 'kompetanse', title: 'Kompetanse' },
          { id: 'kjoring', title: 'Kjøring' },
          { id: 'bankveksling', title: 'Bankveksling' },
          { id: 'fordeling-tid-penger', title: 'Fordeling tid /penger' }
        ]
      },
      { id: 'paminnelser', title: 'Påminnelser' },
      { id: 'min-timeliste', title: 'Min Timeliste' },
      {
        id: 'min-timeregistrering',
        title: 'Min Timeregistrering',
        children: [
          { id: 'ny-timeregistrering', title: 'Ny timeregistrering' }
        ]
      },
      { id: 'min-fleksitid', title: 'Min fleksitid' },
      { id: 'mine-banker', title: 'Mine banker' },
      { id: 'min-arsarbeidstid', title: 'Min Årsarbeidstid' },
      { id: 'mine-fravaer', title: 'Mine Fravær' },
      { id: 'min-kompetanse', title: 'Min kompetanse' },
      { id: 'mine-bytter', title: 'Mine bytter' },
      { id: 'mine-faste-tillegg', title: 'Mine faste tillegg' },
      { id: 'min-tilgjengelighet', title: 'Min tilgjengelighet' },
      { id: 'mine-stillingsforhold', title: 'Mine stillingsforhold' },
      { id: 'mine-lonnsslipper', title: 'Mine lønnsslipper' },
      { id: 'min-lonnsoversikt', title: 'Min lønnsoversikt' },
      { id: 'min-ukeplanlegging', title: 'Min ukeplanlegging' },
      {
        id: 'min-onskeplan',
        title: 'Min Ønskeplan',
        children: [
          { id: 'onskeplan-fase-1', title: 'Ønskeplan Fase 1' },
          { id: 'onskeplan-fase-2', title: 'Ønskeplan Fase 2' },
          { id: 'ny-onskeplan-fase-1', title: 'Ny Ønskeplan Fase 1' },
          { id: 'ny-onskeplan-fase-2', title: 'Ny Ønskeplan Fase 2' }
        ]
      },
      { id: 'sporreundersokelser', title: 'Spørreundersøkelser' },
      { id: 'mine-forskjovne-vakter', title: 'Mine Forskjøvne vakter' },
      { id: 'mine-fordelinger', title: 'Mine fordelinger' },
      { id: 'min-ferie', title: 'Min ferie' },
      { id: 'mine-apper', title: 'Mine apper' },
      { id: 'mine-utrykninger', title: 'Mine utrykninger' },
      { id: 'vaktbok', title: 'Vaktbok' },
      { id: 'oppgave-oversikt', title: 'Oppgave oversikt' },
      { id: 'ukevisning', title: 'Ukevisning' },
      { id: 'gjoremal', title: 'Gjøremål' },
      { id: 'arbeidsplaner', title: 'Arbeidsplaner' },
      { id: 'navneliste', title: 'Navneliste' },
      { id: 'rapporter', title: 'Rapporter' },
      { id: 'vaktkodeliste', title: 'Vaktkodeliste' },
      { id: 'send-sms', title: 'Send SMS' },
      { id: 'listevisninger', title: 'Listevisninger' },
      {
        id: 'personvern-datasikkerhet',
        title: 'Personvern og datasikkerhet',
        children: [
          { id: 'utskrifter', title: 'Utskrifter' }
        ]
      },
      { id: 'logging', title: 'Logging' }
    ]
  },
  {
    id: 'mingat-leder',
    title: 'MinGat - Leder',
    children: [
      { id: 'leder-startsiden', title: 'Leder - Startsiden' },
      { id: 'leder-fravaer', title: 'Leder - Fravær' },
      { id: 'leder-vaktbok', title: 'Leder - Vaktbok' }
    ]
  }
];
