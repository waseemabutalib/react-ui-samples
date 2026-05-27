import type { Project } from '../types';
import { SkillTag } from './SkillTag';

type ProjectCardProps = {
  project: Project;
};

const statusLabels: Record<Project['status'], string> = {
  'case-study': 'Case Study',
  'code-sample': 'Code Sample',
  documentation: 'Documentation',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" aria-labelledby={`${project.id}-title`}>
      <div className="project-card__header">
        <div>
          <p className="eyebrow">{statusLabels[project.status]}</p>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
        </div>
        <span className="category-pill">{project.category}</span>
      </div>

      <p className="project-summary">{project.summary}</p>

      <dl className="project-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>

      <div className="tag-list" aria-label={`${project.title} tools`}>
        {project.tools.map((tool) => (
          <SkillTag key={tool} label={tool} />
        ))}
      </div>

      <div className="outcomes">
        <h4>What this demonstrates</h4>
        <ul>
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>

      {project.linkUrl && project.linkLabel ? (
        <a className="card-link" href={project.linkUrl}>
          {project.linkLabel}
        </a>
      ) : null}
    </article>
  );
}
