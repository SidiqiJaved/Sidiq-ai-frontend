import React from 'react';
import InnovationPanel from './InnovationPanel';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <div className="glow-container">
          <div className="glow-effect"></div>
          <h1>About Sidiqi.ai</h1>
          <p className="lead">
            Where technology meets business in a practical way. We create AI-powered tools 
            that address real-world challenges for businesses and individuals.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="info-card mission">
          <div className="icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </div>
          <div className="content">
            <h3>Mission</h3>
            <p>To empower small businesses and individuals with accessible, 
            AI-driven tools that enhance growth, efficiency, and opportunity.</p>
          </div>
          <div className="card-glow blue"></div>
        </div>

        <div className="info-card vision">
          <div className="icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="content">
            <h3>Vision</h3>
            <p>A future where AI is seamlessly integrated into daily business 
            and personal workflows — simple, intuitive, and impactful for everyone.</p>
          </div>
          <div className="card-glow green"></div>
        </div>

        <InnovationPanel />
      </div>
    </section>
  );
};

export default AboutSection;
