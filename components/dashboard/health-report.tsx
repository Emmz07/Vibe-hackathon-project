"use client";

import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockVitalSigns } from '@/lib/mock-data';

export function HealthReport() {
  const vitals = mockVitalSigns[0];
  const wellnessScore = 7; // Mock score out of 10

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-medium">Health Report</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-24 w-24">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e6e6e6"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="10"
                strokeDasharray={`${(wellnessScore / 10) * 282.7} 282.7`}
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="24"
                fontWeight="bold"
                fill="#3b82f6"
              >
                {wellnessScore}
              </text>
              <text
                x="50"
                y="65"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill="#666"
              >
                /10
              </text>
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Wellness Score</h3>
            <p className="text-sm text-gray-500">
              The measured indicators are not intended for medical use
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full text-blue-600 text-xs font-medium mr-2">
              1
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span>Blood Pressure</span>
              <span className="font-medium">{vitals.bloodPressure}/78 mmHg</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full text-blue-600 text-xs font-medium mr-2">
              2
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span>Oxygen Saturation</span>
              <span className="font-medium">{vitals.oxygenSaturation}%</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full text-blue-600 text-xs font-medium mr-2">
              3
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span>Heart Rate</span>
              <span className="font-medium">{vitals.heartRate} bpm</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded-full text-blue-600 text-xs font-medium mr-2">
              4
            </div>
            <div className="flex-1 flex justify-between items-center">
              <span>Hemoglobin</span>
              <span className="font-medium">{vitals.hemoglobin} g/dL</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}