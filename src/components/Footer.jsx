import React, { useState } from 'react';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => setModalContent(type);
  const closeModal = () => setModalContent(null);

  return (
    <footer style={{
      backgroundColor: '#030712',
      color: '#f8fafc',
      padding: '3rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border-color)',
      marginTop: '2rem'
    }}>
      <div className="container" style={{ padding: '0', maxWidth: '1200px' }}>
        <p style={{ fontSize: '0.95rem', marginBottom: '1rem', opacity: 0.9 }}>
          © 2026 MK LLP | Digital Transformation Consulting
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem' }}>
          <button 
            onClick={() => openModal('privacy')} 
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => openModal('terms')} 
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Terms of Service
          </button>
        </div>
      </div>

      {modalContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: 'var(--card-bg, #0f172a)',
            color: 'var(--text-color, #f8fafc)',
            padding: '2.5rem',
            borderRadius: '16px',
            maxWidth: '600px',
            width: '100%',
            textAlign: 'left',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
              {modalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            
            {modalContent === 'privacy' ? (
              <div style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p>At MK LLP, we respect your privacy and are committed to protecting any information you share with us through direct email inquiries.</p>
                <p><strong>Information Collected:</strong> We only collect professional email addresses and project specifics voluntarily provided by prospective clients.</p>
                <p><strong>Usage:</strong> Information is used exclusively to respond to business inquiries and provide digital transformation consulting quotes.</p>
              </div>
            ) : (
              <div style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: '0.9', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p>Welcome to MK LLP. By accessing our website and contacting our software team, you agree to these standard business terms.</p>
                <p><strong>Services:</strong> All software development, low-code architecture, and automation strategies are subject to formal statements of work (SOW).</p>
                <p><strong>Intellectual Property:</strong> All branding, design layouts, and copy content remain the property of MK LLP © 2026.</p>
              </div>
            )}

            <button 
              onClick={closeModal}
              className="btn btn-primary"
              style={{ marginTop: '2rem', width: '100%' }}
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}