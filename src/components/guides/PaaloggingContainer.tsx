'use client';

import React, { useState } from 'react';
import { 
  ChevronLeft, 
  X,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lightbulb
} from 'lucide-react';
import { PaaloggingGuide } from './PaaloggingGuide';
import { accessGuides, getAccessGuideById } from '@/lib/guides/accessGuides';
import type { Guide } from '@/lib/types';

interface PaaloggingContainerProps {
  onHighlightElement?: (elementId: string | null) => void;
  onClose?: () => void;
}

export function PaaloggingContainer({ onHighlightElement, onClose }: PaaloggingContainerProps) {
  const [activeView, setActiveView] = useState<'quick-guide' | 'full-guide'>('quick-guide');
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const selectedGuide = selectedGuideId ? getAccessGuideById(selectedGuideId) : null;

  const handleOpenFullGuide = (guideId: string) => {
    setSelectedGuideId(guideId);
    setCurrentStepIndex(0);
    setActiveView('full-guide');
  };

  const handleBackToQuickGuide = () => {
    setActiveView('quick-guide');
    setSelectedGuideId(null);
  };

  const handleStepChange = (stepId: string, stepIndex: number) => {
    // Can be used to sync with MinGatInterface
    console.log('Step changed:', stepId, stepIndex);
  };

  // Render callout based on type
  const renderCallout = (callout: { type: string; title: string; content: string }) => {
    const styles = {
      warning: 'bg-amber-50 border-amber-200 text-amber-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      error: 'bg-red-50 border-red-200 text-red-800',
    };
    const icons = {
      warning: <AlertTriangle className="w-4 h-4 text-amber-600" />,
      info: <Info className="w-4 h-4 text-blue-600" />,
      success: <CheckCircle2 className="w-4 h-4 text-green-600" />,
      error: <AlertTriangle className="w-4 h-4 text-red-600" />,
    };

    return (
      <div className={`border rounded-lg p-3 mt-3 ${styles[callout.type as keyof typeof styles] || styles.info}`}>
        <div className="flex items-start gap-2">
          {icons[callout.type as keyof typeof icons] || icons.info}
          <div>
            <p className="font-semibold text-sm">{callout.title}</p>
            <p className="text-sm mt-1">{callout.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#005077] to-[#0088cc] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {activeView === 'full-guide' && (
            <button
              onClick={handleBackToQuickGuide}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h2 className="text-lg font-bold">
              {activeView === 'quick-guide' ? 'Kom i gang' : selectedGuide?.titleNo || 'Guide'}
            </h2>
            <p className="text-sm text-white/80">
              {activeView === 'quick-guide' 
                ? 'Sett opp GatGo på din mobiltelefon' 
                : selectedGuide?.summaryNo
              }
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* View Toggle (when in full guide) */}
      {activeView === 'full-guide' && (
        <div className="bg-gray-50 border-b px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>Full guide • {selectedGuide?.estimatedTime}</span>
          </div>
          <button
            onClick={handleBackToQuickGuide}
            className="text-sm text-[#0088cc] hover:underline"
          >
            ← Tilbake til hurtigguide
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeView === 'quick-guide' ? (
          <PaaloggingGuide
            onStepChange={handleStepChange}
            onHighlightElement={onHighlightElement}
            onOpenFullGuide={handleOpenFullGuide}
          />
        ) : selectedGuide ? (
          <FullGuideView 
            guide={selectedGuide} 
            currentStepIndex={currentStepIndex}
            onStepChange={setCurrentStepIndex}
            renderCallout={renderCallout}
          />
        ) : null}
      </div>
    </div>
  );
}

// Full Guide View Component
interface FullGuideViewProps {
  guide: Guide;
  currentStepIndex: number;
  onStepChange: (index: number) => void;
  renderCallout: (callout: { type: string; title: string; content: string }) => React.ReactNode;
}

function FullGuideView({ guide, currentStepIndex, onStepChange, renderCallout }: FullGuideViewProps) {
  const currentStep = guide.steps[currentStepIndex];

  return (
    <div className="h-full flex flex-col">
      {/* Step Progress */}
      <div className="bg-gray-50 border-b p-3">
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {guide.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => onStepChange(index)}
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                index === currentStepIndex
                  ? 'bg-[#0088cc] text-white'
                  : index < currentStepIndex
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index < currentStepIndex ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Steg {currentStepIndex + 1} av {guide.steps.length}
        </p>
      </div>

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{currentStep.title}</h3>
        <p className="text-gray-700 mb-4">{currentStep.content}</p>

        {/* Sub-steps */}
        {currentStep.subSteps && currentStep.subSteps.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <ol className="space-y-2">
              {currentStep.subSteps.map((subStep, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#0088cc] text-white rounded-full flex items-center justify-center text-xs">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{subStep}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Callout */}
        {currentStep.callout && renderCallout(currentStep.callout)}

        {/* Image */}
        {currentStep.image && (
          <div className="mt-4 rounded-lg overflow-hidden border">
            <img 
              src={currentStep.image} 
              alt={currentStep.title}
              className="w-full h-auto"
              onError={(e) => {
                // Hide broken images
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="border-t bg-gray-50 p-4 flex items-center justify-between">
        <button
          onClick={() => onStepChange(currentStepIndex - 1)}
          disabled={currentStepIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentStepIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Forrige
        </button>

        <div className="flex items-center gap-1">
          {guide.steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStepIndex
                  ? 'bg-[#0088cc]'
                  : index < currentStepIndex
                    ? 'bg-green-400'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {currentStepIndex < guide.steps.length - 1 ? (
          <button
            onClick={() => onStepChange(currentStepIndex + 1)}
            className="flex items-center gap-2 px-4 py-2 bg-[#0088cc] text-white rounded-lg text-sm font-medium hover:bg-[#006699] transition-colors"
          >
            Neste
            <ChevronLeft className="w-4 h-4 rotate-180" />
          </button>
        ) : (
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4" />
            Fullført
          </button>
        )}
      </div>

      {/* FAQ Section (collapsed) */}
      {guide.faq && guide.faq.length > 0 && (
        <details className="border-t">
          <summary className="p-4 cursor-pointer hover:bg-gray-50 flex items-center gap-2 text-sm font-medium text-gray-700">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Ofte stilte spørsmål ({guide.faq.length})
          </summary>
          <div className="px-4 pb-4 space-y-3">
            {guide.faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-sm text-gray-900">{item.question}</p>
                <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

export default PaaloggingContainer;
