import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="/" style={{fontFamily:"Space Grotesk, Inter, sans-serif", fontWeight:700}}>Sidiqi.ai</a>
        <a href="/insights">Insights</a>
        <a href="/labs">Labs</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div className="spacer" />
        <a href="https://sg2tech.com" target="_blank" rel="noopener">SG2 Tech</a>
        <a href="https://sidiqigroup.com" target="_blank" rel="noopener">Sidiqi Group</a>
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
