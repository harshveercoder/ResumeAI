import React, { useState } from 'react';
import { X, Server, CheckCircle2, AlertCircle, Zap } from 'lucide-react';
import { getWebhookConfig, saveWebhookConfig } from '../../config/n8nConfig';

interface WebhookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebhookModal: React.FC<WebhookModalProps> = ({ isOpen, onClose }) => {
  const currentConfig = getWebhookConfig();
  const [webhookUrl, setWebhookUrl] = useState(currentConfig.webhookUrl);
  const [isMockMode, setIsMockMode] = useState(currentConfig.isMockMode);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveWebhookConfig({
      webhookUrl: webhookUrl.trim(),
      isMockMode,
    });
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      <div className="card animate-fade-in" style={{
        width: '100%',
        maxWidth: '540px',
        padding: '2rem',
        backgroundColor: '#ffffff',
        position: 'relative',
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            backgroundColor: 'var(--brand-primary-light)',
            color: 'var(--brand-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Server size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
              n8n Webhook Settings
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Connect your n8n workflow or test using built-in AI mock data.
            </p>
          </div>
        </div>

        <form onSubmit={handleSave}>
          {/* Mode Selector */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <button
              type="button"
              onClick={() => setIsMockMode(true)}
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: isMockMode ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                backgroundColor: isMockMode ? 'var(--brand-primary-light)' : 'var(--bg-surface)',
                color: isMockMode ? 'var(--brand-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem' }}>
                <Zap size={18} />
                <span>Mock Data Mode</span>
              </div>
              <p style={{ fontSize: '0.78rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>
                Instant realistic response for complete UI testing.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setIsMockMode(false)}
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                border: !isMockMode ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                backgroundColor: !isMockMode ? 'var(--brand-primary-light)' : 'var(--bg-surface)',
                color: !isMockMode ? 'var(--brand-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem' }}>
                <Server size={18} />
                <span>Live n8n Webhook</span>
              </div>
              <p style={{ fontSize: '0.78rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>
                Send POST requests directly to your n8n workflow.
              </p>
            </button>
          </div>

          {/* Webhook URL Input */}
          <div className="form-group">
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              n8n Webhook URL (POST multipart/form-data)
            </label>
            <input
              type="url"
              className="form-input"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="https://n8n.your-domain.com/webhook/resume-analyze"
              required={!isMockMode}
              disabled={isMockMode}
              style={{ opacity: isMockMode ? 0.6 : 1 }}
            />
          </div>

          <div style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            backgroundColor: 'var(--bg-subtle)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
          }}>
            <AlertCircle size={16} style={{ minWidth: '16px', color: 'var(--brand-primary)', marginTop: '2px' }} />
            <span>
              The payload will include: <code>resume</code> (PDF), <code>jobDescription</code>, <code>jobTitle</code>, and <code>experienceLevel</code>.
            </span>
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {saveSuccess ? (
                <>
                  <CheckCircle2 size={18} /> Saved!
                </>
              ) : (
                'Save Settings'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
