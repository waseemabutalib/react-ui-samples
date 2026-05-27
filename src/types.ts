export type ProjectCategory = 'implementation' | 'ux-web' | 'systems' | 'archive';

export type ProjectStatus = 'case-study' | 'code-sample' | 'documentation';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  role: string;
  tools: string[];
  outcomes: string[];
  linkLabel?: string;
  linkUrl?: string;
};

export type FilterOption = {
  id: ProjectCategory | 'all';
  label: string;
};
