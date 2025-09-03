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
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sidiqi.ai
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              AI Solutions That Scale Your Business Operations
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Purpose-built platforms for restaurant chains, healthcare practices, and growing enterprises
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0 transform hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href="mailto:strategy@sidiqi.ai?subject=Strategy Call Request">Schedule Strategy Call</a>
            </Button>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Where Technology Meets Business Innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 p-8 rounded-3xl transition-all duration-500">
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors">Our Mission</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    To transform enterprise operations through strategic AI implementation and drive sustainable competitive advantage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 p-8 rounded-3xl transition-all duration-500">
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors">Our Vision</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Leading the next generation of business transformation where AI creates measurable impact and operational excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <MethodologySection />

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
              Strategic AI consulting and implementation services designed to transform industry operations and create sustainable competitive advantage.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Schedule Strategic Consultation</h2>
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
              <a href="mailto:contact@sidiqi.ai">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
