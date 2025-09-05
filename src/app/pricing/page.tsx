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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Flexible SaaS Pricing
            </span>
            <br />
            <span className="text-foreground">For Every Agency</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your agency's size and requirements. All plans include our core CAD, Map, Mobile, and Analytics platform.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <p className="text-sm text-muted-foreground mt-1">Custom quotes based on agency size</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every plan includes access to our complete integrated platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>CAD System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Full computer-aided dispatch with real-time incident management and resource allocation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Map Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Interactive mapping with aerial overlays, real-time weather, and bidirectional integration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle>Mobile Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Device-agnostic mobile application with full CAD and Map synchronization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Analytics Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Configurable dashboards and comprehensive reporting for operational insights
                </p>
              </CardContent>
            </Card>
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

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact our sales team for a custom quote tailored to your agency's specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}