import { User, VitalSign, Appointment, Notification } from './store';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Aisya Clay',
    age: 28,
    role: 'patient',
    avatar: 'https://images.pexels.com/photos/4398876/pexels-photo-4398876.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Kristin Watson',
    age: 35,
    role: 'doctor',
    avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const mockVitalSigns: VitalSign[] = [
  {
    id: '1',
    userId: '1',
    bloodPressure: 122,
    heartRate: 66,
    oxygenSaturation: 99,
    hemoglobin: 13.5,
    prq: 4.8,
    date: new Date()
  }
];

// Generate mock heart rate data for the past week
export const mockHeartRateData = Array.from({ length: 7 }).map((_, i) => {
  const day = new Date();
  day.setDate(day.getDate() - (6 - i));
  
  // Create random min and max heart rates for each day
  const min = Math.floor(Math.random() * (80 - 60) + 60);
  const max = Math.floor(Math.random() * (100 - 80) + 80);
  
  return {
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    min,
    max
  };
});

// Generate mock blood pressure data for the past week
export const mockBloodPressureData = Array.from({ length: 7 }).map((_, i) => {
  const day = new Date();
  day.setDate(day.getDate() - (6 - i));
  
  return {
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    value: Math.floor(Math.random() * (145 - 115) + 115)
  };
});

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '2',
    date: new Date(Date.now() + 86400000), // tomorrow
    status: 'scheduled',
    reason: 'Annual check-up'
  },
  {
    id: '2',
    patientId: '1',
    doctorId: '2',
    date: new Date(Date.now() + 172800000), // day after tomorrow
    status: 'scheduled',
    reason: 'Blood test results'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    message: 'Reminder: You have an appointment tomorrow at 10:00 AM',
    type: 'appointment',
    read: false,
    date: new Date()
  },
  {
    id: '2',
    userId: '1',
    message: 'Your blood test results are ready. Check your reports.',
    type: 'report',
    read: false,
    date: new Date(Date.now() - 3600000)
  }
];