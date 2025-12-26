'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Building2, HeadphonesIcon } from 'lucide-react';
import { supportContacts } from '@/data';

export function SupportContacts() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
            <HeadphonesIcon className="w-5 h-5 text-red-600" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">Trenger du mer hjelp?</h3>
            <p className="text-sm text-gray-500">Kontaktinformasjon til support</p>
          </div>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="mt-4 space-y-4">
            {supportContacts.map((c) => (
              <div key={c.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    {c.id === 'helse-nord-ikt' ? <Phone className="w-4 h-4 text-gray-600" /> : <Building2 className="w-4 h-4 text-gray-600" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{c.categoryNo}</h4>
                    <p className="text-gray-600 text-sm mt-1">{c.descriptionNo}</p>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-sm"><span className="text-gray-500">Kontakt:</span> <span className="font-medium text-gray-900">{c.contactPoint}</span></p>
                      <p className="text-sm text-blue-600 font-medium mt-1">{c.contactDetails}</p>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 font-medium mb-1">Bruk ved:</p>
                      <ul className="text-xs text-gray-600 space-y-0.5">{c.escalationCriteria.slice(0, 3).map((cr, i) => <li key={i}>• {cr}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800"><strong>Merk:</strong> For tekniske problemer, kontakt Helse Nord IKT først. For vaktspørsmål, kontakt din leder.</p>
          </div>
        </div>
      )}
    </div>
  );
}
