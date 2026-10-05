import type { AnalysisResult, ExperienceLevel } from '../types/resume';

export const SAMPLE_JOB_DESCRIPTIONS = [
  {
    id: 'ml-intern',
    title: 'Machine Learning Intern',
    company: 'Nexus AI Labs',
    experienceLevel: 'Internship' as ExperienceLevel,
    text: `We are looking for a passionate Machine Learning Intern to join our AI Research & Engineering team. 

Key Responsibilities:
- Design, train, and evaluate deep learning models using PyTorch / TensorFlow.
- Process and clean large-scale tabular, text, and multimodal datasets.
- Deploy scalable model APIs using FastAPI, Docker, and AWS SageMaker.
- Collaborate with software engineers to integrate AI models into production applications.

Requirements:
- Strong proficiency in Python, NumPy, Pandas, and Scikit-Learn.
- Solid understanding of Machine Learning fundamentals, linear algebra, and statistics.
- Hands-on experience with SQL databases and Git version control.
- Familiarity with containerization (Docker) and Cloud Infrastructure (AWS / GCP) is a plus.`,
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Software Engineer',
    company: 'Vortex Tech',
    experienceLevel: 'Entry Level' as ExperienceLevel,
    text: `Vortex Tech is hiring a Frontend Developer to build high-performance web applications using React, TypeScript, and modern CSS architecture.

Responsibilities:
- Build responsive, accessible UI components with React and modern hooks.
- Optimize web app loading speed, rendering performance, and web vital scores.
- Integrate REST and GraphQL APIs into frontend applications.
- Participate in code reviews, write unit tests with Jest / Vitest, and uphold UI/UX standards.

Requirements:
- 1+ years experience with JavaScript (ES6+), TypeScript, React, and CSS/HTML5.
- Familiarity with TailwindCSS or modern CSS design systems.
- Experience using Git, Vite/Webpack, and RESTful APIs.
- Understanding of web performance optimization and cross-browser testing.`,
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    company: 'Starlight Analytics',
    experienceLevel: 'Entry Level' as ExperienceLevel,
    text: `Looking for a detail-oriented Data Analyst to turn raw business data into actionable insights and executive dashboards.

Responsibilities:
- Query large transactional databases using SQL and Python.
- Build automated BI dashboards in Tableau or PowerBI.
- Conduct A/B test analysis and statistical hypothesis testing.
- Partner with cross-functional teams to identify key growth metrics.

Requirements:
- Proficiency in Advanced SQL (Window functions, CTEs, Joins).
- Hands-on experience with Python (Pandas, Seaborn, Matplotlib).
- Experience creating dashboards in PowerBI, Tableau, or Metabase.
- Strong communication skills and ability to tell data-driven stories.`,
  },
];

