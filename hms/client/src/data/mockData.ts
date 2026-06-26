export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  ailment: string;
  status: 'Stable' | 'Critical' | 'Recovered';
  doctor: string;
}

export interface Appointment {
  id: string;
  patient: string;
  doctor: string;
  specialty: string;
  time: string;
  room: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  shift: string;
  availability: string;
  patientsToday: number;
}

export interface Bed {
  id: string;
  ward: string;
  type: string;
  status: 'Occupied' | 'Available' | 'Cleaning';
  patient: string;
}

export interface Invoice {
  id: string;
  patient: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  dueDate: string;
}

export interface ReportMetric {
  label: string;
  value: string;
  trend: string;
}

export const patients: Patient[] = [
  { id: 'PT-1001', name: 'Asha Sharma', age: 34, gender: 'Female', ailment: 'Cardiac Checkup', status: 'Stable', doctor: 'Dr. Meera Singh' },
  { id: 'PT-1002', name: 'Rakesh Verma', age: 48, gender: 'Male', ailment: 'Neurology Follow-up', status: 'Critical', doctor: 'Dr. Amit Rao' },
  { id: 'PT-1003', name: 'Naina Patel', age: 29, gender: 'Female', ailment: 'Post-op Recovery', status: 'Recovered', doctor: 'Dr. Priya Desai' },
  { id: 'PT-1004', name: 'Vikram Joshi', age: 61, gender: 'Male', ailment: 'Orthopedic Review', status: 'Stable', doctor: 'Dr. Suresh Kumar' }
];

export const appointments: Appointment[] = [
  { id: 'APT-101', patient: 'Asha Sharma', doctor: 'Dr. Meera Singh', specialty: 'Cardiology', time: '09:30 AM', room: 'OPD-12', status: 'Confirmed' },
  { id: 'APT-102', patient: 'Rakesh Verma', doctor: 'Dr. Amit Rao', specialty: 'Neurology', time: '11:00 AM', room: 'OPD-7', status: 'Pending' },
  { id: 'APT-103', patient: 'Naina Patel', doctor: 'Dr. Priya Desai', specialty: 'Surgery', time: '01:15 PM', room: 'IPD-3', status: 'Completed' },
  { id: 'APT-104', patient: 'Vikram Joshi', doctor: 'Dr. Suresh Kumar', specialty: 'Orthopedics', time: '03:00 PM', room: 'OPD-4', status: 'Confirmed' }
];

export const doctors: Doctor[] = [
  { id: 'DOC-1001', name: 'Dr. Meera Singh', specialty: 'Cardiology', shift: 'Morning', availability: 'On Duty', patientsToday: 12 },
  { id: 'DOC-1002', name: 'Dr. Amit Rao', specialty: 'Neurology', shift: 'Morning', availability: 'Available', patientsToday: 8 },
  { id: 'DOC-1003', name: 'Dr. Priya Desai', specialty: 'General Surgery', shift: 'Evening', availability: 'On Duty', patientsToday: 6 },
  { id: 'DOC-1004', name: 'Dr. Suresh Kumar', specialty: 'Orthopedics', shift: 'Morning', availability: 'Available', patientsToday: 10 }
];

export const beds: Bed[] = [
  { id: 'BED-201', ward: 'ICU', type: 'Critical Care', status: 'Occupied', patient: 'Rakesh Verma' },
  { id: 'BED-202', ward: 'Ward A', type: 'General', status: 'Available', patient: '' },
  { id: 'BED-203', ward: 'Ward B', type: 'General', status: 'Cleaning', patient: '' },
  { id: 'BED-204', ward: 'Ward C', type: 'Premium', status: 'Occupied', patient: 'Naina Patel' }
];

export const invoices: Invoice[] = [
  { id: 'INV-7001', patient: 'Asha Sharma', amount: 5200, status: 'Paid', dueDate: '2026-06-20' },
  { id: 'INV-7002', patient: 'Rakesh Verma', amount: 14800, status: 'Pending', dueDate: '2026-06-28' },
  { id: 'INV-7003', patient: 'Naina Patel', amount: 8300, status: 'Overdue', dueDate: '2026-06-12' }
];

export const reportMetrics: ReportMetric[] = [
  { label: 'Average Wait Time', value: '18 mins', trend: '+2 mins vs. last week' },
  { label: 'Discharge Efficiency', value: '94%', trend: '+4% this month' },
  { label: 'Pharmacy Revenue', value: '₹3.2L', trend: '+12% this month' },
  { label: 'Claim Approval Rate', value: '87%', trend: '+3% this month' }
];
