import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Calendar, Download, CheckCircle, Eye, Filter } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Analytics & Reporting
                  </h1>
                  <p className="text-xl text-green-600 mt-2">Empower Agencies with Actionable Insights</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your operational data into actionable insights with configurable dashboards, 
                comprehensive reporting tools, and advanced analytics that drive continuous improvement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Request Analytics Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Real-time Dashboards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Custom Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Trend Analysis</span>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <div className="rounded-2xl border shadow-2xl bg-white p-4">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10"></div>
                  <div className="relative z-10 w-full p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-lg font-bold text-green-900 mb-1">Analytics Dashboard</p>
                      <p className="text-sm text-green-700">Live Performance Metrics</p>
                    </div>
                    
                    {/* Mock dashboard elements */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/80 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-green-600">24</div>
                        <div className="text-xs text-gray-600">Active Incidents</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-blue-600">4:32</div>
                        <div className="text-xs text-gray-600">Avg Response</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-purple-600">89%</div>
                        <div className="text-xs text-gray-600">Unit Efficiency</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-orange-600">156</div>
                        <div className="text-xs text-gray-600">Daily Calls</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Analytics Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your operational data into strategic advantages with powerful analytics tools 
              designed specifically for public safety agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Configurable Dashboards</CardTitle>
                <CardDescription>
                  Create custom dashboards with drag-and-drop widgets tailored to your agency's key performance indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drag-and-drop dashboard builder</li>
                  <li>• Real-time data visualization</li>
                  <li>• Role-based dashboard access</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-900">On-Demand Reporting</CardTitle>
                <CardDescription>
                  Generate comprehensive reports instantly with pre-built templates or create custom reports for specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-built report templates</li>
                  <li>• Custom report builder</li>
                  <li>• Scheduled report delivery</li>
                  <li>• Multiple export formats</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Performance Trend Analysis</CardTitle>
                <CardDescription>
                  Identify patterns and trends in your operational data to make informed strategic decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Historical data analysis</li>
                  <li>• Trend identification</li>
                  <li>• Predictive insights</li>
                  <li>• Comparative analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Key Performance Indicators</CardTitle>
                <CardDescription>
                  Monitor critical metrics like response times, unit utilization, and case resolution rates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Response time tracking</li>
                  <li>• Unit utilization metrics</li>
                  <li>• Case resolution analytics</li>
                  <li>• Quality assurance scores</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Compliance & Audit Reporting</CardTitle>
                <CardDescription>
                  Generate compliance reports for regulatory requirements and internal audit processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Regulatory compliance reports</li>
                  <li>• Audit trail documentation</li>
                  <li>• Quality assurance tracking</li>
                  <li>• Certification support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Advanced Data Filtering</CardTitle>
                <CardDescription>
                  Drill down into your data with sophisticated filtering and search capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-criteria filtering</li>
                  <li>• Date range selection</li>
                  <li>• Geographic filtering</li>
                  <li>• Custom field queries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Dashboard Preview</h2>
            <p className="text-xl text-gray-600">See how our analytics platform transforms your data into actionable insights</p>
          </div>

          <div className="bg-white rounded-2xl border shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Chart Area */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-900 mb-2">Response Time Trends</h3>
                    <p className="text-green-700">Interactive charts and graphs showing key performance metrics</p>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">4:32</div>
                        <div className="text-xs text-gray-600">Avg Response</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">-12%</div>
                        <div className="text-xs text-gray-600">vs Last Month</div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3">
                        <div className="text-lg font-bold text-purple-600">94%</div>
                        <div className="text-xs text-gray-600">Target Met</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KPI Widgets */}
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-green-900">Active Incidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <p className="text-xs text-gray-600">+3 from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-blue-900">Unit Utilization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">89%</div>
                    <p className="text-xs text-gray-600">Above average</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-purple-900">Call Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <p className="text-xs text-gray-600">Today so far</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-orange-900">Clearance Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">92%</div>
                    <p className="text-xs text-gray-600">Excellent performance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Data-Driven Decision Making
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform raw operational data into strategic insights that drive improvements 
                in response times, resource allocation, and overall agency performance.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Real-time Visibility</h3>
                    <p className="text-gray-600">Get instant insights into current operations with live dashboards and real-time metrics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Performance Optimization</h3>
                    <p className="text-gray-600">Identify bottlenecks and opportunities for improvement with detailed trend analysis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Compliance Assurance</h3>
                    <p className="text-gray-600">Maintain regulatory compliance with automated reporting and audit trail documentation.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
                  <div className="text-sm text-gray-600">Efficiency Improvement</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">75%</div>
                  <div className="text-sm text-gray-600">Time Saved on Reports</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl border shadow-xl p-6">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Charts</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <PieChart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Analysis</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Trends</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <Download className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Reports</div>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-green-900 mb-2">Analytics Suite</p>
                    <p className="text-sm text-green-700">Comprehensive reporting tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock the Power of Your Data
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your operational data into strategic advantages with comprehensive analytics and reporting tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Request Analytics Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/solutions">View Complete Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}