'use client';

import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Smartphone, 
  Shield, 
  Power,
  CheckCircle2,
  QrCode,
  Key,
  Lock,
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen,
  Clock,
  Home,
  Phone
} from 'lucide-react';

// The 3 sub-guides in the series - linked to full guides in accessGuides
const guideSteps = [
  {
    id: 'koble-til-app',
    title: 'Koble til appen',
    shortTitle: 'Tilkobling',
    icon: Smartphone,
    description: 'Last ned og koble GatGo-appen til din MinGat-konto',
    fullGuideId: 'gatgo-mobile-setup', // Links to accessGuides
    estimatedTime: '10-15 min'
  },
  {
    id: 'to-trinns-verifisering',
    title: 'To-trinnsverifisering',
    shortTitle: '2FA',
    icon: Shield,
    description: 'Sett opp ekstra sikkerhet med to-trinnsverifisering',
    fullGuideId: 'two-factor-login',
    estimatedTime: '2-5 min'
  },
  {
    id: 'aktivering',
    title: 'Aktivering av app',
    shortTitle: 'Aktivering',
    icon: Power,
    description: 'Fullfør aktiveringen og start å bruke GatGo',
    fullGuideId: 'home-access-setup',
    estimatedTime: '5 min'
  }
];

interface PaaloggingGuideProps {
  onStepChange?: (stepId: string, stepIndex: number) => void;
  onHighlightElement?: (elementId: string | null) => void;
  onOpenFullGuide?: (guideId: string) => void; // Navigate to full accessGuide
}

