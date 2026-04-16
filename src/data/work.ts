export interface WorkProject {
  title: string;
  category: string;
  overview: string;
  details?: string[];
  visualTitle?: string;
  visualSubtitle?: string;
  theme?: 'ocean' | 'forest' | 'ember' | 'slate';
}

export const workIntro = {
  title: 'Selected Works',
  subtitle:
    'A collection of embedded intelligence, industrial systems, and interface design projects. Each entry is content-driven, so new items can be added without touching the layout.'
};

export const projects: WorkProject[] = [
  {
    title: 'DeepSea Explorer Mk IV',
    category: 'ROBOTICS',
    overview:
      'Custom firmware development for low-latency tele-operation over high-loss network links.',
    details: [
      'Engineered communication pathways and resilience layers for remote underwater exploration hardware where packet loss and network instability were expected operating conditions.',
      'Built telemetry handling and device-control abstractions to keep operator feedback stable under constrained bandwidth and variable latency.'
    ],
    visualTitle: 'DEEPSEA',
    visualSubtitle: 'Explorer Mk IV',
    theme: 'ocean'
  },
  {
    title: 'TerraControl Dash',
    category: 'UI DESIGN',
    overview:
      'A high-contrast interface designed for heavy machinery cabins with extreme vibration and glare environments.',
    details: [
      'Structured the information hierarchy for operators who needed rapid access to diagnostics, mode switching, and safety-critical readouts while working outdoors.',
      'The component layout is intentionally modular so future screens, cards, and state summaries can be added without visual breakage.'
    ],
    visualTitle: 'AGRI',
    visualSubtitle: 'Safe UI in field work',
    theme: 'forest'
  }
];
