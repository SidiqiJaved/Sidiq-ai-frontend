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
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block mt-2">Business & Education</span>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-2xl shadow-blue-500/10 rounded-3xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Sidiqi.ai</h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Sidiqi.ai is where technology meets business in a practical way. We create AI-powered tools that address real-world challenges for businesses and individuals. Our focus is on transforming ideas into interactive solutions that are simple, useful, and built for impact.
                  </p>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-xl shadow-blue-500/5 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                          To empower small businesses and individuals with accessible, AI-driven tools that enhance growth, efficiency, and opportunity.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-xl shadow-purple-500/5 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                          A future where AI is seamlessly integrated into daily business and personal workflows — simple, intuitive, and impactful for everyone.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* ...AI graphic placeholder... */}
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center border border-blue-500/30 shadow-2xl shadow-blue-500/20 backdrop-blur-sm overflow-hidden">
              <SidiqiLogo size="xl" className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
              <p className="text-gray-400">Intelligent systems designed for real-world impact</p>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Interactive AI-powered tools designed to streamline workflows and enhance productivity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projectsData.map((project: Project) => (
              <ProjectCard
                key={project.slug}
                {...project}
                onEmbedToggle={() => handleEmbedToggle(project.slug)}
                embedVisible={embedVisible[project.slug] || false}
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
