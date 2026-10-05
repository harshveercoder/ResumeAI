import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onAnalyzeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onAnalyzeClick }) => {
  return (
    <section style={{
      padding: '5rem 0 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Subtle Gradient Blobs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3.5rem',
        alignItems: 'center',
      }}>
        {/* Left Column Text & CTAs */}
        <div>
          {/* Trust Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--brand-primary-light)',
            color: 'var(--brand-primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
          }}>
            <Sparkles size={16} />
            <span>AI-Powered ATS Resume Screening</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: 'var(--text-main)',
            marginBottom: '1.5rem',
          }}>
            Know exactly how your <span className="gradient-text">resume performs.</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            maxWidth: '520px',
          }}>
            Upload your resume, add a target job description, and receive an instant AI-powered ATS analysis with tailored recommendations to land more interviews.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              onClick={onAnalyzeClick}
              className="btn btn-primary btn-gradient"
              style={{ padding: '0.9rem 2rem', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
            >
              <span>Analyze My Resume</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#how-it-works"
              className="btn btn-secondary"
              style={{ padding: '0.9rem 1.75rem', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
            >
              See How It Works
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={18} style={{ color: '#10b981' }} />
              <span>100% PDF Parsing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap size={18} style={{ color: '#f59e0b' }} />
              <span>Instant AI Feedback</span>
            </div>
          </div>
        </div>

        {/* Right Column Interactive Preview Mockup */}
        <div className="card animate-pulse-glow" style={{
          padding: '1.75rem',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(79, 70, 229, 0.15)',
          position: 'relative',
        }}>
          {/* Header Mock */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '1rem',
            marginBottom: '1.25rem',
            borderBottom: '1px solid var(--border-color-subtle)',
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
                Live AI Dashboard Preview
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Machine Learning Engineer
              </h4>
            </div>
            <div className="badge badge-high" style={{ backgroundColor: '#ecfdf5', color: '#047857' }}>
              87% ATS Match
            </div>
          </div>

          {/* Gauge & Stats Split */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: '1.25rem',
            alignItems: 'center',
            marginBottom: '1.5rem',
            backgroundColor: 'var(--bg-main)',
            padding: '1rem',
            borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '8px solid var(--brand-primary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
            }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>87</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>SCORE</span>
            </div>

            <div style={{ fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span>Skills Match</span>
                <strong style={{ color: 'var(--brand-primary)' }}>90%</strong>
              </div>
              <div style={{ height: '6px', backgroundColor: '#e2e8f0', borderRadius: '4px', marginBottom: '0.75rem' }}>
                <div style={{ width: '90%', height: '100%', backgroundColor: 'var(--brand-primary)', borderRadius: '4px' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span>Keywords Match</span>
                <strong style={{ color: '#10b981' }}>82%</strong>
              </div>
              <div style={{ height: '6px', backgroundColor: '#e2e8f0', borderRadius: '4px' }}>
                <div style={{ width: '82%', height: '100%', backgroundColor: '#10b981', borderRadius: '4px' }} />
              </div>
            </div>
          </div>

          {/* Sample Chips */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
              Detected Skills Match:
            </span>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="chip chip-success">Python</span>
              <span className="chip chip-success">TensorFlow</span>
              <span className="chip chip-success">SQL</span>
              <span className="chip chip-warning">+ Missing Docker</span>
            </div>
          </div>

          {/* AI Recommendation Sample */}
          <div style={{
            padding: '0.85rem 1rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: '#eef2ff',
            border: '1px solid #c7d2fe',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            fontSize: '0.825rem',
          }}>
            <Sparkles size={16} style={{ color: 'var(--brand-primary)', marginTop: '2px', minWidth: '16px' }} />
            <div>
              <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '2px' }}>
                AI Recommendation #1
              </strong>
              <span>Quantify machine learning project achievements with validation accuracy metrics.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
