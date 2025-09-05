import { useInView } from "@/hooks/useInView";
import { SidiqiLogo } from "@/components/SidiqiLogo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye } from "lucide-react";
import React, { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { MethodologySection } from "@/components/MethodologySection";
import { track } from "@/lib/analytics";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [methodologyRef, methodologyInView] = useInView();
  const [projectsRef, projectsInView] = useInView();
const [contactRef, contactInView] = useInView();
  const [embedVisible, setEmbedVisible] = useState<Record<string, boolean>>({});
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleEmbedToggle = (slug: string) => {
    setEmbedVisible((prev) => {
      const next = { ...prev, [slug]: !prev[slug] };
      track("ProjectEmbedToggle", { slug, visible: next[slug] });
      return next;
    });
  };

  return (
    <>
      {/* Hero Section */}

      <section
        id="home"
        ref={heroRef}
        className={`relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${
          prefersReducedMotion ? "" : "transition-all duration-1000"
        } ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <SidiqiLogo size="xl" className="transform hover:scale-110 transition-transform duration-500" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sidiqi.ai
                </div>
                <p className="text-lg text-gray-400 mt-2 font-medium">
                  Enterprise-Level Solutions for Growing Restaurant Chains
                </p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Fortune 500 Operations Expertise for Growing Restaurant Chains
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
              Our team has implemented operations technology for McDonald's, UnitedHealth Group, and other Fortune 500 brands. Now we bring that same expertise to 10-50 location restaurant chains—at a fraction of enterprise consulting costs.
            </p>
            
            {/* Hero Bullets */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-lg text-gray-400 max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Enterprise-grade systems at small business prices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Fortune 500 processes, fast implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Expert-level consulting with hands-on support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:strategy@sidiqi.ai?subject=Strategy Call Request">Book Strategy Call</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 px-8 py-6 text-lg rounded-2xl transition-all duration-300"
                asChild
              >
                <a href="#solutions">See Enterprise Solutions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* About & Mission Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${
          prefersReducedMotion ? "" : "transition-all duration-1000"
        } ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Sidiqi.ai
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fortune 500 Operations Expertise for Growing Restaurant Chains
            </p>
          </div>
          
          <div className="space-y-10 text-left">
            {/* Opening Section */}
            <div className="text-lg text-gray-300 leading-relaxed">
              <p>
                Sidiqi.ai brings Fortune 500 restaurant operations expertise to growing chains that can't afford enterprise consulting but need enterprise-level results.
              </p>
              <p className="mt-4">
                Founded by consultants who implemented operations technology for McDonald's, UnitedHealth Group, and other major brands, we bridge the gap between expensive enterprise consulting and inadequate small business solutions.
              </p>
            </div>

            {/* Our Background */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Our Background</h3>
              <div className="text-lg text-gray-300 leading-relaxed">
                <p>
                  Our team has spent years implementing the systems that power billion-dollar restaurant brands. We've seen what works at Fortune 500 scale—and what doesn't. Now we adapt those proven systems for 10-50 location restaurant chains.
                </p>
              </div>
            </div>

            {/* Why Growing Chains Choose Us */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Why Growing Chains Choose Us</h3>
              <div className="text-lg text-gray-300 leading-relaxed space-y-3">
                <p>
                  <strong className="text-blue-400">Enterprise expertise without enterprise minimums:</strong> Access to Fortune 500-level consulting without the typical million-dollar engagements.
                </p>
                <p>
                  <strong className="text-blue-400">McDonald's-level systems sized for your business:</strong> The same operational excellence that powers global brands, tailored for growing chains.
                </p>
                <p>
                  <strong className="text-blue-400">Implementation in weeks, not years:</strong> Fast deployment of proven systems that start delivering results immediately.
                </p>
                <p>
                  <strong className="text-blue-400">Founder-level attention on every project:</strong> Direct access to senior consultants, not junior analysts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        ref={projectsRef}
        className={`relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${
          prefersReducedMotion ? "" : "transition-all duration-1000"
        } ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Enterprise Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              <strong className="text-blue-400">Specializing in Restaurant Operations</strong> with proven expertise across healthcare practices and growing enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project: Project) => (
              <ProjectCard
                key={project.slug}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <MethodologySection />

          
      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${
          prefersReducedMotion ? "" : "transition-all duration-1000"
        } ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Book Strategy Call</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your operations and drive measurable growth? Let's discuss your strategic objectives and operational challenges.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="mailto:strategy@sidiqi.ai?subject=Strategy Call Request">Book Strategy Call</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
