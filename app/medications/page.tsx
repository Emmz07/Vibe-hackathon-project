"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Pill,
  AlertCircle,
  Check,
  Sun,
  Moon,
  Coffee,
  UtensilsCrossed
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Mock medication data
const mockMedications = [
  {
    id: '1',
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    timing: 'Morning',
    refillDate: new Date(2023, 11, 15),
    remainingDays: 23,
    percentRemaining: 77,
    instructions: 'Take with or without food',
    category: 'Blood Pressure',
    status: 'active'
  },
  {
    id: '2',
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    timing: 'Morning and Evening',
    refillDate: new Date(2023, 11, 8),
    remainingDays: 16,
    percentRemaining: 53,
    instructions: 'Take with meals',
    category: 'Diabetes',
    status: 'active'
  },
  {
    id: '3',
    name: 'Vitamin D3',
    dosage: '2000IU',
    frequency: 'Once daily',
    timing: 'Morning',
    refillDate: new Date(2023, 11, 30),
    remainingDays: 38,
    percentRemaining: 95,
    instructions: 'Take with food',
    category: 'Supplement',
    status: 'active'
  },
  {
    id: '4',
    name: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily',
    timing: 'Morning, Afternoon, Evening',
    refillDate: new Date(2023, 10, 10),
    remainingDays: 0,
    percentRemaining: 0,
    instructions: 'Take until complete. Do not stop early.',
    category: 'Antibiotic',
    status: 'completed'
  }
];

// Mock schedule data
const mockSchedule = [
  {
    time: '08:00 AM',
    medications: ['Lisinopril', 'Vitamin D3'],
    taken: true
  },
  {
    time: '01:00 PM',
    medications: ['Metformin'],
    taken: true
  },
  {
    time: '08:00 PM',
    medications: ['Metformin'],
    taken: false
  }
];

export default function MedicationsPage() {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedMedication, setSelectedMedication] = useState(mockMedications[0]);

  const filteredMedications = activeTab === 'current'
    ? mockMedications.filter(med => med.status === 'active')
    : mockMedications.filter(med => med.status === 'completed');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="w-64 h-screen hidden md:block" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
          <h1 className="text-2xl font-semibold mb-6">Medications</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Medications list */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium">My Medications</CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        variant={activeTab === 'current' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setActiveTab('current')}
                      >
                        Current
                      </Button>
                      <Button 
                        variant={activeTab === 'past' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setActiveTab('past')}
                      >
                        Past
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mt-2">
                    {filteredMedications.map((medication) => (
                      <div 
                        key={medication.id}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedMedication.id === medication.id 
                            ? 'bg-blue-50 border border-blue-200' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedMedication(medication)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <Pill className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{medication.name}</h3>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                {medication.dosage}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{medication.frequency}</p>
                            
                            {medication.status === 'active' && (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                  <span>Refill in {medication.remainingDays} days</span>
                                  <span>{medication.percentRemaining}%</span>
                                </div>
                                <Progress value={medication.percentRemaining} className="h-1.5" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Button className="w-full">Add New Medication</Button>
            </div>
            
            {/* Medication details and schedule */}
            <div className="lg:col-span-2 space-y-6">
              {/* Medication details */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium">{selectedMedication.name}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{selectedMedication.category}</p>
                    </div>
                    <Button variant="outline" size="sm">Refill Prescription</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Dosage</h3>
                      <p>{selectedMedication.dosage}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Frequency</h3>
                      <p>{selectedMedication.frequency}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Timing</h3>
                      <p>{selectedMedication.timing}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Next Refill</h3>
                      <p>
                        {selectedMedication.refillDate.toLocaleDateString([], {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Instructions</h3>
                    <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                      <p>{selectedMedication.instructions}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Reminders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Sun className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Morning</p>
                          <p className="text-xs text-gray-500">8:00 AM</p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                            <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <Coffee className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Afternoon</p>
                          <p className="text-xs text-gray-500">1:00 PM</p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                            <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                          <Moon className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Evening</p>
                          <p className="text-xs text-gray-500">8:00 PM</p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                            <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Today's schedule */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Today&apos;s Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockSchedule.map((schedule, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-none w-20 text-sm font-medium">{schedule.time}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex flex-wrap gap-2 mb-1">
                                {schedule.medications.map((med, idx) => (
                                  <span key={idx} className="text-sm bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                                    {med}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-2">
                                <UtensilsCrossed className="h-4 w-4 text-gray-400" />
                                <span className="text-xs text-gray-500">Take with food</span>
                              </div>
                            </div>
                            <div>
                              {schedule.taken ? (
                                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <Check className="h-4 w-4 text-green-600" />
                                </div>
                              ) : (
                                <Button size="sm" variant="outline">
                                  Take
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}