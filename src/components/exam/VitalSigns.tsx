import React from 'react';
import type { VitalSigns } from '../../types/exam';

interface VitalSignsProps {
  vitals: VitalSigns;
  onVitalsChange: (vitals: VitalSigns) => void;
}

export default function VitalSignsComponent({ vitals, onVitalsChange }: VitalSignsProps) {
  const handleChange = (field: keyof VitalSigns, value: string) => {
    onVitalsChange({
      ...vitals,
      [field]: parseFloat(value) || 0
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Vital Signs</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Temperature (°F)</label>
          <input
            type="number"
            step="0.1"
            value={vitals.temperature}
            onChange={(e) => handleChange('temperature', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Pressure</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={vitals.bloodPressureSystolic}
              onChange={(e) => handleChange('bloodPressureSystolic', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Systolic"
            />
            <span className="mt-1">/</span>
            <input
              type="number"
              value={vitals.bloodPressureDiastolic}
              onChange={(e) => handleChange('bloodPressureDiastolic', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Diastolic"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Heart Rate (bpm)</label>
          <input
            type="number"
            value={vitals.heartRate}
            onChange={(e) => handleChange('heartRate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Respiratory Rate</label>
          <input
            type="number"
            value={vitals.respiratoryRate}
            onChange={(e) => handleChange('respiratoryRate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">O2 Saturation (%)</label>
          <input
            type="number"
            value={vitals.oxygenSaturation}
            onChange={(e) => handleChange('oxygenSaturation', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
}