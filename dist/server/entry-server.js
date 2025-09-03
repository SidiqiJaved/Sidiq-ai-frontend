import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import * as React from "react";
import React__default, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { X, Menu, ExternalLink, Target, Eye } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24"
};
const SidiqiLogo = ({ size = "md", className = "" }) => {
  return /* @__PURE__ */ jsx("div", { className: `${sizeMap[size]} ${className} relative`, children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "45", stroke: "url(#logoGradient)", strokeWidth: "2" }),
    /* @__PURE__ */ jsx("circle", { cx: "30", cy: "30", r: "4", fill: "#3b82f6", className: "animate-pulse" }),
    /* @__PURE__ */ jsx("circle", { cx: "70", cy: "30", r: "4", fill: "#8b5cf6", className: "animate-pulse", style: { animationDelay: "0.5s" } }),
    /* @__PURE__ */ jsx("circle", { cx: "50", cy: "70", r: "4", fill: "#06b6d4", className: "animate-pulse", style: { animationDelay: "1s" } }),
    /* @__PURE__ */ jsx("path", { d: "M30,30 L70,30 L50,70 Z", stroke: "url(#connectionsGradient)", strokeWidth: "2", opacity: "0.6" }),
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("linearGradient", { id: "logoGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#3b82f6" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#8b5cf6" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#06b6d4" })
      ] }),
      /* @__PURE__ */ jsxs("linearGradient", { id: "connectionsGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0.8" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#8b5cf6", stopOpacity: "0.8" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#06b6d4", stopOpacity: "0.8" })
      ] })
    ] })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-gray-800 bg-black/80 backdrop-blur-sm mt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-8", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-8", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "text-white hover:text-blue-400 transition-all duration-300", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/insights", className: "text-white hover:text-blue-400 transition-all duration-300", children: "Insights" }),
      /* @__PURE__ */ jsx("a", { href: "/labs", className: "text-white hover:text-blue-400 transition-all duration-300", children: "Labs" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: "text-white hover:text-blue-400 transition-all duration-300", children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "#methodology", className: "text-white hover:text-blue-400 transition-all duration-300", children: "Strategic Approach" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: "text-white hover:text-blue-400 transition-all duration-300", children: "Schedule Strategic Consultation" }),
      /* @__PURE__ */ jsxs("span", { className: "ml-auto flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("a", { href: "https://sg2tech.com", target: "_blank", rel: "noopener", className: "text-white hover:text-blue-400 transition-all duration-300", children: "SG2 Tech" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "·" }),
        /* @__PURE__ */ jsx("a", { href: "https://sidiqigroup.com", target: "_blank", rel: "noopener", className: "text-white hover:text-blue-400 transition-all duration-300", children: "Sidiqi Group" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mt-4", children: "Strategic AI consulting division of Sidiqi Global Group." })
  ] }) });
};
const navItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "solutions", label: "Solutions" },
  { to: "methodology", label: "Strategic Approach" },
  { to: "contact", label: "Schedule Strategic Consultation" }
];
const Layout = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.to));
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) {
        setActiveSection(current.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "dark min-h-screen bg-black text-white", children: [
    /* @__PURE__ */ jsx("nav", { className: "fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(SidiqiLogo, { size: "sm" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-white", children: "Sidiqi.ai" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "md:hidden text-white", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center space-x-8", children: navItems.map((nav) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              var _a;
              (_a = document.getElementById(nav.to)) == null ? void 0 : _a.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            },
            className: `text-white hover:text-blue-400 transition-all duration-300 relative ${activeSection === nav.to ? "text-blue-400" : ""}`,
            children: [
              nav.label,
              activeSection === nav.to && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" })
            ]
          },
          nav.to
        )) })
      ] }),
      menuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-4 flex flex-col space-y-4 px-2", children: navItems.map((nav) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            var _a;
            (_a = document.getElementById(nav.to)) == null ? void 0 : _a.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            setMenuOpen(false);
          },
          className: `text-white text-lg text-left hover:text-blue-400 transition-all duration-300 ${activeSection === nav.to ? "text-blue-400" : ""}`,
          children: nav.label
        },
        nav.to
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "pt-24", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function useInView(options = {}) {
  const [ref, setRef] = useState(null);
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
        ...options
      }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);
  return [setRef, inView];
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const ProjectCard = ({
  title,
  summary,
  tags,
  repoUrl,
  usageDetail,
  pricingDetail,
  ctaText,
  ctaUrl
}) => /* @__PURE__ */ jsxs(Card, { className: "group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4 hover:bg-gray-800/50 p-8 rounded-3xl flex flex-col h-full", children: [
  /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4 text-center", children: [
    /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-4", children: title }),
    /* @__PURE__ */ jsx(CardDescription, { className: "text-lg text-gray-400 leading-relaxed line-clamp-2", children: summary })
  ] }),
  /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col flex-grow", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center mb-6", children: tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-400/20 group-hover:border-blue-400/50 transition-all duration-300", children: tag }, tag)) }),
    /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      usageDetail && /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-400 mb-2 transition-colors group-hover:text-blue-300", children: usageDetail.split("**").map(
        (part, i) => i % 2 === 0 ? part : /* @__PURE__ */ jsx("span", { className: "font-semibold", children: part }, i)
      ) }),
      pricingDetail && /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: pricingDetail })
    ] }),
    ctaUrl && ctaText && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          className: "w-full bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 border-0 rounded-xl py-6 text-lg transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-blue-500/40",
          size: "lg",
          children: /* @__PURE__ */ jsxs("a", { href: ctaUrl, target: "_blank", rel: "noopener", className: "flex items-center justify-center", children: [
            ctaText,
            " ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" })
          ] })
        }
      ),
      repoUrl && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: repoUrl,
          target: "_blank",
          rel: "noopener",
          className: "text-sm text-gray-400 hover:text-blue-400 group-hover:text-blue-400/80 transition-colors hover:underline inline-flex items-center",
          children: [
            "View Source ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" })
          ]
        }
      ) })
    ] })
  ] })
] });
const MethodologySection = () => {
  const [methodologyRef, methodologyInView] = useInView();
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "methodology",
      ref: methodologyRef,
      className: `relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${methodologyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000`,
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-white", children: "Our Strategic Approach" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "We deliver transformation through our proven four-phase methodology" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
          {
            title: "Discovery & Assessment",
            description: "Deep analysis of current operations and strategic objectives",
            icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-12 h-12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
            ] })
          },
          {
            title: "Solution Architecture",
            description: "Custom AI strategy design aligned with business goals",
            icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8 h-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
              /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
              /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
            ] })
          },
          {
            title: "Implementation",
            description: "Seamless deployment with minimal operational disruption",
            icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8 h-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
              /* @__PURE__ */ jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
            ] })
          },
          {
            title: "Optimization",
            description: "Continuous improvement and measurable ROI delivery",
            icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-8 h-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "10" }),
              /* @__PURE__ */ jsx("line", { x1: "18", y1: "20", x2: "18", y2: "4" }),
              /* @__PURE__ */ jsx("line", { x1: "6", y1: "20", x2: "6", y2: "16" })
            ] })
          }
        ].map((phase, index) => /* @__PURE__ */ jsx(
          Card,
          {
            className: "group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 bg-gray-900/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-4",
            style: {
              animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
              opacity: 0
            },
            children: /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx("div", { className: "text-blue-400 transition-transform duration-300 transform group-hover:scale-110", children: phase.icon }) }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-white group-hover:text-blue-400 transition-colors", children: phase.title }),
              /* @__PURE__ */ jsx(CardDescription, { className: "text-lg text-gray-400 leading-relaxed mt-3", children: phase.description })
            ] })
          },
          phase.title
        )) })
      ] })
    }
  );
};
function track(event, props) {
  if (window.plausible) {
    window.plausible(event, { props });
  }
}
const projectsData = [
  {
    slug: "restaurant-operations",
    title: "Restaurant Operations Intelligence",
    summary: "AI-powered platform for restaurant chains that automates inspections, staff training, and inventory management. Streamline operations and boost efficiency across all locations.",
    tags: [
      "Staff Training",
      "Smart Inventory",
      "AI Analytics"
    ],
    demoUrl: "https://demo.sidiqi.ai/restaurant-ops",
    embedUrl: "https://demo.sidiqi.ai/restaurant-ops/embed",
    repoUrl: "https://github.com/sidiqi/restaurant-operations",
    usageDetail: "**Used by restaurant chains** with 5-500 locations",
    pricingDetail: "Custom solution designed for your operation size",
    ctaText: "Request Custom Demo",
    ctaUrl: "mailto:sales@sidiqi.ai?subject=Restaurant Operations Custom Demo Request"
  },
  {
    slug: "professional-development",
    title: "Professional Development Suite",
    summary: "AI-driven career development platform that optimizes resumes, assesses skills, and plans career pathways. Transform your organization's talent development.",
    tags: [
      "Career Intelligence",
      "Optimization",
      "Professional Growth"
    ],
    demoUrl: "https://demo.sidiqi.ai/professional-dev",
    embedUrl: "https://demo.sidiqi.ai/professional-dev/embed",
    repoUrl: "https://github.com/sidiqi/professional-development",
    usageDetail: "**Enterprise HR solution** for growing companies",
    pricingDetail: "Volume pricing available",
    ctaText: "Get Enterprise Access",
    ctaUrl: "mailto:enterprise@sidiqi.ai?subject=Professional Development Enterprise Access"
  },
  {
    slug: "healthcare-modernization",
    title: "Healthcare Modernization Platform",
    summary: "Modern healthcare platform that streamlines patient intake, optimizes scheduling, and automates follow-ups. Enhance patient care while maintaining workflow efficiency.",
    tags: [
      "Patient Intake",
      "Scheduling",
      "Follow-Ups"
    ],
    conceptUrl: "https://demo.sidiqi.ai/healthcare/concept",
    embedUrl: "https://demo.sidiqi.ai/healthcare/embed",
    repoUrl: "https://github.com/sidiqi/healthcare-platform",
    usageDetail: "**HIPAA-compliant**, enterprise-ready",
    pricingDetail: "Seamless integration with existing systems",
    ctaText: "Schedule Consultation",
    ctaUrl: "mailto:healthcare@sidiqi.ai?subject=Healthcare Platform Consultation Request"
  }
];
const Home = () => {
  const [heroRef, heroInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  useInView();
  const [projectsRef, projectsInView] = useInView();
  const [contactRef, contactInView] = useInView();
  const [embedVisible, setEmbedVisible] = useState({});
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "home",
        ref: heroRef,
        className: `relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${prefersReducedMotion ? "" : "transition-all duration-1000"} ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-4 mb-8", children: [
            /* @__PURE__ */ jsx(SidiqiLogo, { size: "xl", className: "transform hover:scale-110 transition-transform duration-500" }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent", children: "Sidiqi.ai" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto mb-8", children: "AI Solutions That Scale Your Business Operations" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 max-w-2xl mx-auto mb-12", children: "Purpose-built platforms for restaurant chains, healthcare practices, and growing enterprises" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0 transform hover:scale-105 transition-all duration-300",
              asChild: true,
              children: /* @__PURE__ */ jsx("a", { href: "mailto:strategy@sidiqi.ai?subject=Strategy Call Request", children: "Schedule Strategy Call" })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "about",
        ref: aboutRef,
        className: `relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${prefersReducedMotion ? "" : "transition-all duration-1000"} ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-white", children: "About Us" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Where Technology Meets Business Innovation" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsx(Card, { className: "group bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 p-8 rounded-3xl transition-all duration-500", children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors", children: "Our Mission" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg leading-relaxed", children: "To transform enterprise operations through strategic AI implementation and drive sustainable competitive advantage." })
            ] }) }) }),
            /* @__PURE__ */ jsx(Card, { className: "group bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 p-8 rounded-3xl transition-all duration-500", children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsx(Eye, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors", children: "Our Vision" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-lg leading-relaxed", children: "Leading the next generation of business transformation where AI creates measurable impact and operational excellence." })
            ] }) }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(MethodologySection, {}),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "solutions",
        ref: projectsRef,
        className: `relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${prefersReducedMotion ? "" : "transition-all duration-1000"} ${projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-24", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-8 text-white", children: "Enterprise Solutions" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Strategic AI consulting and implementation services designed to transform industry operations and create sustainable competitive advantage." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: projectsData.map((project) => /* @__PURE__ */ jsx(
            ProjectCard,
            {
              ...project
            },
            project.slug
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "contact",
        ref: contactRef,
        className: `relative min-h-[100vh] py-32 scroll-mt-24 flex items-center justify-center overflow-hidden ${prefersReducedMotion ? "" : "transition-all duration-1000"} ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-white", children: "Schedule Strategic Consultation" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-3xl mx-auto", children: "Ready to transform your operations and drive measurable growth? Let's discuss your strategic objectives and operational challenges." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/25 border-0 transform hover:scale-105 transition-all duration-300",
              asChild: true,
              children: /* @__PURE__ */ jsx("a", { href: "mailto:contact@sidiqi.ai", children: "Schedule Consultation" })
            }
          ) })
        ] })
      }
    )
  ] });
};
const Solutions = () => {
  const [embedVisible, setEmbedVisible] = useState({});
  const projects = projectsData;
  const handleEmbedToggle = (slug) => {
    setEmbedVisible((prev) => {
      const next = { ...prev, [slug]: !prev[slug] };
      track("SolutionEmbedToggle", { slug, visible: next[slug] });
      return next;
    });
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-gray-900/20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 text-center text-white", children: "Enterprise Solutions" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16", children: "Strategic AI consulting and implementation services designed to transform industry operations and create sustainable competitive advantage." }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-12", children: projects.map((project) => /* @__PURE__ */ jsx(
      ProjectCard,
      {
        ...project,
        onEmbedToggle: () => handleEmbedToggle(project.slug),
        embedVisible: embedVisible[project.slug] || false
      },
      project.slug
    )) })
  ] }) });
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const validateEmail = (value) => {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(!validateEmail(email));
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-white", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Ready to explore AI solutions for your business or educational needs? Let's discuss your project." })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "bg-gray-900/50 backdrop-blur-sm border-gray-700/50 shadow-2xl rounded-3xl", children: /* @__PURE__ */ jsx(CardContent, { className: "p-10", children: /* @__PURE__ */ jsxs("form", { className: "space-y-8", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", className: "text-white", children: "Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              placeholder: "Your full name",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "rounded-xl h-12 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-white", children: "Email" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              placeholder: "your.email@example.com",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              "aria-invalid": emailError,
              className: "rounded-xl h-12 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
            }
          ),
          emailError && /* @__PURE__ */ jsx("span", { className: "text-red-500 text-sm", children: "Please enter a valid email address." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-white", children: "Message" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "message",
            placeholder: "Tell me about your project or idea...",
            value: message,
            onChange: (e) => setMessage(e.target.value),
            className: "min-h-32 rounded-xl resize-none bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Button, { className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-14 text-lg rounded-xl shadow-lg shadow-blue-500/25 border-0", children: "Send Message" })
    ] }) }) })
  ] }) });
};
const FigmaDev = () => {
  const [url, setUrl] = useState("");
  const [embedVisible, setEmbedVisible] = useState(false);
  useEffect(() => {
    const lastUrl = localStorage.getItem("figmaShareUrl");
    if (lastUrl) setUrl(lastUrl);
  }, []);
  const handleOpenDesign = () => {
    if (url) window.open(url, "_blank", "noopener");
  };
  const handleOpenDevMode = () => {
    if (url) window.open(url + "?mode=dev", "_blank", "noopener");
  };
  const handleEmbed = () => {
    setEmbedVisible((v) => !v);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    localStorage.setItem("figmaShareUrl", e.target.value);
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6 text-white", children: "Figma Dev Mode" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "url",
        value: url,
        onChange: handleUrlChange,
        placeholder: "Paste Figma share URL...",
        className: "w-full mb-4 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder:text-gray-400"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-4", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", onClick: handleOpenDesign, className: "bg-blue-500", children: "Open Design" }),
      /* @__PURE__ */ jsx(Button, { type: "button", onClick: handleOpenDevMode, className: "bg-purple-500", children: "Open Dev Mode" }),
      /* @__PURE__ */ jsx(Button, { type: "button", "aria-expanded": embedVisible, onClick: handleEmbed, className: "bg-gray-700", children: embedVisible ? "Hide Embed" : "Embed Below" })
    ] }),
    embedVisible && url && /* @__PURE__ */ jsx(
      "iframe",
      {
        src: url,
        title: "Figma Embed",
        className: "w-full h-96 rounded-xl border border-gray-700",
        allowFullScreen: true
      }
    )
  ] }) });
};
const initializeTheme = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
};
const App = () => {
  useEffect(() => {
    initializeTheme();
  }, []);
  return /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/solutions", element: /* @__PURE__ */ jsx(Solutions, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/figma-dev", element: /* @__PURE__ */ jsx(FigmaDev, {}) })
  ] }) }) });
};
function render(url) {
  const html = renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
//# sourceMappingURL=entry-server.js.map
