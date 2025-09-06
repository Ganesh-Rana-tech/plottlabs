'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  Play, 
  Calendar, 
  Clock, 
  FileText, 
  Video, 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Shield, 
  Cloud, 
  Zap, 
  CheckCircle, 
  Star,
  ExternalLink,
  Filter,
  Search
} from "lucide-react";
import { useState, useEffect } from "react";

export function ResourcesClient() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600", 
      cyan: "from-cyan-500 to-cyan-600",
      green: "from-green-500 to-green-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const filters = [
    { id: 'all', label: 'All', count: 18 },
    { id: 'blog', label: 'Blog', count: 8 },
    { id: 'whitepapers', label: 'Whitepapers', count: 5 },
    { id: 'videos', label: 'Videos', count: 5 }
  ];

  const blogArticles = [
    {
      id: 1,
      title: "Cloud CAD: Transforming Emergency Response",
      excerpt: "How cloud-native Computer-Aided Dispatch systems are revolutionizing emergency response times and operational efficiency.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "blog",
      image: "cloud-cad",
      color: "blue",
      featured: true
    },
    {
      id: 2,
      title: "SaaS vs On-Premise: The Future of Public Safety Tech",
      excerpt: "A comprehensive analysis of why agencies are moving to cloud-based solutions for better scalability and security.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "blog",
      image: "saas-comparison",
      color: "purple"
    },
    {
      id: 3,
      title: "Multi-Agency Coordination in Crisis Situations",
      excerpt: "Best practices for seamless information sharing between police, fire, and EMS during major incidents.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "blog",
      image: "multi-agency",
      color: "cyan"
    },
    {
      id: 4,
      title: "Mobile-First Design for Field Personnel",
      excerpt: "Why mobile applications are critical for modern emergency response and how to design them effectively.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "blog",
      image: "mobile-design",
      color: "green"
    },
    {
      id: 5,
      title: "Data Analytics in Emergency Response",
      excerpt: "Leveraging real-time data insights to improve response times and resource allocation decisions.",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "blog",
      image: "analytics",
      color: "blue"
    },
    {
      id: 6,
      title: "Security Standards for Public Safety Software",
      excerpt: "Understanding CJIS compliance and DoD security requirements for emergency response systems.",
      date: "2023-12-15",
      readTime: "12 min read",
      category: "blog",
      image: "security",
      color: "purple"
    },
    {
      id: 7,
      title: "The ROI of Modern CAD Systems",
      excerpt: "Calculating the return on investment when upgrading from legacy dispatch systems to cloud-native solutions.",
      date: "2023-12-10",
      readTime: "5 min read",
      category: "blog",
      image: "roi-analysis",
      color: "cyan"
    },
    {
      id: 8,
      title: "Interoperability: Breaking Down Agency Silos",
      excerpt: "How open architecture and API-first design enable seamless data exchange between different emergency services.",
      date: "2023-12-05",
      readTime: "8 min read",
      category: "blog",
      image: "interoperability",
      color: "green"
    }
  ];

  const whitepapers = [
    {
      id: 1,
      title: "CAD System Modernization Guide",
      description: "A comprehensive guide to upgrading legacy Computer-Aided Dispatch systems to cloud-native solutions.",
      downloadUrl: "#",
      pages: "24 pages",
      category: "whitepapers",
      color: "blue"
    },
    {
      id: 2,
      title: "Emergency Response Cloud Architecture",
      description: "Technical deep-dive into building scalable, secure cloud infrastructure for public safety applications.",
      downloadUrl: "#",
      pages: "18 pages",
      category: "whitepapers",
      color: "purple"
    },
    {
      id: 3,
      title: "Multi-Agency Data Exchange Standards",
      description: "Best practices and technical specifications for secure information sharing between emergency services.",
      downloadUrl: "#",
      pages: "32 pages",
      category: "whitepapers",
      color: "cyan"
    },
    {
      id: 4,
      title: "Mobile Application Security Framework",
      description: "Security guidelines and implementation strategies for mobile emergency response applications.",
      downloadUrl: "#",
      pages: "20 pages",
      category: "whitepapers",
      color: "green"
    },
    {
      id: 5,
      title: "Analytics and Reporting for Public Safety",
      description: "How to leverage data analytics to improve emergency response operations and decision-making.",
      downloadUrl: "#",
      pages: "16 pages",
      category: "whitepapers",
      color: "blue"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "OneNet Platform Overview",
      description: "Complete walkthrough of our cloud-native incident response platform capabilities.",
      duration: "12:30",
      thumbnail: "onenet-demo",
      category: "videos",
      color: "blue"
    },
    {
      id: 2,
      title: "CAD System Demo",
      description: "See how our Computer-Aided Dispatch system streamlines emergency response operations.",
      duration: "8:45",
      thumbnail: "cad-demo",
      category: "videos",
      color: "purple"
    },
    {
      id: 3,
      title: "Mobile App Tutorial",
      description: "Step-by-step guide to using our mobile application for field personnel.",
      duration: "6:20",
      thumbnail: "mobile-tutorial",
      category: "videos",
      color: "cyan"
    },
    {
      id: 4,
      title: "Analytics Dashboard Walkthrough",
      description: "Learn how to interpret and use real-time analytics for better decision making.",
      duration: "10:15",
      thumbnail: "analytics-demo",
      category: "videos",
      color: "green"
    },
    {
      id: 5,
      title: "Security Features Deep Dive",
      description: "Understanding the security measures and compliance features built into our platform.",
      duration: "15:00",
      thumbnail: "security-features",
      category: "videos",
      color: "blue"
    }
  ];

  const tips = [
    {
      icon: Cloud,
      title: "Did You Know?",
      content: "Cloud-native CAD systems can reduce deployment time from months to days compared to traditional on-premise solutions.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Pro Tip",
      content: "Real-time data synchronization across agencies can improve response coordination by up to 50%.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Security Insight",
      content: "Our platform maintains DoD-level security standards while enabling seamless multi-agency collaboration.",
      color: "cyan"
    }
  ];

  const filteredContent = () => {
    if (activeFilter === 'all') {
      return [...blogArticles, ...whitepapers, ...videos];
    } else if (activeFilter === 'blog') {
      return blogArticles;
    } else if (activeFilter === 'whitepapers') {
      return whitepapers;
    } else if (activeFilter === 'videos') {
      return videos;
    }
    return [];
  };

  const featuredArticle = blogArticles.find(article => article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-mesh animate-rotate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-cyan-400/60 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-green-400/60 rounded-full animate-particle-float delay-700"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-yellow-400/50 rounded-full animate-particle-float delay-300"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-pink-400/50 rounded-full animate-particle-float delay-800"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-white/40 rounded-full animate-particle-float delay-1200"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                <span className="text-white drop-shadow-2xl block">Insights &</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                  Resources
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Stay informed with expert blogs, whitepapers, and tutorials focused on emergency response technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-200">
                  <Link href="#content">Explore Resources</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 border-white/30 text-white hover:bg-white/10 glass hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up delay-400">
                  <Link href="/contact">Get Demo</Link>
                </Button>
              </div>
            </div>
            
            {/* Illustration */}
            <div className="relative animate-fade-in-right delay-300">
              <div className="glass rounded-2xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform backdrop-blur-xl p-8">
                <div className="aspect-square bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  
                  {/* Knowledge Hub Visual */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      {/* Central Hub */}
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative animate-float">
                        <BookOpen className="w-12 h-12 text-white" />
                        
                        {/* Connecting Lines */}
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2">
                          {/* Resource Connection Points */}
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-200 hover:scale-110 transition-transform duration-300">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-400 hover:scale-110 transition-transform duration-300">
                            <Video className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-600 hover:scale-110 transition-transform duration-300">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-800 hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xl font-semibold text-white/90 mb-2">Knowledge Hub</p>
                      <p className="text-sm text-white/70">Expert Resources & Insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Knowledge Hub */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-100/30 rounded-full blur-3xl animate-float delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Explore Our Knowledge Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From blogs to whitepapers and tutorials, discover insights designed to help agencies modernize incident response.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Blog Highlights",
                description: "Expert insights on emergency response technology, best practices, and industry trends.",
                cta: "Browse Blogs",
                filter: "blog",
                color: "blue"
              },
              {
                icon: FileText,
                title: "Whitepapers",
                description: "In-depth technical guides and implementation resources for modernizing your operations.",
                cta: "View Whitepapers",
                filter: "whitepapers",
                color: "purple"
              },
              {
                icon: Video,
                title: "Videos & Tutorials",
                description: "Visual guides and platform demonstrations to help you get the most from our solutions.",
                cta: "Watch Videos",
                filter: "videos",
                color: "cyan"
              }
            ].map((hub, index) => {
              const Icon = hub.icon;
              return (
                <Card 
                  key={hub.title}
                  className={`group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 bg-white/90 backdrop-blur-sm cursor-pointer relative overflow-hidden`}
                  style={{animationDelay: `${index * 200}ms`}}
                  onClick={() => setActiveFilter(hub.filter)}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(hub.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Icon className="w-10 h-10 text-white relative z-10 group-hover:animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {hub.title}
                    </h3>
                    <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                      {hub.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      {hub.cta}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {featuredArticle && (
        <section className="py-24 gradient-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Featured Insight
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful content
              </p>
            </div>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Featured Article
                      </Badge>
                      <span className="ml-4 text-gray-300">{featuredArticle.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                      <Link href="#" className="flex items-center space-x-2">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${getColorClasses(featuredArticle.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white font-semibold">Article Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Filter Menu */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section id="content" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-100/20 rounded-full blur-2xl animate-float delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {activeFilter === 'all' ? 'All Resources' : 
               activeFilter === 'blog' ? 'Blog Articles' :
               activeFilter === 'whitepapers' ? 'Whitepapers' : 'Videos & Tutorials'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {activeFilter === 'all' ? 'Explore our comprehensive collection of insights and resources' :
               activeFilter === 'blog' ? 'Expert insights on emergency response technology and best practices' :
               activeFilter === 'whitepapers' ? 'In-depth technical guides and implementation resources' : 'Visual guides and platform demonstrations'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent().map((item, index) => (
              <Card 
                key={item.id}
                className={`group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(item.color)} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        {item.category === 'blog' && <BookOpen className="w-6 h-6 text-white group-hover:animate-bounce" />}
                        {item.category === 'whitepapers' && <FileText className="w-6 h-6 text-white group-hover:animate-bounce" />}
                        {item.category === 'videos' && <Video className="w-6 h-6 text-white group-hover:animate-bounce" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                    {'excerpt' in item ? item.excerpt : item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {item.category === 'blog' && 'readTime' in item && (
                        <>
                          <div className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                            <Clock className="w-4 h-4" />
                            <span>{item.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300 delay-100">
                            <Calendar className="w-4 h-4" />
                            <span>{'date' in item ? new Date(item.date).toLocaleDateString() : ''}</span>
                          </div>
                        </>
                      )}
                      {item.category === 'whitepapers' && 'pages' in item && (
                        <div className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                          <FileText className="w-4 h-4" />
                          <span>{item.pages}</span>
                        </div>
                      )}
                      {item.category === 'videos' && 'duration' in item && (
                        <div className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                          <Play className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      {item.category === 'whitepapers' ? (
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      ) : item.category === 'videos' ? (
                        <Play className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      ) : (
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                      {item.category === 'whitepapers' ? 'Download' : 
                       item.category === 'videos' ? 'Watch' : 'Read More'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Callouts */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-particle-float"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400/40 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-cyan-400/40 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-green-400/40 rounded-full animate-particle-float delay-800"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quick Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bite-sized tips and insights for emergency response professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card 
                  key={tip.title}
                  className={`group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-0 bg-white/10 backdrop-blur-sm relative overflow-hidden`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${getColorClasses(tip.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Icon className="w-8 h-8 text-white relative z-10 group-hover:animate-bounce" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {tip.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {tip.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-100/30 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-100/30 rounded-full blur-3xl animate-float delay-500"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-in-up">
            Want to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Need a Demo? Explore our one-on-one walkthroughs and see how Plott Labs can transform your emergency response operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:scale-105 transition-all duration-300 hover:shadow-lg group">
              <Link href="#content" className="flex items-center space-x-2">
                <span>Browse All Resources</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
