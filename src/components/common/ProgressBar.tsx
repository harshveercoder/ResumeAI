import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  color = 'var(--brand-primary)',
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: 'var(--text-main)',
        marginBottom: '0.35rem',
      }}>
        <span>{label}</span>
        <span style={{ color: 'var(--text-secondary)' }}>{percentage}%</span>
      </div>

      <div style={{
        height: '8px',
        width: '100%',
        backgroundColor: 'var(--bg-subtle)',
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
      }}>
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: color,
            borderRadius: 'var(--radius-full)',
            transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </div>
  );
};
