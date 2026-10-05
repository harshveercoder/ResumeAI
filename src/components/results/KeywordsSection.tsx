import React from 'react';
import { KeyRound, CheckCircle2, AlertTriangle, ShieldAlert } from 'lucide-react';
import type { KeywordsBreakdown } from '../../types/resume';

interface KeywordsSectionProps {
  keywords: KeywordsBreakdown;
}

export const KeywordsSection: React.FC<KeywordsSectionProps> = ({ keywords }) => {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          backgroundColor: '#fce7f3',
          color: '#ec4899',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <KeyRound size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Keyword Analysis
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Target job keyword optimization analysis.
          </span>
        </div>
      </div>

      <div className="card" style={{ padding: '1.75rem' }}>
        {/* Keywords Found */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--text-main)',
            marginBottom: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            <CheckCircle2 size={16} style={{ color: '#10b981' }} />
            <span>Keywords Found in Resume ({keywords.found.length})</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {keywords.found.map((kw, idx) => (
              <span key={idx} className="chip chip-success">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Keywords Missing */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--text-main)',
            marginBottom: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            <AlertTriangle size={16} style={{ color: '#f59e0b' }} />
            <span>Keywords Missing from Resume ({keywords.missing.length})</span>
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {keywords.missing.map((kw, idx) => (
              <span key={idx} className="chip chip-warning">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Ethical Keyword Guidance Note */}
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          backgroundColor: 'var(--bg-main)',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          border: '1px solid var(--border-color)',
        }}>
          <ShieldAlert size={18} style={{ color: 'var(--brand-primary)', minWidth: '18px' }} />
          <span>
            <strong>Best Practice Tip:</strong> Only add keywords that genuinely reflect your actual experience and projects. Do not keyword-stuff your resume.
          </span>
        </div>
      </div>
    </div>
  );
};
