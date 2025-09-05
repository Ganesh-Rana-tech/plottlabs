"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Shield, MapPin, Smartphone, BarChart3, Users, Clock, Award, CheckCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const solutions = [
    {
      name: "CAD",
      title: "Computer-Aided Dispatch",
      description: "Streamline dispatch operations with real-time incident management",
      href: "/solutions/cad",
      icon: Shield,
      color: "blue"
    },
    {
      name: "Map",
      title: "Mapping Platform",
      description: "Visualize incidents and hazards with real-time data overlays",
      href: "/solutions/map",
      icon: MapPin,
      color: "purple"
    },
    {
      name: "Mobile",
      title: "Mobile Application",
      description: "Extend CAD and Map functionality to field personnel",
      href: "/solutions/mobile",
      icon: Smartphone,
      color: "cyan"
    },
    {
      name: "Analytics",
      title: "Analytics & Reporting",
      description: "Transform data into actionable insights and reports",
      href: "/solutions/analytics",
      icon: BarChart3,
      color: "green"
    }
  ];

  const aboutMenuItems = [
    {
      name: "Company Overview",
      title: "Company Overview",
      description: "Mission, Story, and Core Values",
      href: "/about",
      icon: Users,
      color: "blue"
    },
    {
      name: "Leadership",
      title: "Leadership",
      description: "Meet our expert leadership team",
      href: "/about#leadership",
      icon: Users,
      color: "purple"
    },
    {
      name: "Innovation Timeline",
      title: "Innovation Timeline",
      description: "Our journey of continuous innovation",
      href: "/about#timeline",
      icon: Clock,
      color: "cyan"
    },
    {
      name: "Certifications & Trust",
      title: "Certifications & Trust",
      description: "Security standards and compliance",
      href: "/about#certifications",
      icon: Award,
      color: "green"
    },
    {
      name: "Why Plott Labs",
      title: "Why Plott Labs",
      description: "Compare us to legacy systems",
      href: "/about#comparison",
      icon: CheckCircle,
      color: "blue"
    }
  ];

  const navigation = [
    { name: "OneNet Cloud", href: "/onenet" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Pricing", href: "/pricing" },
  ];

  const getIconColorClass = (color: string) => {
    const colorMap = {
      blue: "text-blue-500",
      purple: "text-purple-500",
      cyan: "text-cyan-500",
      green: "text-green-500"
    };
    return colorMap[color as keyof typeof colorMap] || "text-blue-500";
  };

  const getBgColorClass = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50",
      purple: "bg-purple-50",
      cyan: "bg-cyan-50",
      green: "bg-green-50"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-50";
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
      aboutTimeoutRef.current = null;
    }
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (aboutTimeoutRef.current) {
        clearTimeout(aboutTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="relative">
                <Image
                  src="/images/logos/plottlabs-logo.png"
                  alt="Plott Labs"
                  width={140}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Solutions Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href="/solutions"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Dropdown Menu */}
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2">
                      <div className="grid grid-cols-1 gap-1">
                        {solutions.map((solution) => {
                          const Icon = solution.icon;
                          return (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                            >
                              <div className={`w-10 h-10 ${getBgColorClass(solution.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <Icon className={`w-5 h-5 ${getIconColorClass(solution.color)}`} />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover/item:text-gray-900">
                                  {solution.title}
                                </div>
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                  {solution.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <Link 
                  href="/about"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Dropdown Menu */}
                {isAboutOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2">
                      <div className="grid grid-cols-1 gap-1">
                        {aboutMenuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                            >
                              <div className={`w-10 h-10 ${getBgColorClass(item.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <Icon className={`w-5 h-5 ${getIconColorClass(item.color)}`} />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover/item:text-gray-900">
                                  {item.title}
                                </div>
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            {/* Mobile Solutions Menu */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Solutions
              </div>
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <Link
                    key={solution.name}
                    href={solution.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className={`w-4 h-4 ${getIconColorClass(solution.color)}`} />
                    <span>{solution.title}</span>
                  </Link>
                );
              })}
              <Link
                href="/solutions"
                className="block px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                View All Solutions
              </Link>
            </div>

            {/* Mobile About Menu */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                About
              </div>
              {aboutMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className={`w-4 h-4 ${getIconColorClass(item.color)}`} />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>

            {/* Other Mobile Navigation */}
            <div className="pt-2 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 pb-2">
              <Button className="w-full" size="sm">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;