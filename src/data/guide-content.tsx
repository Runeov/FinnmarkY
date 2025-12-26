import React from 'react';

export interface GuideContent {
  title: string;
  content: React.ReactNode;
}

export const guideContent: Record<string, GuideContent> = {
  'mingat-hjelp': {
    title: 'MinGat Hjelp',
    content: (
      <div>
        <p className="mb-4 text-lg">
          Velkommen til MinGat-hjelpen. MinGat fungerer som sentralnervesystemet for bemanningsplanlegging i Helse Nord.
          Det er her kliniske behov møter regelverk, økonomistyring og ansattvelferd.
        </p>
        <p className="mb-4">
          Velg et emne i menyen til venstre for å lære mer om:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Innlogging og sikkerhet</li>
          <li>Vaktplanlegging og ønsketurnus</li>
          <li>Timeregistrering og lønn</li>
          <li>Fraværshåndtering</li>
          <li>Mobilapp (GatGo)</li>
        </ul>
      </div>
    )
  },
  'innlogging': {
    title: 'Innlogging og Tilgang',
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-3">Tilgang til MinGat</h3>
        <p className="mb-4">
          Tilgang til MinGat styres av strenge sikkerhetsprotokoller for å beskytte sensitive personopplysninger.
          Innloggingsmetoden avhenger av om du sitter på sykehusets nettverk eller hjemme.
        </p>

        <h4 className="text-lg font-medium mb-2">Intern Tilgang (På jobb)</h4>
        <p className="mb-4">
          Når du er koblet til Helse Nords interne nettverk (via arbeidsstasjon), bruker du <strong>Single Sign-On (SSO)</strong>.
          Dette betyr at du logger inn med dine vanlige brukerinitialer og passord (samme som til PC-en).
        </p>

        <h4 className="text-lg font-medium mb-2">Ekstern Tilgang (Hjemmefra)</h4>
        <p className="mb-4">
          For å logge inn hjemmefra (MinGat Home) kreves tofaktorautentisering:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>Gå til <a href="#" className="text-blue-600 hover:underline">https://mingat.helsenord.no</a></li>
          <li>Skriv inn ditt brukernavn og passord.</li>
          <li>Du mottar en engangskode (OTP) på SMS.</li>
          <li>Skriv inn koden for å fullføre innloggingen.</li>
        </ol>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="font-bold text-yellow-800">Feilsøking:</p>
          <p className="text-sm text-yellow-700">
            Får du ikke SMS? Sjekk at mobilnummeret ditt er riktig registrert i personalkatalogen (intern telefonkatalog).
            Hvis du har byttet nummer, må dette oppdateres mens du er på jobbnettverket for å unngå å bli låst ute hjemmefra.
          </p>
        </div>
      </div>
    )
  },
  'startsiden': {
    title: 'Startsiden og Dashbord',
    content: (
      <div>
        <p className="mb-4">
          MinGat-dashbordet er designet for å gi deg umiddelbar oversikt over din arbeidshverdag.
          Skjermbildet er delt inn i menyer og "widgets" (små informasjonsbokser).
        </p>

        <h4 className="text-lg font-medium mb-2">Navigasjon</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Horisontal meny:</strong> Gir tilgang til hovedmoduler som Kalender, Forespørsler og Avdelinger. Her finner du også <em>Nivåvelgeren</em> hvis du jobber på flere avdelinger.</li>
          <li><strong>Vertikal meny:</strong> Tilpasset din rolle. Gir rask tilgang til "Min kalender", "Mine banker" og personlig informasjon.</li>
        </ul>

        <h4 className="text-lg font-medium mb-2">Widgets</h4>
        <p className="mb-4">
          På forsiden ser du ofte widgets som:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Ledige vakter:</strong> En oversikt over vakter du kan søke på (JaTakk).</li>
          <li><strong>Meldinger:</strong> Systemmeldinger eller beskjeder fra leder.</li>
          <li><strong>Mine apper:</strong> Hvor du setter opp GatGo (mobilapp).</li>
        </ul>
      </div>
    )
  },
  'mine-apper': {
    title: 'Mobil App (GatGo)',
    content: (
      <div>
        <p className="mb-4">
          GatGo er mobilappen som lar deg sjekke vakter, bytte vakter og se meldinger direkte på mobilen.
          For å ta den i bruk må du koble ("pare") telefonen din med din MinGat-bruker.
        </p>

        <h4 className="text-lg font-medium mb-2">Slik kommer du i gang</h4>
        <ol className="list-decimal pl-5 space-y-4 mb-6">
          <li>
            <strong>Last ned appen:</strong> Søk etter "GatGo" i App Store (iPhone) eller Google Play (Android).
          </li>
          <li>
            <strong>Generer kode i MinGat:</strong>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
              <li>Logg inn på MinGat på en PC.</li>
              <li>Gå til widgeten eller menyen "Mine apper".</li>
              <li>Klikk på "Vis oppsettkode" eller "Ny enhet".</li>
            </ul>
          </li>
          <li>
            <strong>Skann koden:</strong> Åpne GatGo-appen på telefonen og velg "Skann QR-kode". Rett kameraet mot skjermen.
          </li>
        </ol>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800">
          <strong>Tips:</strong> Prøv vår interaktive demo til høyre! Klikk på "Mobil app" boksen i demomiljøet for å se hvordan QR-koden ser ut.
        </div>
      </div>
    )
  },
  'min-timeliste': {
    title: 'Min Timeliste og Lønn',
    content: (
      <div>
        <p className="mb-4">
          Timelisten i GAT danner grunnlaget for utbetaling av variabel lønn (overtid, tillegg, ekstravakter).
          Fastlønn kjøres vanligvis via personalsystemet, men avvik og tillegg kommer fra GAT.
        </p>

        <h4 className="text-lg font-medium mb-2">Viktige begreper</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Manglende stempling:</strong> Hvis du glemmer å stemple ut, må leder manuelt korrigere vakten. Dette vises ofte som et avvik.</li>
          <li><strong>Usignerte timer:</strong> Timer som er registrert men ikke godkjent av leder ennå. Disse blir ikke utbetalt før de er signert.</li>
        </ul>

        <h4 className="text-lg font-medium mb-2">Lønnsarter og koder</h4>
        <table className="w-full text-sm text-left text-gray-500 mb-4 border rounded overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Kode</th>
              <th className="px-6 py-3">Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">Kveldstillegg</td>
              <td className="px-6 py-4">1411 / 1420</td>
              <td className="px-6 py-4">Utløses typisk etter kl. 17:00.</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">Helg</td>
              <td className="px-6 py-4">1405</td>
              <td className="px-6 py-4">Lørdag/Søndag tillegg (min. 75 kr/t).</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4">Overtid 100%</td>
              <td className="px-6 py-4">2162</td>
              <td className="px-6 py-4">Ekstraordinær overtid (helg/høytid).</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  'fravaer': {
    title: 'Fraværshåndtering',
    content: (
      <div>
        <p className="mb-4">
          Riktig registrering av fravær er avgjørende for korrekt lønn og NAV-refusjon.
          Her er de vanligste kodene du må kjenne til.
        </p>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 100 - Egenmelding</h5>
            <p className="text-sm text-gray-600 mt-1">
              Brukes ved kortvarig sykdom (opptil 8 dager). Krever at du har vært ansatt i minst 2 måneder.
            </p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 110 - Sykemelding</h5>
            <p className="text-sm text-gray-600 mt-1">
              Legeerklært fravær. Data overføres automatisk til lønnssystemet. Del D av sykemeldingen må sendes til personalavdelingen.
            </p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 200 - Sykt barn</h5>
            <p className="text-sm text-gray-600 mt-1">
              Kvote: 10 dager per kalenderår (15 ved 3+ barn). Egenmelding de første 3 dagene, deretter kreves legeerklæring.
            </p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 400 - Ferie</h5>
            <p className="text-sm text-gray-600 mt-1">
              Lovfestet ferie (25 dager). Husk at feriedager i prinsippet er ubetalte – de dekkes av feriepenger opptjent året før.
            </p>
          </div>
        </div>
      </div>
    )
  },
  'min-onskeplan': {
    title: 'Min Ønskeplan (Ønsketurnus)',
    content: (
      <div>
        <p className="mb-4">
          Ønsketurnus gir deg mulighet til å påvirke din egen vaktplan før den fastsettes.
          Dette bidrar til en mer rettferdig fordeling og bedre balanse mellom arbeid og fritid.
        </p>

        <h4 className="text-lg font-medium mb-2">Hvordan fungerer det?</h4>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>Leder åpner perioden:</strong> Du får beskjed når det er åpent for å legge inn ønsker.</li>
          <li><strong>Registrer ønsker:</strong> I MinGat kan du markere dager som:
            <ul className="list-disc pl-5 mt-1 text-sm">
              <li><em>Kan jobbe (Grønn)</em></li>
              <li><em>Ønsker fri (Rød)</em></li>
              <li><em>Ønsker spesifikk vakt (Gul)</em></li>
            </ul>
          </li>
          <li><strong>Score-systemet:</strong> GAT beregner en "rettferdighetsscore" basert på hvor mange av dine ønsker som innfris over tid.</li>
        </ol>

        <p className="text-sm text-gray-500 italic">
          Merk: Hvis du ikke ser ønsketurnus-fanen, har ikke leder åpnet for registrering ennå, eller du ser på feil periode.
        </p>
      </div>
    )
  },
  'vaktbok': {
    title: 'Vaktbok (For Leder)',
    content: (
      <div>
        <p className="mb-4">
          Vaktboken er lederens hovedverktøy for daglig drift. Den gir oversikt over hvem som er på jobb, fravær og behov for innleie.
        </p>
        <h4 className="text-lg font-medium mb-2">Nøkkelfunksjoner</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Daglig styring:</strong> Se status på alle ansatte (på jobb, syk, ferie).</li>
          <li><strong>Hjelpeplaner:</strong> Brukes for å dekke hull i grunnturnus med vikarer eller ekstrahjelp.</li>
          <li><strong>Logg:</strong> Alle endringer i vaktboken logges. Hvis en vakt "forsvinner", kan du sjekke loggen for å se hvem som slettet den.</li>
        </ul>
      </div>
    )
  }
};
