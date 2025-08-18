import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { track } from "@/lib/analytics";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export const Projects: React.FC = () => {
  const [embedVisible, setEmbedVisible] = useState<Record<string, boolean>>({});
  const projects = projectsData as Project[];

  const handleEmbedToggle = (slug: string) => {
    setEmbedVisible((prev) => {
      const next = { ...prev, [slug]: !prev[slug] };
      track("ProjectEmbedToggle", { slug, visible: next[slug] });
      return next;
    });
  };

  return (
    <section className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interactive AI-powered tools designed to streamline workflows and enhance productivity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
              embedVisible={!!embedVisible[project.slug]}
              onEmbedToggle={() => handleEmbedToggle(project.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
