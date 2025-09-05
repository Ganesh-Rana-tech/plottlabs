import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Shield, Users, CheckCircle, Award, Lightbulb, Handshake } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Plott Labs | Mission, Values & Innovation',
  description: 'Plott Labs empowers agencies with cloud-native CAD and secure response technology.',
  keywords: 'about Plott Labs, CAD provider, incident response company',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results",
      description: "We deliver measurable outcomes that transform how agencies operate and serve their communities.",
      color: "blue"
    },
    {
      icon: Lightbulb,
      title: "Customer Inspiration",
      description: "Every feature we build is inspired by real-world challenges our customers face in the field.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of security, transparency, and ethical business practices.",
      color: "cyan"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work as partners with our customers, building solutions together for shared success.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600", 
      cyan: "from-cyan-500 to-cyan-600",
      green: "from-green-500 to-green-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Mission & Vision Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-green-400/60 rounded-full animate-particle-float delay-700"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up">
            <span className="text-white drop-shadow-2xl mr-4">Our</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h1>
          <div className="glass rounded-2xl border border-white/20 p-8 mb-8 animate-scale-in delay-500">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              "Improve the safety and wellness of all people, in all communities by leveraging modern cloud technology."
            </p>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up delay-700">
            We believe that every community deserves access to the most advanced, reliable, and secure incident response technology available.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/70 backdrop-blur-sm`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(value.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Plott Labs was founded on a simple observation: emergency response agencies were being held back by legacy systems that couldn't adapt to the modern world.
                </p>
                <p>
                  While other industries embraced cloud technology, mobile-first design, and real-time data analytics, public safety agencies were still struggling with decades-old software that was difficult to use, expensive to maintain, and impossible to scale.
                </p>
                <p>
                  We saw an opportunity to revolutionize this space by building a completely modern, cloud-native platform that would give agencies the tools they deserved – tools that were as sophisticated and reliable as the people who use them.
                </p>
                <p>
                  Today, Plott Labs serves agencies across the country, helping them improve response times, enhance situational awareness, and ultimately save more lives through the power of modern technology.
                </p>
              </div>
              
              <div className="mt-10">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                  <Link href="/contact">Join Our Mission</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="glass rounded-2xl border border-white/10 p-8 space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Innovation Highlights</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Industry Recognition</h4>
                      <p className="text-gray-400 text-sm">Recognized as a leader in next-generation CAD technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Security First</h4>
                      <p className="text-gray-400 text-sm">Built with DoD-level security from the ground up</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Customer-Centric</h4>
                      <p className="text-gray-400 text-sm">Every feature built based on real user feedback</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Community Impact</h4>
                      <p className="text-gray-400 text-sm">Dedicated to improving public safety outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in-up">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Discover how Plott Labs can help your agency embrace the future of incident response.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}