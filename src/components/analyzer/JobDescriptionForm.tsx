import React from 'react';
import { SAMPLE_JOB_DESCRIPTIONS } from '../../services/mockData';
import type { ExperienceLevel } from '../../types/resume';

interface JobDescriptionFormProps {
  jobDescription: string;
  onChangeJobDescription: (val: string) => void;
  jobTitle: string;
  onChangeJobTitle: (val: string) => void;
  experienceLevel: ExperienceLevel | string;
  onChangeExperienceLevel: (val: ExperienceLevel | string) => void;
}

export const JobDescriptionForm: React.FC<JobDescriptionFormProps> = ({
  jobDescription,
  onChangeJobDescription,
  jobTitle,
  onChangeJobTitle,
  experienceLevel,
  onChangeExperienceLevel,
}) => {
  const handleSelectSample = (sampleId: string) => {
    const sample = SAMPLE_JOB_DESCRIPTIONS.find((s) => s.id === sampleId);
    if (sample) {
      onChangeJobDescription(sample.text);
      onChangeJobTitle(sample.title);
      onChangeExperienceLevel(sample.experienceLevel);
    }
  };

  return (
    <div className="card" style={{ padding: '1.75rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1.25rem',
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
            Target job description
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Paste the job description for the position you are applying for.
          </p>
        </div>

        {/* Quick Sample Presets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Sample JDs:
          </span>
          {SAMPLE_JOB_DESCRIPTIONS.map((sample) => (
            <button
              key={sample.id}
              type="button"
              onClick={() => handleSelectSample(sample.id)}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-main)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {sample.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Textarea */}
      <div className="form-group" style={{ marginBottom: '1.5rem' }}>
        <div className="form-label">
          <span>Job Description Text</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            {jobDescription.length} characters
          </span>
        </div>

        <textarea
          className="form-textarea"
          value={jobDescription}
          onChange={(e) => onChangeJobDescription(e.target.value)}
          placeholder="Paste the job description here... (e.g. Responsibilities, required technical skills, qualifications)"
          rows={7}
        />
      </div>

      {/* Optional Fields Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        paddingTop: '1.25rem',
        borderTop: '1px solid var(--border-color-subtle)',
      }}>
        {/* Optional Job Title */}
        <div>
          <label className="form-label" style={{ fontSize: '0.85rem' }}>
            Target Job Title <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(Optional)</span>
          </label>
          <input
            type="text"
            className="form-input"
            value={jobTitle}
            onChange={(e) => onChangeJobTitle(e.target.value)}
            placeholder="e.g. Machine Learning Intern"
          />
        </div>

        {/* Optional Experience Level */}
        <div>
          <label className="form-label" style={{ fontSize: '0.85rem' }}>
            Experience Level <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(Optional)</span>
          </label>
          <select
            className="form-select"
            value={experienceLevel}
            onChange={(e) => onChangeExperienceLevel(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="Internship">Internship</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>
    </div>
  );
};