export function PaaloggingGuide({ onStepChange, onHighlightElement, onOpenFullGuide }: PaaloggingGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    onStepChange?.(guideSteps[index].id, index);
  };

  const handleNext = () => {
    if (currentStep < guideSteps.length - 1) {
      const nextStep = currentStep + 1;
      // Mark current step as completed
      const updatedCompletedSteps = new Set(completedSteps);
      updatedCompletedSteps.add(currentStep);
      setCompletedSteps(updatedCompletedSteps);
      setCurrentStep(nextStep);
      onStepChange?.(guideSteps[nextStep].id, nextStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      onStepChange?.(guideSteps[prevStep].id, prevStep);
    }
  };

  const handleComplete = () => {
    const updatedCompletedSteps = new Set(completedSteps);
    updatedCompletedSteps.add(currentStep);
    setCompletedSteps(updatedCompletedSteps);
  };

  const isStepCompleted = (index: number) => completedSteps.has(index);

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#005077] to-[#0088cc] text-white p-4">
        <h2 className="text-lg font-bold">Kom i gang</h2>
        <p className="text-sm text-white/80">Sett opp GatGo på din mobiltelefon</p>
      </div>

      {/* Progress Steps */}
      <div className="bg-gray-50 border-b px-4 py-3">
        <div className="flex items-center justify-between">
          {guideSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = isStepCompleted(index);
            
            return (
              <React.Fragment key={step.id}>
                {/* Step indicator */}
                <button
                  onClick={() => handleStepClick(index)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-[#005077] text-white shadow-md' 
                      : isCompleted 
                        ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                        : 'bg-white text-gray-500 hover:bg-gray-100 border'
                  }`}
                >
                  <div className="relative">
                    {isCompleted && !isActive ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{step.shortTitle}</span>
                </button>

                {/* Connector line */}
                {index < guideSteps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    isStepCompleted(index) ? 'bg-green-400' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            {React.createElement(guideSteps[currentStep].icon, { className: "w-5 h-5 text-[#0088cc]" })}
            {guideSteps[currentStep].title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{guideSteps[currentStep].description}</p>
        </div>

        {/* Step 1: Koble til appen */}
        {currentStep === 0 && (
          <div className="space-y-4">
            {/* Full guide link */}
            <button
              onClick={() => onOpenFullGuide?.(guideSteps[0].fullGuideId)}
              className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Les full guide: Mobilapp-oppsett (GatGo)</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <Clock className="w-3 h-3" />
                {guideSteps[0].estimatedTime}
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </button>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              <p className="text-amber-800">
                ⚠️ <strong>Viktig:</strong> GatGo bruker "device binding" - appen MÅ kobles via QR-kode fra MinGat på PC. Du kan IKKE logge inn med kun brukernavn/passord.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 flex items-center gap-2 mb-2">
                <Download className="w-4 h-4" />
                1. Last ned GatGo-appen
              </h4>
              <p className="text-sm text-blue-800 mb-3">
                Søk etter "Visma GatGo" i App Store eller Google Play. <strong>Sjekk at utgiver er "Visma Enterprise"!</strong>
              </p>
              <div className="flex gap-2">
                <a 
                  href="https://apps.apple.com/no/app/visma-gatgo/id1303560961" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg text-xs hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a 
                  href="https://play.google.com/store/search?q=visma%20gatgo&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg text-xs hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </a>
              </div>
              <p className="text-xs text-blue-600 mt-2">iOS 12.0+ / Android 7.0+ påkrevd</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <QrCode className="w-4 h-4" />
                2. Generer paringsnøkkel (på PC)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Logg inn på MinGat i nettleser på PC. Du MÅ bruke PC for å fullføre oppsettet.
              </p>
              <div className="bg-white border rounded p-3 text-sm">
                <p className="font-medium text-gray-700 mb-2">Finn QR-koden:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-600">
                  <li>Se etter <strong>"Gå til mobil app"</strong> på startsiden, eller</li>
                  <li>Klikk på ditt navn → <strong>"Min Profil"</strong> → <strong>"Mine Apper"</strong></li>
                  <li>Klikk <strong>"Legg til enhet"</strong></li>
                </ol>
              </div>
              <button 
                onClick={() => onHighlightElement?.('mobile-app')}
                className="mt-3 text-sm text-[#0088cc] hover:underline flex items-center gap-1"
              >
                <ArrowRight className="w-4 h-4" />
                Vis meg hvor i MinGat
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4" />
                3. Skann og verifiser
              </h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p>Åpne GatGo → <strong>"Logg inn"</strong> → <strong>"Aksepter vilkår"</strong> → <strong>"Scann QR-kode"</strong></p>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-yellow-800">
                  <strong>Viktig:</strong> Etter skanning vises en 8-sifret kode (f.eks. "A1B2-C3D4"). 
                  Du må skrive denne koden inn på PC-skjermen for å bekrefte.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: To-trinnsverifisering */}
        {currentStep === 1 && (
          <div className="space-y-4">
            {/* Full guide link */}
            <button
              onClick={() => onOpenFullGuide?.(guideSteps[1].fullGuideId)}
              className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Les full guide: Pålogging med tofaktorautentisering</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <Clock className="w-3 h-3" />
                {guideSteps[1].estimatedTime}
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </button>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4" />
                Hva er to-trinnsverifisering?
              </h4>
              <p className="text-sm text-green-800">
                Ved pålogging hjemmefra kreves det ekstra verifisering via <strong>SMS-kode</strong> eller <strong>Microsoft Authenticator</strong>. 
                Dette sikrer at kun DU kan logge inn, selv om noen vet passordet ditt.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Home className="w-4 h-4" />
                1. Åpne riktig URL hjemmefra
              </h4>
              <div className="bg-white border-2 border-[#0088cc] rounded p-3 text-center">
                <code className="text-[#0088cc] font-mono font-bold">https://mingat.helsenord.no</code>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ⚠️ Ikke bruk interne snarveier eller bokmerker fra jobb-PC-en
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Key className="w-4 h-4" />
                2. Skriv inn påloggingsinfo
              </h4>
              <div className="bg-white border rounded p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm w-24">Brukernavn:</span>
                  <span className="text-sm">Dine Helse Nord-initialer (f.eks. "ABC")</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm w-24">Passord:</span>
                  <span className="text-sm">Samme som på jobb-PC-en</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                3. Motta og skriv inn kode
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Etter innlogging får du en engangskode på SMS eller via Microsoft Authenticator-appen.
              </p>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-8 h-10 border-2 border-gray-300 rounded flex items-center justify-center text-lg font-mono text-gray-400">
                    •
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">Skriv inn 6-sifret kode</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
              <p className="text-amber-800">
                📱 <strong>Ingen SMS?</strong> Vent opptil 2 min. Sjekk mobildekning. Hvis fortsatt ingen SMS, 
                er kanskje mobilnummeret ikke registrert - se Guide 1: Sette opp tilgang hjemmefra.
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Aktivering */}
        {currentStep === 2 && (
          <div className="space-y-4">
            {/* Full guide link */}
            <button
              onClick={() => onOpenFullGuide?.(guideSteps[2].fullGuideId)}
              className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Les full guide: Sette opp tilgang hjemmefra</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-purple-600">
                <Clock className="w-3 h-3" />
                {guideSteps[2].estimatedTime}
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </button>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 flex items-center gap-2 mb-2">
                <Power className="w-4 h-4" />
                Nesten ferdig!
              </h4>
              <p className="text-sm text-purple-800">
                Etter vellykket QR-paring må du sette opp sikkerhet for daglig bruk av appen.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4" />
                1. Opprett PIN-kode
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Velg en 4-sifret PIN-kode for å låse opp appen.
              </p>
              <div className="flex gap-2 justify-center mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xl font-mono text-gray-400">
                    •
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-red-600">
                ⚠️ Unngå enkle kombinasjoner som 1234, 0000 eller fødselsdato
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4" />
                2. Aktiver biometri (sterkt anbefalt)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                For raskere innlogging, aktiver FaceID (iPhone) eller fingeravtrykk.
              </p>
              <div className="bg-green-50 border border-green-200 rounded p-3 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-green-800 text-sm">Appen krever re-autentisering etter 5 min inaktivitet</p>
                  <p className="text-xs text-green-600">Med biometri: bare se på telefonen eller bruk finger!</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                3. Ferdig! Du kan nå:
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Se dine vakter på mobilen
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Motta push-varsler om endringer
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Ta ledige vakter raskt og enkelt
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  Signere timelister digitalt
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h4 className="font-bold text-green-900">Gratulerer!</h4>
              <p className="text-sm text-green-700 mb-3">
                Du er nå klar til å bruke GatGo-appen.
              </p>
              <button 
                onClick={() => onHighlightElement?.('menu')}
                className="text-sm text-green-700 hover:text-green-900 underline flex items-center gap-1 mx-auto"
              >
                <ArrowRight className="w-4 h-4" />
                Utforsk GatGo-menyen
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
              <p className="text-blue-800">
                💡 <strong>Flere arbeidsgivere?</strong> Du kan legge til flere profiler via Innstillinger → "Legg til arbeidsgiver". 
                Gjenta paringsprosessen for hver.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="border-t bg-gray-50 p-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentStep === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Forrige
        </button>

        <div className="flex items-center gap-1">
          {guideSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep
                  ? 'bg-[#0088cc]'
                  : isStepCompleted(index)
                    ? 'bg-green-400'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {currentStep < guideSteps.length - 1 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 bg-[#0088cc] text-white rounded-lg text-sm font-medium hover:bg-[#006699] transition-colors"
          >
            Neste
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleComplete}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isStepCompleted(currentStep)
                ? 'bg-green-500 text-white'
                : 'bg-[#0088cc] text-white hover:bg-[#006699]'
            }`}
          >
            {isStepCompleted(currentStep) ? (
              <>
                <Check className="w-4 h-4" />
                Fullført
              </>
            ) : (
              <>
                Fullfør
                <Check className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default PaaloggingGuide;