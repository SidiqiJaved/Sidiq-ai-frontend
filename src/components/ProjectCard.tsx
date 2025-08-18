import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React from "react";
import type { Project } from "@/types/project";

export type ProjectCardProps = Project & {
  onEmbedToggle?: () => void;
  embedVisible?: boolean;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  tags,
  demoUrl,
  onEmbedToggle,
  embedVisible,
  embedUrl,
  repoUrl,
}) => (
  <Card className="group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4">
    <CardHeader className="pb-4">
      <div className="flex items-center space-x-3 mb-4">
        {/* Icon slot could go here if needed */}
        <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
      </div>
      <CardDescription className="text-lg text-gray-400 leading-relaxed">
        {summary}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>
      {demoUrl && (
        <Button
          asChild
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 rounded-xl border-0"
          size="lg"
        >
          <a href={demoUrl} target="_blank" rel="noopener">
            View Demo <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      )}
      {onEmbedToggle && (
        <Button
          type="button"
          aria-expanded={!!embedVisible}
          onClick={onEmbedToggle}
          className="mt-3 w-full bg-gray-800 text-white border border-gray-700 rounded-xl"
        >
          {embedVisible ? "Hide Embed" : "Embed Below"}
        </Button>
      )}
      {embedVisible && embedUrl && (
        <div className="mt-6">
          <iframe
            src={embedUrl}
            title={title + " Embed"}
            className="w-full h-64 rounded-xl border border-gray-700"
            allowFullScreen
          />
        </div>
      )}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener"
          className="block mt-4 text-sm text-blue-400 hover:underline"
        >
          View Source
        </a>
      )}
    </CardContent>
  </Card>
);
