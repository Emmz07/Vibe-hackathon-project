"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Pill, 
  Bell, 
  Settings, 
  LogOut,
  ChevronDown
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { mockUsers, mockNotifications } from '@/lib/mock-data';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const currentUser = mockUsers[0]; // Use the patient as default
  const unreadNotifications = mockNotifications.filter(n => !n.read).length;

  const [medicationExpanded, setMedicationExpanded] = useState(false);

  const routes = [
    {
      href: '/',
      icon: LayoutDashboard,
      label: 'Overview',
    },
    {
      href: '/appointments',
      icon: Calendar,
      label: 'Appointment',
    },
    {
      href: '/reports',
      icon: FileText,
      label: 'Report',
      badge: 3,
    },
    {
      href: '/medications',
      icon: Pill,
      label: 'Medication',
      expandable: true,
      expanded: medicationExpanded,
      toggle: () => setMedicationExpanded(!medicationExpanded),
    },
    {
      href: '/notifications',
      icon: Bell,
      label: 'Notification',
      badge: unreadNotifications,
    },
    {
      href: '/settings',
      icon: Settings,
      label: 'Setting',
    },
  ];

  return (
    <div className={cn("flex flex-col h-full bg-white border-r", className)}>
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-500 rounded-full p-1.5">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10L12 6M12 6L16 10M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-semibold">MetaCare.</span>
        </Link>
      </div>

      <div className="px-3 py-2">
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <Avatar className="h-10 w-10">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{currentUser.name}</span>
            <span className="text-sm text-gray-500">{currentUser.age} years</span>
          </div>
          <ChevronDown className="h-4 w-4 ml-auto text-gray-500" />
        </div>
      </div>

      <div className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {routes.map((route) => (
            <div key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === route.href 
                    ? "bg-blue-500 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={route.expandable ? route.toggle : undefined}
              >
                <route.icon className={cn("h-5 w-5", pathname === route.href ? "text-white" : "text-gray-500")} />
                <span>{route.label}</span>
                {route.badge && (
                  <Badge className="ml-auto bg-red-500 hover:bg-red-600">{route.badge}</Badge>
                )}
                {route.expandable && (
                  <ChevronDown className={cn(
                    "h-4 w-4 ml-auto",
                    route.expanded ? "transform rotate-180" : "",
                    pathname === route.href ? "text-white" : "text-gray-500"
                  )} />
                )}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="px-3 py-4 mt-auto">
        <Link
          href="/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <LogOut className="h-5 w-5 text-gray-500" />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
}