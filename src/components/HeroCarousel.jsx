import React, { useState, useEffect } from 'react';

const slides = [
  {
    tag: 'Next-Generation Enterprise Solutions',
    title: 'Accelerating Digital Evolution Through Intelligent Automation',
    description: 'BAGYAM TEC empowers forward-thinking enterprises with cutting-edge low-code ecosystems, bespoke software architecture, and advanced analytics to eliminate operational friction and scale with precision.'
  },
  {
    tag: 'Enterprise Low-Code Platforms',
    title: 'Rapid App Delivery on Microsoft Power Platform',
    description: 'Transform legacy bottlenecks into streamlined digital workflows. We architect custom canvas and model-driven applications tailored precisely to your operational needs.'
  },
  {
    tag: 'AI & Cloud Workflow Integration',
    title: 'Embedding Copilot Intelligence Into Core Operations',
    description: 'Leverage generative AI and automated cloud orchestrations to unlock deep business insights, accelerate decision-making, and drive measurable real-time ROI.'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Changes slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '750px', width: '100%', minHeight: '280px', position: 'relative' }}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            style={{
              position: index === currentIndex ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              opacity: index === currentIndex ? 1 : 0,
              visibility: index === currentIndex ? 'visible' : 'hidden',
              transition: 'opacity 0.6s ease-in-out, visibility 0.6s ease-in-out',
              pointerEvents: index === currentIndex ? 'auto' : 'none'
            }}
          >
            <span style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>
              {slide.tag}
            </span>
            
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 600, lineHeight: '1.3', marginBottom: '1.25rem', letterSpacing: '-0.3px', color: 'var(--text-color)' }}>
              {slide.title}
            </h1>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              {slide.description}
            </p>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a href="#contact" className="btn btn-primary">Initiate Transformation</a>
          <a href="#services" className="btn btn-outline">Explore Capabilities</a>

          {/* Slide Navigation Dots */}
          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: idx === currentIndex ? 'var(--primary-color)' : 'var(--border-color)',
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background-color 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
