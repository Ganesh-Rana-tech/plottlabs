import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";

export default function CADPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Computer-Aided Dispatch
                  </h1>
                  <p className="text-xl text-blue-600 mt-2">Simplify & Accelerate Dispatch Operations</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your dispatch operations with our advanced CAD system featuring real-time data processing, 
                intelligent resource allocation, and seamless integration capabilities designed for modern public safety agencies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Request CAD Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>ProQA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Real-time Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Cloud-Native</span>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <div className="rounded-2xl border shadow-2xl bg-white p-4">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-blue-900 mb-2">CAD Dashboard</p>
                    <p className="text-blue-700">Live Incident Management Interface</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced CAD Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Computer-Aided Dispatch system provides everything you need to manage incidents efficiently 
              and keep your community safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Real-time Incident Management</CardTitle>
                <CardDescription>
                  Monitor and manage incidents as they happen with live updates and automatic status tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live incident tracking and updates</li>
                  <li>• Automatic status synchronization</li>
                  <li>• Priority-based incident queuing</li>
                  <li>• Multi-agency coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Intelligent Resource Allocation</CardTitle>
                <CardDescription>
                  Automatically assign the closest available resources based on location, availability, and expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Smart resource assignment</li>
                  <li>• Availability tracking</li>
                  <li>• Skill-based routing</li>
                  <li>• Load balancing across units</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">ProQA Certified Call Handling</CardTitle>
                <CardDescription>
                  Industry-standard emergency medical dispatch protocols integrated seamlessly into your workflow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ProQA protocol compliance</li>
                  <li>• Guided call processing</li>
                  <li>• Pre-arrival instructions</li>
                  <li>• Quality assurance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Integrated Mapping</CardTitle>
                <CardDescription>
                  Seamlessly integrated with our mapping platform for visual incident management and routing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Visual incident plotting</li>
                  <li>• Turn-by-turn routing</li>
                  <li>• Hazard identification</li>
                  <li>• Geographic data overlay</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Secure Data Management</CardTitle>
                <CardDescription>
                  Military-grade security ensures your sensitive dispatch data remains protected and compliant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• End-to-end encryption</li>
                  <li>• CJIS compliance ready</li>
                  <li>• Audit trail logging</li>
                  <li>• Role-based access control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Legacy System Integration</CardTitle>
                <CardDescription>
                  Connect with existing systems and databases without disrupting current operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API-first architecture</li>
                  <li>• Legacy system bridges</li>
                  <li>• Data synchronization</li>
                  <li>• Gradual migration support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Measurable Results for Your Agency
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Agencies using our CAD system report significant improvements in response times, 
                operational efficiency, and overall public safety outcomes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                  <div className="text-sm text-gray-600">Faster Response Times</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Reduction in Errors</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600">Less Training Time</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl border shadow-xl p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Real-time</div>
                        <div className="text-xs text-gray-600">Updates</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Resource</div>
                        <div className="text-xs text-gray-600">Allocation</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">ProQA</div>
                        <div className="text-xs text-gray-600">Certified</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <div className="text-xs font-medium">Secure</div>
                        <div className="text-xs text-gray-600">Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Dispatch Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how our CAD system can improve your agency's response times and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Request CAD Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/solutions/map">Explore Map Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}