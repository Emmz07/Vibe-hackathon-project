"use client";

import { Sidebar } from '@/components/layout/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Bell, 
  Lock, 
  Globe, 
  Phone,
  Mail,
  Home,
  Calendar,
  Smartphone
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="w-64 h-screen hidden md:block" />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="container mx-auto py-6 px-4 md:px-6 max-w-7xl">
          <h1 className="text-2xl font-semibold mb-6">Settings</h1>

          <Tabs defaultValue="profile">
            <TabsList className="w-full max-w-md mb-6">
              <TabsTrigger value="profile" className="flex-1">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex-1">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="flex-1">
                <Lock className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex-1">
                <Globe className="h-4 w-4 mr-2" />
                Preferences
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="Aisya" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Clay" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="aisya.clay@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input id="dob" type="date" defaultValue="1995-04-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <select 
                            id="gender" 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            defaultValue="female"
                          >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Medical Ave" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" defaultValue="San Francisco" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" defaultValue="CA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" defaultValue="94103" />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Photo</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                        <img 
                          src="https://images.pexels.com/photos/4398876/pexels-photo-4398876.jpeg?auto=compress&cs=tinysrgb&w=300" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Upload</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Emergency Contact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyName">Name</Label>
                        <Input id="emergencyName" defaultValue="John Clay" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyRelation">Relationship</Label>
                        <Input id="emergencyRelation" defaultValue="Spouse" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Phone Number</Label>
                        <Input id="emergencyPhone" defaultValue="+1 (555) 987-6543" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Channels</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Bell className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">In-app Notifications</p>
                              <p className="text-sm text-gray-500">Receive notifications within the app</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Mail className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Email Notifications</p>
                              <p className="text-sm text-gray-500">Receive email updates</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Phone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">SMS Notifications</p>
                              <p className="text-sm text-gray-500">Receive text message alerts</p>
                            </div>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Smartphone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Push Notifications</p>
                              <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Notification Types</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Calendar className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Appointment Reminders</p>
                              <p className="text-sm text-gray-500">Get notified about upcoming appointments</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Smartphone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Medication Reminders</p>
                              <p className="text-sm text-gray-500">Get reminded to take your medications</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Smartphone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Test Results</p>
                              <p className="text-sm text-gray-500">Get notified when test results are available</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Home className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Health Tips & Updates</p>
                              <p className="text-sm text-gray-500">Receive periodic health tips and updates</p>
                            </div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <div className="flex justify-end">
                        <Button>Update Password</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account by enabling two-factor authentication.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Enable 2FA</p>
                          <p className="text-sm text-gray-500">Protect your account with 2FA</p>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-medium mb-2">Verification Methods</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="radio" id="sms" name="verification" className="h-4 w-4 text-blue-600" />
                            <label htmlFor="sms" className="ml-2 text-sm">SMS Verification</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="app" name="verification" className="h-4 w-4 text-blue-600" />
                            <label htmlFor="app" className="ml-2 text-sm">Authenticator App</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="email" name="verification" className="h-4 w-4 text-blue-600" />
                            <label htmlFor="email" className="ml-2 text-sm">Email Verification</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button variant="outline">Set Up 2FA</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Health Data with Doctors</p>
                          <p className="text-sm text-gray-500">Allow your assigned doctors to view your health data</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Health Data with Family</p>
                          <p className="text-sm text-gray-500">Allow family members to view your health data</p>
                        </div>
                        <Switch />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Anonymous Data for Research</p>
                          <p className="text-sm text-gray-500">Contribute anonymized data to medical research</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Privacy Settings</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Display & Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Theme</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 cursor-pointer bg-white">
                          <div className="h-20 bg-gray-100 rounded mb-2"></div>
                          <p className="text-sm font-medium text-center">Light</p>
                        </div>
                        <div className="border rounded-lg p-4 cursor-pointer">
                          <div className="h-20 bg-gray-800 rounded mb-2"></div>
                          <p className="text-sm font-medium text-center">Dark</p>
                        </div>
                        <div className="border rounded-lg p-4 cursor-pointer">
                          <div className="h-20 bg-gradient-to-b from-white to-gray-800 rounded mb-2"></div>
                          <p className="text-sm font-medium text-center">System</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Language</h3>
                      <select 
                        className="flex h-10 w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="en"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="zh">中文</option>
                      </select>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Accessibility</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Larger Text</p>
                            <p className="text-sm text-gray-500">Increase the text size for better readability</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Screen Reader Support</p>
                            <p className="text-sm text-gray-500">Optimize interface for screen readers</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Reduce Motion</p>
                            <p className="text-sm text-gray-500">Minimize animations throughout the interface</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Measurement Units</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Temperature</p>
                          <div className="flex gap-4">
                            <div className="flex items-center">
                              <input type="radio" id="celsius" name="temperature" className="h-4 w-4 text-blue-600" defaultChecked />
                              <label htmlFor="celsius" className="ml-2 text-sm">Celsius (°C)</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="fahrenheit" name="temperature" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="fahrenheit" className="ml-2 text-sm">Fahrenheit (°F)</label>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Weight</p>
                          <div className="flex gap-4">
                            <div className="flex items-center">
                              <input type="radio" id="kg" name="weight" className="h-4 w-4 text-blue-600" defaultChecked />
                              <label htmlFor="kg" className="ml-2 text-sm">Kilograms (kg)</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="lb" name="weight" className="h-4 w-4 text-blue-600" />
                              <label htmlFor="lb" className="ml-2 text-sm">Pounds (lb)</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}