import React from 'react';
import { FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="no-print" style={{
      borderTop: '1px solid var(--border-color)',
      backgroundColor: '#ffffff',
      padding: '3rem 0 2rem',
      marginTop: '4rem',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-color-subtle)',
        }}>
          {/* Left Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--brand-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}>
              <FileText size={18} />
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                Resume<span className="gradient-text">AI</span>
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                AI-powered resume analysis & ATS screening system.
              </p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#contact" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>Contact Support</a>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.825rem',
          color: 'var(--text-muted)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p>© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
          <p style={{ fontStyle: 'italic' }}>
            Note: ResumeAI provides estimated ATS compatibility based on AI analysis and does not guarantee interview offers.
          </p>
        </div>
      </div>
    </footer>
  );
};
