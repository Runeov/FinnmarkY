import React from 'react';
import { accessGuides } from './access-guides';
import { Guide } from '@/lib/types';
import { ExternalLink, Smartphone, AlertTriangle, CheckCircle, Info, ChevronRight, HelpCircle } from 'lucide-react';

export interface GuideContent {
  title: string;
  content: React.ReactNode;
}

// Helper to render a structured Guide object as React content
const renderGuideContent = (guide: Guide) => {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Sammendrag</h3>
        <p className="text-blue-800">{guide.summaryNo}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-blue-700">
          <span className="flex items-center gap-1">
            <Info className="w-4 h-4" />
            Vanskelighetsgrad: {guide.complexity === 'basic' ? 'Enkel' : guide.complexity === 'intermediate' ? 'Middels' : 'Avansert'}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Tid: {guide.estimatedTime}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {guide.steps.map((step, index) => (
          <div key={step.id} className="relative pl-8 border-l-2 border-gray-200 hover:border-blue-500 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>

            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {step.title}
            </h4>

            <p className="text-gray-700 mb-4 text-lg leading-relaxed">{step.content}</p>

            {step.subSteps && (
              <ul className="mb-6 space-y-2">
                {step.subSteps.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            )}

            {step.callout && (
              <div className={`
                p-4 rounded-lg border mb-6 flex items-start gap-3
                ${step.callout.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-900' :
                  step.callout.type === 'success' ? 'bg-green-50 border-green-200 text-green-900' :
                  'bg-blue-50 border-blue-200 text-blue-900'}
              `}>
                {step.callout.type === 'warning' ? <AlertTriangle className="w-5 h-5 flex-shrink-0" /> :
                 step.callout.type === 'success' ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> :
                 <Info className="w-5 h-5 flex-shrink-0" />}
                <div>
                  <span className="font-bold block mb-1">{step.callout.title}</span>
                  <span className="text-sm opacity-90">{step.callout.content}</span>
                </div>
              </div>
            )}

            {step.image && (
              <div className="mt-4 mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <img src={step.image} alt={step.title} className="w-full h-auto" />
              </div>
            )}
          </div>
        ))}
      </div>

      {guide.faq && guide.faq.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Ofte stilte spørsmål
          </h3>
          <div className="grid gap-4">
            {guide.faq.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h5 className="font-bold text-gray-900 mb-2">{item.question}</h5>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Map guides to content record
const guideContentMap: Record<string, GuideContent> = {
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
  'innlogging': renderGuideContent(accessGuides.find(g => g.id === 'home-access-setup')!) ?
                { title: accessGuides.find(g => g.id === 'home-access-setup')!.titleNo,
                  content: renderGuideContent(accessGuides.find(g => g.id === 'home-access-setup')!) } :
                { title: 'Innlogging', content: <p>Kunne ikke laste guide.</p> },

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
  'mine-apper': renderGuideContent(accessGuides.find(g => g.id === 'gatgo-mobile-setup')!) ?
                { title: accessGuides.find(g => g.id === 'gatgo-mobile-setup')!.titleNo,
                  content: renderGuideContent(accessGuides.find(g => g.id === 'gatgo-mobile-setup')!) } :
                { title: 'Mobil App (GatGo)', content: <p>Kunne ikke laste guide.</p> },

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

// Add mapped content for specific IDs that should use the full guide renderer
// We also map the English IDs to ensure they work if selected directly
guideContentMap['home-access-setup'] = guideContentMap['innlogging'];
guideContentMap['gatgo-mobile-setup'] = guideContentMap['mine-apper'];

// For the third guide (Two-Factor), we can add it as well, or map it to a sub-section of login
// Let's add it as a standalone item just in case
guideContentMap['two-factor-login'] = renderGuideContent(accessGuides.find(g => g.id === 'two-factor-login')!) ?
    { title: accessGuides.find(g => g.id === 'two-factor-login')!.titleNo,
      content: renderGuideContent(accessGuides.find(g => g.id === 'two-factor-login')!) } :
    { title: 'Tofaktor Pålogging', content: <p>Kunne ikke laste guide.</p> };

export const guideContent = guideContentMap;
