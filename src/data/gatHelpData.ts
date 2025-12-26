// Auto-generated file containing GAT Help documentation
// This file contains a simplified structure of the GAT Help system based on the provided website content.

export interface HelpTopic {
  id: string;
  title: string;
  content: string;
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
Innlogging

Legg inn et lovlig brukernavn og passord for å logge inn i MinGat.

Bytt Passord:
I innloggingsvinduet har du mulighet for å bytte passord.
Legg inn brukernavn og passord, kryss av for "bytt passord" og trykk "Logg inn".
Et nytt vindu vises der du må angi nytt passord to ganger.
Velg "Endre passord" og passordet ditt blir endret samtidig som du blir logget inn i MinGat.

Glemt passord:
Om du har glemt passordet ditt kan du få tilsendt et passord på SMS eller epost ved å velge linken "Glemt passord".
Når du velger "Glemt passord" må du legge inn brukernavn og enten ansattkode eller personnummer(varierer) og deretter velge om du vil få nytt passord tilsendt på SMS eller epost.
Trykk på neste og skriv inn bildekoden i feltet som vises i vinduet. Velg deretter "Få tilsendt passord."
Det blir generert et engangspassord på 5-8 tegn. Dette engangspassordet blir sendt via SMS eller epost med teksten "Her er ditt engangspassord(gyldig i 15 minutter): AbCd1234".(eksempel)
Passordet må benyttes før det har gått 15 minutter etter mottatt SMS/epost.
Om man venter mer enn 15 minutter med å bruke engangskoden, vil du få beskjed om ugyldig pålogging og må be om nytt passord igjen.
Når du benytter engangspassord blir du tvunget til å lage et nytt passord.

Merk!
Glemt passord vil kun fungere dersom det er installert og konfigurert SMS modul og/eller tillater epost.
Det er også en forutsetning at det er registrert mobilnummer eller epost på din Profil(kontaktinfo) og at du har krysset av for "Godta SMS".
Dersom dere benytter SingleSignOn vil ikke glemt passord vises.

2-faktor autentisering:
Dersom arbeidsgiver har aktivert 2-faktor autentisering må du du velge autentisering via SMS eller en autentiseringsapp.
Aktiver den av disse som du ønsker å benytte.
Da vil du enten motte en kode via SMS eller finne en kode selv fra autentiseringsappen hver gang du logger på MinGat i tillegg til passordet ditt.
        `
      },
      {
        id: "startsiden",
        title: "Startsiden",
        content: `
Startsiden

Dette vil alltid være den første siden som vises etter innlogging.
Unntaket er om du er satt opp til å besvare en spørreundersøkelse. Da vil du få mulighet til å svare på denne først.

Startsiden inneholder "miniversjoner" av et fast utvalg av de mest vanlige funksjonene i MinGat.
Hvilke funksjoner det er vil avhenge av hvilke Gat-moduler som er i bruk og hvilket oppsett som gjelder for din bruker.

Det betyr at du kan se ett sammendrag av:
Vakter / oppgaver idag og i morgen, Påminnelser, Uleste forespørsler, Fleksitid, Timeregistrering, På jobb i dag, Ledige vakter, Årsarbeidstid, Telefonliste og mulighet for å koble til GatGo.

Her ligger det også snarveier. Se valgene «Gå til ...» som ligger nederst i hver av info-boksene.
I rubrikk for påminnelser vil det også ligge linker på noen av påminnelsene som tar deg direkte til aktuell funksjon for å se på mer detaljer om du ønsker det.

I tillegg til selve startsiden vil du øverst i vinduet få frem en rad med følgende 6 informasjons-deler som vil ligge fremme hele tiden mens du er innlogget i MinGat:

Menylinjen
1 = Hovedmeny med tilgjengelige funksjoner.
2 = Hvilken avdeling du står på. («Nivå»)
3 = Navn på innlogget bruker.
4 = Link til hjelpesystemet for MinGat.

I tillegg vil du på venstre side finne flere snarveier til de mest brukte funksjonene i menyen.
        `
      },
      {
        id: "min_profil",
        title: "Min Profil",
        content: `
Min Profil (Ansattopplysninger)

Her vises utvalgte opplysninger som er registrert om deg i Gat.
Opplysningene er gruppert innenfor hver sin fane,(Totalt 4 mulige)
Hvilke opplysninger/faner som vises styres globalt av hver organisasjon.

Ansattinfo:
Viser f.eks. navn, ansattnummer, tittel, aktive stillingsforhold m.m.

Kontaktinfo:
Viser ulike telefonnr, epostadresse og bostedsadresse.

Pårørende:
Viser pårørendes navn, forhold, telefonnr. og adresse.
P.g.a. nye krav vedrørende samtykke i.f.t. deling av personlige opplysninger må man krysse av for "Akseptert av pårørende" for å få lagret.

Barn:
Viser informasjon om dine barn. Til bruk ved fraværsregistrering av f.eks. sykt barn.
Blir ikke benyttet i alle organisasjoner. Kan derfor være usynlig.

Eksport:
Opsjon for å godkjenne eksport av noen kontaktopplysninger til andre systemer.

Pålogging:
For å styrke sikkerheten ved pålogging mot MinGat har vi innført mulighet for sette opp tofaktorautentisering.
Vi har innført to metoder for tofaktorautentisering. Det ene er å få kode tilsendt fra SMS, det andre er å bruke en autentiseringsapplikasjon på telefonen.
Velg "vis mer" for informasjon om metodene.
Velg "konfigurer" for å sette opp enten 2 faktor med SMS eller med autentiseringsapp og følg anvisningene.

Endre profil:
Noen av opplysningene dine kan du selv endre.
MERK! Dette avhenger igjen av hvilke opplysninger arbeidsgiver har gjort tilgjengelige for endring.
Alle felt som kan endres, vil vises når du velger "Endre profil".
De opplysningene som kan endres vises under hver sin fane!
Ved endring må du trykke på "Lagre"-knappen før du avslutter for at endringene skal bli oppdatert.
        `
      },
      {
        id: "min_kalender",
        title: "Min Kalender",
        content: `
Min Kalender

Viser informasjon om arbeidstid, oppgaver, stemplinger, fravær, ledige vakter, merknader og gjøremål knyttet til deg som ansatt.
Dersom du ikke vil se informasjon om alt, kan du selv gjøre tilpasninger på innstillinger (tannhjulet øverst til venstre).

Som standard vil du først se månedsvisning, men du kan også velge ukevisning, dagvisning eller som en liste.

Forespørsler direkte fra Kalender:
Det er mulig å registrere forespørsler og JaTakk direkte fra kalenderen. (Gjelder ikke listevisning)
For å registrere forespørsel: Klikk på pluss-tegnet på den dagen du ønsker. Da kommer forespørselmenyen frem med alle valg som er tilgjenglige på din avdeling.
For eventuelt ledige vakter er det en egen link i kalenderen. Åpner vindu for forespørsel om JaTakk for valgt dato.

Måned/Uke/Dag:
Bruk piltastene Navigeringspiler for å navigere fremover/bakover i tid.
Velg I dag knapp for å komme til dagense dato.

▪ Røde datoer i oversikten betyr at det er helligdager
▪ Om du har jobbet overtid/ekstra og lignende, vises dette i listen ved at vakten blir uthevet og statuskoden blir vist etter klokkeslett
▪ Om vakten er fraværsført vil du se dette i oversikten. Vises da med kortnavnet på fraværskoden.
▪ Ved å holde musepekeren over cellene vises mer informasjon om arbeidstid/oppgaver/gjøremål/fleksitid som et hint.

Liste:
Viser informasjon om arbeidstid og eventuelle oppgaver i en tabell.
Det vises ukenummer, arbeidsplanuke, statuskode, vaktkode, fra/til klokkeslett på vaktkode eller oppgave, antall timer, avdeling, gruppe, merknad (på vakt eller oppgave). Oppgaver vises under aktuell vaktkode.
Kun vakt: Eget valg som kun viser vakter som er merket til å bli vist i vaktkalender.

* Stjerne etter oppgavekoden indikerer at denne oppgaven er delt fra en annen avdeling og følgelig også skal utføres på den "andre" avdelingen. Hint vil vise hvilken avdeling oppgaven skal utføres på.

Kommentarer på oppgave eller vakt:
Den blå trekanten øverst i høyre hjørne indikerer at det ligger en kommentar på oppgaven eller vakten.
Hold musepeker over for å se kommentarer i hint.
Automatisk genererte kommentarer fra Gat vil ikke alltid vises i MinGat. F.eks kommentar ved gradert favær.

Pasientavtale:
Den røde prikken indikerer at det er registrert pasientavtale på denne oppgaven.
Hold musepeker over for å se pasientavtaler i hint. Det vises antall pasientavtaler og eventuelt klokkeslett, rom og avtaletype på avtalene.

Fra/Til:
Viser informasjon om inneværende måned som standard.
Du kan utvide søket til inntil et år ved å endre fra-/til-dato.

Innstillinger for Min Kalender:
Synkroniser med Microsoft Exchange/Outlook:
Dersom funksjonen er aktivert er det mulig å sette opp en automatisk integrasjon mellom Gat og en exchangekalender f.eks. outlook.
Her har du 5 ulike metoder for å overføre vakter og/eller oppgaver.
I tillegg kan du velge om du vil overføre fravær og frivakter.
Det er også et valg for å aktivere/deaktivere tjenesten.
Merk! Det overføres opplysninger f.o.m. gårsdagen og fremover i tid når du aktiverer tjenesten.

Kun Vakter: Overfører dine vakter til exchangekalender. Eventuelle oppgaver du har fått tildelt, vil vises som tekst på vakten og ikke ligge som egne avtaler. Kan brukes sammen med heldagsavtaler.
Kun oppgaver: Overfører kun oppgaver du har fått tildelt som egne avtaler i kalenderen. Oppgaven vil ta med eventuelle merknader som er knyttet til oppgaven.
Vakter og oppgaver: Overfører både vakter og oppgaver til kalender som egne aktiviteter. Oppgaven vil ta med eventuelle merknader som er knyttet til oppgaven. Kan brukes sammen med Heldagsavtaler
Utvalgte vakter og oppgaver: Overfører oppgaver som egne avtaler samt vakter av en eller flere bestemte vaktkategorier. Hvilke vaktkategorier dette gjelder styres globalt for hver organisasjon.

Fravær: Overfører fraværregistreringer til kalender. Fravær som øverføres til Exchange/Outlook vil, med unntak av timefravær, alltid være heldagsavtaler som vises «øverst i kalenderen». Uavhengig av fraværskode vil «fraværs-avtalene» som opprettes ha status som «Out Of Office».
Frivakter: Frivakter vil behandles på samme måte som vanlige vaktavtaler/vaktkoder.

Heldagsavtaler: Når denne er aktivert vil vakter blir overført som heldagsavtaler og ikke som en tidsbegrenset aktivitet. Klokkeslett på vakten vil vises.

Aktiver tjeneste: Dersom du aktiverer, vil overføring i henhold til dine valg starte umiddelbart. De ulike valgene blir utilgjengelige for endring mens overføringen pågår.

Fargevalg:
Bruk kodefarger: Standard er at denne er aktivert. Betyr at kalenderen i MinGat viser vaktkoder og oppgavekoder med de fargene som er definert på hver enkelt kode i Gat. Dersom denne deaktiveres, vil kalenderen vise de forskjellige kodene/avvikene med ferdig definerte farger.

Visning:
Du kan selv velge hvilke opplysninger som skal vises i din kalender i MinGat.
Aktiver/deaktiver det du ønsker vist/ikke vist i kalenderen.
Følgende opplysninger kan vises/skjules: Vakter, Frivakter, Oppgaver, Fravær, Gjøremål, Fleksitid, Ledige vakter og Merknader.

Eksport av kalender til iCal format:
Dersom du ikke har tilgang til, eller lisens på Exchangekalender, er det mulig å eksportere kalenderen herfra på et format som kalles iCal (.ics).

Ledige vakter i Kalender:
Reglene for hvordan ledige vakter vises under «Min kalender»: Viser kun ledige vakter som ikke overlapper med dine eksisterende vakter eller er innenfor grensen for overlapp.
Ledige vakter vises som kun en avtale hver dag, men med antallet ledige vakter i selve avtaleteksten.
Registrere JaTakk direkte fra kalender: Når du klikker på en ledig vaktavtale i kalenderen vil du få opp registreringsvinduet for JaTakk (samme som ja-takk forespørsel) men kun for den dagen du valgte.
        `
      },
      {
        id: "ical",
        title: "Eksport til kalender med iCal format",
        content: `
Eksport til kalender med iCal format

Hva eksporteres?
Eksporten tar med vaktinformasjon (vaktkode, tidsrom, beskrivelse, avdeling), for en periode som starter en uke tilbake i tid fra dagens dato og så langt det ligger informasjon om vakter framover i tid.
NB! Du vil kun få med vakter (ikke oppgaver) i den nye eksportrutinen.

Fremgangsmetode:
For å eksportere kalenderen din går du til oppsettet på Min Kalender og trykker på «Eksporter»-knappen nederst i oppsettsmenyen.
Når du har trykket på knappen, vil det variere fra nettleser til nettleser hvordan du ser filen som eksporteres.
I nettleseren kan du velge hvor du vil lagre filen. Når du har lagret filen, må du åpne filen/importere filen til kalenderklienten din (for eksempel i Lotus Notes, outlook eller Google Calendar) for å få vist informasjonen.

Ingen automatisk oppdatering:
Vaktene som blir eksportert er de vaktene du har på det tidpunkt eksportfilen produseres og blir ikke automatisk oppdatert. Det betyr at når det gjøres endringer i Gat, må du lagre en ny .ics fil for at kalenderen din skal vise riktig informasjon.
        `
      },
      {
        id: "mine_foresporsler",
        title: "Mine forespørsler",
        content: `
Mine forespørsler

Her kan du registrere nye forespørsler og få oversikt over alle forespørslene dine, både gamle og nye.

Faner:
Forespørslene blir vist på forskjellige faner etter hvilken status de har. Egen fane som viser Alle.
De ulike fanene/statusene er: Ulest, Returnert, Ubehandlet, Under behandling, Godkjent, Avvist og Alle.

Ulest:
Alle meldinger som er ulest, vil bli "flagget" med en rød symbol med et tall for antall uleste i menyene.
Uleste meldinger endrer status til lest når du klikker på pilen til venstre for hver forespørsel.
Klikk på pilen til venstre så får du se mer informasjon og eventuell kommentar fra leder.
Det er også mulig å sette alle som lest ved å benytte knappen til venstre: "Flagg alle som lest"

Ny forespørsel:
Når du peker på knappen "Ny forespørsel" kommer det frem en meny med alle tilgjengelige forespørseltyper.
Hvor mange knapper du har tilgjengelig avhenger av hva som er gjort tilgjengelig i din organisasjon/avdeling.

Følgende forespørseltyper kan benyttes:
JaTakk (Ledige vakter)
Melding
Utrykning
Honorar
Fravær
Overtid/Ekstravakt
Vaktbytte
Multibytte
Forskjøvet vakt (Omdisponering)
Tillegg (Kronetillegg)
Bank
Kompetanse
Kjøring
Bankveksling
Fordeling tid/penger

Godkjenning/Avvisning:
Alle registreringer som blir gjort via forespørsler, blir tilgjengelig for leder (eller leders stedfortreder) i Gat.
Alle registreringer må godkjennes før de blir synlig i vaktbok, bank eller timeliste på den enkelte.
Avviste forespørsler blir ikke lagret i Gat, men vises som avvist i forespørsel-listen.

Returnert:
Leder kan returnere forespørsler som inneholder feil eller mangler.
Disse kan åpnes, korrigeres og sendes inn på nytt, uten at det må lages en helt ny forespørsel.
Returnerte forespørsler kan også slettes dersom det er ønskelig.

Forespørselkladd:
I timeregistreringen er det mulig å lage en forspørselkladd - forespørsel om f.eks. overtid.
Denne vil ha status "kladd" inntil timeregistreringen for den aktuelle uken er godkjent.
Når uken er godkjent vil forespørselkladden bli omgjort til en vanlig forespørsel som kan behandles i dashboard.

Tilganger utover egen avdeling:
Det vil være mulig å registrere forespørsler på andre avdelinger uten at du må bytte nivå.
Merk! Denne tilgangen er indirekte styrt av dine stillingsforhold og tilgangsrettigheter forøvrig.

Informasjon om bytte registrert av annen ansatt:
Dersom en kollega har registrert en forespørsel om å bytte vakt med deg, vil du få et varsel om dette i listen.(ubehandlet)
Dette er kun til informasjon og det er ikke mulig å redigere denne - det må gjøres av den ansatte som har registrert forespørselen.
        `
      },
      {
        id: "jatakk",
        title: "JaTakk (Ledig vakt)",
        content: `
JaTakk (Ledig vakt)

Viser normalt en liste med alle ledige og vakante vakter på din avdeling fra idag og 14 dager frem.
Dersom du har stillingsforhold på flere avdelinger eller har rettighet til å se flere avdelinger, vil det bli vist en samlet liste med ledige/vakante vakter.

Endre periode:
Fra/Til: Dersom du ønsker å se ledige/vakante vakter for en annen periode enn standard, kan du legge inn en ny fra- og/eller tildato.

Filtrering i listen:
Dersom du ønsker å filtrere, sortere, gruppere eller søke i listen har du flere muligheter.
Du kan: Sortere per kolonne, Søke på tekst i listen, Eksportere til Excel, Gruppere på kolonner, Filtrere i kolonner, Bytte rekkefølge på kolonner, Skjule kolonner, Søke i en kolonne.

Registrer JaTakk:
Kryss av for den/de vaktene du ønsker og velg "Lagre" nederst på siden.
Det vil ikke være mulig å registrere JaTakk på en vakt som overlapper med en allerede registrert/planlagt vakt.

Avspasering/Kommentar:
Når du krysser av for en vakt får du samtidig mulighet til å angi om du ønsker avspasering og/eller skrive en kommentar ved at linjen ekspanderes. På linjen som dukker opp under kan du registrere ønskede timer til avspasering samt kommentar.

Min Vaktliste: Viser en oversikt over dine vakter i aktuell periode.

Behandling av JaTakk forespørsler:
Registreringene du gjør, blir synlig for leder i Gat. Leder kan her godkjenne eller avvise dette ønsket!
Tilbakemelding om du har fått vakten eller ikke, gis direkte i forespørsel-listen. Blir vist i "Ulest"-fane og Godkjent/Avvist-fane.
Det er mulig å motta automatisk tilbakemelding via SMS og/eller epost.(Kun dersom SMS/epost er satt opp for organisasjonen din).

Merk!
Dersom iverksetting av vakante vakter blir slettet, blir eventuelle Ja-Takk forespørsler på disse vaktene også slettet.
Disse vil da bli borte fra listen uten noen nærmere forklaring.
        `
      },
      {
        id: "melding",
        title: "Melding",
        content: `
Melding

Her kan du sende en melding til lederen din med informasjon eller spørsmål eller lignende.

Meldingen vil bli varslet i dashboard i Gat for din leder.
Der kan lederen besvare meldingen og du vil igjen får tilbakemelding direkte her i MinGat.

Du kan skrive tilleggstekst og sende den samme meldingen flere ganger til din leder.

Det du skriver her kan leses av alle med rettighet til å besvare meldinger for valgt avdeling. Sensitiv informasjon bør derfor unngås.
        `
      },
      {
        id: "utrykning",
        title: "Utrykning",
        content: `
Utrykning

Her kan du registrere utrykning på egne vakter.
Vil bare fungere på vaktkoder som er definert for registrering av utrykning. (Typisk: bakvakt, vakt på vaktrom, hjemmevakt etc.)

Registrering:
Registrer årsakskode, dato, vakt, fra/til klokkeslett, event. vaktkategori og/eller antall timer til avspasering.
Du kan også skrive en kommentar i feltet "I anledning".
MERK!. Dersom vakten går over midnatt og utrykningen starter etter midnatt, må du velge rett "Utrykningsdato". Skal være den datoen som utrykningen starter.

Lagre og ny:
Benyttes dersom du skal registrere flere utrykninger på samme vakten.
Innhold i vindu lagres og du kan legge inn nye klokkeslett uten å lukke vinduet. Dato, årsakskode og arbeidsperiode beholdes.

Merk!
Det er anledning til å registrere utrykning på en vakt der du er utlånt til annen avdeling.

Min Vaktliste:
Viser en oversikt over dine vakter og eventuelle oppgaver i aktuell periode.
        `
      },
      {
        id: "honorar",
        title: "Honorar",
        content: `
Honorar

Honorar er egentlig en forespørsler om Kronetillegg.
Brukes normalt der hvor ansatte skal forespørre om å få utbetalt et bestemt beløp via variabel lønn for en jobb de har gjort.
Eksempelvis i media hvor freelancere er inne og gjør en avtalt jobb for et avtalt honorar.

Registrering:
Avdeling: Velg avdelingen som skal motta forespørselen. Du vil ha tilgang til alle avdelinger som har åpnet for dette.
Dato: Her velger du dato som oppdraget ble utført.
Honorartype/antall: Velg rett type og antall.
Kommentar: Skriv inn hva oppdraget har bestått av.

Når dette er utfylt så trykker du "lagre".
Forespørselen dukker opp i dashbordet på den avdelingen det ble registrert på og er klar for behandling av leder.
        `
      },
      {
        id: "fravaer",
        title: "Fravær",
        content: `
Fravær

Her kan du registrere forespørsler om fravær.
For eksempel ønske om ferie, avspasere x antall timer på en dato etc.

Registrering:
Avdeling/periode: Velg rett avdeling og om forepørselen gjelder en eller flere dager. Ved fravær på en dag, blir dato og vakt automatisk fylt ut.

Fraværskode:
Velg rett fraværskode. (Tilgjengelige koder styres for hver organisasjon)
Eventuelt saldo i aktuell bank, vil vises under fraværskoden når det er valgt en fraværskode.
Beregnet fravær vises dersom fraværet er knyttet til en bank. Ved bruk av fraværskoeffisient vil denne også vises under beregnet fravær.
Merk! Det er ikke mulig å registrere graderte fravær over flere dager, kun timefravær på en dag.

Dato/Vakt/Klokkeslett:
Avhengig av valgt fraværskode vil det komme frem ulike registreringsfelt.
Fyll inn fra/tildato, Vaktkode, klokkeslett som det ønskes fravær på.
Merk! Fravær på en dag, der du har flere vaktkoder samme dagen og du skal være fraværende på alle, kan registreres ved å velge "Hele dagen" i vaktkodelisten.

Tilleggskrav/Dokumentasjon:
På noen fraværskoder kan det være ytterligere krav om tilleggsopplysninger, for eksempel dokumentasjon for egenmeldinger, sykmeldinger, permisjonssøknader e.l.
Disse kravene vil vises på en egen fane i fraværsforespørselvinduet.
Alle obligatoriske felt må fylles ut før det er mulig å lagre forespørselen.

Merk!
Dokumentasjonen kan redigeres etter at forespørselen er lagret og etter at leder har godkjent forespørsel. Gjøres fra "Mine Fravær"
        `
      },
      {
        id: "overtid_ekstravakt",
        title: "Overtid/Ekstravakt",
        content: `
Overtid/Ekstravakt

Her kan du registrere forespørsel om merarbeid/overtid som du har hatt eller skal ha.

Registrering:
Velg avdeling, årsakskode, dato, vaktkode, eller kun fra/til klokkeslett.
Dersom kun fra og til klokkeslett benyttes, har du mulighet for å spesifisere vaktkategori og legge inn pause ved å velge i nedtrekksmenyen og deretter skrive når pausen starter.
Dette valget er kun tilgjengelig når vaktkode ikke brukes.

Alternativt kan du legge inn timer til avspasering dersom det er ønskelig.
        `
      },
      {
        id: "vaktbytte",
        title: "Vaktbytte",
        content: `
Vaktbytte

Både bytter og avdelingsbytter.
Velg hvilken byttetype du ønsker å gjennomføre. Ut ifra de valgene du tar, vil du få forskjellige bilder pg valgmuligheter.

Byttetyper:
- Gi bort min vakt til annen ansatt
- Overta vakt fra annen ansatt
- Bytte vakt med annen ansatt
- Bytte vakt med avdeling (Kun ta vakt for avdeling er også mulig ved å velge periode)
- Få fri en vakt (bytte med avdeling)

Informasjon om bytte registrert av annen ansatt:
Dersom en kollega har registrert en forespørsel om å bytte vakt med deg, vil du få et varsel om dette i listen.(ubehandlet)
Dette er kun til informasjon og det er ikke mulig å redigere denne - det må gjøres av den ansatte som har registrert forespørselen.

Direktebytte:
Mulighet for å godkjenne bytte direkte fra MinGat.
Typisk brukes denne funksjonen på avdelinger hvor de ansatte har ansvar for å registrere sine egne vaktbytter uten at leder må godkjenne disse.
Dette gjøres ved å registrere en forespørsel om Bytte som normalt og krysse av for "Egen godkjenning" i registreringsvinduet.
        `
      },
      {
        id: "multibytte",
        title: "Multibytte",
        content: `
Multibytte

Denne forespørselstypen gjør at det blir enklere for ansatte å registrere forespørsler om flere bytter på en gang.
Enkelte arbeidsgrupper bytter ikke enkeltvakter, men kanskje hele uker. For dem vil multibytte være svært tidsbesparende.

Registrering:
Som standard vises dine vakter fra dagens dato og en måned frem!
Dersom du ønsker å se en annen periode, endrer du tildato.

Ansatt:
Velg den ansatte i listen "Søk etter ansatt".
Med radioknappen på "Valgt avdeling" vil liste opp ansatte på denne avdelingen.
Setter du radioknappen på "alle tilgjengelige", kan du søke etter ansatte utenfor valgt avdeling.

Velg vakter:
Dine vakter vises i listen til venstre, og vaktene til den du ønsker å bytte med vises i listen til høyre.
Dersom du ønsker å bytte bort en eller flere vakter, krysser du av for dette i listen til venstre. Ønsker du å ta vakter krysser du av i listen til høyre.

Sjekk for overlappende vakter:
Det gjennomføres en sjekk på at de vaktene du bytter bort eller tar, ikke overlapper med andre vakter.
Du vil få en detaljert informasjon med en gang en overlapp oppdages av systemet ved lagring.
        `
      },
      {
        id: "forskjovet_vakt",
        title: "Forskjøvet vakt (Omdisponering)",
        content: `
Forskjøvet vakt (Omdisponering)

Her kan du registrere forskyvning (omdisponering) på vakter.

Registrering:
Registrer årsakskode, evt. huke av for kort varsel (som gir en annen avlønning), dato du har vakt + aktuell vaktkode, dato du ble forskjøvet til + vaktkode, eller klokkeslett fra og til og evt. vaktkategori.
Merk! Det er mulig å registrere forespørsel om å forskyve 2 vakter til en vakt. Da må også feltet "Opprinnelig vakt 2" fylles ut.

Du har to muligheter å registrere ny vakt på, enten ved å benytte "vaktkode" eller "direkte fra/til tid".
Om du velger å sette klokkeslett må du fylle inn kolonne og du har også mulighet til å velge vaktkategori.

Kommentar:
Legg inn eventuelt tilleggsopplysninger.
        `
      },
      {
        id: "tillegg",
        title: "Tillegg",
        content: `
Tillegg

Her kan du registrere forespørsel om kronetillegg som er opprettet for å gi noe "ekstra" i tillegg til vanlig lønn på timelisten din.

Registrering:
Registrer dato, tilleggstype, antall (timer/dager etc)

Kommentar:
Legg eventuelt inn en kommentar.
        `
      },
      {
        id: "bank",
        title: "Bank",
        content: `
Bank

Her kan du registrere timer du har opptjent til de forskjellige bankene i Gat og som ikke legges til automatisk.
Eksempel: Det kan være 2 timer som skal legges i avspaseringsbanken fordi du har vært på et møte.

Registrering:
Velg bank som forespørselen gjelder, sett inn dato og legg inn fra/til klokkeslett og/eller antall timer.
Du kan velge om du skal registrere innskudd eller trekk til bank.
Hvilke banker som er tilgjengelig for forespørsel kan variere avhengig av organisasjonens og avdelingense valg/bestemmelser.

I anledning:
Skriv inn en kommentar om hvorfor du ønsker denne justeringen i banken.
        `
      },
      {
        id: "kompetanse",
        title: "Kompetanse",
        content: `
Kompetanse

Kompetanseregistrering kan gjøres i MinGat som forespørsel.
Du kan registrere forespørsel om kompetanse når hele eller deler av en opplæring/sertifisering er gjennomført.

Registrering:
Velg rett kompetansekode og legg inn datoer og eventuelt tilleggsopplysninger.
Noen koder kan være hovedområder/grupperingskoder. Disse vil være grå og ikke mulig å velge for registrering.

Når det er lagt inn forespørsel om kompetanse i MinGat vil denne komme opp på vanlig måte i Gat og godkjennes eller avvises av leder.

Merk! Dersom du har registrert en forespørsel om en definert kompetanse og den ikke er godkjent, vil denne ikke være tilgjengelig for ny forespørsel før den første forespørselen er godkjent (eller avvist).
        `
      },
      {
        id: "kjoring",
        title: "Kjøring",
        content: `
Kjøring

Her kan du registrere kjøregodtgjøring som ikke skal på vanlig reiseregning.
Eksempel bruk av egen bil i forbindelse med utrykning på hjemmevakt.

Registrering:
Registrer dato, reiserute, antall kilometer og antall passasjerer.

Kommentar:
Legg inne eventuelle tilleggsopplysninger.
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
Du kan se på detaljer om hver registrering ved å klikke på linken ”Timelistetype” til venstre på hver linje.

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
        content: `
Ny timeregistrering

Når du klikker på ’Ny’, åpnes vinduet for å registrere timer i MinGat.

Dato: Velg dato som registreringen skal gjelde for.
Mal: Viser maler i henhold til hva som er definert på prosjektet. Kan brukes for hurtigregistrering.
Prosjekt: Velg fra nedtrekksmenyen blant tilgjengelige prosjekter.
Aktivitet: Velg aktivitet tilgjengelig for valgt prosjekt.
Timer eller stk: Antall timer eller stk med denne aktiviteten.
Kommentar: Tekstfelt for tilleggsopplysninger.

Informasjon:
Når prosjekt og aktivitet er valgt vises beskrivelse. Arbeidsinformasjon viser timeføringer som allerede er gjort på datoen. Visualisering forventet tid hjelper deg å se hva MinGat forventer.

Forespørselskladd:
Gjør det mulig for deg å registrere overtid/merarbeid sammen med timeregistreringen.
Dette gjøres ved at du oppretter en ‘forespørselkladd’ om overtid/merarbeid. Denne blir ikke en reell forespørsel (i dashboard) før timeregistreringen er endelig godkjent.
        `
      },
      {
        id: "min_fleksitid",
        title: "Min fleksitid",
        content: `
Ansatt - Fleksitid

Har du fleksitidsavtale i Gat, vil få et eget menypunkt i MinGat som heter ”Min fleksitid”.
Her vil du kunne stemple inn og ut, se/redigere og søke i dine stemplinger.

Stemple inn/ut:
Siste stempling vises øverst til venstre sammen med klokkeslett for stempling.
Her kan du stemple inn og ut via egne knapper.
Dersom du skal korrigere noen stemplinger, må endringer gjøres via listen til høyre. (Tidsbegrensning gjelder ofte).

Ny periode:
Dersom man ikke har fått registrert stemplinger tilbake i tid, kan man benytte denne knappen for å registrere en periode.

Visning/Periode:
Søk i nedtrekksmeny "Fast periode" eller velg "Søk fra-til dato".

Fleksitidsperiode:
En fleksitidsperiode består at en inn- og en utstempling.
Dersom man ikke stempler inn eller ut en dag hvor det er forventet stempling, vil det opprettes en manglende stempling eller glemt utstempling (-8 timer). Disse må korrigeres.

Oversikt over fleksitidsperioder:
Viser en liste med: Dato for stempling, klokkeslett for inn/utstempling, antall timer tilstede, arbeidstimer tilstede, fleks, uhåndtert tid, etc.
Listen viser alle vakter, både planlagte vakter, frivakter, fravær og manglende stemplinger.

Uhåndtert: Stemplinger utenom fleksperioden eller utover maksgrensen for fleks pr. dag. Disse må håndteres manuelt.
Ulovlig fravær: Utstempling i kjernetid uten godkjent fravær.

Forespørsel:
Hold musepeker over pluss-ikonet og velg aktuell forespørseltype (Merarbeid/overtid, fravær, justering av bank).
        `
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
Ved å klikke på linken ”Signer og dokumenter” (eller "Signer") åpnes en side for elektronisk levering/signering.
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
        content: `
Min Ønskeplan

Viser en oversikt over alle ønskeplanperioder du har vært eller er koblet til.
Det er ønskeplaner i fase 1, fase 2 og iverksatte planer(fase 3) som vises i listen.

Status på dine ønsker:
Blankt felt: Ingen endringer gjort.
Gul farge: Ønskeplanen er påbegynt.
Grønn farge: Ønskeplanen er fullført (krysset av for "Jeg anser meg ferdig").
Rød farge: Ønskeplanen er fullført, men med feil.

For iverksatte ønskeplaner i fase 3 kan du klikke på linken under "Status" for å se statistikk og hvor mange prosent av ønskene dine som ble oppfylt.

Åpne ønskeplan: Klikk på linjen i kolonnen "Periode for ønskeplan".

Faser:
En ønskeplanperiode består av enten 2 eller 3 faser.
Fase 1: Ønskefase.
Fase 2: Hjelpefase/Justeringsfase.
Fase 3: Iverksetting (Planen er låst for redigering av ansatt).
        `
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
Når du har gjort de justeringene du ønsker, kryss av for ”Jeg anser meg ferdig med fase 2” og lagre.
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

Vaktboka vist ”oppgaveorientert”.
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
