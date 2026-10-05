import React from 'react';
import { CheckCircle2, AlertTriangle, Cpu, Info } from 'lucide-react';
import type { SkillsBreakdown } from '../../types/resume';

interface SkillsAnalysisCardProps {
  skills: SkillsBreakdown;
}

export const SkillsAnalysisCard: React.FC<SkillsAnalysisCardProps> = ({ skills }) => {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <Cpu size={22} style={{ color: 'var(--brand-primary)' }} />
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
          Skills Analysis
        </h3>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {/* Matching Skills Card */}
        <div className="card" style={{ padding: '1.75rem', borderColor: '#a7f3d0' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            color: 'var(--status-success-text)',
          }}>
            <CheckCircle2 size={20} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
              Matching Skills ({skills.matching.length})
            </h4>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Competencies successfully detected in your resume that align with the position.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.matching.map((skill, idx) => (
              <span key={idx} className="chip chip-success">
                <CheckCircle2 size={14} /> {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Skills Card */}
        <div className="card" style={{ padding: '1.75rem', borderColor: '#fde68a' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            color: 'var(--status-warning-text)',
          }}>
            <AlertTriangle size={20} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
              Missing Skills ({skills.missing.length})
            </h4>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Required skills listed in the job post that were not found in your resume.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {skills.missing.map((skill, idx) => (
              <span key={idx} className="chip chip-warning">
                <AlertTriangle size={14} /> {skill}
              </span>
            ))}
          </div>

          {/* Contextual Notice */}
          <div style={{
            fontSize: '0.78rem',
            color: 'var(--status-warning-text)',
            backgroundColor: 'var(--status-warning-bg)',
            padding: '0.65rem 0.85rem',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            border: '1px solid var(--status-warning-border)',
          }}>
            <Info size={15} style={{ minWidth: '15px' }} />
            <span>Missing skills are extracted directly from the target job description requirements.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
