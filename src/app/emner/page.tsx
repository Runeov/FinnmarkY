'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TopicBrowser } from '@/components/guides/TopicBrowser';

export default function TopicsPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake
          </Link>
          <div className="h-6 w-px bg-gray-200" />
          <div>
            <h1 className="font-bold text-gray-900">GAT Emner</h1>
            <p className="text-sm text-gray-500">Basert på MinGat Hjelp v 2024.1</p>
          </div>
        </div>
      </header>

      {/* Topic Browser */}
      <div className="flex-1 overflow-hidden">
        <TopicBrowser />
      </div>
    </div>
  );
}
