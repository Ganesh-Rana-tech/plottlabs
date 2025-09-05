import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, RefreshCw, Wifi, WifiOff, Shield, CheckCircle, Download, Zap } from "lucide-react";

export default function MobilePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Mobile Application
                  </h1>
                  <p className="text-xl text-cyan-600 mt-2">Extend CAD & Map to Responders in the Field</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your field personnel with seamless access to CAD and Map functionality through our 
                device-agnostic mobile platform that ensures real-time synchronization and offline capability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact">Discover Mobile Access</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  <Link href="/solutions">View Platform Overview</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Device-Agnostic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Real-time Sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Offline Ready</span>
                </div>
              </div>
            </div>

            <div className="lg:order-last flex justify-center">
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
                    <div className="relative z-10 text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <Smartphone className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-lg font-bold text-cyan-900 mb-2">Mobile Interface</p>
                      <p className="text-sm text-cyan-700 mb-4">Field Access Portal</p>
                      <div className="space-y-2">
                        <div className="bg-white/80 rounded-lg p-2">
                          <div className="text-xs font-medium text-gray-800">Active Incidents: 3</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-2">
                          <div className="text-xs font-medium text-gray-800">Unit Status: Available</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-2">
                          <div className="text-xs font-medium text-gray-800">GPS: Connected</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating indicators */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Wifi className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <RefreshCw className="w-4 h-4 text-white" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Mobile Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mobile platform brings the full power of your dispatch system to field personnel, 
              ensuring seamless operations regardless of location or connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">Device-Agnostic Design</CardTitle>
                <CardDescription>
                  Works seamlessly across iOS, Android, tablets, and ruggedized devices used in the field.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cross-platform compatibility</li>
                  <li>• Responsive interface design</li>
                  <li>• Support for ruggedized devices</li>
                  <li>• Touch-optimized controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">Real-Time CAD Synchronization</CardTitle>
                <CardDescription>
                  Instant synchronization with your CAD system for real-time incident updates and status changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live incident notifications</li>
                  <li>• Status update capabilities</li>
                  <li>• Automatic data refresh</li>
                  <li>• Bidirectional communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <WifiOff className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">Offline Capability</CardTitle>
                <CardDescription>
                  Continue operations in areas with poor connectivity with automatic sync when connection is restored.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Offline data storage</li>
                  <li>• Cached map data</li>
                  <li>• Queue sync when online</li>
                  <li>• Essential function access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">Secure Data Transmission</CardTitle>
                <CardDescription>
                  End-to-end encryption ensures sensitive information remains protected during transmission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• End-to-end encryption</li>
                  <li>• Secure authentication</li>
                  <li>• Data loss prevention</li>
                  <li>• Compliance ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">GPS & Location Services</CardTitle>
                <CardDescription>
                  Precise location tracking and navigation capabilities for efficient field operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High-accuracy GPS tracking</li>
                  <li>• Turn-by-turn navigation</li>
                  <li>• Location sharing</li>
                  <li>• Breadcrumb trail logging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-900">Field Data Collection</CardTitle>
                <CardDescription>
                  Capture photos, notes, and other critical information directly from the field.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Photo capture and upload</li>
                  <li>• Voice note recording</li>
                  <li>• Digital form completion</li>
                  <li>• Evidence documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Carousel Section */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Screenshots</h2>
            <p className="text-xl text-gray-600">Experience the intuitive mobile interface designed for field operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone mockup 1 */}
            <div className="flex justify-center">
              <div className="w-48 h-96 bg-gray-900 rounded-[2rem] p-2 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-[1.5rem] flex flex-col">
                  <div className="p-4 text-center">
                    <div className="text-sm font-semibold text-cyan-900 mb-2">Incident List</div>
                    <div className="space-y-2">
                      <div className="bg-white/80 rounded p-2 text-xs text-left">
                        <div className="font-medium text-red-600">Priority 1</div>
                        <div className="text-gray-700">Medical Emergency</div>
                      </div>
                      <div className="bg-white/80 rounded p-2 text-xs text-left">
                        <div className="font-medium text-orange-600">Priority 2</div>
                        <div className="text-gray-700">Traffic Accident</div>
                      </div>
                      <div className="bg-white/80 rounded p-2 text-xs text-left">
                        <div className="font-medium text-blue-600">Priority 3</div>
                        <div className="text-gray-700">Welfare Check</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone mockup 2 */}
            <div className="flex justify-center">
              <div className="w-48 h-96 bg-gray-900 rounded-[2rem] p-2 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-[1.5rem] flex flex-col">
                  <div className="p-4 text-center">
                    <div className="text-sm font-semibold text-cyan-900 mb-2">Map View</div>
                    <div className="bg-white/80 rounded-lg h-32 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-cyan-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-700">Your Location</div>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white/80 rounded p-1">Distance: 2.3 mi</div>
                      <div className="bg-white/80 rounded p-1">ETA: 4 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone mockup 3 */}
            <div className="flex justify-center">
              <div className="w-48 h-96 bg-gray-900 rounded-[2rem] p-2 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-[1.5rem] flex flex-col">
                  <div className="p-4 text-center">
                    <div className="text-sm font-semibold text-cyan-900 mb-2">Unit Status</div>
                    <div className="space-y-2">
                      <div className="bg-green-100 border border-green-300 rounded p-2">
                        <div className="text-xs font-medium text-green-800">Available</div>
                      </div>
                      <div className="bg-white/80 rounded p-2 text-xs text-left">
                        <div className="font-medium">Last Update</div>
                        <div className="text-gray-700">2:34 PM</div>
                      </div>
                      <div className="bg-white/80 rounded p-2 text-xs text-left">
                        <div className="font-medium">Location</div>
                        <div className="text-gray-700">Main & 5th St</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                Empower Your Field Personnel
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Give your responders the tools they need to stay connected, informed, and effective, 
                whether they're in the vehicle or on foot.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Always Connected</h3>
                    <p className="text-gray-600">Real-time access to incident information, unit status, and dispatch communications from any location.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <WifiOff className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Works Anywhere</h3>
                    <p className="text-gray-600">Offline capability ensures critical functions remain available even in areas with poor connectivity.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Secure by Design</h3>
                    <p className="text-gray-600">Enterprise-grade security protects sensitive information with end-to-end encryption and secure authentication.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-cyan-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">50%</div>
                  <div className="text-sm text-gray-600">Faster Field Updates</div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Field Access</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Tablet mockup */}
                <div className="w-80 h-60 bg-gray-900 rounded-2xl p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10"></div>
                    <div className="relative z-10 text-center p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/80 rounded-lg p-3">
                          <Smartphone className="w-6 h-6 text-cyan-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Mobile</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3">
                          <RefreshCw className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Sync</div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3">
                          <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Secure</div>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-cyan-900">Tablet Interface</p>
                      <p className="text-xs text-cyan-700">Command Vehicle View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Extend Your Operations to the Field
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Give your team seamless access to CAD and Map functionality from any device, anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Discover Mobile Access</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-cyan-600">
              <Link href="/solutions/analytics">Explore Analytics Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}