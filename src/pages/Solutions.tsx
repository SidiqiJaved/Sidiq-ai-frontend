import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { track } from "@/lib/analytics";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export const Solutions: React.FC = () => {
  const [embedVisible, setEmbedVisible] = useState<Record<string, boolean>>({});
  const projects = projectsData as Project[];

  const handleEmbedToggle = (slug: string) => {
    setEmbedVisible((prev) => {
      const next = { ...prev, [slug]: !prev[slug] };
      track("SolutionEmbedToggle", { slug, visible: next[slug] });
      return next;
    });
  };

  return (
    <section className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">Enterprise Solutions</h1>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Strategic AI consulting and implementation services designed to transform industry operations and create sustainable competitive advantage.
        </p>
        
        <div className="grid gap-12">
          {projects.map((project) => (
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
  );
};
