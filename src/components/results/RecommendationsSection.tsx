import React from 'react';
import type { RecommendationItem } from '../../types/resume';
import { Sparkles } from 'lucide-react';

interface RecommendationsSectionProps {
  recommendations: RecommendationItem[];
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ recommendations }) => {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        marginBottom: '1.25rem',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          backgroundColor: 'var(--brand-primary-light)',
          color: 'var(--brand-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Sparkles size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
            How to improve your resume
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            AI-generated actionable recommendations prioritized by recruitment impact.
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {recommendations.map((rec, idx) => {
          const numStr = (idx + 1).toString().padStart(2, '0');
          let badgeClass = 'badge-high';
          if (rec.priority === 'MEDIUM') badgeClass = 'badge-medium';
          if (rec.priority === 'LOW') badgeClass = 'badge-low';

          return (
            <div key={idx} className="card card-hover" style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              display: 'grid',
              gridTemplateColumns: '50px 1fr',
              gap: '1.25rem',
              alignItems: 'flex-start',
            }}>
              {/* Step Number */}
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                backgroundColor: 'var(--brand-primary-light)',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {numStr}
              </div>

              {/* Recommendation Details */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.4rem',
                  flexWrap: 'wrap',
                }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {rec.title}
                  </h4>
                  <span className={`badge ${badgeClass}`}>
                    Priority: {rec.priority}
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {rec.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
