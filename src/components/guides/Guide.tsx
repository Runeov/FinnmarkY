'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  AlertCircle,
  Info,
  AlertTriangle,
  CheckCircle2,
  Smartphone,
  Monitor,
  HelpCircle,
  ImageIcon,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Guide, GuideStep, FAQItem } from '@/lib/types';
import { getCategoryById } from '@/data/categories';
import { clsx } from 'clsx';

// ============================================
// Main Guide Component
// ============================================

interface GuideProps {
  guide: Guide;
  showHeader?: boolean;
  defaultExpanded?: boolean;
}

export function GuideComponent({ guide, showHeader = true, defaultExpanded = true }: GuideProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const category = getCategoryById(guide.category);
  const CategoryIcon = category?.icon;

  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      {showHeader && (
        <header
          className="px-6 py-6 border-b border-gray-100"
          style={{ backgroundColor: `${category?.color}08` }}
        >
          <div className="flex items-start gap-4">
            {CategoryIcon && (
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${category?.color}20` }}
              >
                <CategoryIcon className="w-7 h-7" style={{ color: category?.color }} />
              </div>
            )}

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{guide.titleNo}</h1>
              <p className="text-gray-600 mb-4">{guide.summaryNo}</p>

              {/* Meta badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={clsx(
                    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium',
                    guide.interface === 'mingat'
                      ? 'bg-blue-100 text-blue-700'
                      : guide.interface === 'gatgo'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  )}
                >
                  {guide.interface === 'mingat' ? (
                    <Monitor className="w-4 h-4" />
                  ) : guide.interface === 'gatgo' ? (
                    <Smartphone className="w-4 h-4" />
                  ) : null}
                  {guide.interface === 'all' ? 'Alle plattformer' : guide.interface.toUpperCase()}
                </span>

                <span
                  className={clsx(
                    'px-3 py-1.5 rounded-full text-sm font-medium',
                    guide.complexity === 'basic'
                      ? 'bg-green-100 text-green-700'
                      : guide.complexity === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  )}
                >
                  {guide.complexity === 'basic'
                    ? 'Enkel'
                    : guide.complexity === 'intermediate'
                    ? 'Middels'
                    : 'Avansert'}
                </span>

                {guide.estimatedTime && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                    <Clock className="w-4 h-4" />
                    {guide.estimatedTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Steps */}
      <div className="px-6 py-8">
        <div className="space-y-8">
          {guide.steps.map((step, index) => (
            <StepComponent
              key={step.id}
              step={step}
              stepNumber={index + 1}
              totalSteps={guide.steps.length}
              isLast={index === guide.steps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      {guide.faq && guide.faq.length > 0 && (
        <section className="px-6 py-6 bg-gray-50 border-t border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-gray-400" />
            Vanlige spørsmål
          </h2>
          <div className="space-y-3">
            {guide.faq.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                isOpen={expandedFaq === index}
                onToggle={() => setExpandedFaq(expandedFaq === index ? null : index)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Related Guides */}
      {guide.relatedGuides && guide.relatedGuides.length > 0 && (
        <footer className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span className="font-medium">Relaterte veiledninger:</span>
            <div className="flex flex-wrap gap-2">
              {guide.relatedGuides.map((relatedId) => (
                <span
                  key={relatedId}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded border border-gray-200 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  {relatedId}
                  <ArrowRight className="w-3 h-3" />
                </span>
              ))}
            </div>
          </div>
        </footer>
      )}
    </article>
  );
}

// ============================================
// Step Component
// ============================================

interface StepComponentProps {
  step: GuideStep;
  stepNumber: number;
  totalSteps: number;
  isLast: boolean;
}

function StepComponent({ step, stepNumber, totalSteps, isLast }: StepComponentProps) {
  return (
    <div className="relative">
      <div className="flex gap-6">
        {/* Step indicator */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
            {stepNumber}
          </div>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-300 to-gray-200 mt-3" />
          )}
        </div>

        {/* Step content */}
        <div className="flex-1 pb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{step.content}</p>

          {/* Sub-steps */}
          {step.subSteps && step.subSteps.length > 0 && (
            <ul className="space-y-2 mb-4 ml-1">
              {step.subSteps.map((subStep, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <span>{subStep}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Callout box */}
          {step.callout && (
            <CalloutBox
              type={step.callout.type}
              title={step.callout.title}
              content={step.callout.content}
            />
          )}

          {/* Image placeholder */}
          {step.image && (
            <ImagePlaceholder filename={step.image} stepTitle={step.title} />
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Callout Box Component
// ============================================

interface CalloutBoxProps {
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  content: string;
}

function CalloutBox({ type, title, content }: CalloutBoxProps) {
  const config = {
    info: {
      icon: Info,
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      textColor: 'text-blue-800',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-900',
      textColor: 'text-amber-800',
    },
    error: {
      icon: AlertCircle,
      bg: 'bg-red-50',
      border: 'border-red-200',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      textColor: 'text-red-800',
    },
    success: {
      icon: CheckCircle2,
      bg: 'bg-green-50',
      border: 'border-green-200',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-green-800',
    },
  };

  const c = config[type];
  const Icon = c.icon;

  return (
    <div className={`${c.bg} ${c.border} border rounded-xl p-4 mb-4`}>
      <div className="flex items-start gap-3">
        <div className={`${c.iconBg} p-2 rounded-lg`}>
          <Icon className={`w-5 h-5 ${c.iconColor}`} />
        </div>
        <div>
          <p className={`font-semibold ${c.titleColor} mb-1`}>{title}</p>
          <p className={`${c.textColor} text-sm leading-relaxed`}>{content}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Image Placeholder Component
// ============================================

interface ImagePlaceholderProps {
  filename: string;
  stepTitle: string;
}

function ImagePlaceholder({ filename, stepTitle }: ImagePlaceholderProps) {
  // Check if it's a URL (starts with http) or a placeholder filename
  const isUrl = filename.startsWith('http');
  
  if (isUrl) {
    return (
      <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <img 
          src={filename} 
          alt={stepTitle} 
          className="w-full h-auto"
          loading="lazy"
        />
        <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center">
          {stepTitle}
        </div>
      </div>
    );
  }
  
  return (
    <div className="mt-4 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
        <ImageIcon className="w-8 h-8 text-gray-400" />
      </div>
      <p className="text-gray-500 font-medium mb-1">Illustrasjon</p>
      <p className="text-gray-400 text-sm mb-2">{stepTitle}</p>
      <code className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
        {filename}
      </code>
    </div>
  );
}

// ============================================
// FAQ Item Component
// ============================================

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
          {item.answer}
        </div>
      )}
    </div>
  );
}

// ============================================
// Export as default
// ============================================

export default GuideComponent;