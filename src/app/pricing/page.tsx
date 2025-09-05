import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, MapPin, Smartphone, BarChart3 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small agencies getting started",
      price: "Contact for pricing",
      features: [
        "Basic CAD functionality",
        "Standard mapping features",
        "Mobile app access",
        "Basic analytics dashboard",
        "Email support",
        "Up to 25 users",
        "99.5% uptime SLA"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced features for growing agencies",
      price: "Contact for pricing",
      features: [
        "Full CAD suite with ProQA certification",
        "Advanced mapping with aerial overlays",
        "Full mobile synchronization",
        "Custom analytics & reporting",
        "Phone & email support",
        "Up to 100 users",
        "99.9% uptime SLA",
        "API integrations",
        "Custom workflows"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete solution for large operations",
      price: "Contact for pricing",
      features: [
        "Enterprise CAD with full customization",
        "Premium mapping with real-time data",
        "Advanced mobile features",
        "Full analytics suite with custom dashboards",
        "24/7 dedicated support",
        "Unlimited users",
        "99.99% uptime SLA",
        "Full API access",
        "Custom integrations",
        "On-premises deployment options",
        "Advanced security features",
        "Compliance reporting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl">
              Flexible SaaS Pricing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x animate-fade-in-up delay-300">
              For Every Agency
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-500 drop-shadow-lg">
            Choose the plan that fits your agency's size and requirements. All plans include our core CAD, Map, Mobile, and Analytics platform.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>

        {/* Background particles */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400/40 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-particle-float delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Choose Your Plan.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Scale With Confidence.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every plan includes our complete integrated platform with enterprise-grade security and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`glass border border-white/10 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up group relative overflow-hidden ${plan.popular ? 'scale-110 border-blue-400/30' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? 'from-blue-500/10 to-purple-500/10' : 'from-gray-500/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.popular ? 'from-blue-500/20 to-purple-600/20' : 'from-gray-500/20 to-gray-600/20'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    {index === 0 && <Shield className={`w-10 h-10 ${plan.popular ? 'text-blue-400' : 'text-gray-400'} group-hover:animate-pulse`} />}
                    {index === 1 && <BarChart3 className={`w-10 h-10 ${plan.popular ? 'text-blue-400' : 'text-purple-400'} group-hover:animate-pulse`} />}
                    {index === 2 && <Check className={`w-10 h-10 ${plan.popular ? 'text-blue-400' : 'text-cyan-400'} group-hover:animate-pulse`} />}
                  </div>

                  <h3 className={`text-3xl font-bold mb-3 ${plan.popular ? 'text-blue-400' : 'text-white'} group-hover:text-blue-400 transition-colors duration-300`}>{plan.name}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className={`text-4xl font-bold ${plan.popular ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' : 'text-white'} mb-2`}>
                      {plan.price}
                    </div>
                    <p className="text-sm text-gray-400">Custom quotes based on agency size</p>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full text-base px-6 py-6 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl animate-glow' : 'border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30"></div>
        
        {/* Background particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-particle-float delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Complete Platform Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every plan includes our full suite of integrated tools designed to transform your agency's operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CAD System */}
            <div className="group relative">
              <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-200/60 hover:border-blue-300/80 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Shield className="w-10 h-10 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Computer-Aided Dispatch
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 leading-relaxed">
                    Advanced CAD system with real-time incident management and intelligent resource allocation
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                      Real-time incident tracking
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse delay-100"></div>
                      ProQA certified protocols
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse delay-200"></div>
                      Smart resource allocation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Platform */}
            <div className="group relative">
              <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-200/60 hover:border-purple-300/80 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <MapPin className="w-10 h-10 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    Interactive Mapping
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 leading-relaxed">
                    Advanced mapping platform with aerial overlays and real-time data integration
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      Live incident visualization
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 animate-pulse delay-100"></div>
                      Aerial imagery & overlays
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 animate-pulse delay-200"></div>
                      Weather & hazard data
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Access */}
            <div className="group relative">
              <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-200/60 hover:border-cyan-300/80 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Smartphone className="w-10 h-10 text-cyan-600 group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    Mobile Application
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 leading-relaxed">
                    Field-ready mobile access with full synchronization across all devices
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                      Cross-device sync
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse delay-100"></div>
                      Offline capabilities
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse delay-200"></div>
                      Field-optimized UI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Suite */}
            <div className="group relative">
              <div className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-200/60 hover:border-green-300/80 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up delay-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <BarChart3 className="w-10 h-10 text-green-600 group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    Analytics & Reporting
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-4 leading-relaxed">
                    Comprehensive analytics with configurable dashboards and automated reporting
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Custom dashboards
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse delay-100"></div>
                      Real-time KPIs
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse delay-200"></div>
                      Compliance reports
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up delay-500">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 border border-blue-200/50">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">All features included in every plan</span>
              <Check className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pricing Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Flexible Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Choose between cloud-hosted or on-premises deployment based on your agency's requirements and security policies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cloud-hosted (standard)</li>
                  <li>• Hybrid cloud deployment</li>
                  <li>• On-premises installation</li>
                  <li>• Air-gapped networks supported</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Implementation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our implementation team ensures a smooth transition from your legacy systems to our modern platform.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data migration assistance</li>
                  <li>• Staff training programs</li>
                  <li>• Go-live support</li>
                  <li>• Ongoing technical support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <div className="gradient-mesh animate-rotate-gradient relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full blur-xl animate-float delay-500"></div>
          </div>
          <div className="relative z-10 p-8 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                Agency Operations?
              </span>
            </h3>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
              Contact our sales team for a custom quote tailored to your agency's specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
              <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-2xl font-semibold">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}