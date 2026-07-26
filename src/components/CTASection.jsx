import React from 'react';

export default function CTASection() {
  return (
    <section className="container" style={{ paddingBottom: '2rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#ffffff',
        boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.3)'
      }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#ffffff' }}>
          Start Your Digital Transformation Journey
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Let our experts design the right automation strategy for your business.
        </p>
        <a 
          href="#contact" 
          style={{
            backgroundColor: '#ffffff',
            color: '#0284c7',
            padding: '0.85rem 2rem',
            borderRadius: '8px',
            fontWeight: '700',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Get Quote
        </a>
      </div>
    </section>
  );
}