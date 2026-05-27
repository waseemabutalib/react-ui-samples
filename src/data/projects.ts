import type { FilterOption, Project } from '../types';

export const filters: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'ux-web', label: 'UX/Web' },
  { id: 'systems', label: 'Systems' },
  { id: 'archive', label: 'Archive' },
];

export const projects: Project[] = [
  {
    id: 'dhc-platform-support',
    title: 'Digital Platform Support Workflow',
    category: 'implementation',
    status: 'case-study',
    summary:
      'A generalized workflow for supporting web platforms, access requests, workshops, documentation, and stakeholder coordination in a research technology environment.',
    role: 'Implementation support, documentation, and stakeholder coordination',
    tools: ['Reclaim Hosting', 'Webflow', 'Omeka S', 'Figma', 'Moodle'],
    outcomes: [
      'Coordinated project access and support across multiple working groups.',
      'Created repeatable documentation for workshops and platform handoff.',
      'Translated technical setup into practical support for non-technical users.',
    ],
  },
  {
    id: 'portfolio-case-study-cards',
    title: 'Portfolio Case Study Cards',
    category: 'ux-web',
    status: 'code-sample',
    summary:
      'A responsive project-card layout for presenting case studies, tools, roles, and outcomes on a portfolio homepage.',
    role: 'Frontend UI implementation',
    tools: ['React', 'TypeScript', 'Responsive CSS', 'Accessibility'],
    outcomes: [
      'Uses typed props and reusable components.',
      'Provides keyboard-visible focus states and semantic markup.',
      'Adapts from single-column mobile layout to multi-column desktop layout.',
    ],
  },
  {
    id: 'progression-systems',
    title: 'Progression System Summary Card',
    category: 'systems',
    status: 'documentation',
    summary:
      'A UI pattern for explaining custom achievement, choice, and item upgrade systems through problem, tools, and outcome summaries.',
    role: 'Systems design communication',
    tools: ['Lua concepts', 'SQL concepts', 'Technical writing', 'UX'],
    outcomes: [
      'Shows how player actions connect to persistent state and feedback.',
      'Frames complex systems in a recruiter-friendly format.',
      'Avoids exposing raw scripts or platform internals.',
    ],
  },
  {
    id: 'archive-card-grid',
    title: 'Searchable Archive Card Pattern',
    category: 'archive',
    status: 'code-sample',
    summary:
      'A reusable card layout pattern for archive records, metadata previews, status labels, and responsive browse experiences.',
    role: 'UX/web component design',
    tools: ['React', 'TypeScript', 'CSS', 'Omeka S concepts'],
    outcomes: [
      'Organizes record details into scannable sections.',
      'Supports metadata-heavy content without overwhelming the layout.',
      'Keeps sample data fictionalized and safe for public sharing.',
    ],
  },
];
