import React from 'react';
import { Award, CheckCircle2, AlertTriangle, Download, RotateCcw } from 'lucide-react';
import type { RecommendedAction } from '../../types/resume';

interface OverallAssessmentProps {
  assessment: string;
  recommendation: RecommendedAction;
  onReset: () => void;
  onExport: () => void;
}

export const OverallAssessment: React.FC<OverallAssessmentProps> = ({
  assessment,
  recommendation,
  onReset,
  onExport,
}) => {
  const isReady = recommendation === 'Ready to apply';

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div className="card" style={{
        padding: '2.25rem',
        borderRadius: 'var(--radius-xl)',
        backgroundColor: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
        border: `1px solid ${isReady ? '#a7f3d0' : '#fde68a'}`,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1.25rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color-subtle)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              backgroundColor: isReady ? 'var(--status-success-bg)' : 'var(--status-warning-bg)',
              color: isReady ? 'var(--status-success-text)' : 'var(--status-warning-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Award size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Overall Assessment
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Executive summary and recommended next action
              </span>
            </div>
          </div>

          {/* Recommended Action Status Pill */}
          <div style={{
            padding: '0.55rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: isReady ? 'var(--status-success-bg)' : 'var(--status-warning-bg)',
            color: isReady ? 'var(--status-success-text)' : 'var(--status-warning-text)',
            border: `1px solid ${isReady ? 'var(--status-success-border)' : 'var(--status-warning-border)'}`,
            fontWeight: 800,
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            {isReady ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
            <span>{recommendation}</span>
          </div>
        </div>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          {assessment}
        </p>

        {/* Bottom Actions Bar */}
        <div className="no-print" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-color)',
        }}>
          <button onClick={onExport} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
            <Download size={18} />
            <span>Download Analysis Report</span>
          </button>

          <button onClick={onReset} className="btn btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
            <RotateCcw size={18} />
            <span>Analyze Another Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
