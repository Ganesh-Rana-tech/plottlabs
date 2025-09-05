import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Network, Users, Lock, Zap, CheckCircle, Globe, Server, ArrowRight } from "lucide-react";

export default function OneNetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    OneNet Incident Response Cloud
                  </h1>
                  <p className="text-xl text-blue-600 mt-2">Unified. Secure. Interoperable.</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Simplify secure data exchange across agencies with our cloud-native platform that enables 
                seamless interoperability while maintaining the highest security standards for public safety operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Request OneNet Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/solutions">Explore Platform</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Multi-Agency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Secure Exchange</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Cloud-Native</span>
                </div>
              </div>
            </div>

            <div className="lg:order-last">
              <div className="rounded-2xl border shadow-2xl bg-white p-6">
                <div className="aspect-square bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
                  
                  {/* Cloud/Network Visual */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      {/* Central Cloud */}
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl relative">
                        <Cloud className="w-12 h-12 text-white" />
                        
                        {/* Connecting Lines */}
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
                          {/* Agency Connection Points */}
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <Shield className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <Network className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <Globe className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg font-bold text-blue-900 mb-2">OneNet Cloud</p>
                      <p className="text-sm text-blue-700">Multi-Agency Interoperability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Three Core Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OneNet transforms how agencies share critical information during emergencies and daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Unified</CardTitle>
                <CardDescription className="text-base">
                  One platform connecting all your agencies and systems seamlessly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Eliminate data silos and create a single source of truth for incident information across all participating agencies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <Lock className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl text-indigo-900">Secure</CardTitle>
                <CardDescription className="text-base">
                  Military-grade security protecting sensitive information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  End-to-end encryption, role-based access controls, and compliance with federal security standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl text-cyan-900">Interoperable</CardTitle>
                <CardDescription className="text-base">
                  Seamless integration with existing systems and protocols
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with legacy systems, modern platforms, and future technologies through standard APIs and protocols.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Exchange Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Data Exchange Capabilities</h2>
            <p className="text-xl text-gray-600">
              Enable real-time information sharing while maintaining security and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Real-Time Data Sync</CardTitle>
                <CardDescription>
                  Instant synchronization of incident data across all connected agencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Live incident updates</li>
                  <li>• Resource status sharing</li>
                  <li>• Cross-agency coordination</li>
                  <li>• Automated data routing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Role-Based Access Control</CardTitle>
                <CardDescription>
                  Granular permissions ensuring right people access right information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Agency-specific permissions</li>
                  <li>• Incident-level access control</li>
                  <li>• Audit trail logging</li>
                  <li>• Dynamic permission updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>API-First Architecture</CardTitle>
                <CardDescription>
                  Connect existing systems without disrupting current operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• RESTful API integration</li>
                  <li>• Legacy system bridges</li>
                  <li>• Custom data mappers</li>
                  <li>• Standard protocol support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Agency Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Transform Multi-Agency Operations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Break down information barriers and enable seamless collaboration between 
                police, fire, EMS, and other emergency response agencies.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Enhanced Coordination</h3>
                    <p className="text-gray-600">Real-time visibility into all agency operations enables better resource allocation and faster response times.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Maintained Security</h3>
                    <p className="text-gray-600">Share information securely while maintaining each agency's data sovereignty and compliance requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Simplified Integration</h3>
                    <p className="text-gray-600">Connect existing systems without expensive overhauls or lengthy implementation timelines.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50%</div>
                  <div className="text-sm text-gray-600">Faster Response Coordination</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Data Security Uptime</div>
                </div>
              </div>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Connect Your Agencies?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience seamless, secure data exchange across your multi-agency operations with OneNet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Request OneNet Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/solutions">Explore Platform Integration</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}