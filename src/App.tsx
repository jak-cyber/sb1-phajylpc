import React, { useState } from 'react';
import Layout from './components/Layout';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import ExamPage from './pages/ExamPage';
import type { Patient } from './types/patient';

// Mock data for demonstration
const mockPatients: Patient[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-05-15',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, USA',
    lastVisit: '2024-02-15',
    nextAppointment: '2024-03-20',
    medicalHistory: [
      'Hypertension diagnosed 2020',
      'Annual checkup 2023 - All clear',
      'Flu shot administered 2023'
    ],
    status: 'Active'
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1990-08-22',
    email: 'jane.smith@example.com',
    phone: '(555) 987-6543',
    address: '456 Oak Ave, Somewhere, USA',
    lastVisit: '2024-01-30',
    medicalHistory: [
      'Asthma - well controlled',
      'Regular checkup 2023',
      'COVID vaccination completed'
    ],
    status: 'Active'
  }
];

export type Page = 'dashboard' | 'patients' | 'exam' | 'appointments' | 'settings';

function App() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'patients':
        return (
          <>
            <PatientList
              patients={mockPatients}
              onSelectPatient={(patient) => setSelectedPatient(patient)}
            />
            {selectedPatient && (
              <PatientDetails
                patient={selectedPatient}
                onClose={() => setSelectedPatient(null)}
              />
            )}
          </>
        );
      case 'exam':
        return <ExamPage />;
      default:
        return <div className="text-xl">Welcome to the {currentPage} page</div>;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;