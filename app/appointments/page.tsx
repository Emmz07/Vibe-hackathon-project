"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { mockAppointments } from '@/lib/mock-data';
import { Calendar as CalendarIcon, Clock, User, MapPin } from 'lucide-react';

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Filter appointments for the selected date
  const filteredAppointments = mockAppointments.filter(appointment => {
    if (!date) return false;
    const appointmentDate = new Date(appointment.date);
    return (
      appointmentDate.getDate() === date.getDate() &&
      appointmentDate.getMonth() === date.getMonth() &&
      appointmentDate.getFullYear() === date.getFullYear()
    );
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="w-64 h-screen hidden md:block" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
          <h1 className="text-2xl font-semibold mb-6">Appointments</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-medium mb-4">Select Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            {/* Appointments for selected date */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-medium flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    {date ? (
                      <span>
                        {date.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    ) : (
                      <span>No date selected</span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {filteredAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {filteredAppointments.map((appointment) => {
                        const appointmentTime = new Date(appointment.date);
                        return (
                          <div key={appointment.id} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-medium">{appointment.reason}</h3>
                                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                  <Clock className="h-4 w-4" />
                                  <span>
                                    {appointmentTime.toLocaleTimeString([], { 
                                      hour: '2-digit', 
                                      minute: '2-digit' 
                                    })}
                                  </span>
                                </div>
                              </div>
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {appointment.status}
                              </span>
                            </div>
                            
                            <div className="flex gap-4">
                              <div className="flex items-center gap-2 text-sm">
                                <User className="h-4 w-4 text-gray-500" />
                                <span>Dr. Kristin Watson</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <span>MetaCare Hospital</span>
                              </div>
                            </div>
                            
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline" size="sm">Reschedule</Button>
                              <Button size="sm">Join Consultation</Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <CalendarIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium">No appointments</h3>
                      <p className="text-gray-500 mt-1">
                        {date ? 'You have no appointments scheduled for this date.' : 'Select a date to view appointments.'}
                      </p>
                      <Button className="mt-4">Schedule New Appointment</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {date && (
                <div className="mt-6">
                  <Button className="w-full">Schedule New Appointment</Button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}