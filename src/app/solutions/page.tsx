import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Smartphone, BarChart3, ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One Unified Platform
            </span>
            <br />
            <span className="text-foreground">Four Core Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Streamline your entire incident response workflow with our integrated suite of enterprise solutions designed for modern public safety agencies.
          </p>
        </div>
      </section>

      {/* Integration Graphic Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative">
                  <div className="bg-blue-100 rounded-2xl p-8 text-center">
                    <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg">CAD</h3>
                    <p className="text-sm text-muted-foreground mt-2">Dispatch Operations</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-purple-100 rounded-2xl p-8 text-center">
                    <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg">Map</h3>
                    <p className="text-sm text-muted-foreground mt-2">Real-time Visualization</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-cyan-100 rounded-2xl p-8 text-center">
                    <Smartphone className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg">Mobile</h3>
                    <p className="text-sm text-muted-foreground mt-2">Field Access</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-green-100 rounded-2xl p-8 text-center">
                    <BarChart3 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-lg">Analytics</h3>
                    <p className="text-sm text-muted-foreground mt-2">Insights & Reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* CAD Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Computer-Aided Dispatch</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Simplify and accelerate dispatch operations with our advanced CAD system featuring real-time data processing, intelligent resource allocation, and seamless integration capabilities.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Real-time incident management and tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Intelligent resource allocation and deployment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>ProQA certified emergency call handling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Integrated mapping and location services</span>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto">
                  <Link href="/solutions/cad" className="flex items-center">
                    Request CAD Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="order-first lg:order-last">
                <div className="rounded-lg border shadow-lg bg-white p-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-blue-800">CAD Dashboard Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="rounded-lg border shadow-lg bg-white p-4">
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-purple-800">Interactive Map View</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Map Application</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Visualize incidents, hazards, and weather conditions in real-time with our advanced mapping platform featuring aerial overlays and bidirectional integration.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>High-resolution aerial imagery and overlays</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Real-time weather and traffic data</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Bidirectional CAD integration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Hazard and incident visualization</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full sm:w-auto border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Link href="/solutions/map" className="flex items-center">
                    See Map in Action <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Mobile Application</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Extend CAD and Map functionality to responders in the field with our device-agnostic mobile platform that ensures seamless synchronization and real-time updates.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span>Device-agnostic design for any platform</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span>Real-time CAD and Map synchronization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span>Offline capability for remote areas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span>Secure field data collection</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full sm:w-auto border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  <Link href="/solutions/mobile" className="flex items-center">
                    Discover Mobile Access <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="order-first lg:order-last">
                <div className="rounded-lg border shadow-lg bg-white p-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-md flex items-center justify-center max-w-sm mx-auto">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-cyan-800">Mobile Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <div className="rounded-lg border shadow-lg bg-white p-4">
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-green-800">Analytics Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Analytics & Reporting</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Empower your agency with actionable insights through configurable dashboards and comprehensive reporting tools that help drive operational improvements.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Configurable dashboards and KPIs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>On-demand report generation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Performance trend analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Compliance and audit reporting</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/solutions/analytics" className="flex items-center">
                    Request Analytics Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Full Platform
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how all four solutions work together to transform your incident response capabilities.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link href="/contact">Schedule Comprehensive Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}