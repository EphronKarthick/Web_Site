import React from 'react';

export default function Values() {
  return (
    <section className="container" id="values">
      <h2>Values & Vision</h2>

      {/* Vision Statement Box */}
      <div className="card" style={{ padding: '1.75rem 2.2rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.06), transparent)', borderLeft: '4px solid var(--primary-color)' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--primary-color)', letterSpacing: '-0.2px' }}>Our Corporate Vision</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', color: 'var(--text-color)', opacity: '0.9' }}>
          To be the trusted global benchmark for Microsoft Power Platform consulting, bridging enterprise operational complexity with intuitive, scalable low-code solutions.
        </p>
      </div>

      {/* Core Values 4-Column Row */}
      <div className="grid-4">
        {/* Innovation */}
        <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '0.6rem', borderRadius: '10px', color: 'var(--primary-color)', width: 'fit-content' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', letterSpacing: '-0.2px' }}>Innovation</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>Using modern low-code tech to solve complex challenges creatively.</p>
          </div>
        </div>

        {/* Integrity */}
        <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '0.6rem', borderRadius: '10px', color: 'var(--primary-color)', width: 'fit-content' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', letterSpacing: '-0.2px' }}>Integrity</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>Maintaining transparent, accountable, and trusted partnerships.</p>
          </div>
        </div>

        {/* Collaboration */}
        <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '0.6rem', borderRadius: '10px', color: 'var(--primary-color)', width: 'fit-content' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', letterSpacing: '-0.2px' }}>Collaboration</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>Working alongside internal teams to build cohesive workflows.</p>
          </div>
        </div>

        {/* Excellence */}
        <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '0.6rem', borderRadius: '10px', color: 'var(--primary-color)', width: 'fit-content' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', letterSpacing: '-0.2px' }}>Excellence</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>Consistently delivering high-performance, robust architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
}