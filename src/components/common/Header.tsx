import React from 'react';
import { Sparkles, FileText, Settings, ArrowRight } from 'lucide-react';
import { getWebhookConfig } from '../../config/n8nConfig';

interface HeaderProps {
  currentTab: 'landing' | 'analyzer' | 'results';
  onNavigate: (tab: 'landing' | 'analyzer' | 'results') => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenSettings }) => {
  const config = getWebhookConfig();

  return (
    <header className="no-print" style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('landing')} 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--brand-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
          }}>
            <FileText size={22} strokeWidth={2.2} />
            <Sparkles 
              size={14} 
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                color: '#facc15',
                filter: 'drop-shadow(0 0 4px rgba(250, 204, 21, 0.6))',
              }} 
            />
          </div>
          <div>
            <span style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
            }}>
              Resume<span className="gradient-text">AI</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <button 
            onClick={() => onNavigate('landing')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: currentTab === 'landing' ? 700 : 500,
              color: currentTab === 'landing' ? 'var(--brand-primary)' : 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            How It Works
          </button>
          <button 
            onClick={() => onNavigate('landing')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            Features
          </button>
        </nav>

        {/* Header Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* n8n Webhook Settings Trigger */}
          <button
            onClick={onOpenSettings}
            className="btn btn-secondary"
            title="Configure n8n Webhook & API Mode"
            style={{
              padding: '0.55rem 0.85rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-md)',
              position: 'relative',
            }}
          >
            <Settings size={16} />
            <span style={{ display: 'inline' }}>
              {config.isMockMode ? 'Mock Mode' : 'Live Webhook'}
            </span>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: config.isMockMode ? '#f59e0b' : '#10b981',
              display: 'inline-block',
            }} />
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onNavigate('analyzer')}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
          >
            <span>Analyze My Resume</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
