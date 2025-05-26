import { create } from 'zustand';

export type UserRole = 'patient' | 'doctor';

export interface User {
  id: string;
  name: string;
  age: number;
  role: UserRole;
  avatar: string;
}

export interface VitalSign {
  id: string;
  userId: string;
  bloodPressure: number;
  heartRate: number;
  oxygenSaturation: number;
  hemoglobin: number;
  prq: number;
  date: Date;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  reason: string;
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'appointment' | 'medication' | 'report';
  read: boolean;
  date: Date;
}

interface AppState {
  currentUser: User | null;
  vitalSigns: VitalSign[];
  appointments: Appointment[];
  notifications: Notification[];
  setCurrentUser: (user: User) => void;
  markNotificationAsRead: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentUser: null,
  vitalSigns: [],
  appointments: [],
  notifications: [],

  setCurrentUser: (user) => set({ currentUser: user }),

  markNotificationAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      ),
    })),
}));
