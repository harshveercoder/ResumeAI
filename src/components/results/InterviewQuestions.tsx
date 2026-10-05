import React, { useState } from 'react';
import { MessageSquareCode, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

interface InterviewQuestionsProps {
  questions: string[];
}

export const InterviewQuestions: React.FC<InterviewQuestionsProps> = ({ questions }) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          backgroundColor: '#e0e7ff',
          color: '#6366f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <MessageSquareCode size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Prepare for your interview
          </h3>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Customized technical & behavioral interview questions generated for this target position.
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {questions.map((qText, idx) => {
          const isExpanded = expandedIdx === idx;

          return (
            <div
              key={idx}
              className="card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onClick={() => toggleExpand(idx)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    color: 'var(--brand-primary)',
                    backgroundColor: 'var(--brand-primary-light)',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '28px',
                  }}>
                    {idx + 1}
                  </span>
                  <h4 style={{ fontSize: '1.025rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {qText}
                  </h4>
                </div>

                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {isExpanded && (
                <div style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-color-subtle)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--bg-main)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.55rem',
                }}>
                  <Lightbulb size={18} style={{ color: '#f59e0b', minWidth: '18px', marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                      Recommended Answer Strategy:
                    </strong>
                    <span>
                      Use the STAR method (Situation, Task, Action, Result). Highlight specific tools mentioned in your resume and quantify the impact of your solution.
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
