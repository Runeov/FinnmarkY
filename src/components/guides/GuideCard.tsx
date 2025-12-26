'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, AlertCircle, Info, AlertTriangle, CheckCircle2, Smartphone, Monitor, HelpCircle, ImageIcon } from 'lucide-react';
import { Guide, GuideStep } from '@/lib/types';
import { getCategoryById } from '@/data';
import { clsx } from 'clsx';

interface GuideCardProps {
  guide: Guide;
  isExpanded: boolean;
  onToggle: () => void;
}

export function GuideCard({ guide, isExpanded, onToggle }: GuideCardProps) {
  const category = getCategoryById(guide.category);
  const CategoryIcon = category?.icon;

  return (
    <div className={clsx('bg-white rounded-xl border-2 overflow-hidden transition-all', isExpanded ? 'border-blue-300 shadow-lg' : 'border-gray-200 hover:border-gray-300')}>
      <button onClick={onToggle} className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-gray-50">
        {CategoryIcon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${category?.color}15` }}>
            <CategoryIcon className="w-6 h-6" style={{ color: category?.color }} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{guide.titleNo}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{guide.summaryNo}</p>
            </div>
            {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className={clsx('inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium', guide.interface === 'mingat' ? 'bg-blue-100 text-blue-700' : guide.interface === 'gatgo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700')}>
              {guide.interface === 'mingat' ? <Monitor className="w-3 h-3" /> : guide.interface === 'gatgo' ? <Smartphone className="w-3 h-3" /> : null}
              {guide.interface === 'all' ? 'Alle plattformer' : guide.interface.toUpperCase()}
            </span>
            <span className={clsx('px-2 py-1 rounded-full text-xs font-medium', guide.complexity === 'basic' ? 'bg-green-100 text-green-700' : guide.complexity === 'intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700')}>
              {guide.complexity === 'basic' ? 'Enkel' : guide.complexity === 'intermediate' ? 'Middels' : 'Avansert'}
            </span>
            {guide.estimatedTime && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                <Clock className="w-3 h-3" />{guide.estimatedTime}
              </span>
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="mt-6 space-y-6">
            {guide.steps.map((step, i) => <StepView key={step.id} step={step} num={i + 1} total={guide.steps.length} />)}
          </div>
          {guide.faq && guide.faq.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-gray-400" />Vanlige spørsmål</h4>
              <div className="space-y-4">{guide.faq.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StepView({ step, num, total }: { step: GuideStep; num: number; total: number }) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">{num}</div>
      {num < total && <div className="absolute left-[15px] top-10 w-0.5 h-[calc(100%+8px)] bg-gray-200" />}
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
        <p className="text-gray-600 mb-3">{step.content}</p>
        {step.subSteps && <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mb-3 ml-4">{step.subSteps.map((s, i) => <li key={i}>{s}</li>)}</ul>}
        {step.callout && <Callout type={step.callout.type} title={step.callout.title} content={step.callout.content} />}
        {step.image && <ImagePlaceholder filename={step.image} />}
      </div>
    </div>
  );
}

function ImagePlaceholder({ filename }: { filename: string }) {
  // Check if it's a URL (starts with http) or a placeholder filename
  const isUrl = filename.startsWith('http');
  
  if (isUrl) {
    return (
      <div className="mt-3 rounded-lg overflow-hidden border border-gray-200">
        <img 
          src={filename} 
          alt="Illustrasjon" 
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    );
  }
  
  return (
    <div className="mt-3 bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
      <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
      <p className="text-xs text-gray-400">{filename}</p>
    </div>
  );
}

function Callout({ type, title, content }: { type: 'info' | 'warning' | 'error' | 'success'; title: string; content: string }) {
  const config = {
    info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', iconColor: 'text-blue-500', titleColor: 'text-blue-900', textColor: 'text-blue-800' },
    warning: { icon: AlertTriangle, bg: 'bg-yellow-50', border: 'border-yellow-200', iconColor: 'text-yellow-500', titleColor: 'text-yellow-900', textColor: 'text-yellow-800' },
    error: { icon: AlertCircle, bg: 'bg-red-50', border: 'border-red-200', iconColor: 'text-red-500', titleColor: 'text-red-900', textColor: 'text-red-800' },
    success: { icon: CheckCircle2, bg: 'bg-green-50', border: 'border-green-200', iconColor: 'text-green-500', titleColor: 'text-green-900', textColor: 'text-green-800' },
  };
  const c = config[type];
  const Icon = c.icon;
  return (
    <div className={`${c.bg} ${c.border} border rounded-lg p-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${c.iconColor} flex-shrink-0 mt-0.5`} />
        <div><p className={`font-semibold ${c.titleColor} text-sm mb-1`}>{title}</p><p className={`${c.textColor} text-sm`}>{content}</p></div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-100">
        <span className="font-medium text-gray-900 text-sm">{question}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-600">{answer}</div>}
    </div>
  );
}