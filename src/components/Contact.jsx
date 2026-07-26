import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('contact@mkllp.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="container" id="contact">
      <h2>Get in Touch</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '700px', fontSize: '1.05rem', color: 'var(--text-muted)' }}>
        Have a project in mind or want to learn more about our Microsoft Power Platform solutions? Connect directly with our senior consulting team.
      </p>

      {/* Professional Single Executive Contact Card */}
      <div className="card" style={{ padding: '3rem 2.5rem', maxWidth: '850px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.05), transparent)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        
        {/* Icon Header */}
        <div style={{ background: 'rgba(2, 132, 199, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto', color: 'var(--primary-color)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', letterSpacing: '-0.3px' }}>Direct Executive Inquiry</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem', maxWidth: '550px', margin: '0 auto 1.8rem auto' }}>
          We prefer direct communication to understand your custom enterprise workflow requirements thoroughly. Send us an email or copy our address to schedule an introductory alignment call.
        </p>

        {/* Email Highlight Pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--card-bg)', padding: '0.75rem 1.5rem', borderRadius: '30px', border: '1px solid var(--border-color)', marginBottom: '2rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:contact@mkllp.com" style={{ color: 'var(--primary-color)', fontWeight: '700', textDecoration: 'none', fontSize: '1.1rem' }}>
            contact@mkllp.com
          </a>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="mailto:contact@mkllp.com" className="btn btn-primary" style={{ padding: '0.8rem 2rem', minWidth: '160px' }}>
            Send Email
          </a>
          <button onClick={handleCopy} className="btn btn-outline" style={{ padding: '0.8rem 2rem', minWidth: '160px' }}>
            {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
          </button>
        </div>

      </div>
    </section>
  );
}