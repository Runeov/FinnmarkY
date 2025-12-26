'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check, BookOpen, Rocket, Home, Shield, Smartphone, ShieldCheck, Star } from 'lucide-react';
import { HelpSection } from '@/lib/hierarchy-types';
import { helpHierarchy } from '@/data/help-hierarchy';
import { categories } from '@/data/categories';
import { useGuideProgress } from '@/hooks/useGuideProgress';

interface AppSidebarProps {
  onSelectGuide: (id: string) => void;
  selectedGuideId: string | null;
}

// Quick start steps for the 3-step guide
const quickStartSteps = [
  { id: 'home-access-setup', label: 'Tilkobling', icon: Home, description: 'Registrer mobilnummer' },
  { id: 'two-factor-login', label: '2FA Pålogging', icon: Shield, description: 'SMS-verifisering' },
  { id: 'gatgo-mobile-setup', label: 'GatGo App', icon: Smartphone, description: 'Mobilapp oppsett' },
];

// Bonus guide
const bonusGuide = {
  id: 'microsoft-authenticator-setup',
  label: 'Microsoft Authenticator',
  icon: ShieldCheck,
  description: 'Raskere enn SMS (anbefalt)'
};

export function AppSidebar({ onSelectGuide, selectedGuideId }: AppSidebarProps) {
  const { isViewed } = useGuideProgress();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['mingat-hjelp']));
  const [showQuickStart, setShowQuickStart] = useState(true);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderHierarchy = (items: HelpSection[], level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedSections.has(item.id);
      const isSelected = selectedGuideId === item.id;
      const viewed = isViewed(item.id);

      return (
        <div key={item.id} className="w-full">
          <button
            onClick={() => {
              if (hasChildren) {
                toggleSection(item.id);
              } else {
                onSelectGuide(item.id);
              }
            }}
            className={`
              w-full flex items-center justify-between px-4 py-2 text-sm transition-colors
              ${isSelected ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}
              ${level > 0 ? 'pl-' + (level * 4 + 4) : ''}
            `}
            style={{ paddingLeft: `${level * 1 + 1}rem` }}
          >
            <div className="flex items-center gap-2 overflow-hidden">
              {hasChildren ? (
                isExpanded ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />
              ) : (
                <div className="w-4 h-4" /> // Spacer
              )}
              <span className="truncate">{item.title}</span>
            </div>
            {viewed && !hasChildren && <Check className="w-4 h-4 text-green-500 flex-shrink-0" />}
          </button>

          {hasChildren && isExpanded && (
            <div className="border-l border-gray-100 ml-5">
              {renderHierarchy(item.children!, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  // Check completion status for quick start
  const completedSteps = quickStartSteps.filter(step => isViewed(step.id)).length;
  const allCompleted = completedSteps === quickStartSteps.length;
  const bonusCompleted = isViewed(bonusGuide.id);

  return (
    <div className="w-[85vw] sm:w-80 h-screen bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 pr-8 lg:pr-0">
          <BookOpen className="w-5 h-5 text-blue-600" />
          MinGat Veileder
        </h2>
      </div>

      <div className="py-4">
        {/* ========== 3-STEP QUICK START GUIDE ========== */}
        <div className="px-4 mb-6">
          <button
            onClick={() => setShowQuickStart(!showQuickStart)}
            className="w-full flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Hurtigstart
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">
                {completedSteps}/{quickStartSteps.length}
              </span>
              {showQuickStart ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </button>

          {showQuickStart && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Kom i gang med MinGat</span>
                  <span className={allCompleted ? 'text-green-600 font-medium' : ''}>
                    {allCompleted ? '✓ Fullført!' : `${completedSteps} av ${quickStartSteps.length}`}
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                    style={{ width: `${(completedSteps / quickStartSteps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                {quickStartSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = isViewed(step.id);
                  const isActive = selectedGuideId === step.id;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => onSelectGuide(step.id)}
                      className={`
                        w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left
                        ${isActive 
                          ? 'bg-white shadow-md ring-2 ring-blue-500' 
                          : isCompleted 
                            ? 'bg-white/50 hover:bg-white' 
                            : 'bg-white hover:shadow-sm'
                        }
                      `}
                    >
                      {/* Step number / check */}
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold
                        ${isCompleted 
                          ? 'bg-green-500 text-white' 
                          : isActive 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }
                      `}>
                        {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                          <span className={`font-medium text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>
                            {step.label}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{step.description}</p>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-500' : 'text-gray-300'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Bonus: Microsoft Authenticator */}
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-gray-600">BONUS: Anbefalt</span>
                </div>
                <button
                  onClick={() => onSelectGuide(bonusGuide.id)}
                  className={`
                    w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left
                    ${selectedGuideId === bonusGuide.id 
                      ? 'bg-white shadow-md ring-2 ring-purple-500' 
                      : bonusCompleted 
                        ? 'bg-white/50 hover:bg-white' 
                        : 'bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-sm border border-purple-200'
                    }
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${bonusCompleted 
                      ? 'bg-green-500 text-white' 
                      : selectedGuideId === bonusGuide.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-purple-100 text-purple-600'
                    }
                  `}>
                    {bonusCompleted ? <Check className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium text-sm ${selectedGuideId === bonusGuide.id ? 'text-purple-700' : 'text-gray-900'}`}>
                        {bonusGuide.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{bonusGuide.description}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${selectedGuideId === bonusGuide.id ? 'text-purple-500' : 'text-gray-300'}`} />
                </button>
              </div>

              {/* Help text */}
              <p className="text-xs text-gray-500 mt-3 text-center">
                Følg stegene for å få tilgang hjemmefra
              </p>
            </div>
          )}
        </div>

        {/* ========== CATEGORIES ========== */}
        <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Kategorier
        </div>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectGuide(cat.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50
                ${selectedGuideId === cat.id ? 'bg-blue-50 text-blue-700 font-medium' : ''}
              `}
            >
              <Icon className="w-4 h-4" style={{ color: cat.color }} />
              <span>{cat.nameNo}</span>
            </button>
          );
        })}

        {/* ========== ALL TOPICS ========== */}
        <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Alle emner
        </div>
        {renderHierarchy(helpHierarchy)}
      </div>
    </div>
  );
}