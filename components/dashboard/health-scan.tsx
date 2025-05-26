"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';

export function HealthScan() {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [heartRate, setHeartRate] = useState(0);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          setScanComplete(true);
          setHeartRate(74);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(scanInterval);
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-100">
      <div className="relative h-[260px] w-full">
        <Image
          src="https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Face scan"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        
        {/* Face detection points overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
          <circle cx="200" cy="100" r="2" fill="white" />
          <circle cx="160" cy="120" r="2" fill="white" />
          <circle cx="240" cy="120" r="2" fill="white" />
          <circle cx="200" cy="150" r="2" fill="white" />
          <circle cx="180" cy="180" r="2" fill="white" />
          <circle cx="220" cy="180" r="2" fill="white" />
          <circle cx="150" cy="140" r="2" fill="white" />
          <circle cx="250" cy="140" r="2" fill="white" />
          <path d="M160 120 L 200 100 L 240 120" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M150 140 L 200 150 L 250 140" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M180 180 L 200 150 L 220 180" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
        
        {scanComplete && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <div className="flex items-center justify-between">
              <div className="text-sm">Scanning from mobile completed</div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <div className="h-2 w-2 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>
        )}
        
        {scanComplete && (
          <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white flex items-center gap-2">
            <span className="text-2xl font-bold">{heartRate}</span>
            <span className="text-sm">bpm</span>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">Scan progress</div>
          <div className="text-sm font-medium">{scanProgress}%</div>
        </div>
        <Progress value={scanProgress} className="h-2" />
      </div>
    </div>
  );
}