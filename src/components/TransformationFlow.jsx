import React from 'react';

export default function TransformationFlow() {
  return (
    <section className="evolution-section container">
      <span className="ey-yellow-text">THE DIGITAL EVOLUTION</span>
      <h2>From Manual Workflows to Intelligent Automation</h2>
      <p className="description-text">
        We eliminate manual bottlenecks by embedding Microsoft Copilot and automated cloud workflows directly into your daily business processes.
      </p>

      <div className="process-grid">
        {/* Process 1: Manual Operations */}
        <div className="process-item">
          <div className="icon-wrapper">
            <svg className="process-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 15v2l1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Manual Operations</h3>
          <p>Legacy spreadsheets, fragmented data silos, and slow paper-based approvals.</p>
        </div>

        {/* Process 2: Low-Code Architecture */}
        <div className="process-item">
          <div className="icon-wrapper">
            <svg className="process-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M17 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3>Low-Code Architecture</h3>
          <p>Custom Canvas & Model-Driven Apps built rapidly on the Microsoft Power Platform.</p>
        </div>

        {/* Process 3: AI-Driven Efficiency */}
        <div className="process-item">
          <div className="icon-wrapper">
            <svg className="process-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a8 8 0 0 0-8 8v2a6 6 0 0 0 12 0v-2a8 8 0 0 0-8-8z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M9.5 9.5l-2-2M14.5 9.5l2-2M12 6.5v-3M12 13.5v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 6l2 2-2 2M18 8l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>AI-Driven Efficiency</h3>
          <p>Automated cloud flows and Microsoft Copilot intelligence delivering real-time ROI.</p>
        </div>
      </div>
    </section>
  );
}