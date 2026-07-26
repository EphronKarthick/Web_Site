import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '720px' }}>
        <span style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>
          Next-Generation Enterprise Solutions
        </span>
        
        {/* Reduced font size and weight for a much lighter, cleaner look */}
        <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 600, lineHeight: '1.3', marginBottom: '1.25rem', letterSpacing: '-0.3px' }}>
          Accelerating Digital Evolution Through Intelligent Automation
        </h1>
        
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
          MK LLP empowers forward-thinking enterprises with cutting-edge low-code ecosystems, bespoke software architecture, and advanced analytics to eliminate operational friction and scale with precision.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn btn-primary">Initiate Transformation</a>
          <a href="#services" className="btn btn-outline">Explore Capabilities</a>
        </div>
      </div>
    </section>
  );
}