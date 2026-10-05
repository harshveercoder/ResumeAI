import React from 'react';
import { UploadCloud, FileText, BarChart3 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <UploadCloud size={32} style={{ color: 'var(--brand-primary)' }} />,
      title: 'Upload Resume',
      text: 'Upload your resume as a PDF file (up to 10 MB).',
    },
    {
      num: '02',
      icon: <FileText size={32} style={{ color: '#06b6d4' }} />,
      title: 'Add Job Description',
      text: "Paste the target job description or choose from our role samples.",
    },
    {
      num: '03',
      icon: <BarChart3 size={32} style={{ color: '#7c3aed' }} />,
      title: 'Get Your Analysis',
      text: 'Receive an instant ATS compatibility score, skill breakdown, and tailored interview prep questions.',
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--brand-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Simple 3-Step Process
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginTop: '0.5rem',
            marginBottom: '1rem',
          }}>
            How ResumeAI Works
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Get expert recruiter-level feedback in less than 30 seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          position: 'relative',
        }}>
          {steps.map((step, idx) => (
            <div key={idx} className="card card-hover" style={{
              padding: '2.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              backgroundColor: '#ffffff',
            }}>
              {/* Step Number Badge */}
              <span style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--border-color)',
                lineHeight: 1,
              }}>
                {step.num}
              </span>

              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'var(--brand-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                {step.icon}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
