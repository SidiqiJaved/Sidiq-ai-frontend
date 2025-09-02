import { useInView } from "@/hooks/useInView";
import { SidiqiLogo } from "@/components/SidiqiLogo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye } from "lucide-react";
import React, { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { track } from "@/lib/analytics";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView();
  const [aboutRef, aboutInView] = useInView();

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
        {/* ...SVG background and hero content, same as original... */}
        {/* Prominent Logo */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <SidiqiLogo size="xl" />
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sidiqi.ai</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Practical AI Solutions for
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block mt-2">Business, Education & Healthcare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Sidiqi.ai designs and ships interactive tools that solve real-world challenges.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0" asChild>
            <a href="/projects">View Projects</a>
          </Button>
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
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <SidiqiLogo size="xl" />
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Where Technology Meets
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block mt-2">Business Innovation</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Sidiqi.ai creates AI-powered tools that address real-world challenges for businesses and individuals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-xl shadow-blue-500/5 p-8 rounded-3xl">
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Mission</h3>
                  <p className="text-gray-400 text-lg">
                    To empower small businesses and individuals with accessible, AI-driven tools that enhance growth, efficiency, and opportunity.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-xl shadow-purple-500/5 p-8 rounded-3xl">
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Vision</h3>
                  <p className="text-gray-400 text-lg">
                    A future where AI is seamlessly integrated into daily business and personal workflows — simple, intuitive, and impactful for everyone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* Projects Section */}
     <section
  id="projects"
  ref={projectsRef}
  className={`relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${
    prefersReducedMotion ? "" : "transition-all duration-1000"
  } ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Industry Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized AI platforms built for specific industries, designed to solve complex operational challenges at scale.
            </p>
          </div>
          <div className="flex flex-col gap-12 max-w-6xl mx-auto px-6">
            {/* Flagship Project */}
            <div className="w-full">
              {projectsData[0] && (
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <ProjectCard
                    key={projectsData[0].slug}
                    {...projectsData[0]}
                    onEmbedToggle={() => handleEmbedToggle(projectsData[0]?.slug || '')}
                    embedVisible={embedVisible[projectsData[0]?.slug || ''] || false}
                  />
                </div>
              )}
            </div>
            
            {/* Secondary Projects Row */}
            <div className="grid md:grid-cols-2 gap-12">
              {projectsData.slice(1).map((project: Project) => (
                <ProjectCard
                  key={project.slug}
                  {...project}
                  onEmbedToggle={() => handleEmbedToggle(project.slug)}
                  embedVisible={embedVisible[project.slug] || false}
                />
              ))}
            </div>
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Have a project in mind or want to learn more about our AI solutions? Let's talk about how we can help.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0">
            <a href="mailto:contact@sidiqi.ai">Contact Us</a>
          </Button>
        </div>
      </section>
    </>
  );
};
