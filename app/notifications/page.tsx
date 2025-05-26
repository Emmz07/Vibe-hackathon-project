"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Calendar, 
  FileText, 
  Pill, 
  Check,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';
import { mockNotifications } from '@/lib/mock-data';
import { useAppStore } from '@/lib/store';

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const notifications = mockNotifications;
  const { markNotificationAsRead } = useAppStore();

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'appointment':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'report':
        return <FileText className="h-5 w-5 text-green-500" />;
      case 'medication':
        return <Pill className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => !n.read);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="w-64 h-screen hidden md:block" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
          <h1 className="text-2xl font-semibold mb-6">Notifications</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Notification preferences */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Channels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-gray-500" />
                      <span>In-app</span>
                    </div>
                    <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>Email</span>
                    </div>
                    <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>SMS</span>
                    </div>
                    <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 13.5 6.5 14.5 7.5 15.5L6.5 18.5L9.5 17.5C10.5 18.5 11.5 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>WhatsApp</span>
                    </div>
                    <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Appointment Reminders</span>
                    <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Medication Alerts</span>
                    <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Lab Results</span>
                    <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Health Tips</span>
                    <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Notification list */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-medium">Activity</CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        variant={activeTab === 'all' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setActiveTab('all')}
                      >
                        All
                      </Button>
                      <Button 
                        variant={activeTab === 'unread' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setActiveTab('unread')}
                      >
                        Unread
                        {unreadCount > 0 && (
                          <span className="ml-1 rounded-full bg-red-100 text-red-800 text-xs px-1.5">
                            {unreadCount}
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mt-2">
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`flex gap-4 p-4 rounded-lg ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                        >
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className={`${notification.read ? 'font-normal' : 'font-medium'}`}>
                                {notification.message}
                              </p>
                              {!notification.read && (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => markNotificationAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {new Date(notification.date).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                              {' · '}
                              {new Date(notification.date).toLocaleDateString([], {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                          <Bell className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium">No notifications</h3>
                        <p className="text-gray-500 mt-1">
                          You're all caught up! No new notifications.
                        </p>
                      </div>
                    )}
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