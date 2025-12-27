'use client';

import React, { useState } from 'react';
import { Smartphone, Bell, ChevronRight, Check } from 'lucide-react';

/**
 * ProfileSMSToggle Component
 * 
 * Interactive component for guide content showing how to:
 * - Register mobile number
 * - Enable SMS notifications
 * 
 * Replaces static images with interactive demo
 */

interface ProfileSMSToggleProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function ProfileSMSToggle({ 
  highlightedElement,
  onElementClick 
}: ProfileSMSToggleProps = {}) {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const isHighlighted = (elementId: string) => highlightedElement === elementId;
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only numbers
    if (value.length <= 8) {
      setPhoneNumber(value);
      onElementClick?.('phone-input');
    }
  };
  
  const handleToggle = () => {
    if (phoneNumber.length === 8) {
      setSmsEnabled(!smsEnabled);
      onElementClick?.('sms-toggle');
      
      if (!smsEnabled) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    }
  };
  
  const formatPhone = (phone: string) => {
    if (phone.length <= 3) return phone;
    if (phone.length <= 5) return `${phone.slice(0, 3)} ${phone.slice(3)}`;
    return `${phone.slice(0, 3)} ${phone.slice(3, 5)} ${phone.slice(5)}`;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          Mobilnummer og varslinger
        </h3>
      </div>
      
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-3 flex items-center gap-2 text-green-800">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">SMS-varslinger aktivert!</span>
        </div>
      )}
      
      {/* Content */}
      <div className="p-4 space-y-4">
        
        {/* Step 1: Mobile Number Input */}
        <div className="space-y-2">
          <label className="block">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Steg 1: Registrer mobilnummer
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                Kun internt
              </span>
            </div>
            <div 
              className={`relative ${
                isHighlighted('phone-input') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg' : ''
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">+47</span>
              </div>
              <input
                type="tel"
                value={formatPhone(phoneNumber)}
                onChange={handlePhoneChange}
                placeholder="XXX XX XXX"
                maxLength={11} // Formatted: "XXX XX XXX"
                className={`
                  w-full pl-12 pr-4 py-3 border rounded-lg text-sm
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${phoneNumber.length === 8 
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300'}
                `}
              />
              {phoneNumber.length === 8 && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {phoneNumber.length === 8 
                ? '✓ Gyldig norsk mobilnummer' 
                : 'Skriv inn ditt 8-sifrede mobilnummer'}
            </p>
          </label>
        </div>
        
        {/* Step 2: SMS Toggle */}
        <div 
          className={`border border-gray-200 rounded-lg p-4 ${
            phoneNumber.length !== 8 ? 'opacity-50' : ''
          } ${isHighlighted('sms-toggle') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="font-medium text-gray-900">
                  Steg 2: Aktiver SMS-varslinger
                </span>
              </div>
              <p className="text-xs text-gray-600">
                Motta viktige meldinger og påminnelser på SMS
              </p>
            </div>
            
            {/* Toggle Switch */}
            <button
              onClick={handleToggle}
              disabled={phoneNumber.length !== 8}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${smsEnabled ? 'bg-blue-600' : 'bg-gray-300'}
                ${phoneNumber.length !== 8 ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${smsEnabled ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
          </div>
          
          {phoneNumber.length !== 8 && (
            <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
              <span>⚠️</span>
              <span>Registrer mobilnummer først</span>
            </p>
          )}
        </div>
        
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-800">
            <strong>💡 Tips:</strong> SMS-varslinger er gratis og vil kun sendes for viktige hendelser 
            som vaktbytte, godkjenninger og påminnelser.
          </p>
        </div>
        
        {/* Status Summary */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Mobilnummer registrert:</span>
            <span className={`font-medium ${phoneNumber.length === 8 ? 'text-green-600' : 'text-gray-400'}`}>
              {phoneNumber.length === 8 ? `+47 ${formatPhone(phoneNumber)}` : 'Ikke registrert'}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">SMS-varslinger:</span>
            <span className={`font-medium ${smsEnabled ? 'text-green-600' : 'text-gray-400'}`}>
              {smsEnabled ? 'Aktivert ✓' : 'Deaktivert'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Usage in guide content:
 * 
 * Instead of:
 * <img src="/images/guides/profile-sms-toggle.png" alt="..." />
 * 
 * Use:
 * <ProfileSMSToggle />
 * 
 * Or with props:
 * <ProfileSMSToggle 
 *   highlightedElement={highlightedElement}
 *   onElementClick={handleElementClick}
 * />
 */