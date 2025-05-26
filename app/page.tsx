"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/layout/sidebar';
import { DashboardHeader } from '@/components/dashboard/header';
import { VitalSignsChart } from '@/components/dashboard/vital-signs-chart';
import { HealthScan } from '@/components/dashboard/health-scan';
import { HealthReport } from '@/components/dashboard/health-report';
import { HeartRateOverview, BloodPressureOverview } from '@/components/dashboard/health-overview';
import { Sidebarr } from '@/components/dashboard/sidebarr';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar className="w-64 h-screen hidden md:block" />

      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
          <DashboardHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
              <VitalSignsChart />
            </div>

            <div className="lg:col-span-1">
              <HealthScan />
            </div>

            <div className="lg:col-span-1">
              <HealthReport />
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="w-full flex items-center gap-2" size="sm">
                  <span>View Report</span>
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-semibold">Health Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HeartRateOverview />
                <BloodPressureOverview />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6 block sm:hidden">
              <h2 className="text-xl font-semibold">Main menu</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Sidebarr className="w-full " />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
