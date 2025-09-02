import React from 'react';

const InnovationPanel: React.FC = () => {
  return (
    <aside className="innovation-card">
      <header className="media">
        <div className="badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3l8 14H4L12 3z" stroke="white" opacity=".9"/>
          </svg>
        </div>
        <h3>AI Innovation</h3>
      </header>
      <p className="kicker">Intelligent systems designed for real-world impact.</p>
      <ul className="bullets">
        <li>Operator-first, ship-ready prototypes</li>
        <li>Clear "Problem → Approach → Outcome" framing</li>
        <li>Hand-off paths to SG2 Tech implementation</li>
      </ul>
    </aside>
  );
};

export default InnovationPanel;
