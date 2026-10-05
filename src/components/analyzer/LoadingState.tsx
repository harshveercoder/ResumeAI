import React, { useEffect, useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const LoadingState: React.FC = () => {
  const steps = [
    'Parsing PDF text and structure...',
    'Extracting candidate experience & skills...',
    'Comparing qualifications with target job post...',
    'Running Google Gemini ATS compatibility model...',
    'Generating tailored recommendations & interview prep...',
  ];

  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card animate-fade-in" style={{
      maxWidth: '680px',
      margin: '4rem auto',
      padding: '3.5rem 2rem',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
    }}>
      {/* Animated AI Pulse Icon */}
      <div style={{
        width: '84px',
        height: '84px',
        borderRadius: '50%',
        background: 'var(--brand-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        margin: '0 auto 2rem',
        boxShadow: 'var(--shadow-glow)',
      }} className="animate-pulse-glow">
        <Sparkles size={40} />
      </div>

      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
        Analyzing your resume...
      </h2>

      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
        AI is comparing your experience, skills, education, and keywords with the target job description.
      </p>

      {/* Progress Ticker List */}
      <div style={{
        maxWidth: '420px',
        margin: '0 auto',
        backgroundColor: 'var(--bg-main)',
        padding: '1.25rem 1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        textAlign: 'left',
      }}>
        {steps.map((stepText, idx) => {
          const isDone = idx < currentStepIdx;
          const isCurrent = idx === currentStepIdx;

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.875rem',
                fontWeight: isCurrent ? 700 : 500,
                color: isDone ? '#10b981' : isCurrent ? 'var(--brand-primary)' : 'var(--text-muted)',
                marginBottom: idx === steps.length - 1 ? 0 : '0.75rem',
                transition: 'all var(--transition-fast)',
              }}
            >
              {isDone ? (
                <CheckCircle2 size={18} style={{ color: '#10b981', minWidth: '18px' }} />
              ) : isCurrent ? (
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: '2px solid var(--brand-primary)',
                  borderTopColor: 'transparent',
                  animation: 'spin 1s linear infinite',
                  minWidth: '18px',
                }} />
              ) : (
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: '2px solid var(--border-color)',
                  minWidth: '18px',
                }} />
              )}
              <span>{stepText}</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
