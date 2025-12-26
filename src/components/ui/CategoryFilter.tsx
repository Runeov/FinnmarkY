'use client';

import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { CategoryInfo, GuideCategory } from '@/lib/types';
import { clsx } from 'clsx';

interface CategoryFilterProps {
  categories: CategoryInfo[];
  selected: GuideCategory | 'all';
  onSelect: (category: GuideCategory | 'all') => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-500 uppercase">Kategorier</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect('all')}
          className={clsx(
            'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
            selected === 'all' ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          <LayoutGrid className="w-4 h-4" /><span>Alle</span>
        </button>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selected === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={clsx(
                'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                isSelected ? 'text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
              style={isSelected ? { backgroundColor: cat.color } : undefined}
              title={cat.descriptionNo}
            >
              <Icon className="w-4 h-4" /><span className="hidden sm:inline">{cat.nameNo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface InterfaceFilterProps {
  selected: 'mingat' | 'gatgo' | 'all';
  onSelect: (iface: 'mingat' | 'gatgo' | 'all') => void;
}

export function InterfaceFilter({ selected, onSelect }: InterfaceFilterProps) {
  const options = [
    { id: 'all' as const, label: 'Alle' },
    { id: 'mingat' as const, label: 'MinGat (Web)' },
    { id: 'gatgo' as const, label: 'GatGo (Mobil)' },
  ];
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-500 uppercase">Plattform</h3>
      <div className="inline-flex rounded-lg bg-gray-100 p-1">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className={clsx(
              'px-4 py-2 rounded-md text-sm font-medium transition-all',
              selected === o.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
