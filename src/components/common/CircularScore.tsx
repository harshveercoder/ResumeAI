import React from 'react';

interface CircularScoreProps {
  score: number; // 0 - 100
  size?: number;
  strokeWidth?: number;
}

export const CircularScore: React.FC<CircularScoreProps> = ({
  score,
  size = 180,
  strokeWidth = 14,
}) => {
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Determine Tier and Color
  let color = '#10b981'; // Emerald
  let tierLabel = 'Excellent Match';
  let tierBg = '#ecfdf5';

  if (score < 60) {
    color = '#ef4444'; // Red
    tierLabel = 'Needs Improvement';
    tierBg = '#fef2f2';
  } else if (score < 75) {
    color = '#f59e0b'; // Amber
    tierLabel = 'Moderate Match';
    tierBg = '#fffbeb';
  } else if (score < 90) {
    color = '#4f46e5'; // Indigo
    tierLabel = 'Strong Match';
    tierBg = '#eef2ff';
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
          />
          {/* Animated Foreground Ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </svg>

        {/* Center Score Text */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}>
            {score}
          </span>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginTop: '0.2rem',
          }}>
            / 100
          </span>
        </div>
      </div>

      {/* Tier Label Badge */}
      <div style={{
        marginTop: '1rem',
        padding: '0.35rem 0.95rem',
        borderRadius: 'var(--radius-full)',
        backgroundColor: tierBg,
        color: color,
        fontWeight: 700,
        fontSize: '0.875rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        border: `1px solid ${color}33`,
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: color,
        }} />
        {tierLabel}
      </div>
    </div>
  );
};
