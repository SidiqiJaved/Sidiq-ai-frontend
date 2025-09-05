import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React from "react";
import type { Project } from "@/types/project";

export type ProjectCardProps = Project;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  tags,
  usageDetail,
  pricingDetail,
}) => (
  <Card className="group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4 hover:bg-gray-800/50 p-8 rounded-3xl flex flex-col h-full">
    <CardHeader className="pb-4 text-center">
      <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-4">
        {title}
      </CardTitle>
      <CardDescription className="text-lg text-gray-400 leading-relaxed line-clamp-2">
        {summary}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-400/20 group-hover:border-blue-400/50 transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex-grow" />
      {/* Enterprise Details */}
      <div className="text-center mb-8">
        {usageDetail && (
          <p className="text-lg text-blue-400 mb-2 transition-colors group-hover:text-blue-300">
            {usageDetail.split('**').map((part, i) => 
              i % 2 === 0 ? part : <span key={i} className="font-semibold">{part}</span>
            )}
          </p>
        )}
        {pricingDetail && (
          <p className="text-gray-400 text-sm">
            {pricingDetail}
          </p>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        {/* Primary CTA */}
        <Button
          asChild
          className="w-full bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 border-0 rounded-xl py-6 text-lg transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-blue-500/40"
          size="lg"
        >
          <a href="mailto:strategy@sidiqi.ai?subject=Strategy Call Request" className="flex items-center justify-center">
            Book Strategy Call <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
        
        {/* Secondary CTA */}
        <Button
          asChild
          variant="outline"
          className="w-full border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-800/50 rounded-xl py-4 text-base transition-all duration-300"
          size="lg"
        >
          <a href="/case-study.pdf" className="flex items-center justify-center">
            Download Case Study <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);
