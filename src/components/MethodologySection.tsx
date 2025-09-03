import React from 'react';
import { useInView } from '@/hooks/useInView';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const MethodologySection: React.FC = () => {
  const [methodologyRef, methodologyInView] = useInView();

  return (
    <section 
      id="methodology"
      ref={methodologyRef}
      className={`relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${
        methodologyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Strategic Approach
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver transformation through our proven four-phase methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Discovery & Assessment",
              description: "Deep analysis of current operations and strategic objectives",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              )
            },
            {
              title: "Solution Architecture",
              description: "Custom AI strategy design aligned with business goals",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              )
            },
            {
              title: "Implementation",
              description: "Seamless deployment with minimal operational disruption",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              )
            },
            {
              title: "Optimization",
              description: "Continuous improvement and measurable ROI delivery",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              )
            }
          ].map((phase, index) => (
            <Card 
              key={phase.title}
              className="group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                opacity: 0
              }}
            >
              <CardHeader className="pb-4 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-400 transition-transform duration-300 transform group-hover:scale-110">
                    {phase.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                  {phase.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-400 leading-relaxed mt-3">
                  {phase.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
