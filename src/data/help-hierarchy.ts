import { HelpSection } from '@/lib/hierarchy-types';

export const helpHierarchy: HelpSection[] = [
  {
    id: 'mingat-hjelp',
    title: 'MinGat Hjelp',
    children: [
      {
        id: 'kom-i-gang',
        title: 'Kom i gang',
        children: [
          { id: 'innlogging', title: 'Innlogging' },
          { id: 'startsiden', title: 'Startsiden' },
          { id: 'min_profil', title: 'Min Profil' },
        ]
      },
      {
        id: 'kalender-vakter',
        title: 'Kalender og Vakter',
        children: [
          { id: 'min_kalender', title: 'Min Kalender' },
          { id: 'ical', title: 'Eksport til iCal' },
          { id: 'vaktbok', title: 'Vaktbok' },
          { id: 'oppgave_oversikt', title: 'Oppgaveoversikt' },
          { id: 'ukevisning', title: 'Ukevisning' },
          { id: 'arbeidsplaner', title: 'Arbeidsplaner' },
        ]
      },
      {
        id: 'foresporsler',
        title: 'Forespørsler',
        children: [
          { id: 'mine_foresporsler', title: 'Mine forespørsler' },
          { id: 'jatakk', title: 'JaTakk (Ledige vakter)' },
          { id: 'melding', title: 'Melding' },
          { id: 'fravaer', title: 'Fravær' },
          { id: 'overtid_ekstravakt', title: 'Overtid/Ekstravakt' },
          { id: 'vaktbytte', title: 'Vaktbytte' },
          { id: 'multibytte', title: 'Multibytte' },
          { id: 'forskjovet_vakt', title: 'Forskjøvet vakt' },
          { id: 'utrykning', title: 'Utrykning' },
          { id: 'honorar', title: 'Honorar' },
          { id: 'tillegg', title: 'Tillegg' },
          { id: 'bank', title: 'Bank' },
          { id: 'kompetanse', title: 'Kompetanse' },
          { id: 'kjoring', title: 'Kjøring' },
          { id: 'bankveksling', title: 'Bankveksling' },
          { id: 'fordeling_tid_penger', title: 'Fordeling tid/penger' },
        ]
      },
      {
        id: 'timer-lonn',
        title: 'Timer og Lønn',
        children: [
          { id: 'min_timeliste', title: 'Min Timeliste' },
          { id: 'min_timeregistrering', title: 'Min Timeregistrering' },
          { id: 'ny_timeregistrering', title: 'Ny timeregistrering' },
          { id: 'min_fleksitid', title: 'Min fleksitid' },
          { id: 'mine_lonnsslipper', title: 'Mine lønnsslipper' },
          { id: 'min_lonnsoversikt', title: 'Min lønnsoversikt' },
        ]
      },
      {
        id: 'banker-saldo',
        title: 'Banker og Saldo',
        children: [
          { id: 'mine_banker', title: 'Mine banker' },
          { id: 'min_arsarbeidstid', title: 'Min Årsarbeidstid' },
          { id: 'min_ferie', title: 'Min ferie' },
          { id: 'mine_fordelinger', title: 'Mine fordelinger' },
        ]
      },
      {
        id: 'fravaer-section',
        title: 'Fravær',
        children: [
          { id: 'mine_fravaer', title: 'Mine Fravær' },
          { id: 'mine_bytter', title: 'Mine bytter' },
          { id: 'mine_forskjovne_vakter', title: 'Mine forskjøvne vakter' },
          { id: 'mine_utrykninger', title: 'Mine Utrykninger' },
        ]
      },
      {
        id: 'onskeplan-section',
        title: 'Ønskeplan',
        children: [
          { id: 'min_onskeplan', title: 'Min Ønskeplan' },
          { id: 'onskeplan_fase_1', title: 'Ønskeplan Fase 1' },
          { id: 'onskeplan_fase_2', title: 'Ønskeplan Fase 2' },
          { id: 'min_ukeplanlegging', title: 'Min ukeplanlegging' },
        ]
      },
      {
        id: 'personlig-info',
        title: 'Personlig Info',
        children: [
          { id: 'min_kompetanse', title: 'Min kompetanse' },
          { id: 'mine_faste_tillegg', title: 'Mine faste tillegg' },
          { id: 'min_tilgjengelighet', title: 'Min tilgjengelighet' },
          { id: 'mine_stillingsforhold', title: 'Mine stillingsforhold' },
        ]
      },
      {
        id: 'avdeling-section',
        title: 'Avdeling',
        children: [
          { id: 'navneliste', title: 'Navneliste' },
          { id: 'gjoremal', title: 'Gjøremål' },
          { id: 'vaktkodeliste', title: 'Vaktkodeliste' },
          { id: 'rapporter', title: 'Rapporter' },
          { id: 'send_sms', title: 'Send SMS' },
        ]
      },
      {
        id: 'diverse',
        title: 'Diverse',
        children: [
          { id: 'paminnelser', title: 'Påminnelser' },
          { id: 'mine_apper', title: 'Mine Apper (GatGo)' },
          { id: 'sporreundersokelser', title: 'Spørreundersøkelser' },
          { id: 'listevisninger', title: 'Listevisninger' },
          { id: 'personvern', title: 'Personvern' },
          { id: 'utskrifter', title: 'Utskrifter' },
          { id: 'logging', title: 'Logging' },
        ]
      },
      {
        id: 'leder-section',
        title: 'MinGat Leder',
        children: [
          { id: 'mingat_leder', title: 'MinGat - Leder' },
          { id: 'leder_startsiden', title: 'Leder - Startsiden' },
          { id: 'leder_fravaer', title: 'Leder - Fravær' },
          { id: 'leder_vaktbok', title: 'Leder - Vaktbok' },
        ]
      },
    ]
  }
];