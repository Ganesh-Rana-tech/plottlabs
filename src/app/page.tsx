import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Smartphone, BarChart3, CheckCircle, Users, Clock, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Enterprise-Grade
            </span>
            <br />
            <span className="text-foreground">Incident Response</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Delivered in the Cloud. Simplify dispatch operations with our integrated CAD, Map, Mobile, and Analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
          
          {/* Mock CAD Screenshot */}
          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-lg border shadow-2xl bg-white p-2">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-muted-foreground">CAD Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One Unified Platform. Four Core Tools.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your entire incident response workflow with our integrated suite of enterprise solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Dispatch Smarter</CardTitle>
                <CardDescription>Advanced CAD system with real-time resource allocation</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>See Everything</CardTitle>
                <CardDescription>Real-time mapping with aerial overlays and live data</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Mobile-First Access</CardTitle>
                <CardDescription>Field tools that sync seamlessly with dispatch</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Analytics That Drive Action</CardTitle>
                <CardDescription>Configurable dashboards and on-demand reporting</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Builder Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Military-Grade Security.<br />
                Enterprise-Level Reliability.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built on DoD-level security frameworks, our cloud-native platform delivers the reliability and compliance your agency demands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">SaaS-First Architecture</h3>
                    <p className="text-sm text-muted-foreground">Cloud-native design for maximum scalability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">DoD-Level Security</h3>
                    <p className="text-sm text-muted-foreground">Military-grade encryption and compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Rapid Deployment</h3>
                    <p className="text-sm text-muted-foreground">Get operational in weeks, not months</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">For All Agencies</h3>
                    <p className="text-sm text-muted-foreground">Affordable solutions for every size</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Schedule Your Demo</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg border shadow-xl bg-white p-6">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-xs font-medium">CAD</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-xs font-medium">Map</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Smartphone className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                        <p className="text-xs font-medium">Mobile</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-xs font-medium">Analytics</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Modernize Your Incident Response?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading agencies already transforming their operations with Plott Labs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">Request Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
