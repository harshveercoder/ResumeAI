import { getWebhookConfig } from '../config/n8nConfig';
import type { AnalysisRequestInput, AnalysisResult } from '../types/resume';
import { generateMockAnalysis } from './mockData';

export const analyzeResume = async (
  input: AnalysisRequestInput
): Promise<AnalysisResult> => {
  const config = getWebhookConfig();

  if (!input.jobDescription || input.jobDescription.trim().length === 0) {
    throw new Error('Please enter a target job description before running the analysis.');
  }

  if (config.isMockMode || !config.webhookUrl) {
    await new Promise((resolve) => setTimeout(resolve, 1800));
    return generateMockAnalysis(input.jobTitle, input.jobDescription, input.experienceLevel);
  }

  try {
    const formData = new FormData();
    if (input.resumeFile) {
      formData.append('resume', input.resumeFile);
    }
    formData.append('jobDescription', input.jobDescription);
    formData.append('jobTitle', input.jobTitle || '');
    formData.append('experienceLevel', input.experienceLevel || '');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000);

    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Webhook returned status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (typeof data.atsScore !== 'number' || !data.skills) {
      throw new Error('Invalid JSON response format from n8n webhook. Missing atsScore or skills fields.');
    }

    return data as AnalysisResult;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Analysis timed out. The n8n AI workflow took too long to respond.');
    }
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error('Unable to connect to n8n webhook. Please check your network or verify the webhook URL in settings.');
    }
    throw new Error(error.message || 'Something went wrong while analyzing your resume. Please try again.');
  }
};
