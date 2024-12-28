import React from 'react';
import { X } from 'lucide-react';

interface SymptomsProps {
  symptoms: string[];
  onSymptomsChange: (symptoms: string[]) => void;
}

export default function Symptoms({ symptoms, onSymptomsChange }: SymptomsProps) {
  const [newSymptom, setNewSymptom] = React.useState('');

  const addSymptom = () => {
    if (newSymptom.trim()) {
      onSymptomsChange([...symptoms, newSymptom.trim()]);
      setNewSymptom('');
    }
  };

  const removeSymptom = (index: number) => {
    onSymptomsChange(symptoms.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Symptoms</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newSymptom}
          onChange={(e) => setNewSymptom(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addSymptom()}
          placeholder="Add a symptom"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
        <button
          onClick={addSymptom}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {symptoms.map((symptom, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
          >
            <span>{symptom}</span>
            <button
              onClick={() => removeSymptom(index)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}