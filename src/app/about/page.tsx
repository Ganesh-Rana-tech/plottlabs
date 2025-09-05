import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Shield, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforming
            </span>
            <br />
            <span className="text-foreground">Public Safety Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Plott Labs is revolutionizing incident response with cloud-native solutions designed specifically for modern public safety agencies.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We empower public safety agencies with enterprise-grade, cloud-native incident response solutions that replace legacy systems with modern, integrated platforms. Our mission is to enhance emergency response capabilities while reducing operational complexity and costs for agencies of all sizes.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver measurable improvements in response times, operational efficiency, and cost savings for every agency we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Customer Inspiration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our customers inspire us daily. Their dedication to public safety drives us to continuously innovate and exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain the highest standards of security, reliability, and transparency in all our products and interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work closely with our customers as partners, ensuring our solutions meet their unique operational requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded by a team of technology innovators and public safety professionals, Plott Labs emerged from a simple observation: emergency response technology was decades behind the modern world.
                </p>
                <p>
                  We witnessed agencies struggling with legacy dispatch systems that were expensive to maintain, difficult to integrate, and limiting their ability to serve their communities effectively. This challenge became our opportunity.
                </p>
                <p>
                  Today, Plott Labs stands as a leading innovator in the public safety technology space, replacing outdated dispatch and mapping systems across the United States with modern, cloud-native solutions that empower agencies to do more with less.
                </p>
                <p>
                  Our integrated platform of CAD, mapping, mobile, and analytics tools represents the future of incident response technology—secure, scalable, and built for the demands of modern public safety operations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg border shadow-xl bg-white p-6">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      2019
                    </div>
                    <p className="text-lg font-semibold text-muted-foreground">Founded</p>
                    <p className="text-sm text-muted-foreground mt-2">Revolutionizing public safety technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Innovation at Our Core</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We&apos;re not just replacing old systems—we&apos;re reimagining how public safety technology should work in the modern world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Cloud-Native Architecture</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Enterprise Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">DoD</div>
              <div className="text-sm text-muted-foreground">Security Standards</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">The Future of Public Safety is Here</h3>
            <p className="text-muted-foreground mb-6">
              Join the agencies already transforming their operations with Plott Labs' next-generation incident response platform.
            </p>
            <Button size="lg">
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}