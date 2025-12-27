// Auto-generated file containing GAT Help documentation
// Updated: Interactive components moved to separate interactive section

import React from 'react';

// Import only the components used in other topics (not innlogging)
import { ProfileSMSToggle } from '@/components/guides/ProfileSMSToggle';
import { 
  ShiftRequestDemo,
  CalendarPickerDemo,
  TimePickerDemo 
} from '@/components/guides/Guidecomponents ';

export interface HelpTopic {
  id: string;
  title: string;
  content: React.ReactNode;
  parent?: string;
  subTopics?: HelpTopic[];
}

export const gatHelpData: HelpTopic[] = [
  {
    id: "mingat_help_root",
    title: "MinGat Hjelp v 2024.1",
    content: "Velkommen til MinGat Hjelp. Velg et emne fra menyen for mer informasjon.",
    subTopics: [
      {
        id: "innlogging",
        title: "Innlogging",
        content: `
Innlogging - MinGat Hjemmefra

For å få tilgang til MinGat hjemmefra må du følge disse stegene:

Steg 0: Last ned VPN-klient (første gang)
---------------------------------------
Hvis du ikke har installert VPN-programmet ennå, må du laste det ned først.
VPN-klienten er tilgjengelig for Windows, Mac og mobil.

Steg 1: Koble til VPN
---------------------
Start VPN-programmet og koble til sykehuset sitt nettverk:
- Åpne VPN-klienten
- Skriv inn ditt brukernavn (samme som på jobben)
- Skriv inn ditt passord
- Klikk "Koble til"

Steg 2: Logg inn på MinGat
---------------------------
Når VPN-tilkoblingen er aktiv:
- Åpne MinGat i nettleseren
- Logg inn med ditt brukernavn og passord
- Du har nå tilgang til MinGat hjemmefra

Steg 3: Test tilkoblingen
-------------------------
For å sjekke at alt fungerer:
- VPN-tilkobling skal være aktiv
- Nettverkstilgang skal fungere
- MinGat skal være tilgjengelig

Feilsøking
----------
Får ikke koblet til VPN?
- Sjekk at brukernavn og passord er riktig
- Det skal være samme brukernavn og passord som du bruker på jobben

VPN tilkoblet men MinGat fungerer ikke?
- Vent 30 sekunder etter VPN-tilkobling er opprettet
- Deretter prøv å logge inn på MinGat igjen

Trenger du mer hjelp?
- Kontakt IT-support på tlf 123 45 678
- Send e-post til support@sykehus.no

💡 TIP: Prøv den interaktive guiden i "Interaktiv Demo" for å øve på disse stegene!
        `
      },
      {
        id: "bankveksling",
        title: "Bankveksling",
        content: `
Bankveksling

Her kan du registrere forespørsler om bankveksling. Det fordrer at dette er slått på for avdelingen(e) og at det er laget bankvekslingsregler i foretaket/organisasjonen.

Registrering:
Avdeling: Denne er forhåndsvalgt for den avdelingen du står på i MinGat.
Bankvekslingsregel: Velg hvilken regel du ønsker å spørre om.
Datovelger: Du kan selv bestemme hvilken dato du vil lagre forespørselen på.
Antall: Kan være timer eller stk. Bankvekslingsregelen bestemmer dette.
Kommentar: Fritekstfelt.

Uttak og innskudd:
Her vises saldo for hvilke banker som berøres alt ettersom hvilken vekslingsregel du har valgt.
Det kan også veksles timer fra bank til kronetillegg dersom det er laget slike vekslingsregler.
De som benytter Årsarbeidstid skal benytte denne funksjonen dersom de ønsker å veksle avspaseringstimer til årsarbeidstid.
        `
      },
      {
        id: "fordeling_tid_penger",
        title: "Fordeling tid/penger",
        content: `
Fordeling tid/penger

Her kan du registrere forespørsel om fordeling. (Fordeling av avspasering vs lønnsutbetaling)

Avdeling: Sjekk at du registrerer forespørselen på rett avdeling.
Fra og med-/til og med dato: Legg inn hvilken periode denne fordelingen skal gjelde for.
Andel tid: Legg inn den andelen du ønsker ved å registrere andel tid(%) (avspaseringsandel). Lønnsandelen beregnes automatisk.

Eksisterende fordelinger: Viser en liste med tidligere fordelinger.
        `
      },
      {
        id: "paminnelser",
        title: "Påminnelser",
        content: `
Påminnelser

Benyttes til å vise ulike meldinger/gi informasjon til deg som du bør lese eller huske på.
Det kan opprettes flere ulike påminnelser fra Gat. Noen kommer automatisk, mens andre styres av leder/systemadministrator.

Meldingstyper:
Systemmeldinger (lys blå): Meldinger fra systemadministrator, ønskeplanmeldinger, etc.
Fraværsmeldinger (rosa): Meldinger om manglende dokumentasjon/signatur på fravær.
Timelister (lilla): Melding om manglende signering av timelister.
Merknader (gul): Meldinger fra leder til ansatte.
Forespørsler (gulbrun): Melding om forespørsler som er returnert.
Timeregistreringer (grønn): Melding om manglende timeregistrering eller feil.
Ukeplanlegging (brun): Melding om pågående ukeplanleggingsperiode.
Kompetanse (orange): Påminnelser for kompetanse som snart utgår eller har gått ut.
Gjøremål (blå): Varsler om gjøremål med frister.

Snarveier (linker):
På flere at påminnelsestypene vil det være en link som tar deg direkte til aktuell meny.

Egendefinert visning:
Knappen ligger helt øverst til venstre på siden og lister opp de ulike typene varsler som kan vises i listen. Hver av typene kan slås på/av etter eget ønske.
        `
      },
      {
        id: "min_timeliste",
        title: "Min Timeliste",
        content: `
Min Timeliste

Viser din timeliste.
Som standard vises en oversikt over registreringer som skal gi lønnsutbetaling, og som ennå ikke er utbetalt.
Viser registreringer en måned frem i tid.
Årsakskoden vises med grå skrift på linje 2 i hver celle under timelistetype.
Du kan se på detaljer om hver registrering ved å klikke på linken "Timelistetype" til venstre på hver linje.

Vis alle: Viser alle registreringer. Grå skrift betyr at vaktene er overført til lønn.
Vis med detaljer: Viser også konteringsinformasjon, antall timer, konto, avdeling, etc).

Elektronisk godkjenning: (Ikke alle benytter dette)
For at timelistene skal sendes til lønnssystemet, må du krysse av på vakten(e) under "Godkjent ansatt".
Brukernavnet ditt, dato og klokkeslett vil da vises under rubrikken "Godkjent ansatt".
Du kan "oppheve godkjenningen" igjen ved å klikke på nytt.
Når vaktene er godkjent på nivå 1 og/eller 2, vil det vises på hver enkelt vakt.
        `
      },
      {
        id: "min_timeregistrering",
        title: "Min Timeregistrering",
        content: `
Min Timeregistrering

Modulen er en tilleggsmodul til Gat.
Kort fortalt vil modulen kunne la deg registrere ulike aktiviteteter på prosjekter hvor du skal kunne føre timer.
Kunder som har installert timeregistreringsmodulen vil ved registrering av timer i MinGat få systemstøtte / hjelp til å vite hvor mange timer som skal føres hver dag.

Oversiktsbilde i MinGat består av 3 faner:
Aktive: timeregistreringer under registreringer av den ansatte
Under behandling: timeregistreringer som er sendt til behandling til prosjektleder/leder
Godkjent: timeregistreringer som er godkjent av prosjektleder/leder

Ny registrering:
Velg knappen "Ny" for å legge inn en aktivitet på et prosjekt.

Visning:
En uke vises med dagene mandag til og med søndag.
Krav til timer: For deg som benytter fleksitid vil antall timer for fleksperiode vises. Dersom du ikke bruker fleks vil vaktens lengde vises i timer.
Registrerte timer(stk): Når du legger inn en registrering, vises antall timer for aktuell registrering.

Farger:
Rød: Når registreringen ikke er tilstekkelig ført ift oppsatt fleksperiode/vakt den aktuelle dagen.
Grønn: Når timer er ført korrekt (innenfor toleransegrense).
Orange: Dersom det mangler timer.

Status og Godkjenning:
Når uken er klar setter du den til "Send til godkjenning".
Timeregistreringen får da status "Klar til godkjenning av leder/prosjektleder" og vises på fanen "Under behandling".
Du har mulighet til å "Hente tilbake" timeregistreringen inntil leder eller prosjektleder har godkjent.

Automatisert registrering via oppgaver:
Dersom du har fått en oppgave som er satt opp med grunnlag for timeregistrering, kommer aktiviteten opp i timeregistreringslisten som en egen linje som kan godkjennes til å bli en timeregistrering.
        `
      },
      {
        id: "ny_timeregistrering",
        title: "Ny timeregistrering",
        content: (
          <div className="space-y-6">
            <p>
              Når du klikker på 'Ny', åpnes vinduet for å registrere timer i MinGat.
              Bruk komponentene under for å registrere din arbeidstime.
            </p>

            <section>
              <h3 className="text-lg font-bold mb-4">Velg dato og tidspunkt</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Velg dato:</h4>
                  <CalendarPickerDemo />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Velg tidspunkt:</h4>
                  <TimePickerDemo />
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-bold mb-4">Send forespørsel</h3>
              <p className="mb-4">
                Når du har valgt dato og tidspunkt, kan du sende inn din forespørsel:
              </p>
              <ShiftRequestDemo />
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-blue-900 mb-2">Informasjon</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Mal: Viser maler i henhold til hva som er definert på prosjektet</li>
                <li>• Prosjekt: Velg fra nedtrekksmenyen blant tilgjengelige prosjekter</li>
                <li>• Aktivitet: Velg aktivitet tilgjengelig for valgt prosjekt</li>
                <li>• Timer eller stk: Antall timer eller stk med denne aktiviteten</li>
                <li>• Kommentar: Tekstfelt for tilleggsopplysninger</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">Forespørselkladd</h4>
              <p className="text-sm text-amber-800">
                Gjør det mulig for deg å registrere overtid/merarbeid sammen med timeregistreringen.
                Dette gjøres ved at du oppretter en 'forespørselkladd' om overtid/merarbeid. 
                Denne blir ikke en reell forespørsel før timeregistreringen er endelig godkjent.
              </p>
            </div>
          </div>
        )
      },
      {
        id: "min_fleksitid",
        title: "Min fleksitid",
        content: (
          <div className="space-y-6">
            <p>
              Har du fleksitidsavtale i Gat, vil få et eget menypunkt i MinGat som heter "Min fleksitid".
              Her vil du kunne stemple inn og ut, se/redigere og søke i dine stemplinger.
            </p>

            <section>
              <h3 className="text-lg font-bold mb-4">Sett opp SMS-varslinger</h3>
              <p className="mb-4">
                For å motta påminnelser om stempling og viktige meldinger på SMS, 
                sett opp ditt mobilnummer og aktiver SMS-varslinger:
              </p>
              <ProfileSMSToggle />
            </section>

            <section className="mt-8">
              <h3 className="text-lg font-bold mb-4">Stemple inn/ut</h3>
              <p>
                Siste stempling vises øverst til venstre sammen med klokkeslett for stempling.
                Her kan du stemple inn og ut via egne knapper.
                Dersom du skal korrigere noen stemplinger, må endringer gjøres via listen til høyre. 
                (Tidsbegrensning gjelder ofte).
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-bold mb-4">Ny periode</h3>
              <p>
                Dersom man ikke har fått registrert stemplinger tilbake i tid, 
                kan man benytte denne knappen for å registrere en periode.
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-blue-900 mb-2">Fleksitidsperiode</h4>
              <p className="text-sm text-blue-800 mb-3">
                En fleksitidsperiode består at en inn- og en utstempling.
                Dersom man ikke stempler inn eller ut en dag hvor det er forventet stempling, 
                vil det opprettes en manglende stempling eller glemt utstempling (-8 timer). 
                Disse må korrigeres.
              </p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Uhåndtert:</strong> Stemplinger utenom fleksperioden eller utover maksgrensen for fleks pr. dag</li>
                <li>• <strong>Ulovlig fravær:</strong> Utstempling i kjernetid uten godkjent fravær</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "mine_banker",
        title: "Mine banker",
        content: `
Mine banker

Viser informasjon om hva du har innestående i de forskjellige "bankene" i Gat.
For eksempel feriebank som viser hvor mange feriedager du har til gode, eventuelt timer/dager i minus.

Saldo pr. --.----- (siste dag forrige mnd): Viser saldo siste dag i forrige måned.
Saldo pr. "I dag": Viser saldo på den aktuelle banken akkurat nå.
Total saldo: Viser reell saldo i banken, også f.eks fremtige feriefravær/avspasering som er godkjent.

Historikk på opparbeidet Banksaldo:
Klikk på verdien på totalsaldoen for å se detaljer om innskudd og uttak.
        `
      },
      {
        id: "min_arsarbeidstid",
        title: "Min Årsarbeidstid",
        content: `
Min Årsarbeidstid

Viser en oversikt over din årsarbeidstidstatus. En fane viser aktiv avtale og en fane viser historikk.

AKTIV AVTALE:
Fra-/tildato: Datoer for årsarbeidstidsperioden.
Inngående balanse: Verdi fra forrige avtaleperiode.
Antall timer totalt avtalt: Summen av timer som skal jobbes totalt innenfor perioden.
Stillingsprosent: Avtalt stillingsprosent.
Dagverdi i arbeid: Hvor mange timer du må arbeide i snitt hver dag.
Dagverdi ved fravær: Dagverdi som benyttes ved fravær.

Prognoser:
Viser hvordan du ligger an pr. dagens dato og totalt for hele perioden.
Status viser differansen som en negativ verdi dersom du skylder timer og som en positiv verdi dersom du ligger i forkant.
Krav pr. dag: Viser hvor mange timer du i snitt må jobbe pr.dag i resten av perioden for å komme ut i 0.

Graf og Liste:
Viser årsarbeidsregnskapet grafisk eller i tabellform.
        `
      },
      {
        id: "mine_fravaer",
        title: "Mine Fravær",
        content: `
Mine Fravær

Listen viser dine registrerte fravær sortert med det nyeste fraværet øverst.
Man kan ikke gjøre endringer i denne listen med mindre det er bestemt at organisasjonen din skal benytte elektronisk signatur og/eller elektronisk fraværsdokumentasjon.

Listen viser hvilke fraværskoder som er registrert, datoperiode, statistikkdager, bankdager, fraværsprosent, etc.

Signere fravær og levere fraværsdokumentasjon via MinGat:
Det er mulig å signere fravær og/eller levere fraværsdokumentasjon via MinGat.
Ved å klikke på linken "Signer og dokumenter" (eller "Signer") åpnes en side for elektronisk levering/signering.
Etter at dokumentasjonen er levert vil du se at fraværet er signert.
        `
      },
      {
        id: "min_kompetanse",
        title: "Min kompetanse",
        content: `
Min kompetanse

Listen viser all gyldig kompetanse som er registrert på deg i Gat.
Vis alle: Du kan se kompetanse som har gått ut på dato ved å velge vis alle.
        `
      },
      {
        id: "mine_bytter",
        title: "Mine bytter",
        content: `
Mine bytter

Viser en oversikt over de byttene som har blitt gjort mellom deg og en medarbeider og mellom deg og avdelingen.

Bytter med ansatte:
Viser dato for når byttet ble gjennomført, status, vaktkode, fra/til klokkeslett, opprinnelig person, ny/aktiv person og avdeling.
Kommentarer vises med et blått ikon.

Byttestatus:
Viser om du skylder enkelte ansatte vakter/timer, eller om det er vakter/timer du har til gode fra ansatte.

Bytte med avdeling:
For både opprinnelige- og nye vakter vises vaktkode, dato, periode, stilling, gruppe, vaktkommentar og avdeling.
Nye vakter har grønn bakgrunn og et "+"-tegn først i raden. Opprinnelige vakter har grå bakgrunn og "-" først i raden.
        `
      },
      {
        id: "mine_faste_tillegg",
        title: "Mine faste tillegg",
        content: `
Mine faste tillegg

Viser en liste med alle nåværende og tildligere overførte faste tillegg.
Faste tillegg blir overført fra arbeidsplan når planen er godkjent og danner grunnlag for hvilke tillegg du får til utbetaling hver måned uavhengig av ekstravakter/overtid etc.
        `
      },
      {
        id: "min_tilgjengelighet",
        title: "Min tilgjengelighet",
        content: `
Min tilgjengelighet

Gir deg mulighet for å registrere hvilke dager og vakter du er tilgjengelig/utilgjengelig for å arbeide utover oppsatt plan.
Listen viser aktuelle registrerte perioder.

Fargesymboler:
Registrert tilgjengelig vises med grønt.
Registrert utilgjengelig vises med rødt.
Nei Takk (blå): Betyr at du har sagt at det ikke er aktuelt å jobbe den spesifikke vakten.

Registrering:
Klikk på rubrikken for dagen og vaktkategorien du skal merke.
Hurtigregistrering: Legg inn tilgjengelighet for en uke om gangen eller en periode.

MERK! Utilgjengelighet vil alltid overstyre tilgjengelighet.
        `
      },
      {
        id: "mine_stillingsforhold",
        title: "Mine stillingsforhold",
        content: `
Mine stillingsforhold

Viser en liste med dine stillingsforhold, både aktive og historiske stillingsforhold.
Fremtidige endringer vil også bli vist i listen.
Listen er gruppert under Aktive, Fremtidige eller Avsluttet.
        `
      },
      {
        id: "mine_lonnsslipper",
        title: "Mine lønnsslipper",
        content: `
Mine lønnsslipper

Listen viser en oversikt over dine Lønnslipper eventuelt Årsoppgaver og Lønns- og trekk oppgave.
Vis: Klikk på "VIS" for å se Lønnsspesifikasjonen på skjermen.
Last ned: Last ned lønnsslippen til din datamaskin.
(Denne funksjonen benyttes ikke av alle kunder).
        `
      },
      {
        id: "min_lonnsoversikt",
        title: "Min lønnsoversikt",
        content: `
Min lønnsoversikt

Viser en liste over dine siste lønnsoverføringer, nyeste dato vises på toppen.
Oversikten viser hvilke dato lønnsoverføringen ble foretatt, periode fra - til og fra hvilken avdeling lønnen ble overført fra.
Klikk på dato-linken for å se detaljer.
        `
      },
      {
        id: "min_ukeplanlegging",
        title: "Min ukeplanlegging",
        content: `
Min ukeplanlegging

Tilleggsfunksjon til Arbeidsplan-/Grovplanmodulen i Gat.
Min ukeplan gir deg mulighet til å formidle ønsker til leder om fri eller tilrettelegging i hver enkelt uke i en gitt planleggingsperiode frem i tid.

Rediger Min ukeplanperiode:
Periodeinformasjon: Informasjon fra leder.
Din periodekommentar: Legg inn kommentar for hele perioden.
Legg inn ønsker for en uke: Ekspander uken for å legge inn kommentarer eller ønsker.
Standard status for hver uke er «Til stede».
Ukekommentar: Legg inn kommentar under Tilgjengelighet.
Oppgavemønster: Velg ønsket oppgavemønster fra nedtrekksliste (hvis tilgjengelig).
Fravær: Ønsk fravær for enkeltdager eller hele uker.

Ferdig planlagt:
Når du har gjort ferdig alle registreringene krysser du av her for å gi leder beskjed om at du er ferdig.
        `
      },
      {
        id: "min_onskeplan",
        title: "Min Ønskeplan",
        content: (
          <div className="space-y-6">
            <p>
              Viser en oversikt over alle ønskeplanperioder du har vært eller er koblet til.
              Det er ønskeplaner i fase 1, fase 2 og iverksatte planer(fase 3) som vises i listen.
            </p>

            <section>
              <h3 className="text-lg font-bold mb-4">Velg periode for ønskeplan</h3>
              <p className="mb-4">
                Bruk kalenderen for å velge hvilken periode du vil planlegge:
              </p>
              <CalendarPickerDemo />
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-blue-900 mb-2">Status på dine ønsker</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Blankt felt:</strong> Ingen endringer gjort</li>
                <li>• <strong>Gul farge:</strong> Ønskeplanen er påbegynt</li>
                <li>• <strong>Grønn farge:</strong> Ønskeplanen er fullført (krysset av for "Jeg anser meg ferdig")</li>
                <li>• <strong>Rød farge:</strong> Ønskeplanen er fullført, men med feil</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Faser</h4>
              <p className="text-sm text-gray-700 mb-3">
                En ønskeplanperiode består av enten 2 eller 3 faser:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Fase 1:</strong> Ønskefase</li>
                <li>• <strong>Fase 2:</strong> Hjelpefase/Justeringsfase</li>
                <li>• <strong>Fase 3:</strong> Iverksetting (Planen er låst for redigering av ansatt)</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "onskeplan_fase_1",
        title: "Ønskeplan Fase 1",
        content: `
Ønskeplan Fase 1

Når ønskeplan administrator/leder har opprettet en ny ønskeplanperiode og satt denne perioden i fase 1 vil denne vises i MinGat for ansatte.

Registrere vakter i planen i fase 1:
Klikk i cellen du vil starte med. Skriv inn vaktkoden du ønsker eller bruk menypilen for å velge.
Om du legger inn en vakt med en vaktkode som er feil/ulovlig vil cellen få rød bakgrunnsfarge og en feilmelding vises.

Meny funksjoner:
Sett vaktkode, Sett frikode, Dagsfravær, Ukesfravær, Veto, Blank ut.

Fravær i ønskeplan:
Legg inn fravær i ønskeplanen (lilla bakgrunn).

Sette inn veto:
Bruk veto for å sikre seg visse typer av vakt eller fri. Koster vetopoeng.

Snu celler:
Klikk på den grønne pilen for å se historikk for cellen (hva som lå i baseplanen).

Faner nederst:
Status (arbeidstimer vs ønsket), Bank (saldooversikt), Vaktsummering (antall vakter pr kategori), Meldinger (til/fra leder), Forklaringer.

Jeg anser meg ferdig i fase 1:
Kryss av her når du er ferdig med å legge inn ønsker. Lagre planen.
        `
      },
      {
        id: "onskeplan_fase_2",
        title: "Ønskeplan Fase 2",
        content: `
Ønskeplan Fase 2

I fase 2 har du mulighet til å flytte deg fra en vakt som det er for mange ansatte på ("overdekket"), eller flytte deg til en vakt der det er for få ansatte ("underdekket").
Dersom du flytter deg, hjelper du avdelingen og kan opptjene Vetopoeng.

Grønn skravering: Dager hvor behovet er dekket opp.
Overdekket vakt (blått +): Dager med for mange ansatte. Klikk på pluss-tegnet for å se alternativer og poeng for å fjerne vakten.
Underdekket vakt (rødt -): Dager med for få ansatte. Klikk på minus-tegnet for å se vaktkoder du kan sette inn og poeng du kan tjene.

Ferdigstille ønsker:
Når du har gjort de justeringene du ønsker, kryss av for "Jeg anser meg ferdig med fase 2" og lagre.
        `
      },
      {
        id: "sporreundersokelser",
        title: "Spørreundersøkelser",
        content: `
Spørreundersøkelser

Her kan det bli presentert spørreundersøkelser som det er ønskelig at du svarer på.
Dersom du er valgt ut til å delta i en undersøkelse vil du alltid komme til denne siden før du kommer til Startsiden i MinGat.

Svar på denne nå: Går til undersøkelsen.
Svare senere: Går til startsiden. Du kan svare senere via menyen.
Ønsker ikke å delta: Dersom undersøkelsen ikke er obligatorisk.
        `
      },
      {
        id: "mine_forskjovne_vakter",
        title: "Mine forskjøvne vakter",
        content: `
Mine forskjøvne vakter

Viser en oversikt over alle dine forskyvninger (Omdisponeringer).
Nye vakter vises i grønt med "+" og opprinnelige vakter vises i grått med "-".
        `
      },
      {
        id: "mine_fordelinger",
        title: "Mine fordelinger",
        content: `
Mine fordelinger

Her vises en liste med dine fordelinger i.f.t. tid/penger.
        `
      },
      {
        id: "min_ferie",
        title: "Min ferie",
        content: `
Min ferie

Viser en oversikt over ferie akkumulert pr. år for utvalgte banktyper.
Kolonnene viser: År, Overført fra i fjor, Opptjente feriedager, Sum, Avviklet/Godkjent, Forspurt, Saldo.
        `
      },
      {
        id: "mine_apper",
        title: "Mine Apper",
        content: `
Mine Apper

Viser en liste med enheter som er koblet sammen med GatGo.
Du kan koble til en ny enhet ved å velge knappen "Koble enhet".
Følg wizarden for å installere appen, scanne QR-kode og verifisere koblingen.
        `
      },
      {
        id: "mine_utrykninger",
        title: "Mine Utrykninger",
        content: `
Mine Utrykninger

Viser en liste med dine utrykninger. Standard periode er siste 3 mnd.
        `
      },
      {
        id: "vaktbok",
        title: "Vaktbok",
        content: `
Vaktbok

Viser som standard vaktboken for din avdeling i dag.
Du kan også velge å se vaktbok for en uke, måned eller for en egendefinert periode.

Uke-/Måned-/Periodevisning:
Egne vakter vises øverst med fet skrift.
Ledige og vakante vakter vises til slutt med rød skrift.
Vaktene har tooltip med informasjon.
Fraværsvakter har grå bakgrunn.

Tilleggsinformasjon i dagvisning:
Vis fri: Vise ansatte som har fri.
Vis merknader: Vise merknader for avdelingen.
Vis tilgjenglighet: Vise personer som har meldt seg tilgjengelige/utilgjengelige.
Vis gjøremål: Vise gjøremål på avdelingen.
        `
      },
      {
        id: "oppgave_oversikt",
        title: "Oppgave oversikt",
        content: `
Oppgaveoversikt

Vaktboka vist "oppgaveorientert".
Som standard vises vaktboka med oppgaver nedover og datoer bortover.
Kan endres i "innstillinger".

Stjerne indikerer delt oppgave.
Blå trekant indikerer kommentar.
Rød prikk indikerer pasientavtale.

Oppsettshjul:
Endre visningsform, visningsdetaljer, format på navn og filtre (kun meg selv, ansattfilter, gruppefilter, oppgavefilter).
        `
      },
      {
        id: "ukevisning",
        title: "Ukevisning",
        content: `
Ukevisning

Spesialvariant av oppgavevisning.
Benyttes der det er behov for å skille mellom hvem som har vakt og hvilke oppgaver personene skal løse.
Viser oppgaver fordelt på ansatte.
        `
      },
      {
        id: "gjoremal",
        title: "Gjøremål",
        content: `
Gjøremål

Viser gjøremål som er registrert på din avdeling.
Viser involverte ansatte og instanser.
        `
      },
      {
        id: "arbeidsplaner",
        title: "Arbeidsplaner",
        content: `
Arbeidsplaner

Viser alle arbeidsplaner ved valgt avdeling som er publisert.
Listen viser Plan navn, Type, Startdato, Gyldig til, Uker, Ansattlinjer, Godkj. Status.

Åpnet plan:
Viser detaljer om planen. Fravær og utilgjengelighet vises med grå bakgrunn.
Personlig arbeidsplan: Klikk på navnet for å se din personlige plan med tillegg.
Utskrift: Du kan skrive ut personlig arbeidsplan.
        `
      },
      {
        id: "navneliste",
        title: "Navneliste",
        content: `
Navneliste

Viser en liste med alle som er ansatt ved din avdeling.
Søkefelt: Filtrer listen ved å søke.
Visning: Ansattsøk (alfabetisk), Ansikt (bilde), Kortvisning (visittkort), Listevisning (tabell).
Se andre ansattes kalender: Trykk på navnet til den ansatte.
        `
      },
      {
        id: "rapporter",
        title: "Rapporter",
        content: `
Rapporter

Rapporter som ligger her er egendefinerte og tilsvarer visninger/rapporter som ligger på ekstrainfo-fanen i Gat.
Dersom du har spørsmål knyttet til en av disse rapportene, må du ta kontakt med systemforvaltere for Gat.
        `
      },
      {
        id: "vaktkodeliste",
        title: "Vaktkodeliste",
        content: `
Vaktkodeliste

Her får du en samlet oversikt med alle vaktkoder som er i bruk på avdelingen.
Listen viser vaktkode, periode, beskrivelse, vaktkategori, kolonne, gruppe, kombinasjonskode, fleksitid.
Det kan filtreres, sorteres og grupperes i listen.
        `
      },
      {
        id: "send_sms",
        title: "Send SMS",
        content: `
Send SMS

Mulighet til å sende SMS direkte fra MinGat. (Krever rettighet).
Finn ansatte: Velg ansatte fra listen.
Skriv melding og trykk Send.
        `
      },
      {
        id: "listevisninger",
        title: "Listevisninger",
        content: `
Listevisninger

Beskrivelse av funksjonalitet i listevisninger i MinGat.
Funksjoner: Sortering, Søk på tekst, Eksport til Excel, Gruppering, Filtrering, Bytte rekkefølge på kolonner, Skjule kolonner, Avansert søk i kolonne.
        `
      },
      {
        id: "personvern",
        title: "Personvern og datasikkerhet",
        content: `
Personvern og datasikkerhet

Formålet med MinGat er å gjøre det enkelt å holde oversikt over egen arbeidstid og fravær.
Arbeidsgiver behandler personopplysninger for å oppfylle arbeidsavtalen.
OBS! Unngå sensitive personopplysninger i fritekstfelt (kommentarer).
Sikkerhet: MinGat bruker anbefalte metoder for sikkerhet.
Cookies: MinGat benytter cookies for sikkerhet og innlogging.
        `
      },
      {
        id: "utskrifter",
        title: "Utskrifter",
        content: `
Utskrifter

Hvordan skrive ut bakgrunnsfarger i MinGat.
Nettleser-spesifikke innstillinger for Chrome, Internet Explorer og Firefox for å inkludere bakgrunnsgrafikk/farger ved utskrift.
        `
      },
      {
        id: "logging",
        title: "Logging",
        content: `
Anonym logging til Google Analytics

Dersom du godtar anonym logging, vil Visma motta nyttig informasjon om bruk og eventuelle feil.
Ingen personlige data sendes.
        `
      },
      {
        id: "mingat_leder",
        title: "MinGat - Leder",
        content: `
MinGat - Leder

Ny modul for ledere i MinGat.
Gir tilgang til "Fraværsreisen": Registrere fravær, finne kandidater, dekke opp ledige vakter.
Tilgang styres av rettigheten "Lederfunksjonalitet i MinGat".
Leder kan veksle mellom ansattrolle og lederrolle.
Tilpasset mobil og mindre skjermer.
        `
      },
      {
        id: "leder_startsiden",
        title: "Leder - Startsiden",
        content: `
Leder - Startsiden

Dashboard med widgets.
Widget: Til godkjenning (Fraværsforespørsler).
Meny og hurtigvalg gir tilgang til funksjoner.
        `
      },
      {
        id: "leder_fravaer",
        title: "Leder - Fravær",
        content: `
Leder - Fravær

Hovedside for fraværsbehandling.
Fravær til godkjenning: Liste over forespørsler. Kan godkjennes, avvises, returneres eller settes under behandling.
Alle fravær: Liste over registrerte fravær.
Nytt fravær: Registrere nytt fravær for en ansatt. Velg ansatt, fraværstype og kode.
        `
      },
      {
        id: "leder_vaktbok",
        title: "Leder - Vaktbok",
        content: `
Leder - Vaktbok

Vaktbokvisning for leder.
Viser ansatte på jobb, ledige/vakante vakter, fravær og fri.
Registrere avvik: Mulighet til å registrere fravær, ekstra og dekke opp vakter direkte fra vaktboka.
        `
      }
    ]
  }
];

// Helper function to find a topic by ID (searches recursively)
export const findHelpTopicById = (id: string, topics: HelpTopic[] = gatHelpData): HelpTopic | undefined => {
  for (const topic of topics) {
    if (topic.id === id) return topic;
    if (topic.subTopics) {
      const found = findHelpTopicById(id, topic.subTopics);
      if (found) return found;
    }
  }
  return undefined;
};

// Get all topic IDs as a flat list
export const getAllTopicIds = (topics: HelpTopic[] = gatHelpData): string[] => {
  const ids: string[] = [];
  for (const topic of topics) {
    ids.push(topic.id);
    if (topic.subTopics) {
      ids.push(...getAllTopicIds(topic.subTopics));
    }
  }
  return ids;
};