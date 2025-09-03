import { useLocation } from "react-router-dom";
import { SidiqiLogo } from "@/components/SidiqiLogo";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: for icons
import Footer from "./Footer";

const navItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "solutions", label: "Solutions" },
  { to: "contact", label: "Schedule Strategic Consultation" },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.to));
      const current = sections.find(section => {
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

  return (
    <div className="dark min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <SidiqiLogo size="sm" />
              <span className="text-xl font-bold text-white">Sidiqi.ai</span>
            </div>

            {/* ✅ Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((nav) => (
                <button
                  key={nav.to}
                  onClick={() => {
                    document.getElementById(nav.to)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className={`text-white hover:text-blue-400 transition-all duration-300 relative ${activeSection === nav.to ? "text-blue-400" : ""}`}
                >
                  {nav.label}
                  {activeSection === nav.to && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ Mobile Nav Links */}
          {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 px-2">
              {navItems.map((nav) => (
                <button
                  key={nav.to}
                  onClick={() => {
                    document.getElementById(nav.to)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                    setMenuOpen(false); // close menu after click
                  }}
                  className={`text-white text-lg text-left hover:text-blue-400 transition-all duration-300 ${activeSection === nav.to ? "text-blue-400" : ""}`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};