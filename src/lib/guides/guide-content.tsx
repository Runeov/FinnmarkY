'use client';

import React from 'react';
import { accessGuides } from '@/data/access-guides';
import { findHelpTopicById, HelpTopic } from '@/data/gatHelpData';
import { Guide } from '@/lib/types';
import { AlertTriangle, CheckCircle, Info, ChevronRight, HelpCircle, ExternalLink, ArrowRight, FileText } from 'lucide-react';

export interface GuideContent {
  title: string;
  content: React.ReactNode;
}

// Store for navigation callback - will be set by the page component
let navigateToGuide: ((guideId: string) => void) | null = null;

export const setGuideNavigator = (callback: (guideId: string) => void) => {
  navigateToGuide = callback;
};

// Clickable link component for related guides
const GuideLink = ({ guideId, children }: { guideId: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigateToGuide) {
      navigateToGuide(guideId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-medium"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

// Helper to render gatHelpData content as formatted React content
const renderHelpTopicContent = (topic: HelpTopic): React.ReactNode => {
  // Parse content into sections
  const lines = topic.content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let currentSection: string[] = [];
  let sectionTitle = '';
  let key = 0;

  const flushSection = () => {
    if (currentSection.length > 0 || sectionTitle) {
      elements.push(
        <div key={key++} className="mb-6">
          {sectionTitle && (
            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              {sectionTitle}
            </h4>
          )}
          <div className="text-gray-700 space-y-2">
            {currentSection.map((line, i) => {
              // Check if line is a bullet point or list item
              if (line.startsWith('▪') || line.startsWith('-') || line.startsWith('•')) {
                return (
                  <div key={i} className="flex items-start gap-2 pl-4">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{line.replace(/^[▪\-•]\s*/, '')}</span>
                  </div>
                );
              }
              // Check if line has a colon (definition style)
              if (line.includes(':') && line.indexOf(':') < 40) {
                const [term, ...rest] = line.split(':');
                const definition = rest.join(':').trim();
                if (definition) {
                  return (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      <span className="font-medium text-gray-900">{term}:</span>{' '}
                      <span className="text-gray-700">{definition}</span>
                    </div>
                  );
                }
              }
              // Regular paragraph
              if (line.trim()) {
                return <p key={i}>{line}</p>;
              }
              return null;
            })}
          </div>
        </div>
      );
      currentSection = [];
      sectionTitle = '';
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    
    // Skip empty lines but use them as section breaks
    if (!trimmed) {
      if (currentSection.length > 0) {
        flushSection();
      }
      continue;
    }

    // Check if this is a section header (all caps or ends with colon and short)
    const isHeader = (
      (trimmed === trimmed.toUpperCase() && trimmed.length > 3 && trimmed.length < 50 && !trimmed.includes(':')) ||
      (trimmed.endsWith(':') && trimmed.length < 40 && !trimmed.includes('.'))
    );

    if (isHeader && currentSection.length === 0) {
      sectionTitle = trimmed.replace(/:$/, '');
    } else {
      currentSection.push(trimmed);
    }
  }

  flushSection();

  return (
    <div className="space-y-6">
      {/* Header badge */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
        <div className="flex items-center gap-2 text-blue-700">
          <Info className="w-5 h-5" />
          <span className="font-medium">Offisiell MinGat dokumentasjon</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="prose prose-blue max-w-none">
        {elements}
      </div>
    </div>
  );
};

// Helper function to get content from gatHelpData
const getHelpTopicContent = (topicId: string): GuideContent | null => {
  const topic = findHelpTopicById(topicId);
  if (!topic) return null;
  return {
    title: topic.title,
    content: renderHelpTopicContent(topic)
  };
};

// Helper to render a structured Guide object as React content
const renderGuideContent = (guide: Guide): React.ReactNode => {
  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Sammendrag</h3>
        <p className="text-blue-800">{guide.summaryNo}</p>
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-blue-700">
          <span className="flex items-center gap-1">
            <Info className="w-4 h-4" />
            Vanskelighetsgrad: {guide.complexity === 'basic' ? 'Enkel' : guide.complexity === 'intermediate' ? 'Middels' : 'Avansert'}
          </span>
          {guide.estimatedTime && (
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Tid: {guide.estimatedTime}
            </span>
          )}
        </div>
      </div>

      {/* Related Guides Links */}
      {guide.relatedGuides && guide.relatedGuides.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Relaterte veiledninger:</h4>
          <div className="flex flex-wrap gap-3">
            {guide.relatedGuides.map(relatedId => {
              const relatedGuide = accessGuides.find(g => g.id === relatedId);
              if (!relatedGuide) return null;
              return (
                <GuideLink key={relatedId} guideId={relatedId}>
                  {relatedGuide.titleNo}
                </GuideLink>
              );
            })}
          </div>
        </div>
      )}

      {/* Steps */}
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
                {step.subSteps.map((sub, i) => {
                  // Check if this substep should link to Microsoft Authenticator guide
                  const isAuthenticatorLink = sub.includes('Microsoft Authenticator') && 
                    (sub.includes('Se egen guide') || sub.includes('Anbefalt') || sub.includes('oppsett'));
                  
                  return (
                    <li key={i} className="flex items-start gap-2 text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>
                        {isAuthenticatorLink ? (
                          <>
                            {sub.split('Se egen guide')[0]}
                            <GuideLink guideId="microsoft-authenticator-setup">
                              Se oppsettguide for Microsoft Authenticator
                            </GuideLink>
                          </>
                        ) : (
                          sub
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {step.callout && (
              <div className={`
                p-4 rounded-lg border mb-6
                ${step.callout.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-900' :
                  step.callout.type === 'error' ? 'bg-red-50 border-red-200 text-red-900' :
                  step.callout.type === 'success' ? 'bg-green-50 border-green-200 text-green-900' :
                  'bg-blue-50 border-blue-200 text-blue-900'}
              `}>
                <div className="flex items-start gap-3">
                  {step.callout.type === 'warning' || step.callout.type === 'error' ? (
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  ) : step.callout.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Info className="w-5 h-5 flex-shrink-0" />
                  )}
                  <div>
                    <span className="font-bold block mb-1">{step.callout.title}</span>
                    <span className="text-sm opacity-90">
                      {/* Check if callout mentions Microsoft Authenticator guide */}
                      {step.callout.content.includes('Microsoft Authenticator oppsett') ? (
                        <>
                          {step.callout.content.split('"Microsoft Authenticator oppsett"')[0]}
                          <GuideLink guideId="microsoft-authenticator-setup">
                            Microsoft Authenticator oppsett
                          </GuideLink>
                          {step.callout.content.split('"Microsoft Authenticator oppsett"')[1] || ' for å komme i gang.'}
                        </>
                      ) : (
                        step.callout.content
                      )}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {step.image && (
              <div className="mt-4 mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <img src={step.image} alt={step.title} className="w-full h-auto" loading="lazy" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Section */}
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
                <p className="text-gray-600">
                  {/* Check for Authenticator mentions in FAQ */}
                  {item.answer.includes('Se vår separate guide') ? (
                    <>
                      {item.answer.split('Se vår separate guide')[0]}
                      <GuideLink guideId="microsoft-authenticator-setup">
                        Se vår oppsettguide
                      </GuideLink>
                      {item.answer.split('Se vår separate guide')[1]?.replace(' for oppsett.', '.') || '.'}
                    </>
                  ) : (
                    item.answer
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to safely get guide content
const getGuideContent = (guideId: string): GuideContent | null => {
  const guide = accessGuides.find(g => g.id === guideId);
  if (!guide) return null;
  return {
    title: guide.titleNo,
    content: renderGuideContent(guide)
  };
};

// Build the content map
const guideContentMap: Record<string, GuideContent> = {
  // ========== STATIC CONTENT ==========
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
          <li><strong>Horisontal meny:</strong> Gir tilgang til hovedmoduler som Kalender, Forespørsler og Avdelinger.</li>
          <li><strong>Vertikal meny:</strong> Tilpasset din rolle. Gir rask tilgang til "Min kalender", "Mine banker" og personlig informasjon.</li>
        </ul>
        <h4 className="text-lg font-medium mb-2">Widgets</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Ledige vakter:</strong> En oversikt over vakter du kan søke på (JaTakk).</li>
          <li><strong>Meldinger:</strong> Systemmeldinger eller beskjeder fra leder.</li>
          <li><strong>Mine apper:</strong> Hvor du setter opp GatGo (mobilapp).</li>
        </ul>
      </div>
    )
  },
  'min-timeliste': {
    title: 'Min Timeliste og Lønn',
    content: (
      <div>
        <p className="mb-4">
          Timelisten i GAT danner grunnlaget for utbetaling av variabel lønn (overtid, tillegg, ekstravakter).
        </p>
        <h4 className="text-lg font-medium mb-2">Viktige begreper</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Manglende stempling:</strong> Hvis du glemmer å stemple ut, må leder manuelt korrigere vakten.</li>
          <li><strong>Usignerte timer:</strong> Timer som ikke er godkjent av leder ennå.</li>
        </ul>
        <h4 className="text-lg font-medium mb-2">Lønnsarter og koder</h4>
        <table className="w-full text-sm text-left text-gray-500 mb-4 border rounded overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Kode</th>
              <th className="px-4 py-3">Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b"><td className="px-4 py-3">Kveldstillegg</td><td className="px-4 py-3">1411 / 1420</td><td className="px-4 py-3">Etter kl. 17:00</td></tr>
            <tr className="bg-white border-b"><td className="px-4 py-3">Helg</td><td className="px-4 py-3">1405</td><td className="px-4 py-3">Lørdag/Søndag tillegg</td></tr>
            <tr className="bg-white"><td className="px-4 py-3">Overtid 100%</td><td className="px-4 py-3">2162</td><td className="px-4 py-3">Helg/høytid</td></tr>
          </tbody>
        </table>
      </div>
    )
  },
  'fravaer': {
    title: 'Fraværshåndtering',
    content: (
      <div>
        <p className="mb-4">Riktig registrering av fravær er avgjørende for korrekt lønn og NAV-refusjon.</p>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 100 - Egenmelding</h5>
            <p className="text-sm text-gray-600 mt-1">Kortvarig sykdom (opptil 8 dager).</p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 110 - Sykemelding</h5>
            <p className="text-sm text-gray-600 mt-1">Legeerklært fravær.</p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 200 - Sykt barn</h5>
            <p className="text-sm text-gray-600 mt-1">10 dager per år (15 ved 3+ barn).</p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h5 className="font-bold text-gray-800">Kode 400 - Ferie</h5>
            <p className="text-sm text-gray-600 mt-1">Lovfestet ferie (25 dager).</p>
          </div>
        </div>
      </div>
    )
  },
  'min-onskeplan': {
    title: 'Min Ønskeplan (Ønsketurnus)',
    content: (
      <div>
        <p className="mb-4">Ønsketurnus gir deg mulighet til å påvirke din egen vaktplan før den fastsettes.</p>
        <h4 className="text-lg font-medium mb-2">Hvordan fungerer det?</h4>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li><strong>Leder åpner perioden:</strong> Du får beskjed når det er åpent for å legge inn ønsker.</li>
          <li><strong>Registrer ønsker:</strong> Marker dager som Kan jobbe (Grønn), Ønsker fri (Rød), eller Ønsker spesifikk vakt (Gul).</li>
          <li><strong>Score-systemet:</strong> GAT beregner en rettferdighetsscore basert på hvor mange ønsker som innfris over tid.</li>
        </ol>
      </div>
    )
  },
  'vaktbok': {
    title: 'Vaktbok (For Leder)',
    content: (
      <div>
        <p className="mb-4">Vaktboken er lederens hovedverktøy for daglig drift.</p>
        <h4 className="text-lg font-medium mb-2">Nøkkelfunksjoner</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Daglig styring:</strong> Se status på alle ansatte (på jobb, syk, ferie).</li>
          <li><strong>Hjelpeplaner:</strong> Dekk hull i grunnturnus med vikarer.</li>
          <li><strong>Logg:</strong> Alle endringer logges for sporbarhet.</li>
        </ul>
      </div>
    )
  }
};

// ========== ADD DYNAMIC ACCESS GUIDES ==========

// Home Access Setup
const homeAccessGuide = getGuideContent('home-access-setup');
if (homeAccessGuide) {
  guideContentMap['home-access-setup'] = homeAccessGuide;
  guideContentMap['innlogging'] = homeAccessGuide;
}

// Two-Factor Login
const twoFactorGuide = getGuideContent('two-factor-login');
if (twoFactorGuide) {
  guideContentMap['two-factor-login'] = twoFactorGuide;
}

// Shift Management
const shiftManagementGuide = getGuideContent('shift-management');
if (shiftManagementGuide) {
  guideContentMap['shift-management'] = shiftManagementGuide;
  guideContentMap['vaktplanlegging'] = shiftManagementGuide;
}

// Time Tracking
const timeTrackingGuide = getGuideContent('time-tracking');
if (timeTrackingGuide) {
  guideContentMap['time-tracking'] = timeTrackingGuide;
  guideContentMap['timeregistrering'] = timeTrackingGuide;
}

// Compliance
const complianceGuide = getGuideContent('compliance');
if (complianceGuide) {
  guideContentMap['compliance'] = complianceGuide;
  guideContentMap['godkjenninger'] = complianceGuide;
}

// GatGo Mobile Setup
const gatgoGuide = getGuideContent('gatgo-mobile-setup');
if (gatgoGuide) {
  guideContentMap['gatgo-mobile-setup'] = gatgoGuide;
  guideContentMap['mine-apper'] = gatgoGuide;
  guideContentMap['mobilapp'] = gatgoGuide;
  guideContentMap['mobile'] = gatgoGuide; // Category ID
}

// Microsoft Authenticator Setup
const authenticatorGuide = getGuideContent('microsoft-authenticator-setup');
if (authenticatorGuide) {
  guideContentMap['microsoft-authenticator-setup'] = authenticatorGuide;
  guideContentMap['authenticator'] = authenticatorGuide;
}

// Pålogging (Login)
const paloggingGuide = getGuideContent('pålogging');
if (paloggingGuide) {
  guideContentMap['pålogging'] = paloggingGuide;
  guideContentMap['login'] = paloggingGuide;
  guideContentMap['authentication'] = paloggingGuide; // Category ID
}

// Navigasjon
const navigasjonGuide = getGuideContent('navigasjon');
if (navigasjonGuide) {
  guideContentMap['navigasjon'] = navigasjonGuide;
  guideContentMap['navigation'] = navigasjonGuide;
}

// Feilsøking (Troubleshooting)
const feilsokingGuide = getGuideContent('feilsøking');
if (feilsokingGuide) {
  guideContentMap['feilsøking'] = feilsokingGuide;
  guideContentMap['troubleshooting'] = feilsokingGuide;
}

// ========== ADD GAT HELP DATA TOPICS ==========
// These are official MinGat documentation topics

const gatHelpTopicIds = [
  'innlogging',
  'startsiden', 
  'min_profil',
  'min_kalender',
  'ical',
  'mine_foresporsler',
  'jatakk',
  'melding',
  'utrykning',
  'honorar',
  'fravaer',
  'overtid_ekstravakt',
  'vaktbytte',
  'multibytte',
  'forskjovet_vakt',
  'tillegg',
  'bank',
  'kompetanse',
  'kjoring',
  'bankveksling',
  'fordeling_tid_penger',
  'paminnelser',
  'min_timeliste',
  'min_timeregistrering',
  'ny_timeregistrering',
  'min_fleksitid',
  'mine_banker',
  'min_arsarbeidstid',
  'mine_fravaer',
  'min_kompetanse',
  'mine_bytter',
  'mine_faste_tillegg',
  'min_tilgjengelighet',
  'mine_stillingsforhold',
  'mine_lonnsslipper',
  'min_lonnsoversikt',
  'min_ukeplanlegging',
  'min_onskeplan',
  'onskeplan_fase_1',
  'onskeplan_fase_2',
  'sporreundersokelser',
  'mine_forskjovne_vakter',
  'mine_fordelinger',
  'min_ferie',
  'mine_apper',
  'mine_utrykninger',
  'vaktbok',
  'oppgave_oversikt',
  'ukevisning',
  'gjoremal',
  'arbeidsplaner',
  'navneliste',
  'rapporter',
  'vaktkodeliste',
  'send_sms',
  'listevisninger',
  'personvern',
  'utskrifter',
  'logging',
  'mingat_leder',
  'leder_startsiden',
  'leder_fravaer',
  'leder_vaktbok'
];

// Add each gatHelpData topic if not already in map
for (const topicId of gatHelpTopicIds) {
  if (!guideContentMap[topicId]) {
    const helpContent = getHelpTopicContent(topicId);
    if (helpContent) {
      guideContentMap[topicId] = helpContent;
    }
  }
}

// ========== CATEGORY ID MAPPINGS ==========
// Map category IDs from sidebar to appropriate content

// Calendar category → Min Kalender
if (guideContentMap['min_kalender']) {
  guideContentMap['calendar'] = guideContentMap['min_kalender'];
}

// Requests category → Mine forespørsler
if (guideContentMap['mine_foresporsler']) {
  guideContentMap['requests'] = guideContentMap['mine_foresporsler'];
}

// Team category → Vaktbok
if (guideContentMap['vaktbok']) {
  guideContentMap['team'] = guideContentMap['vaktbok'];
}

// Troubleshooting category (if not already set)
if (!guideContentMap['troubleshooting'] && guideContentMap['feilsøking']) {
  guideContentMap['troubleshooting'] = guideContentMap['feilsøking'];
}

export const guideContent = guideContentMap;