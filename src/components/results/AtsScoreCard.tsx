import React from 'react';
import { CircularScore } from '../common/CircularScore';
import { ShieldCheck, Info } from 'lucide-react';

interface AtsScoreCardProps {
  score: number;
}

export const AtsScoreCard: React.FC<AtsScoreCardProps> = ({ score }) => {
  let scoreMessage = 'Strong match — your resume aligns well with this position.';
  if (score >= 90) {
    scoreMessage = 'Excellent match — your resume satisfies almost all ATS criteria.';
  } else if (score >= 60 && score < 75) {
    scoreMessage = 'Moderate match — your resume has core alignment but requires tweaking.';
  } else if (score < 60) {
    scoreMessage = 'Needs improvement — significant skill and keyword gaps detected.';
  }

  return (
    <div className="card" style={{
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100%',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.85rem',
        fontWeight: 700,
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '1.25rem',
      }}>
        <ShieldCheck size={18} style={{ color: 'var(--brand-primary)' }} />
        <span>ATS Compatibility Score</span>
      </div>

      <CircularScore score={score} size={190} strokeWidth={16} />

      <p style={{
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--text-main)',
        marginTop: '1.25rem',
        marginBottom: '1rem',
        maxWidth: '320px',
        lineHeight: 1.5,
      }}>
        {scoreMessage}
      </p>

      {/* Product Principle Disclaimer */}
      <div style={{
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        backgroundColor: 'var(--bg-main)',
        padding: '0.65rem 0.85rem',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        lineHeight: 1.4,
      }}>
        <Info size={15} style={{ minWidth: '15px', color: 'var(--brand-primary)' }} />
        <span>Estimated ATS compatibility based on AI analysis. Does not guarantee hiring.</span>
      </div>
    </div>
  );
};
