import { useEffect, useState, RefCallback } from "react";

export function useInView(options: IntersectionObserverInit = {}): [RefCallback<HTMLElement>, boolean] {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(!!entry && entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-100px",
        ...options,
      }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, inView];
}
