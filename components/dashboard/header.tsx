"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUsers } from '@/lib/mock-data';

export function DashboardHeader() {
  const doctor = mockUsers[1]; // Use the doctor user

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold ">Overview medical history</h1>
      <div className="flex items-center gap-2">
        <div className="text-right">
          <div className="text-sm hidden sm:block text-gray-500">Assistant Doctor</div>
          <div className="font-medium hidden sm:block">{doctor.name}</div>
        </div>
        <Avatar>
          <AvatarImage src={doctor.avatar} alt={doctor.name} />
          <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}