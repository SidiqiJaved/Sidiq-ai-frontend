import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-black/80 backdrop-blur-sm mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center gap-8">
          <a href="/" className="text-white hover:text-blue-400 transition-all duration-300">Home</a>
          <a href="/insights" className="text-white hover:text-blue-400 transition-all duration-300">Insights</a>
          <a href="/labs" className="text-white hover:text-blue-400 transition-all duration-300">Labs</a>
          <a href="/about" className="text-white hover:text-blue-400 transition-all duration-300">About</a>
          <a href="/contact" className="text-white hover:text-blue-400 transition-all duration-300">Contact</a>
          <span className="ml-auto flex items-center gap-2">
            <a href="https://sg2tech.com" target="_blank" rel="noopener" className="text-white hover:text-blue-400 transition-all duration-300">SG2 Tech</a>
            <span className="text-gray-600">·</span>
            <a href="https://sidiqigroup.com" target="_blank" rel="noopener" className="text-white hover:text-blue-400 transition-all duration-300">Sidiqi Group</a>
          </span>
        </nav>
        <p className="text-gray-400 text-sm mt-4">An innovation project from the Sidiqi Group.</p>
      </div>
    </footer>
  );
};

export default Footer;
