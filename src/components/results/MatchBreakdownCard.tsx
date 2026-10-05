import React from 'react';
import { ProgressBar } from '../common/ProgressBar';
import { Target } from 'lucide-react';

interface MatchBreakdownCardProps {
  matchScore: number;
  breakdown?: {
    skillsMatch: number;
    experienceMatch: number;
    educationMatch: number;
    projectsMatch: number;
    keywordsMatch: number;
  };
}

export const MatchBreakdownCard: React.FC<MatchBreakdownCardProps> = ({
  matchScore,
  breakdown = {
    skillsMatch: Math.min(100, matchScore + 4),
    experienceMatch: Math.max(50, matchScore - 2),
    educationMatch: 95,
    projectsMatch: Math.min(100, matchScore + 4),
    keywordsMatch: Math.max(50, matchScore - 12),
  },
}) => {
  return (
    <div className="card" style={{ padding: '2rem', height: '100%' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-color-subtle)',
      }}>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
            Overall Alignment
          </span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
            {matchScore}% Job Match
          </h3>
        </div>

        <div style={{
          padding: '0.65rem 1rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--brand-primary-light)',
          color: 'var(--brand-primary)',
          fontWeight: 700,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}>
          <Target size={18} />
          <span>Match Breakdown</span>
        </div>
      </div>

      <div>
        <ProgressBar label="Skills Match" percentage={breakdown.skillsMatch} color="var(--brand-primary)" />
        <ProgressBar label="Experience Match" percentage={breakdown.experienceMatch} color="#06b6d4" />
        <ProgressBar label="Education Match" percentage={breakdown.educationMatch} color="#10b981" />
        <ProgressBar label="Projects Match" percentage={breakdown.projectsMatch} color="#7c3aed" />
        <ProgressBar label="Keywords Match" percentage={breakdown.keywordsMatch} color="#f59e0b" />
      </div>
    </div>
  );
};
