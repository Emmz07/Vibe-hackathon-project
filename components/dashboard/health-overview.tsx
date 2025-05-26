"use client";

import { MoreHorizontal, Heart, Droplet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AreaChart, 
  Area, 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { mockHeartRateData, mockBloodPressureData } from '@/lib/mock-data';

export function HeartRateOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <CardTitle className="text-lg font-medium">Heart Rate</CardTitle>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl font-bold">66-180 <span className="text-sm font-normal text-gray-500">bpm</span></div>
          <div className="text-sm text-gray-500">Today (14:00)</div>
        </div>
        
        <div className="flex items-center -mx-2 mb-2">
          <div className="px-2">
            <div className="text-xs text-gray-500">Avg.</div>
            <div className="font-medium">70</div>
          </div>
        </div>
        
        <div className="h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockHeartRateData}>
              <defs>
                <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="min" 
                stackId="1"
                stroke="#3b82f6"
                fill="url(#heartRateGradient)"
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="max" 
                stackId="1"
                stroke="#3b82f6"
                fill="url(#heartRateGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function BloodPressureOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Droplet className="h-5 w-5 text-red-500" />
          <CardTitle className="text-lg font-medium">Blood</CardTitle>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">140<span className="text-sm font-normal text-gray-500">/100 mmHg</span></div>
        </div>
        
        <div className="h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockBloodPressureData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis domain={[80, 160]} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ r: 4, fill: "#3b82f6", stroke: "#3b82f6" }}
                activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}