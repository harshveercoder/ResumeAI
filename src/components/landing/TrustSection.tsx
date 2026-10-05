import React from 'react';
import { Target, Cpu, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const benefits = [
    {
      icon: <Target size={28} style={{ color: 'var(--brand-primary)' }} />,
      title: 'ATS Score',
      description: 'See how your resume performs against target job requirements with radial scoring algorithms.',
    },
    {
      icon: <Cpu size={28} style={{ color: '#06b6d4' }} />,
      title: 'Skill Matching',
      description: 'Discover which technical skills match the job post and pinpoint missing industry keywords.',
    },
    {
      icon: <Sparkles size={28} style={{ color: '#7c3aed' }} />,
      title: 'AI Recommendations',
      description: 'Get prioritized, actionable bullet point suggestions powered by Google Gemini AI.',
    },
  ];

  return (
    <section style={{
      padding: '3.5rem 0',
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {benefits.map((item, idx) => (
            <div key={idx} className="card card-hover" style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: 'var(--bg-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
