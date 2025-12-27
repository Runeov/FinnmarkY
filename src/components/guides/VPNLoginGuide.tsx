'use client';

import React, { useState } from 'react';
import { 
  VPNConnection,
  MinGatLogin,
  ConnectionStatus,
  VPNDownload 
} from './Mingathomeaccesscomponents';

/**
 * VPNLoginGuide - Complete Interactive Guide for VPN Setup
 * 
 * Use this in your interactive section alongside:
 * - Timeregistrering
 * - Flexitid  
 * - Ønskeplan
 */

interface VPNLoginGuideProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function VPNLoginGuide({ 
  highlightedElement,
  onElementClick 
}: VPNLoginGuideProps = {}) {
  
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      id: 'download',
      title: 'Steg 0: Last ned VPN-klient',
      description: 'Første gang? Last ned VPN-programmet for ditt operativsystem',
      component: <VPNDownload highlightedElement={highlightedElement} onElementClick={onElementClick} />
    },
    {
      id: 'connect',
      title: 'Steg 1: Koble til VPN',
      description: 'Start VPN-programmet og logg inn med ditt brukernavn',
      component: <VPNConnection highlightedElement={highlightedElement} onElementClick={onElementClick} />
    },
    {
      id: 'login',
      title: 'Steg 2: Logg inn på MinGat',
      description: 'Når VPN er tilkoblet, åpne MinGat og logg inn',
      component: <MinGatLogin highlightedElement={highlightedElement} onElementClick={onElementClick} />
    },
    {
      id: 'test',
      title: 'Steg 3: Test tilkoblingen',
      description: 'Sjekk at alt fungerer som det skal',
      component: <ConnectionStatus highlightedElement={highlightedElement} onElementClick={onElementClick} />
    }
  ];
  
  const currentStepData = steps[currentStep];
  
  return (
    <div className="space-y-6">
      {/* Progress Steps */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">MinGat Hjemmefra</h3>
          <span className="text-sm text-gray-600">
            Steg {currentStep + 1} av {steps.length}
          </span>
        </div>
        
        {/* Step Indicators */}
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => setCurrentStep(index)}
                className={`
                  flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all
                  ${index === currentStep
                    ? 'bg-blue-600 text-white'
                    : index < currentStep
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'}
                `}
              >
                {index < currentStep ? '✓' : index + 1}
              </button>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-4 ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Current Step Content */}
      <div>
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            {currentStepData.title}
          </h4>
          <p className="text-gray-600">
            {currentStepData.description}
          </p>
        </div>
        
        {/* Interactive Component */}
        {currentStepData.component}
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className={`
            flex-1 px-4 py-3 rounded-lg font-medium transition-all
            ${currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
          `}
        >
          ← Forrige
        </button>
        
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className={`
            flex-1 px-4 py-3 rounded-lg font-medium transition-all
            ${currentStep === steps.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'}
          `}
        >
          Neste →
        </button>
      </div>
      
      {/* Troubleshooting */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h5 className="font-semibold text-amber-900 mb-2">Feilsøking</h5>
        <div className="space-y-2 text-sm text-amber-800">
          <div>
            <strong>Får ikke koblet til VPN?</strong>
            <p>Sjekk at brukernavn og passord er riktig (samme som på jobben).</p>
          </div>
          <div>
            <strong>VPN tilkoblet men MinGat fungerer ikke?</strong>
            <p>Vent 30 sekunder etter VPN-tilkobling, deretter prøv igjen.</p>
          </div>
          <div>
            <strong>Trenger mer hjelp?</strong>
            <p>Kontakt IT-support på tlf 123 45 678 eller support@sykehus.no</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Simpler version without step navigation
 */
export function VPNLoginGuideSimple({ 
  highlightedElement,
  onElementClick 
}: VPNLoginGuideProps = {}) {
  
  return (
    <div className="space-y-8">
      {/* Step 0: Download */}
      <section>
        <h3 className="text-xl font-bold mb-4">Steg 0: Last ned VPN-klient</h3>
        <p className="mb-4 text-gray-600">
          Første gang? Last ned VPN-programmet for ditt operativsystem:
        </p>
        <VPNDownload highlightedElement={highlightedElement} onElementClick={onElementClick} />
      </section>
      
      {/* Step 1: Connect */}
      <section>
        <h3 className="text-xl font-bold mb-4">Steg 1: Koble til VPN</h3>
        <p className="mb-4 text-gray-600">
          Start VPN-programmet og logg inn med ditt brukernavn:
        </p>
        <VPNConnection highlightedElement={highlightedElement} onElementClick={onElementClick} />
      </section>
      
      {/* Step 2: Login */}
      <section>
        <h3 className="text-xl font-bold mb-4">Steg 2: Logg inn på MinGat</h3>
        <p className="mb-4 text-gray-600">
          Når VPN er tilkoblet, åpne MinGat og logg inn:
        </p>
        <MinGatLogin highlightedElement={highlightedElement} onElementClick={onElementClick} />
      </section>
      
      {/* Step 3: Test */}
      <section>
        <h3 className="text-xl font-bold mb-4">Steg 3: Test tilkoblingen</h3>
        <p className="mb-4 text-gray-600">
          Sjekk at alt fungerer som det skal:
        </p>
        <ConnectionStatus highlightedElement={highlightedElement} onElementClick={onElementClick} />
      </section>
      
      {/* Troubleshooting */}
      <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="text-lg font-bold mb-4 text-amber-900">Feilsøking</h4>
        <div className="space-y-4 text-sm text-amber-800">
          <div>
            <h5 className="font-semibold mb-1">Får ikke koblet til VPN?</h5>
            <p>
              Sjekk at brukernavn og passord er riktig. Det skal være samme 
              brukernavn og passord som du bruker på jobben.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-1">VPN tilkoblet men MinGat fungerer ikke?</h5>
            <p>
              Vent 30 sekunder etter VPN-tilkobling er opprettet, 
              deretter prøv å logge inn på MinGat igjen.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-1">Trenger du mer hjelp?</h5>
            <p>
              Kontakt IT-support på tlf 123 45 678 eller send e-post 
              til support@sykehus.no
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}