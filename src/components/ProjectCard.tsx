import type { Project } from '../types';

type ProjectCardProps = {
  index: number;
  project: Project;
};

const statusLabels: Record<Project['status'], string> = {
  'case-study': 'Case Study',
  'code-sample': 'Code Sample',
  documentation: 'Documentation',
};

const categoryLabels: Record<Project['category'], string> = {
  implementation: 'Implementation',
  'ux-web': 'UX / Web',
  systems: 'Systems',
  archive: 'Archive',
};

export function ProjectCard({ index, project }: ProjectCardProps) {
  const paddedIndex = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`project-card project-card--${project.category}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="card-spine" aria-hidden="true">
        <span>{paddedIndex}</span>
        <b>{categoryLabels[project.category]}</b>
      </div>

      <div className="dossier-sheet">
        <div className="dossier-corner" aria-hidden="true" />
        <div className="dossier-head">
          <div>
            <p className="card-kicker">Category: {categoryLabels[project.category]}</p>
            <h3 id={`${project.id}-title`}>{project.title}</h3>
          </div>
          <span className="document-mark" aria-label={statusLabels[project.status]} />
        </div>

        <div className="dossier-row dossier-summary">
          <span>Summary</span>
          <p>{project.summary}</p>
        </div>

        <dl className="dossier-table">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools.join(', ')}</dd>
          </div>
        </dl>

        <div className="dossier-row">
          <span>What this demonstrates</span>
          <ul>
            {project.outcomes.slice(0, 2).map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>

        <footer className="dossier-footer">
          <span>ID: CS-04-{paddedIndex}</span>
          <span>Updated: 2026-05-27</span>
        </footer>
      </div>
    </article>
  );
}
