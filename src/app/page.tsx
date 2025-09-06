import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Smartphone, BarChart3, CheckCircle, Users, Clock, Lock, TabletSmartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-pink-400/60 rounded-full animate-particle-float delay-700"></div>
        <div className="absolute bottom-40 right-60 w-4 h-4 bg-green-400/60 rounded-full animate-particle-float delay-300"></div>

        {/* Main gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 animate-fade-in-up text-white drop-shadow-2xl">
            Enterprise-Grade
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-500 drop-shadow-lg">
            Delivered in the Cloud and built for mission-critical environments. Our platform is FedRAMP-authorized and JITC-certified, designed to meet DISA compliance criteria for federal, state, and military deployments. Simplify dispatch operations with our integrated CAD, Mapping, Mobile, and Analytics solutions—engineered to deliver secure, scalable performance for the modern era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up delay-700">
            <Button size="lg" className="text-base px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-2xl shadow-lg animate-glow">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-5 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>

          {/* Modern Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto animate-scale-in delay-1000">
            <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl">
              <div className="aspect-video bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                <div className="text-center relative z-10">
                  <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto mb-6">
                    <div className="glass rounded-xl p-4 hover:scale-110 transition-transform duration-300 animate-float">
                      <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">CAD System</p>
                    </div>
                    <div className="glass rounded-xl p-4 hover:scale-110 transition-transform duration-300 animate-float delay-200">
                      <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">Live Mapping</p>
                    </div>
                    <div className="glass rounded-xl p-4 hover:scale-110 transition-transform duration-300 animate-float delay-400">
                      <Smartphone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">Mobile Access</p>
                    </div>
                    <div className="glass rounded-xl p-4 hover:scale-110 transition-transform duration-300 animate-float delay-600">
                      <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">Analytics</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-white/80">Unified Command Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Highlights */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>

        {/* Background particles */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400/40 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-particle-float delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              One Unified Platform.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Four Core Tools.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your entire incident response workflow with our integrated suite of enterprise solutions designed for the modern era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-100 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Shield className="w-8 h-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Dispatch Smarter</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Advanced CAD system with real-time resource allocation</p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <MapPin className="w-8 h-8 text-purple-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">See Everything</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Real-time mapping with aerial overlays and live data</p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Smartphone className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">Mobile-First Access</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Field tools that sync seamlessly with dispatch</p>
              </div>
            </div>

            <div className="glass border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-400 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <BarChart3 className="w-8 h-8 text-green-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">Analytics That Drive Action</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Configurable dashboards and on-demand reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builder Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Military-Grade Security.<br />
                Enterprise-Level Reliability.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built on DoD-level security frameworks and validated against DISA STIGs, our cloud-native platform meets the highest standards of FedRAMP authorization and JITC certification. This ensures the reliability, resilience, and compliance your agency demands—whether operating locally, nationally, or globally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3 animate-fade-in-up delay-100 group">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-green-600 transition-colors duration-300">SaaS-First Architecture</h3>
                    <p className="text-sm text-muted-foreground">Cloud-native design for maximum scalability and resilience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-up delay-200 group">
                  <Lock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">DoD-Level Security</h3>
                    <p className="text-sm text-muted-foreground">Military-grade encryption with FedRAMP and JITC validation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-up delay-300 group">
                  <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-purple-600 transition-colors duration-300">Rapid Deployment</h3>
                    <p className="text-sm text-muted-foreground">Get operational in weeks, not months, without compromising compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-up delay-400 group">
                  <Users className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold group-hover:text-cyan-600 transition-colors duration-300">For All Agencies</h3>
                    <p className="text-sm text-muted-foreground">Affordable, secure solutions tailored to every agency size.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <Link href="/contact">Schedule Your Demo</Link>
              </Button>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="rounded-lg border shadow-xl bg-white p-6 hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transform">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-md flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  <div className="text-center relative z-10">
                    <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 group">
                        <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:animate-pulse" />
                        <p className="text-xs font-medium">CAD</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 group">
                        <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:animate-pulse" />
                        <p className="text-xs font-medium">Map</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 group">
                        <Smartphone className="w-8 h-8 text-cyan-600 mx-auto mb-2 group-hover:animate-pulse" />
                        <p className="text-xs font-medium">Mobile</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 group">
                        <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:animate-pulse" />
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

      {/* Testimonials & Logos */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Leading Agencies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing network of agencies transforming their operations with Plott Labs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="glass rounded-2xl p-8 border border-white/10 animate-fade-in-left flex flex-col h-full">
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed flex-grow">
                "Carroll County E-911 recently selected the OneNet system after evaluating several other CAD products. We found OneNet to be the best fit for our center's operational needs. We were particularly impressed with the intuitive screen layout and how easy it is to input call information as service requests come in. The Fast Path option simplifies the process of logging responders on and off, allowing us to manage units quickly and efficiently. Everything we need is literally at our fingertips."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Donna Windsor</p>
                  <p className="text-gray-400 text-sm">Assistant Director of Carroll County E-911</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-white/10 animate-fade-in-right delay-200 flex flex-col h-full">
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed flex-grow">
                "We've had a great experience with the OneNet product. It's intuitive and user-friendly, making it easy for our team to get up to speed quickly. The support team has been outstanding—timely, attentive, and always willing to go the extra mile to help. Everyone we've interacted with has been professional, accommodating, and genuinely great to work with. Highly recommend this solution for anyone looking for a reliable, well-supported CAD platform."
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Elizabeth Pierson</p>
                  <p className="text-gray-400 text-sm">ENP, Director of Carroll County E911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400/40 rounded-full animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Platform Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our integrated suite transforms every aspect of incident response
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {/* CAD System */}
              <div className="group animate-fade-in-up">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer-Aided Dispatch</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Advanced dispatch system with real-time incident management and intelligent resource allocation.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Real-time incident management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">ProQA certified protocols</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Intelligent resource allocation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mapping */}
              <div className="group animate-fade-in-up delay-200">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Mapping</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Advanced mapping with live incident visualization and comprehensive overlays.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Live incident visualization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Hazard and weather overlays</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Aerial imagery integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="group animate-fade-in-up delay-400">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">Comprehensive analytics with custom dashboards and real-time performance insights.</p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Custom dashboard creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Real-time performance KPIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Exportable compliance reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Mobile App */}
              <div className="group animate-fade-in-up delay-600">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Application</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Browser-based mobile access designed for supervisors and command staff.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Cross-device browser access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Supervisor & command staff focused</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Quick situational awareness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Handheld App */}
              <div className="group animate-fade-in-up delay-800">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <TabletSmartphone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Handheld Application</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">Native field-ready app optimized for ruggedized handhelds and offline operations.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Ruggedized handheld optimized</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Connected or offline environments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fast field data entry</span>
                      </li>
                    </ul>
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
            Ready to Transform Your Agency's
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Incident Response?
            </span>
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            Join leading agencies already transforming their operations with our enterprise-grade SaaS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
              <Link href="/contact">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
