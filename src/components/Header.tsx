import React from 'react';
import { track } from "@/lib/analytics";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="/" style={{fontFamily:"Space Grotesk, Inter, sans-serif", fontWeight:700}}>Sidiqi.ai</a>
        <a href="/insights">Insights</a>
        <a href="/labs">Labs</a>
        <a href="/about">About</a>
        <a href="/contact">Schedule Strategic Consultation</a>
        <div className="spacer" />
        <a
          href="https://sg2tech.com"
          target="_blank"
          rel="noopener"
          onClick={() => {
            if (typeof track === 'function') track('sg2_link_click');
            if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'sg2_link_click');
            }
          }}
        >
          SG2 Tech
        </a>
        <a
          href="https://sidiqigroup.com"
          target="_blank"
          rel="noopener"
          onClick={() => {
            if (typeof track === 'function') track('sidiqigroup_link_click');
            if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'sidiqigroup_link_click');
            }
          }}
        >
          Sidiqi Group
        </a>
        <button
          aria-label="Toggle theme"
          className="btn ghost"
          onClick={() => {
            const html = document.documentElement;
            const next = html.getAttribute("data-theme") === "dark" ? null : "dark";
            if (next) html.setAttribute("data-theme", "dark");
            else html.removeAttribute("data-theme");
            localStorage.setItem("theme", next ?? "");
          }}
        >
          Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
