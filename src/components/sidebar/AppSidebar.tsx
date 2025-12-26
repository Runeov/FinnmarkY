'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check, BookOpen, Menu } from 'lucide-react';
import { HelpSection } from '@/lib/hierarchy-types';
import { helpHierarchy } from '@/data/help-hierarchy';
import { categories } from '@/data/categories';
import { useGuideProgress } from '@/hooks/useGuideProgress';

interface AppSidebarProps {
  onSelectGuide: (id: string) => void;
  selectedGuideId: string | null;
}

export function AppSidebar({ onSelectGuide, selectedGuideId }: AppSidebarProps) {
  const { isViewed } = useGuideProgress();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['mingat-hjelp']));

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

  return (
    <div className="w-80 h-screen bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
      <div className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          MinGat Veileder
        </h2>
      </div>

      <div className="py-4">
        <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Kom i gang
        </div>
        {/* Render curated categories as a quick access section */}
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
            )
        })}

        <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Alle emner
        </div>
        {renderHierarchy(helpHierarchy)}
      </div>
    </div>
  );
}
