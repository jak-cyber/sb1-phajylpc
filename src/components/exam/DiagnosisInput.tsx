import React from 'react';

interface DiagnosisInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function DiagnosisInput({ value, onChange }: DiagnosisInputProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Diagnosis</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        placeholder="Enter diagnosis..."
      />
    </div>
  );
}