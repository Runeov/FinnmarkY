'use client';

import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';

/**
 * Collection of Interactive Guide Components
 * 
 * Replace static guide images with these interactive components
 */

// ============================================================================
// 1. SHIFT REQUEST FORM
// ============================================================================

interface ShiftRequestDemoProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function ShiftRequestDemo({ 
  highlightedElement,
  onElementClick 
}: ShiftRequestDemoProps = {}) {
  
  const [selectedDate, setSelectedDate] = useState('');
  const [shiftType, setShiftType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const handleSubmit = () => {
    if (selectedDate && shiftType) {
      setSubmitted(true);
      onElementClick?.('submit-button');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3">
        <h3 className="font-semibold">Send vaktforespørsel</h3>
      </div>
      
      {submitted && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-3 flex items-center gap-2 text-green-800">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Forespørsel sendt!</span>
        </div>
      )}
      
      <div className="p-4 space-y-4">
        <div className={`space-y-2 ${isHighlighted('date-picker') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg p-2' : ''}`}>
          <label className="block text-sm font-medium text-gray-700">
            Velg dato
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              onElementClick?.('date-picker');
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className={`space-y-2 ${isHighlighted('shift-type') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg p-2' : ''}`}>
          <label className="block text-sm font-medium text-gray-700">
            Type vakt
          </label>
          <select
            value={shiftType}
            onChange={(e) => {
              setShiftType(e.target.value);
              onElementClick?.('shift-type');
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">Velg vakttype</option>
            <option value="day">Dagvakt (DH)</option>
            <option value="evening">Aftenvakt (AH)</option>
            <option value="night">Nattvakt (NH)</option>
          </select>
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={!selectedDate || !shiftType}
          className={`
            w-full py-3 rounded-lg font-medium transition-colors
            ${selectedDate && shiftType
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
            ${isHighlighted('submit-button') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
          `}
        >
          Send forespørsel
        </button>
      </div>
    </div>
  );
}


// ============================================================================
// 2. CALENDAR DATE PICKER
// ============================================================================

interface CalendarPickerDemoProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function CalendarPickerDemo({ 
  highlightedElement,
  onElementClick 
}: CalendarPickerDemoProps = {}) {
  
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11)); // December 2024
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  
  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  
  const monthName = currentMonth.toLocaleDateString('no-NO', { month: 'long', year: 'numeric' });
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Velg dato
        </h3>
      </div>
      
      <div className="p-4">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => {
              setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
              onElementClick?.('prev-month');
            }}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold capitalize">{monthName}</span>
          <button
            onClick={() => {
              setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
              onElementClick?.('next-month');
            }}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {['M', 'T', 'O', 'T', 'F', 'L', 'S'].map(day => (
            <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
          
          {/* Empty cells for first week */}
          {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          
          {/* Date cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const date = i + 1;
            const isSelected = selectedDate === date;
            
            return (
              <button
                key={date}
                onClick={() => {
                  setSelectedDate(date);
                  onElementClick?.(`date-${date}`);
                }}
                className={`
                  aspect-square flex items-center justify-center text-sm rounded-lg
                  ${isSelected 
                    ? 'bg-blue-600 text-white font-bold' 
                    : 'hover:bg-gray-100'}
                  ${isHighlighted(`date-${date}`) ? 'ring-2 ring-blue-400' : ''}
                `}
              >
                {date}
              </button>
            );
          })}
        </div>
        
        {selectedDate && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-sm text-blue-800">
              Valgt dato: <strong>{selectedDate}. {monthName}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


// ============================================================================
// 3. TIME PICKER
// ============================================================================

interface TimePickerDemoProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function TimePickerDemo({ 
  highlightedElement,
  onElementClick 
}: TimePickerDemoProps = {}) {
  
  const [hours, setHours] = useState('07');
  const [minutes, setMinutes] = useState('30');
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 23)) {
      setHours(value.padStart(2, '0'));
      onElementClick?.('hour-input');
    }
  };
  
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 59)) {
      setMinutes(value.padStart(2, '0'));
      onElementClick?.('minute-input');
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-sm mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Velg tidspunkt
        </h3>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-center gap-2">
          <div className={`${isHighlighted('hour-input') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg' : ''}`}>
            <input
              type="text"
              value={hours}
              onChange={handleHourChange}
              maxLength={2}
              className="w-16 h-20 text-3xl font-bold text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <span className="text-3xl font-bold text-gray-400">:</span>
          
          <div className={`${isHighlighted('minute-input') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg' : ''}`}>
            <input
              type="text"
              value={minutes}
              onChange={handleMinuteChange}
              maxLength={2}
              className="w-16 h-20 text-3xl font-bold text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-2">
          {['07:00', '08:00', '09:00', '15:00', '16:00', '23:00'].map(time => (
            <button
              key={time}
              onClick={() => {
                const [h, m] = time.split(':');
                setHours(h);
                setMinutes(m);
                onElementClick?.(`preset-${time}`);
              }}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-purple-50 hover:border-purple-300"
            >
              {time}
            </button>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg text-center">
          <p className="text-sm text-purple-800">
            Valgt tid: <strong>{hours}:{minutes}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// EXPORT ALL
// ============================================================================

/**
 * Usage Examples:
 * 
 * 1. Shift Request:
 *    <ShiftRequestDemo />
 * 
 * 2. Calendar Picker:
 *    <CalendarPickerDemo />
 * 
 * 3. Time Picker:
 *    <TimePickerDemo />
 * 
 * With highlighting:
 *    <ShiftRequestDemo 
 *      highlightedElement="date-picker"
 *      onElementClick={(id) => console.log(id)}
 *    />
 */