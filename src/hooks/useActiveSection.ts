import { useEffect, useState } from "react";

const HEADER_HEIGHT = 80; // Height of your sticky header
const THRESHOLD_VALUES = [0.2, 0.4, 0.6, 0.8]; // Multiple thresholds for more accurate tracking

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Helper function to find the most visible section
    const getMostVisibleSection = (entries: IntersectionObserverEntry[]): HTMLElement | null => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          element: entry.target as HTMLElement,
          visibility: entry.intersectionRatio,
          // Calculate distance from top of viewport (accounting for header)
          distanceFromTop: Math.abs(entry.boundingClientRect.top - HEADER_HEIGHT)
        }))
        .sort((a, b) => {
          // Prioritize elements with higher visibility
          if (Math.abs(a.visibility - b.visibility) > 0.1) {
            return b.visibility - a.visibility;
          }
          // If visibility is similar, prioritize the one closer to top
          return a.distanceFromTop - b.distanceFromTop;
        });

      return visibleSections.length > 0 && visibleSections[0] ? visibleSections[0].element : null;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisibleSection = getMostVisibleSection(entries);
        if (mostVisibleSection?.id) {
          setActiveSection(mostVisibleSection.id);
        }
      },
      {
        threshold: THRESHOLD_VALUES,
        rootMargin: `-${HEADER_HEIGHT}px 0px -40% 0px`,
      }
    );

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

