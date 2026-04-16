export interface ExperienceItem {
  role: string;
  company: string;
  range: string;
  highlight?: string;
  badge?: string;
  badgeTone?: 'neutral' | 'accent';
}

export const professionalSummary =
  'Bridging the gap between hardware precision and intelligent software orchestration. Expert embedded systems engineer with 12+ years of experience specializing in automotive R&D, industrial automation, and AI-driven hardware optimization.';

export const experiences: ExperienceItem[] = [
  {
    role: 'Lead Consultant (Freelance)',
    company: 'Independent Engineering Services',
    range: '2022 - Present',
    highlight: 'Mercedes-Benz R&D',
    badge: 'Current',
    badgeTone: 'accent'
  },
  {
    role: 'Senior Systems Engineer',
    company: 'Furgo N.V',
    range: '2019 - 2022',
    badge: 'Marine',
    badgeTone: 'neutral'
  },
  {
    role: 'Embedded Developer',
    company: 'Agrifac Machinery B.V.',
    range: '2017 - 2019',
    badge: 'Core',
    badgeTone: 'accent'
  },
  {
    role: 'Research Engineer',
    company: 'Mercedes-Benz R&D',
    range: '2014 - 2017',
    badge: 'R&D',
    badgeTone: 'neutral'
  },
  {
    role: 'Associate Consultant',
    company: 'Mindtree',
    range: '2012 - 2014',
    badge: 'Enterprise',
    badgeTone: 'neutral'
  }
];

export const workSkills = [
  'Embedded C/C++',
  'Python',
  'RTOS (FreeRTOS)',
  'ROS/IoT',
  'CAN/LIN Bus',
  'Edge AI',
  'Cloud Deploy'
];

export const softSkills = [
  'Strategic Leadership',
  'Cross Functional Collaboration',
  'Problem Solving',
  'Agile Methodology',
  'Technical Writing'
];

export const education = [
  'M.Tech in Embedded Systems',
  'B.E. Electronics & Communication'
];

export const awards = [
  'Innovation Excellence Award',
  'Spot Award for Deliverables'
];
