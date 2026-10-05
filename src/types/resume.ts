export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export type ExperienceLevel = 'Internship' | 'Entry Level' | 'Mid Level' | 'Senior';

export type RecommendedAction = 'Ready to apply' | 'Improve before applying' | 'Major revision needed';

export interface RecommendationItem {
  title: string;
  description: string;
  priority: PriorityLevel;
}

export interface CandidateInfo {
  name?: string;
  email?: string;
}

export interface SkillsBreakdown {
  matching: string[];
  missing: string[];
}

export interface KeywordsBreakdown {
  found: string[];
  missing: string[];
}

export interface AnalysisResult {
  atsScore: number; // 0-100
  matchScore: number; // 0-100
  candidate?: CandidateInfo;
  skills: SkillsBreakdown;
  strengths: string[];
  weaknesses: string[];
  recommendations: RecommendationItem[];
  keywords: KeywordsBreakdown;
  interviewQuestions: string[];
  overallAssessment: string;
  recommendation: RecommendedAction;
  // Optional breakdown details for match score visualization
  matchBreakdown?: {
    skillsMatch: number;
    experienceMatch: number;
    educationMatch: number;
    projectsMatch: number;
    keywordsMatch: number;
  };
}

export interface AnalysisRequestInput {
  resumeFile: File | null;
  jobDescription: string;
  jobTitle?: string;
  experienceLevel?: ExperienceLevel | string;
}

export interface WebhookConfig {
  webhookUrl: string;
  isMockMode: boolean;
}
