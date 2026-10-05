import React from 'react';
import { ShieldCheck, BarChart2, Cpu, KeyRound, ThumbsUp, Lightbulb, MessageSquareCode } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} style={{ color: 'var(--brand-primary)' }} />,
      title: 'ATS Compatibility',
      text: 'Evaluates your PDF formatting, sections, and readability against automated applicant tracking systems.',
    },
    {
      icon: <BarChart2 size={24} style={{ color: '#06b6d4' }} />,
      title: 'Job Match Score',
      text: 'Provides a percentage match broken down by skills, experience, education, projects, and keywords.',
    },
    {
      icon: <Cpu size={24} style={{ color: '#7c3aed' }} />,
      title: 'Skills Analysis',
      text: 'Side-by-side comparison of matching technical competencies versus missing job skills.',
    },
    {
      icon: <KeyRound size={24} style={{ color: '#ec4899' }} />,
      title: 'Missing Keywords',
      text: 'Identifies vital industry keywords missing from your resume without promoting artificial keyword stuffing.',
    },
    {
      icon: <ThumbsUp size={24} style={{ color: '#10b981' }} />,
      title: 'Resume Strengths',
      text: 'Highlights what is already working well to preserve your resume’s strongest selling points.',
    },
    {
      icon: <Lightbulb size={24} style={{ color: '#f59e0b' }} />,
      title: 'Improvement Suggestions',
      text: 'Delivers actionable advice categorized into High, Medium, and Low priority action items.',
    },
    {
      icon: <MessageSquareCode size={24} style={{ color: '#6366f1' }} />,
      title: 'AI Interview Questions',
      text: 'Generates 5 role-tailored technical & behavioral interview questions based on your actual profile.',
    },
  ];

  return (
    <section style={{
      padding: '6rem 0',
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-color)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--brand-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Powerful AI Features
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginTop: '0.5rem',
            marginBottom: '1rem',
          }}>
            Everything you need to optimize your application
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Turn generic resume submissions into targeted, high-converting interview opportunities.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {features.map((feat, idx) => (
            <div key={idx} className="card card-hover" style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '48px',
              }}>
                {feat.icon}
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {feat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
