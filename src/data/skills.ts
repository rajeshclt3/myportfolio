export interface SkillItem {
  name: string;
  description: string;
  level?: string;
}

export interface SkillSectionData {
  title: string;
  items: SkillItem[];
}

export const skillPageIntro = {
  eyebrow: 'TECHNICAL ARSENAL',
  title: 'Skills & Technologies',
  subtitle:
    'A comprehensive curation of my technical capabilities across programming paradigms and modern artificial intelligence frameworks.'
};

export const skillSections: SkillSectionData[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Python',
        description: 'System architecture, data engineering, and automation scripts.',
        level: 'ADVANCED'
      },
      {
        name: 'R',
        description: 'Statistical modeling, data visualization, and quantitative analysis.',
        level: 'ADVANCED'
      },
      {
        name: 'Java',
        description: 'Enterprise-scale backend systems and high-performance applications.',
        level: 'ADVANCED'
      },
      {
        name: 'JavaScript',
        description: 'Full-stack development and interactive web experiences.',
        level: 'ADVANCED'
      },
      {
        name: 'TypeScript',
        description: 'Strongly typed architecture for large front-end ecosystems.',
        level: 'ADVANCED'
      },
      {
        name: 'PowerShell',
        description: 'Windows automation and cloud resource orchestration.',
        level: 'ADVANCED'
      },
      {
        name: 'Shell/Bash',
        description: 'Linux server management and CI/CD pipeline scripting.',
        level: 'ADVANCED'
      }
    ]
  },
  {
    title: 'AI & Machine Learning',
    items: [
      {
        name: 'AI Security',
        description: 'Adversarial defense, prompt injection mitigation, and robust alignment testing.',
        level: 'EXPERT'
      },
      {
        name: 'Generative AI',
        description: 'Diffusion and transformer-based generation pipelines.',
        level: 'ADVANCED'
      },
      {
        name: 'NLP',
        description: 'Sentiment analysis, NER, and semantic parsing.',
        level: 'ADVANCED'
      },
      {
        name: 'Machine Learning',
        description: 'Supervised, unsupervised, and reinforcement learning workflows.',
        level: 'ADVANCED'
      },
      {
        name: 'Deep Learning',
        description: 'Neural network architecture and optimization.',
        level: 'ADVANCED'
      }
    ]
  }
];

export const orchestrationSkills = [
  'Vision',
  'AI Agents',
  'Function Calling',
  'RAG',
  'LangChain',
  'LangGraph'
];
