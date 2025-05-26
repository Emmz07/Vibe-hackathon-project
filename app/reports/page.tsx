"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Download, 
  FileText, 
  Calendar,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock report data
const mockReports = [
  { 
    id: '1',
    title: 'Annual Health Assessment',
    type: 'Physical Examination',
    date: new Date(2023, 5, 15),
    doctor: 'Dr. Kristin Watson',
    insights: ['Normal blood work', 'Healthy BMI', 'Good cardiovascular health'],
    recommendations: ['Continue regular exercise', 'Maintain balanced diet', 'Schedule follow-up in 12 months']
  },
  { 
    id: '2',
    title: 'Blood Test Results',
    type: 'Laboratory',
    date: new Date(2023, 8, 22),
    doctor: 'Dr. Robert Johnson',
    insights: ['Slightly elevated cholesterol', 'Normal blood glucose', 'Vitamin D deficiency'],
    recommendations: ['Reduce saturated fat intake', 'Take Vitamin D supplements', 'Follow up in 3 months']
  },
  { 
    id: '3',
    title: 'Cardiac Function Assessment',
    type: 'Specialized',
    date: new Date(2023, 10, 5),
    doctor: 'Dr. Kristin Watson',
    insights: ['Normal ECG readings', 'Healthy heart rate', 'No arrhythmias detected'],
    recommendations: ['Continue regular check-ups', 'Maintain active lifestyle', 'Monitor blood pressure at home']
  }
];

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedReport, setSelectedReport] = useState(mockReports[0]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="w-64 h-screen hidden md:block" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
          <h1 className="text-2xl font-semibold mb-6">Medical Reports</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Reports list */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                      <TabsTrigger value="important">Important</TabsTrigger>
                    </TabsList>
                    
                    <div className="space-y-3 mt-2">
                      {mockReports.map((report) => (
                        <div 
                          key={report.id}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedReport.id === report.id 
                              ? 'bg-blue-50 border border-blue-200' 
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                          onClick={() => setSelectedReport(report)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-medium">{report.title}</h3>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>
                                    {report.date.toLocaleDateString([], {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Report details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-xl font-medium">{selectedReport.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{selectedReport.type} • {selectedReport.doctor}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Report Date</h3>
                      <p>
                        {selectedReport.date.toLocaleDateString([], {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Key Insights</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedReport.insights.map((insight, index) => (
                          <li key={index}>{insight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Recommendations</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedReport.recommendations.map((recommendation, index) => (
                          <li key={index}>{recommendation}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Related Actions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Button variant="outline" className="justify-between">
                          <span>Schedule Follow-up</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="justify-between">
                          <span>Message Doctor</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Trends card */}
              <Card className="mt-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Health Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Blood Pressure</h4>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">122/78</span>
                        <span className="text-xs text-gray-500 ml-1">mmHg</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-green-600">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                        </svg>
                        <span>Normal range</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Cholesterol</h4>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">185</span>
                        <span className="text-xs text-gray-500 ml-1">mg/dL</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-yellow-600">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                        </svg>
                        <span>Slightly elevated</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Vitamin D</h4>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">24</span>
                        <span className="text-xs text-gray-500 ml-1">ng/mL</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-red-600">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                        </svg>
                        <span>Deficient</span>
                      </div>
                    </div>
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