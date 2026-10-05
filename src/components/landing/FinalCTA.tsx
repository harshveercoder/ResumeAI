import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onAnalyzeClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onAnalyzeClick }) => {
  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: 'var(--bg-main)',
    }}>
      <div className="container">
        <div style={{
          background: 'var(--brand-gradient)',
          borderRadius: 'var(--radius-xl)',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
        }}>
          {/* Subtle overlay elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
              backdropFilter: 'blur(4px)',
            }}>
              <Sparkles size={16} />
              <span>Boost Your Interview Rate</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
              Ready to improve your resume?
            </h2>

            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
              Find out what recruiters and ATS systems might be missing before you hit apply.
            </p>

            <button
              onClick={onAnalyzeClick}
              className="btn"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--brand-primary)',
                padding: '0.9rem 2.25rem',
                fontSize: '1.05rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              }}
            >
              <span>Analyze My Resume</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
