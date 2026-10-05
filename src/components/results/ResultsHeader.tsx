import React from 'react';
import { RotateCcw, Download, User } from 'lucide-react';
import type { AnalysisResult } from '../../types/resume';

interface ResultsHeaderProps {
  result: AnalysisResult;
  onReset: () => void;
  onExport: () => void;
}

export const ResultsHeader: React.FC<ResultsHeaderProps> = ({ result, onReset, onExport }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1.5rem',
      marginBottom: '2.5rem',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
          <span className="badge" style={{ backgroundColor: 'var(--brand-primary-light)', color: 'var(--brand-primary)' }}>
            AI Analysis Dashboard
          </span>
          {result.candidate?.name && (
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <User size={14} /> {result.candidate.name}
            </span>
          )}
        </div>

        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
          Resume Analysis
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          Here's how your resume matches the target position.
        </p>
      </div>

      {/* Header Action Buttons */}
      <div className="no-print" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button onClick={onExport} className="btn btn-secondary" style={{ padding: '0.7rem 1.25rem' }}>
          <Download size={18} />
          <span>Download Analysis</span>
        </button>

        <button onClick={onReset} className="btn btn-primary" style={{ padding: '0.7rem 1.35rem' }}>
          <RotateCcw size={18} />
          <span>Analyze Another Resume</span>
        </button>
      </div>
    </div>
  );
};
