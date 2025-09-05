import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Smartphone, BarChart3, ArrowRight, CheckCircle, Zap, Users, Globe } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Plott Labs SaaS Suite (CAD, Mapping, Mobile, Analytics)',
  description: 'Explore Plott Labs\' unified SaaS platform built for public safety & critical infrastructure.',
  keywords: 'CAD solutions, SaaS CAD, incident response suite',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-green-400/60 rounded-full animate-particle-float delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">
              One Unified Platform.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Four Core Tools.
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto animate-fade-in-up delay-500 drop-shadow-lg">
            Streamline your entire incident response workflow with our integrated suite of enterprise solutions designed for modern public safety agencies.
          </p>
        </div>
      </section>

      {/* Animated Product Connections */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                One Platform.
              </span>
              <br />
              <span className="text-white">Infinite Impact.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our integrated tools work together seamlessly to transform your operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-100 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">CAD</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Dispatch Operations</p>
            </div>
            
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-200 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Map</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Real-time Visualization</p>
            </div>
            
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-300 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Mobile</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Field Access</p>
            </div>
            
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-400 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Analytics</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Insights & Reporting</p>
            </div>
          </div>
          
          {/* Connection Animation Visualization */}
          <div className="text-center animate-fade-in-up delay-600">
            <div className="glass rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
                <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-green-400"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-600"></div>
              </div>
              <p className="text-white font-semibold text-lg">Seamlessly Connected Ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Cards */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Complete Solution Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how each component transforms your incident response capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* CAD Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">Computer-Aided Dispatch</CardTitle>
                    <p className="text-gray-500 text-sm">Cloud CAD | Secure & ProQA Certified</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Simplify dispatch with secure, ProQA certified CAD — real-time data, cloud-native, user-friendly.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time incident management and tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">ProQA certified emergency protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Intelligent resource allocation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Cloud-native architecture</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Link href="/solutions/cad" className="flex items-center justify-center">
                    Request CAD Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Map Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors duration-300">Interactive Incident Mapping</CardTitle>
                    <p className="text-gray-500 text-sm">Real-time Maps | Hazards & Weather Integration</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Real-time maps with hazards, traffic, and overlays for safer response operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Aerial views and high-resolution imagery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Hazard icons and weather integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Bidirectional CAD integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time incident visualization</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 group-hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/map" className="flex items-center justify-center">
                    See Map in Action <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-cyan-600 transition-colors duration-300">Mobile CAD & Response App</CardTitle>
                    <p className="text-gray-500 text-sm">Device-Agnostic | Secure | Offline-Ready</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Access CAD & maps in the field with mobile-first SaaS tools that work anywhere.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Device-agnostic design for any platform</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Secure field data collection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Offline capability for remote areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time synchronization</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 group-hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/mobile" className="flex items-center justify-center">
                    Discover Mobile Access <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Analytics Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up delay-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">Incident Response Analytics</CardTitle>
                    <p className="text-gray-500 text-sm">Custom Dashboards | Real-time KPIs</p>
                  </div>
                </div>
                <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Custom dashboards and reporting tools for smarter, data-driven decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Configurable dashboards and KPIs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time performance tracking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Exportable compliance reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Data-driven insights</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 group-hover:scale-105 transition-all duration-300">
                  <Link href="/solutions/analytics" className="flex items-center justify-center">
                    Request Analytics Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 gradient-mesh animate-rotate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-500"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Experience the
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Full Platform
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            See how all four solutions work together to transform your incident response capabilities and drive operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact">Schedule Comprehensive Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}