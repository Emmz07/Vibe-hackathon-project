"use client";

import { useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Legend
} from 'recharts';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Mock data for the scatter chart
const chartData = [
  { x: 50, y: 80, z: 200, name: 'Blood Pressure', color: '#0070f3', value: '122', unit: '/78 mmHg' },
  { x: 30, y: 50, z: 150, name: 'Heart Rate', color: '#a1c4fd', value: '66', unit: 'bpm' },
  { x: 65, y: 70, z: 180, name: 'Oxygen Saturation', color: '#1d3a8a', value: '99', unit: '%' },
  { x: 40, y: 90, z: 160, name: 'Hemoglobin', color: '#0070f3', value: '13.5', unit: 'g/dL' },
  { x: 20, y: 60, z: 140, name: 'PRQ', color: '#1e1e1e', value: '4.8', unit: '' },
];

const categories = [
  { id: 'vital-sign', name: 'Vital Sign' },
  { id: 'blood-pressure', name: 'Blood Pressure' },
  { id: 'heart-rate', name: 'Heart Rate' },
  { id: 'respiration-rate', name: 'Respiration Rate' },
  { id: 'hemoglobin', name: 'Hemoglobin' },
];


type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      value: string;
      unit: string;
    };
  }>;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border">
        <p className="text-sm font-medium">{data.name}</p>
        <p className="text-lg font-bold text-blue-600">
          {data.value}{data.unit}
        </p>
      </div>
    );
  }
  return null;
};

type ScatterShapeProps = {
  cx?: number;
  cy?: number;
};

export function VitalSignsChart() {
  const [activeCategory, setActiveCategory] = useState('vital-sign');

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            className={cn(
              "rounded-full",
              activeCategory === category.id ? "bg-blue-500 text-white" : "bg-white"
            )}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              type="number"
              dataKey="x"
              name="Reference"
              domain={[0, 100]}
              label={{ value: 'Reference', position: 'bottom' }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Measurements At Examination"
              domain={[0, 100]}
              label={{
                value: 'Measurements At Examination',
                angle: -90,
                position: 'left'
              }}
            />
            <ZAxis type="number" dataKey="z" range={[100, 500]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {chartData.map((entry, index) => (
              <Scatter
                key={index}
                name={entry.name}
                data={[entry]}
                fill={entry.color}
                shape={(props: ScatterShapeProps) => (
                  <g>
                    <circle
                      cx={props.cx}
                      cy={props.cy}
                      r={entry.z / 20}
                      fill={entry.color}
                      fillOpacity={0.6}
                      stroke={entry.color}
                      strokeWidth={1}
                    />
                    <text
                      x={props.cx}
                      y={props.cy}
                      textAnchor="middle"
                      fill="white"
                      fontSize={12}
                      fontWeight="bold"
                      dy=".3em"
                    >
                      {entry.value}
                    </text>
                  </g>
                )}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}