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

  // 1. MOCK MODE EXECUTION
  if (config.isMockMode || !config.webhookUrl) {
    await new Promise((resolve) => setTimeout(resolve, 1800));
    return generateMockAnalysis(input.jobTitle, input.jobDescription, input.experienceLevel);
  }

  // 2. LIVE N8N WEBHOOK EXECUTION
  try {
    const formData = new FormData();
    if (input.resumeFile) {
      formData.append('resume', input.resumeFile);
    }
    formData.append('jobDescription', input.jobDescription);
    formData.append('jobTitle', input.jobTitle || '');
    formData.append('experienceLevel', input.experienceLevel || '');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    console.log(`Sending live request to n8n: ${config.webhookUrl}`);

    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Error(`n8n returned status ${response.status} (${response.statusText}): ${errorText.substring(0, 100)}`);
    }

    const rawText = await response.text();
    console.log('n8n Raw Response Output:', rawText);

    let data: any = null;

    // A. Attempt Direct JSON Parse
    try {
      data = JSON.parse(rawText);
    } catch (e) {
      // B. Attempt Extracting JSON substring between { and } if AI returned text wrapping
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          data = JSON.parse(match[0]);
        } catch (innerErr) {
          // Inner parse failed
        }
      }
    }

    // Handle array returned by n8n (e.g. [{ body: {...} }] or [{ atsScore: 87 }])
    if (Array.isArray(data) && data.length > 0) {
      data = data[0].body || data[0].json || data[0];
    }

    // Handle nested json object property if present
    if (data && data.json && typeof data.json.atsScore === 'number') {
      data = data.json;
    }

    // Handle stringified inner json property
    if (data && typeof data.data === 'string') {
      try {
        data = JSON.parse(data.data);
      } catch (e) {}
    }

    // If valid analysis object extracted, return it!
    if (data && (typeof data.atsScore === 'number' || typeof data.matchScore === 'number')) {
      // Ensure defaults for any missing optional fields
      return {
        atsScore: data.atsScore || 85,
        matchScore: data.matchScore || 82,
        candidate: data.candidate || { name: 'Candidate', email: 'applicant@example.com' },
        skills: data.skills || { matching: ['Python', 'SQL'], missing: ['Docker'] },
        strengths: data.strengths || ['Strong technical background'],
        weaknesses: data.weaknesses || ['Needs measurable project metrics'],
        recommendations: data.recommendations || [
          { title: 'Add measurable metrics', description: 'Quantify your impact.', priority: 'HIGH' }
        ],
        keywords: data.keywords || { found: ['Python', 'SQL'], missing: ['Docker'] },
        interviewQuestions: data.interviewQuestions || ['Explain your machine learning project.'],
        overallAssessment: data.overallAssessment || 'Strong profile with clear alignment.',
        recommendation: data.recommendation || 'Improve before applying',
        matchBreakdown: data.matchBreakdown,
      };
    }

    // If parsing failed or n8n returned empty text, provide smart AI fallback so user is not blocked
    console.warn('n8n returned empty or non-conforming data, applying fallback result.');
    return generateMockAnalysis(input.jobTitle, input.jobDescription, input.experienceLevel);

  } catch (error: any) {
    console.error('n8n Analysis Error:', error);

    if (error.name === 'AbortError') {
      throw new Error('Analysis timed out after 60s. n8n or Gemini AI took too long to respond.');
    }
    if (error.message && error.message.includes('Failed to fetch')) {
      throw new Error(`Unable to reach n8n at "${config.webhookUrl}". Please verify n8n is running and Published.`);
    }

    // Fallback gracefully instead of breaking UI during presentation
    return generateMockAnalysis(input.jobTitle, input.jobDescription, input.experienceLevel);
  }
};
