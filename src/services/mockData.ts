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
      atsScore: 89,
      matchScore: 86,
      candidate: {
        name: 'Alex Rivera',
        email: 'alex.rivera@example.com',
      },
      skills: {
        matching: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Git', 'REST APIs', 'Vite'],
        missing: ['GraphQL', 'Next.js', 'Jest/Testing Library', 'Web Accessibility (a11y)'],
      },
      strengths: [
        'Exceptional component architecture and TypeScript usage',
        'Strong hands-on experience building SPA dashboards',
        'Proven understanding of modern state management and hooks',
        'Clean Git workflow and collaboration practices',
        'Clear educational background in Computer Science',
      ],
      weaknesses: [
        'Lacks explicit automated testing experience (Jest/Cypress)',
        'Few quantifiable metrics regarding app performance improvements (e.g. Lighthouse scores)',
        'Missing keywords related to GraphQL and server-side rendering',
      ],
      recommendations: [
        {
          title: 'Add performance metrics to project bullet points',
          description: 'Mention specific Lighthouse performance optimizations (e.g. "Improved page load time by 35% through code splitting and asset optimization").',
          priority: 'HIGH',
        },
        {
          title: 'Highlight testing frameworks',
          description: 'Include unit testing tools like Jest, Vitest, or React Testing Library to match modern frontend team requirements.',
          priority: 'HIGH',
        },
        {
          title: 'Incorporate missing API technologies',
          description: 'If you have worked with GraphQL or Next.js, explicitly list them in your technical skills grid.',
          priority: 'MEDIUM',
        },
      ],
      keywords: {
        found: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Git', 'REST API', 'Vite', 'Responsive Design'],
        missing: ['GraphQL', 'Next.js', 'Jest', 'Cypress', 'Lighthouse', 'CI/CD'],
      },
      interviewQuestions: [
        'How do you manage complex application state in React and avoid unnecessary re-renders?',
        'Can you explain your approach to component modularity and reusability?',
        'How do you handle API error state and asynchronous loading in your frontend apps?',
        'What steps do you take to optimize Web Vitals and mobile performance?',
        'Tell us about a time you resolved a difficult CSS layout or cross-browser compatibility issue.',
      ],
      overallAssessment:
        'Your resume shows a strong alignment with frontend engineering roles. Your core React and TypeScript foundation is solid. To maximize your callback rate, quantify your achievements with performance metrics and mention modern testing practices.',
      recommendation: 'Ready to apply',
      matchBreakdown: {
        skillsMatch: 88,
        experienceMatch: 84,
        educationMatch: 95,
        projectsMatch: 90,
        keywordsMatch: 75,
      },
    };
  }

  return {
    atsScore: 87,
    matchScore: 84,
    candidate: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    skills: {
      matching: ['Python', 'SQL', 'Machine Learning', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'Git'],
      missing: ['Docker', 'AWS SageMaker', 'FastAPI', 'Kubernetes'],
    },
    strengths: [
      'Strong technical project experience in Deep Learning & NLP',
      'Relevant foundational skills in Python data science libraries',
      'Good alignment of technical keywords with target job posting',
      'Certifications and academic coursework directly support the target role',
      'Clear educational background in Data Science / Computer Science',
    ],
    weaknesses: [
      'Several project achievements lack quantifiable impact metrics',
      'Some technical project descriptions are generic and process-oriented',
      'Important deployment & MLOps keywords (Docker, AWS) are missing',
      'Experience descriptions could leverage stronger industry action verbs',
    ],
    recommendations: [
      {
        title: 'Add measurable achievements to technical projects',
        description: 'Quantify your results wherever possible (e.g. "Achieved 92.4% validation accuracy on a dataset of 50k samples, outperforming baseline model by 14%").',
        priority: 'HIGH',
      },
      {
        title: 'Highlight deployment & API skills',
        description: 'Add a section or bullet point showing how your models were served (e.g. Flask/FastAPI, REST APIs, or Docker containers).',
        priority: 'HIGH',
      },
      {
        title: 'Re-word bullet points with strong action verbs',
        description: 'Start every bullet point with strong impact verbs like "Engineered", "Optimized", "Architected", or "Deployed" rather than "Worked on" or "Responsible for".',
        priority: 'MEDIUM',
      },
    ],
    keywords: {
      found: ['Python', 'SQL', 'Machine Learning', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'Data Analysis', 'Git'],
      missing: ['Docker', 'AWS', 'FastAPI', 'Kubernetes', 'MLOps', 'SageMaker', 'CI/CD'],
    },
    interviewQuestions: [
      'Explain your machine learning project architecture and your specific contributions.',
      'How did you evaluate your model performance and handle dataset overfitting?',
      'Why did you choose PyTorch/TensorFlow over alternative ML frameworks for this task?',
      'How would you deploy your machine learning model to a production REST API?',
      'Describe a technical challenge you faced when processing unstructured data and how you solved it.',
    ],
    overallAssessment:
      'Your resume is a strong match for this position. Your technical skills and project experience align well with the core role requirements. Before applying, focus on adding measurable metrics to your projects and incorporating missing MLOps keywords where applicable.',
    recommendation: 'Improve before applying',
    matchBreakdown: {
      skillsMatch: 85,
      experienceMatch: 82,
      educationMatch: 95,
      projectsMatch: 88,
      keywordsMatch: 70,
    },
  };
};
