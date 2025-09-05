import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Network, Users, Lock, Zap, CheckCircle, Globe, Server, ArrowRight } from "lucide-react";

export default function OneNetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-purple-400/60 rounded-full animate-particle-float delay-700"></div>
        <div className="absolute bottom-40 right-60 w-4 h-4 bg-green-400/60 rounded-full animate-particle-float delay-300"></div>

        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl animate-glow">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
                    OneNet
                  </h1>
                  <p className="text-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x mt-2">
                    Unified. Secure. Interoperable.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Incident Response Cloud
              </h2>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg animate-fade-in-up delay-300">
                Simplify secure data exchange across agencies with our cloud-native platform that enables 
                seamless interoperability while maintaining the highest security standards for public safety operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up delay-500">
                <Button size="lg" className="text-base px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-lg animate-glow">
                  <Link href="/contact">Request OneNet Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-5 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <Link href="/solutions">Explore Platform</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-300 animate-fade-in-up delay-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Multi-Agency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Secure Exchange</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cloud-Native</span>
                </div>
              </div>
            </div>

            <div className="lg:order-last animate-scale-in delay-1000">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl p-6">
                <div className="aspect-square bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  
                  {/* Cloud/Network Visual */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      {/* Central Cloud */}
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl relative animate-float">
                        <Cloud className="w-12 h-12 text-white" />
                        
                        {/* Connecting Lines */}
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
                          {/* Agency Connection Points */}
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-200 hover:scale-110 transition-transform duration-300">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-400 hover:scale-110 transition-transform duration-300">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-600 hover:scale-110 transition-transform duration-300">
                            <Network className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-800 hover:scale-110 transition-transform duration-300">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xl font-semibold text-white/90 mb-2">OneNet Cloud</p>
                      <p className="text-sm text-white/70">Multi-Agency Interoperability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-900/10"></div>

        {/* Background particles */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-indigo-400/40 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-particle-float delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Built on Three
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Core Principles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              OneNet transforms how agencies share critical information during emergencies and daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-100 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Network className="w-10 h-10 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Unified</h3>
                <p className="text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  One platform connecting all your agencies and systems seamlessly
                </p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Eliminate data silos and create a single source of truth for incident information across all participating agencies.
                </p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Lock className="w-10 h-10 text-indigo-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">Secure</h3>
                <p className="text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Military-grade security protecting sensitive information
                </p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  End-to-end encryption, role-based access controls, and compliance with federal security standards.
                </p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Globe className="w-10 h-10 text-cyan-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Interoperable</h3>
                <p className="text-base text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Seamless integration with existing systems and protocols
                </p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Connect with legacy systems, modern platforms, and future technologies through standard APIs and protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Exchange Features */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Secure Data Exchange Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enable real-time information sharing while maintaining security and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real-Time Data Sync Card - Enhanced */}
            <div className="glass bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-left group relative overflow-hidden">
              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

              
              {/* Sync Wave Animation */}
              <div className="absolute top-6 left-6 w-8 h-8 border-2 border-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
              <div className="absolute top-6 left-6 w-12 h-12 border-2 border-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-500"></div>
              <div className="absolute top-6 left-6 w-16 h-16 border border-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-800"></div>
              
              {/* Data Flow Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-1/3 left-1/4 w-12 h-px bg-gradient-to-r from-blue-400 to-transparent animate-pulse delay-300"></div>
                <div className="absolute top-2/3 right-1/4 w-12 h-px bg-gradient-to-l from-blue-400 to-transparent animate-pulse delay-600"></div>
                <div className="absolute left-1/3 top-1/4 w-px h-12 bg-gradient-to-b from-blue-400 to-transparent animate-pulse delay-900"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse opacity-0 group-hover:opacity-30"></div>
                  <Zap className="w-8 h-8 text-white group-hover:animate-bounce relative z-10" />
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-blue-400/20 opacity-0 group-hover:opacity-100"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Real-Time Data Sync</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Instant synchronization of incident data across all connected agencies
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Live incident updates</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Resource status sharing</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-300">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Cross-agency coordination</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-400">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Automated data routing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Role-Based Access Control Card - Enhanced */}
            <div className="glass bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up delay-200 group relative overflow-hidden">
              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl transform -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 animate-pulse opacity-0 group-hover:opacity-30"></div>
                  <Shield className="w-8 h-8 text-white group-hover:animate-pulse relative z-10" />
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-indigo-400/20 opacity-0 group-hover:opacity-100"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">Role-Based Access Control</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Granular permissions ensuring right people access right information
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Agency-specific permissions</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Incident-level access control</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-300">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Audit trail logging</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-400">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Dynamic permission updates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* API-First Architecture Card - Enhanced */}
            <div className="glass bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-right delay-400 group relative overflow-hidden">
              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Network Grid Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 w-px h-8 bg-green-400 animate-pulse delay-200"></div>
                <div className="absolute top-1/4 left-1/4 w-8 h-px bg-green-400 animate-pulse delay-400"></div>
                <div className="absolute bottom-1/4 right-1/4 w-px h-8 bg-green-400 animate-pulse delay-600"></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-px bg-green-400 animate-pulse delay-800"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 animate-pulse opacity-0 group-hover:opacity-30"></div>
                  <Server className="w-8 h-8 text-white group-hover:animate-spin relative z-10" style={{animationDuration: '2s'}} />
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-green-400/20 opacity-0 group-hover:opacity-100"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">API-First Architecture</h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Connect existing systems without disrupting current operations
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">RESTful API integration</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Legacy system bridges</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-300">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Custom data mappers</span>
                  </li>
                  <li className="flex items-center transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-400">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
                    <span className="group-hover:text-gray-700 transition-colors duration-300">Standard protocol support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agency Benefits */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Transform Multi-Agency Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Break down information barriers and enable seamless collaboration between 
                police, fire, EMS, and other emergency response agencies.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 animate-fade-in-up delay-100 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Enhanced Coordination</h3>
                    <p className="text-muted-foreground">Real-time visibility into all agency operations enables better resource allocation and faster response times.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up delay-200 group">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Maintained Security</h3>
                    <p className="text-muted-foreground">Share information securely while maintaining each agency's data sovereignty and compliance requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up delay-300 group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Network className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Simplified Integration</h3>
                    <p className="text-muted-foreground">Connect existing systems without expensive overhauls or lengthy implementation timelines.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-blue-200/50">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600">Faster Response Coordination</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-indigo-200/50">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Data Security Uptime</div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <Link href="/contact">Schedule Your Demo</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl border shadow-xl p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    {/* Network Diagram */}
                    <div className="relative w-48 h-48">
                      {/* Central Hub */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <Cloud className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Agency Nodes */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-md">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
                        <Zap className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-md">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-md">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      
                      {/* Connection Lines */}
                      <div className="absolute inset-0">
                        <svg className="w-full h-full">
                          <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4" />
                          <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4" />
                          <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4" />
                          <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-lg font-semibold text-blue-900 mt-4">Multi-Agency Network</p>
                    <p className="text-sm text-blue-700">Secure Data Exchange</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-mesh animate-rotate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-500"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Ready to Connect Your
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent block">
              Agencies?
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Experience seamless, secure data exchange across your multi-agency operations with OneNet.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact">Request OneNet Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/solutions">Explore Platform Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}