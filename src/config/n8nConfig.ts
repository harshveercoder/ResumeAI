import type { WebhookConfig } from '../types/resume';

const DEFAULT_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n.example.com/webhook/resume-analyze';
const STORAGE_KEY_URL = 'resumeai_n8n_webhook_url';
const STORAGE_KEY_MODE = 'resumeai_use_mock_mode';

export const getWebhookConfig = (): WebhookConfig => {
  const savedUrl = localStorage.getItem(STORAGE_KEY_URL);
  const savedMode = localStorage.getItem(STORAGE_KEY_MODE);

  return {
    webhookUrl: savedUrl || DEFAULT_WEBHOOK_URL,
    isMockMode: savedMode === null ? true : savedMode === 'true',
  };
};

export const saveWebhookConfig = (config: WebhookConfig): void => {
  localStorage.setItem(STORAGE_KEY_URL, config.webhookUrl);
  localStorage.setItem(STORAGE_KEY_MODE, String(config.isMockMode));
};
