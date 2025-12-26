'use client';

import React, { useState } from 'react';
import { Star, Clock, Smartphone, Shield, Home } from 'lucide-react';
import { GuideCard } from './GuideCard';
import { accessGuides } from '@/data/access-guides';

const featuredGuideIds = ['home-access-setup', 'two-factor-login', 'gatgo-mobile-setup'];

const featuredGuideIcons = {
  'home-access-setup': Home,
  'two-factor-login': Shield,
  'gatgo-mobile-setup': Smartphone,
};

export function FeaturedGuides() {
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(null);

  const featuredGuides = accessGuides.filter(guide => featuredGuideIds.includes(guide.id));

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-6 h-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Viktigste veiledninger</h2>
          <Star className="w-6 h-6 text-yellow-500" />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          De tre mest essensielle veiledningene for å komme i gang med MinGat hjemmefra og GatGo mobilapp.
        </p>
      </div>

      {/* Featured Guide Cards */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {featuredGuides.map((guide, index) => {
          const Icon = featuredGuideIcons[guide.id as keyof typeof featuredGuideIcons];
          
          return (
            <div key={guide.id} className="relative">
              {/* Step Number */}
              <div className="absolute -left-4 -top-4 z-10 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Enhanced Guide Card */}
              <div className="bg-white rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.titleNo}</h3>
                      <p className="text-gray-600 mb-3">{guide.summaryNo}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{guide.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="capitalize">{guide.complexity === 'basic' ? 'Enkel' : guide.complexity === 'intermediate' ? 'Middels' : 'Avansert'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {guide.interface === 'mingat' ? 'MinGat' : guide.interface === 'gatgo' ? 'GatGo' : 'Alle'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setExpandedGuideId(expandedGuideId === guide.id ? null : guide.id)}
                    className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    {expandedGuideId === guide.id ? 'Skjul veiledning' : 'Vis veiledning'}
                  </button>
                </div>
                
                {/* Expanded Content */}
                {expandedGuideId === guide.id && (
                  <div className="border-t border-gray-200 px-6 pb-6">
                    <div className="mt-6 space-y-6">
                      {guide.steps.map((step, i) => (
                        <div key={step.id} className="relative pl-12">
                          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">{i + 1}</div>
                          {i < guide.steps.length - 1 && <div className="absolute left-[15px] top-10 w-0.5 h-[calc(100%+8px)] bg-gray-200" />}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-gray-600 mb-3">{step.content}</p>
                            {step.subSteps && (
                              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-3 ml-4">
                                {step.subSteps.map((s, idx) => <li key={idx}>{s}</li>)}
                              </ul>
                            )}
                            {step.callout && (
                              <div className={`border rounded-lg p-4 mb-3 ${
                                step.callout.type === 'info' ? 'bg-blue-50 border-blue-200' :
                                step.callout.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                                step.callout.type === 'error' ? 'bg-red-50 border-red-200' :
                                'bg-green-50 border-green-200'
                              }`}>
                                <p className="font-semibold text-sm mb-1">{step.callout.title}</p>
                                <p className="text-sm">{step.callout.content}</p>
                              </div>
                            )}
                            {step.image && (
                              <div className="mt-3 rounded-lg overflow-hidden border border-gray-200">
                                <img
                                  src={step.image}
                                  alt="Illustrasjon"
                                  className="w-full h-auto"
                                  loading="lazy"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {guide.faq && guide.faq.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Vanlige spørsmål</h4>
                        <div className="space-y-4">
                          {guide.faq.map((f, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-4">
                              <p className="font-medium text-gray-900 text-sm mb-2">{f.question}</p>
                              <p className="text-sm text-gray-600">{f.answer}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Trenger du mer hjelp?</h3>
        <p className="text-blue-700 mb-4">
          Utforsk alle våre veiledninger i "Alle veiledninger"-fanen for mer detaljert hjelp med andre funksjoner.
        </p>
      </div>
    </div>
  );
}