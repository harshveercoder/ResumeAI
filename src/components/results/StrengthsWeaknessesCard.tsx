import React from 'react';
import { ThumbsUp, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

interface StrengthsWeaknessesCardProps {
  strengths: string[];
  weaknesses: string[];
}

export const StrengthsWeaknessesCard: React.FC<StrengthsWeaknessesCardProps> = ({
  strengths,
  weaknesses,
}) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {/* Strengths Card */}
        <div className="card" style={{ padding: '1.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border-color-subtle)',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--status-success-bg)',
              color: 'var(--status-success-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ThumbsUp size={18} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                What's working well
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Resume Strengths</span>
            </div>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {strengths.map((item, idx) => (
              <li key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                fontSize: '0.925rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', minWidth: '18px', marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses Card */}
        <div className="card" style={{ padding: '1.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border-color-subtle)',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--status-warning-bg)',
              color: 'var(--status-warning-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <AlertCircle size={18} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                What could be improved
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Resume Weaknesses</span>
            </div>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {weaknesses.map((item, idx) => (
              <li key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                fontSize: '0.925rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}>
                <ChevronRight size={18} style={{ color: 'var(--status-warning-accent)', minWidth: '18px', marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
