import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Layers, Cloud, Navigation, Zap, CheckCircle, Eye, Satellite } from "lucide-react";

export default function MapPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Map Application
                  </h1>
                  <p className="text-xl text-purple-600 mt-2">Visualize Incidents, Hazards & Weather in Real-Time</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your situational awareness with our advanced mapping platform featuring high-resolution 
                aerial overlays, real-time weather data, and bidirectional integration with your CAD system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">See Map in Action</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Link href="/solutions/cad">View CAD Integration</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Aerial Imagery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Weather Integration</span>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <div className="rounded-2xl border shadow-2xl bg-white p-4">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-purple-900 mb-2">Interactive Map</p>
                    <p className="text-purple-700">Real-Time Incident Visualization</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Mapping Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mapping platform provides comprehensive situational awareness with real-time data integration 
              and advanced visualization tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Satellite className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">High-Resolution Aerial Imagery</CardTitle>
                <CardDescription>
                  Access the latest satellite and aerial imagery with multiple overlay options for enhanced visibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sub-meter resolution imagery</li>
                  <li>• Multiple map layer options</li>
                  <li>• Historical imagery comparison</li>
                  <li>• 3D terrain visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Real-Time Weather & Traffic</CardTitle>
                <CardDescription>
                  Integrated weather radar and traffic data to inform response decisions and route planning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live weather radar overlay</li>
                  <li>• Traffic congestion data</li>
                  <li>• Weather alert integration</li>
                  <li>• Road closure notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Bidirectional CAD Integration</CardTitle>
                <CardDescription>
                  Seamlessly sync with your CAD system for automatic incident plotting and resource tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automatic incident plotting</li>
                  <li>• Live unit tracking</li>
                  <li>• Status synchronization</li>
                  <li>• Cross-platform updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Hazard & Infrastructure Layers</CardTitle>
                <CardDescription>
                  Visualize critical infrastructure, hazardous materials, and emergency resources on demand.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Critical infrastructure overlay</li>
                  <li>• Hazmat facility locations</li>
                  <li>• Emergency resource mapping</li>
                  <li>• Custom layer creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Advanced Routing & Navigation</CardTitle>
                <CardDescription>
                  Intelligent routing that considers traffic, weather, and emergency vehicle priority.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Emergency vehicle routing</li>
                  <li>• Multi-stop optimization</li>
                  <li>• Dynamic route adjustment</li>
                  <li>• Turn-by-turn navigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">Custom Data Visualization</CardTitle>
                <CardDescription>
                  Create custom overlays and visualizations for agency-specific data and operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom overlay creation</li>
                  <li>• Data import capabilities</li>
                  <li>• Heat map generation</li>
                  <li>• Statistical visualization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Enhanced Situational Awareness
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our mapping platform transforms how agencies visualize and respond to incidents, 
                providing unprecedented situational awareness and operational intelligence.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Real-Time Incident Visualization</h3>
                    <p className="text-gray-600">See all active incidents plotted on the map with real-time status updates and resource assignments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Environmental Intelligence</h3>
                    <p className="text-gray-600">Make informed decisions with integrated weather radar, traffic data, and environmental hazard information.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Optimized Response Routes</h3>
                    <p className="text-gray-600">Reduce response times with intelligent routing that accounts for traffic, weather, and emergency priorities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl border shadow-xl p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <MapPin className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-lg font-semibold text-purple-900 mb-2">Live Map Interface</p>
                    <p className="text-sm text-purple-700">Real-time incident tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Access Anywhere, On Any Device</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our responsive mapping platform works seamlessly across desktop, tablet, and mobile devices, 
            ensuring your team has access to critical information wherever they are.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-8 bg-purple-600 rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Desktop</h3>
              <p className="text-gray-600 text-sm">Full-featured mapping interface for dispatch centers</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-7 bg-purple-600 rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tablet</h3>
              <p className="text-gray-600 text-sm">Touch-optimized interface for command vehicles</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-10 bg-purple-600 rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile</h3>
              <p className="text-gray-600 text-sm">Streamlined view for field personnel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Situational Awareness
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of real-time mapping with integrated weather, traffic, and incident data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">See Map in Action</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/solutions/mobile">Explore Mobile Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}