import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WebhookModal } from './components/common/WebhookModal';
import { HeroSection } from './components/landing/HeroSection';
import { TrustSection } from './components/landing/TrustSection';
import { HowItWorks } from './components/landing/HowItWorks';
import { FeaturesSection } from './components/landing/FeaturesSection';
import { FinalCTA } from './components/landing/FinalCTA';
import { ResumeUpload } from './components/analyzer/ResumeUpload';
import { JobDescriptionForm } from './components/analyzer/JobDescriptionForm';
import { LoadingState } from './components/analyzer/LoadingState';
import { ResultsHeader } from './components/results/ResultsHeader';
import { AtsScoreCard } from './components/results/AtsScoreCard';
import { MatchBreakdownCard } from './components/results/MatchBreakdownCard';
import { SkillsAnalysisCard } from './components/results/SkillsAnalysisCard';
import { StrengthsWeaknessesCard } from './components/results/StrengthsWeaknessesCard';
import { RecommendationsSection } from './components/results/RecommendationsSection';
import { KeywordsSection } from './components/results/KeywordsSection';
import { InterviewQuestions } from './components/results/InterviewQuestions';
import { OverallAssessment } from './components/results/OverallAssessment';
import { analyzeResume } from './services/analyzeService';
import type { AnalysisResult, ExperienceLevel } from './types/resume';
import { Sparkles, ArrowRight, AlertTriangle } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'analyzer' | 'results'>('landing');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel | string>('');

  // Results State
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  // Form Validation: Disabled until valid PDF & Job description entered
  const isFormValid = resumeFile !== null && jobDescription.trim().length > 0;

  const handleStartAnalysis = async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    setErrorMessage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const result = await analyzeResume({
        resumeFile,
        jobDescription,
        jobTitle,
        experienceLevel,
      });

      setAnalysisResult(result);
      setCurrentTab('results');
      setIsLoading(false);

      // Trigger celebrate confetti on successful score load
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Fallback silently if confetti fails
      }
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.message || 'An error occurred during analysis.');
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setResumeFile(null);
    setJobDescription('');
    setJobTitle('');
    setExperienceLevel('');
    setErrorMessage(null);
    setCurrentTab('analyzer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintExport = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* App Navigation Header */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main style={{ flex: 1 }}>
        {/* VIEW 1: LANDING PAGE */}
        {currentTab === 'landing' && (
          <div className="animate-fade-in">
            <HeroSection onAnalyzeClick={() => setCurrentTab('analyzer')} />
            <TrustSection />
            <HowItWorks />
            <FeaturesSection />
            <FinalCTA onAnalyzeClick={() => setCurrentTab('analyzer')} />
          </div>
        )}

        {/* VIEW 2: RESUME ANALYZER FORM PAGE */}
        {currentTab === 'analyzer' && (
          <div className="container animate-fade-in" style={{ padding: '3.5rem 1.5rem 5rem' }}>
            {isLoading ? (
              <LoadingState />
            ) : (
              <div>
                {/* Header */}
                <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--brand-primary-light)',
                    color: 'var(--brand-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}>
                    <Sparkles size={16} />
                    <span>AI ATS Scanner</span>
                  </div>

                  <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Analyze Your Resume
                  </h1>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                    Compare your resume against the target position to discover your estimated ATS score and key improvements.
                  </p>
                </div>

                {/* Global Error Banner */}
                {errorMessage && (
                  <div style={{
                    maxWidth: '800px',
                    margin: '0 auto 2rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--status-danger-bg)',
                    border: '1px solid var(--status-danger-border)',
                    color: 'var(--status-danger-text)',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}>
                    <AlertTriangle size={20} style={{ minWidth: '20px' }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Two-Column Form Layout on Desktop */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2.5rem',
                  alignItems: 'stretch',
                }}>
                  {/* Column 1: Resume PDF Dropzone */}
                  <ResumeUpload
                    selectedFile={resumeFile}
                    onFileSelect={setResumeFile}
                  />

                  {/* Column 2: Job Description Input & Options */}
                  <JobDescriptionForm
                    jobDescription={jobDescription}
                    onChangeJobDescription={setJobDescription}
                    jobTitle={jobTitle}
                    onChangeJobTitle={setJobTitle}
                    experienceLevel={experienceLevel}
                    onChangeExperienceLevel={setExperienceLevel}
                  />
                </div>

                {/* Primary Analyze Button Bar */}
                <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                  <button
                    onClick={handleStartAnalysis}
                    disabled={!isFormValid}
                    className="btn btn-primary btn-gradient"
                    style={{
                      width: '100%',
                      padding: '1.1rem 2rem',
                      fontSize: '1.1rem',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <span>Analyze Resume</span>
                    <ArrowRight size={20} />
                  </button>

                  {!isFormValid && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.65rem' }}>
                      Please upload a PDF resume and paste a job description to enable analysis.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: ANALYSIS RESULTS DASHBOARD */}
        {currentTab === 'results' && analysisResult && (
          <div className="container animate-fade-in" style={{ padding: '3.5rem 1.5rem 5rem' }}>
            {/* Dashboard Header */}
            <ResultsHeader
              result={analysisResult}
              onReset={handleReset}
              onExport={handlePrintExport}
            />

            {/* Top Score Overview Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
            }}>
              {/* ATS Score Radial Gauge */}
              <AtsScoreCard score={analysisResult.atsScore} />

              {/* Match Breakdown Progress Bars */}
              <MatchBreakdownCard
                matchScore={analysisResult.matchScore}
                breakdown={analysisResult.matchBreakdown}
              />
            </div>

            {/* Skills Analysis (Matching vs Missing Chips) */}
            <SkillsAnalysisCard skills={analysisResult.skills} />

            {/* Resume Strengths & Weaknesses lists */}
            <StrengthsWeaknessesCard
              strengths={analysisResult.strengths}
              weaknesses={analysisResult.weaknesses}
            />

            {/* AI Action Recommendations */}
            <RecommendationsSection recommendations={analysisResult.recommendations} />

            {/* Keyword Analysis */}
            <KeywordsSection keywords={analysisResult.keywords} />

            {/* AI Interview Questions */}
            <InterviewQuestions questions={analysisResult.interviewQuestions} />

            {/* Overall Assessment & Export Bar */}
            <OverallAssessment
              assessment={analysisResult.overallAssessment}
              recommendation={analysisResult.recommendation}
              onReset={handleReset}
              onExport={handlePrintExport}
            />
          </div>
        )}
      </main>

      {/* App Footer */}
      <Footer />

      {/* n8n Webhook Configuration Modal */}
      <WebhookModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
