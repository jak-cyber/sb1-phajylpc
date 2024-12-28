import React, { useState } from 'react';
import VitalSigns from '../components/exam/VitalSigns';
import Symptoms from '../components/exam/Symptoms';
import DiagnosisInput from '../components/exam/DiagnosisInput';
import PrescriptionInput from '../components/exam/PrescriptionInput';
import type { ExamData } from '../types/exam';
import { initialVitals } from '../utils/examDefaults';

export default function ExamPage() {
  const [examData, setExamData] = useState<ExamData>({
    vitalSigns: initialVitals,
    symptoms: [],
    diagnosis: '',
    prescription: ''
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Patient Examination</h2>
      
      <VitalSigns
        vitals={examData.vitalSigns}
        onVitalsChange={(vitals) => setExamData({ ...examData, vitalSigns: vitals })}
      />
      
      <Symptoms
        symptoms={examData.symptoms}
        onSymptomsChange={(symptoms) => setExamData({ ...examData, symptoms })}
      />
      
      <div className="grid grid-cols-2 gap-6">
        <DiagnosisInput
          value={examData.diagnosis}
          onChange={(diagnosis) => setExamData({ ...examData, diagnosis })}
        />
        <PrescriptionInput
          value={examData.prescription}
          onChange={(prescription) => setExamData({ ...examData, prescription })}
        />
      </div>
    </div>
  );
}