export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  lastVisit?: string;
  nextAppointment?: string;
  medicalHistory: string[];
  status: 'Active' | 'Inactive';
}