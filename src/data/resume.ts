export interface ExperienceItem {
  title: string;
  company: string;
  range: string;
  badge?: string;
  badgeTone?: 'neutral' | 'accent';
  summary?: string;
  points?: string[];
}

export const professionalSummary =
  'Bridging the gap between hardware precision and intelligent software orchestration. Expert embedded systems engineer with 12+ years of experience specializing in automotive R&D, industrial automation, and AI-driven hardware optimization.';

export const experiences: ExperienceItem[] = [
  {
    title: 'Lead Consultant (Freelance)',
    company: 'Independent Engineering Services',
    range: '2022 - Present',
    badge: 'Current',
    badgeTone: 'accent',
    summary:
      'Architectural guidance for AIoT implementations, platform modernization, and embedded systems strategy across industrial programs.',
    points: [
      'Designed hardware-aware software architecture for intelligent industrial products where reliability, observability, and long device lifecycles were critical.',
      'Led system decomposition, delivery planning, and technical decision-making across firmware, backend integration, and operator tooling.',
      'Built reusable engineering foundations that allowed new modules and customer-specific requirements to be added without destabilizing the core platform.'
    ]
  },
  {
    title: 'Senior Systems Engineer',
    company: 'Furgo N.V',
    range: '2019 - 2022',
    badge: 'Marine',
    badgeTone: 'neutral',
    summary:
      'Engineered subsea sensing and control workflows for mission-critical remote systems.',
    points: [
      'Developed integration layers between embedded devices, sensor payloads, and operator-facing systems in environments with strict uptime expectations.',
      'Improved firmware behavior and telemetry pathways for equipment used in offshore and underwater operations.'
    ]
  },
  {
    title: 'Embedded Developer',
    company: 'Agrifac Machinery B.V.',
    range: '2017 - 2019',
    badge: 'Core',
    badgeTone: 'accent',
    summary:
      'Worked on embedded software for agricultural machinery and field-ready control systems.',
    points: [
      'Implemented features for control units operating in harsh physical environments with varying connectivity and power constraints.',
      'Collaborated with domain teams to convert operator needs into stable production firmware and interface behavior.'
    ]
  },
  {
    title: 'Research Engineer',
    company: 'Mercedes-Benz R&D',
    range: '2014 - 2017',
    badge: 'R&D',
    badgeTone: 'neutral',
    summary:
      'Contributed to automotive research programs spanning intelligent systems, validation, and prototyping.',
    points: [
      'Evaluated new approaches for embedded intelligence and system-level improvements in vehicle research settings.',
      'Built prototype tooling to support experimentation, analysis, and technical validation.'
    ]
  },
  {
    title: 'Associate Consultant',
    company: 'Mindtree',
    range: '2012 - 2014',
    badge: 'Enterprise',
    badgeTone: 'neutral',
    summary:
      'Delivered enterprise engineering solutions with an emphasis on reliability and structured execution.',
    points: [
      'Supported delivery teams with implementation, integration, and production-facing engineering tasks.',
      'Built a foundation in scalable delivery practices, stakeholder communication, and cross-team collaboration.'
    ]
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
