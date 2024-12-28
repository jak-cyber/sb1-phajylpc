export interface VitalSigns {
  temperature: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  heartRate: number;
  respiratoryRate: number;
  oxygenSaturation: number;
}

export interface ExamData {
  vitalSigns: VitalSigns;
  symptoms: string[];
  diagnosis: string;
  prescription: string;
}