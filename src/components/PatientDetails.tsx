import React from 'react';
import { X, Edit2, Calendar } from 'lucide-react';
import type { Patient } from '../types/patient';

interface PatientDetailsProps {
  patient: Patient;
  onClose: () => void;
}

export default function PatientDetails({ patient, onClose }: PatientDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Patient Details</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold">
                {patient.firstName} {patient.lastName}
              </h3>
              <p className="text-gray-500">Patient ID: {patient.id}</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Edit2 className="w-4 h-4 mr-2" />
                Edit
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InfoSection title="Personal Information">
              <InfoRow label="Date of Birth" value={patient.dateOfBirth} />
              <InfoRow label="Email" value={patient.email} />
              <InfoRow label="Phone" value={patient.phone} />
              <InfoRow label="Address" value={patient.address} />
            </InfoSection>

            <InfoSection title="Medical History">
              <div className="space-y-2">
                {patient.medicalHistory.map((item, index) => (
                  <div key={index} className="p-2 bg-gray-50 rounded-md text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </InfoSection>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-sm text-gray-500">{label}</span>
      <p className="text-gray-900">{value}</p>
    </div>
  );
}