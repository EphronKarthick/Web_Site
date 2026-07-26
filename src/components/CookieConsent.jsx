import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mk_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('mk_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleDeclineOptional = () => {
    localStorage.setItem('mk_cookie_consent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(2, 6, 23, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '2.5rem',
        borderRadius: '12px',
        maxWidth: '560px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        border: '1px solid #1e293b'
      }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Welcome to MK LLP
        </h3>
        
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#94a3b8', marginBottom: '2rem', textAlign: 'left' }}>
          In addition to cookies that are strictly necessary to operate this website, we use functional cookies to enhance your experience, performance cookies to measure site analytics, and marketing cookies to provide relevant content and insights tailored to your preferences.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={handleDeclineOptional}
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: '1px solid #475569',
              background: 'transparent',
              color: '#f8fafc',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            I decline optional cookies
          </button>

          <button 
            onClick={handleAcceptAll}
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: 'none',
              background: '#38bdf8',
              color: '#020617',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            I accept all cookies
          </button>
        </div>
      </div>
    </div>
  );
}