export const generateMockAnalysis = (
  jobTitle?: string,
  jobDescription?: string,
  _experienceLevel?: string
): AnalysisResult => {
  const titleLower = (jobTitle || '').toLowerCase();
  const jdLower = (jobDescription || '').toLowerCase();

  const isFrontend = titleLower.includes('frontend') || titleLower.includes('react') || jdLower.includes('css') || jdLower.includes('web');

  if (isFrontend) {
    return {
      atsScore: 78,
      matchScore: 74,
      candidate: {
        name: 'Candidate Profile',
        email: 'applicant@example.com',
      },
      skills: {
        matching: ['React', 'JavaScript', 'HTML5 & CSS3', 'Git'],
        missing: ['TypeScript', 'GraphQL', 'Next.js', 'Jest/Unit Testing', 'Lighthouse Optimization'],
      },
      strengths: [
        'Solid foundational understanding of core JavaScript and React concepts',
        'Demonstrates clean version control habits with Git',
        'Clear educational background in technology',
      ],
      weaknesses: [
        'Missing crucial TypeScript static typing experience required by modern teams',
        'No automated unit testing tools (Jest, React Testing Library) mentioned',
        'Lacks quantifiable performance metrics regarding app rendering speed',
      ],
      recommendations: [
        {
          title: 'Learn & list TypeScript on project work',
          description: 'Convert or build a React project with TypeScript to satisfy the core typing requirements.',
          priority: 'HIGH',
        },
        {
          title: 'Include frontend testing tools',
          description: 'Add testing frameworks like Vitest or Jest to demonstrate code reliability.',
          priority: 'HIGH',
        },
        {
          title: 'Quantify application optimizations',
          description: 'Mention specific metrics like "Reduced bundle size by 28% through lazy loading".',
          priority: 'MEDIUM',
        },
      ],
      keywords: {
        found: ['React', 'JavaScript', 'HTML5', 'CSS', 'Git'],
        missing: ['TypeScript', 'GraphQL', 'Next.js', 'Jest', 'Vite', 'CI/CD'],
      },
      interviewQuestions: [
        'How do you handle props drilling and complex state management in React?',
        'What steps do you take to optimize image loading and web performance?',
        'Explain the difference between TypeScript interfaces and type aliases.',
        'How do you consume REST APIs asynchronously in React components?',
        'Tell us about a technical challenge you faced while debugging a web layout.',
      ],
      overallAssessment:
        'Your resume demonstrates core React capabilities, but is missing critical skills like TypeScript and automated testing required by the target posting. Addressing these gaps before applying will significantly increase your ATS match.',
      recommendation: 'Improve before applying',
      matchBreakdown: {
        skillsMatch: 70,
        experienceMatch: 72,
        educationMatch: 90,
        projectsMatch: 75,
        keywordsMatch: 65,
      },
    };
  }

  // Realistic Critical AI Assessment
  return {
    atsScore: 72,
    matchScore: 68,
    candidate: {
      name: 'Candidate Profile',
      email: 'applicant@example.com',
    },
    skills: {
      matching: ['Python', 'SQL', 'Data Analysis', 'Git'],
      missing: ['PyTorch / TensorFlow', 'Docker', 'AWS SageMaker', 'FastAPI', 'MLOps'],
    },
    strengths: [
      'Good foundational knowledge of Python and SQL database queries',
      'Relevant academic coursework supporting technical roles',
      'Clear structured educational background',
    ],
    weaknesses: [
      'Missing core deep learning frameworks (PyTorch / TensorFlow) specified in the job post',
      'Lacks containerization (Docker) and Cloud deployment (AWS/GCP) experience',
      'Project achievements lack measurable impact metrics or accuracy numbers',
    ],
    recommendations: [
      {
        title: 'Explicitly showcase PyTorch or TensorFlow projects',
        description: 'Add a dedicated model training project highlighting framework usage and metrics.',
        priority: 'HIGH',
      },
      {
        title: 'Include model deployment and API skills',
        description: 'Demonstrate how your ML models were deployed using FastAPI or Docker.',
        priority: 'HIGH',
      },
      {
        title: 'Quantify achievements with validation metrics',
        description: 'Add numbers to project bullets (e.g. "Achieved 91.2% F1 score on test dataset").',
        priority: 'MEDIUM',
      },
    ],
    keywords: {
      found: ['Python', 'SQL', 'Data Analysis', 'Git'],
      missing: ['PyTorch', 'TensorFlow', 'Docker', 'AWS', 'FastAPI', 'MLOps', 'SageMaker'],
    },
    interviewQuestions: [
      'How do you handle missing values and feature scaling during data preprocessing?',
      'Can you explain your model evaluation strategy and cross-validation techniques?',
      'Why is Docker containerization important when deploying machine learning models?',
      'How do you prevent overfitting in deep learning architectures?',
      'Describe a technical challenge you encountered when handling large datasets.',
    ],
    overallAssessment:
      'Your resume has a good Python foundation, but lacks several mandatory deep learning frameworks and deployment technologies required for this role. Add these missing skills explicitly before submitting your application.',
    recommendation: 'Improve before applying',
    matchBreakdown: {
      skillsMatch: 65,
      experienceMatch: 68,
      educationMatch: 88,
      projectsMatch: 70,
      keywordsMatch: 60,
    },
  };
};
