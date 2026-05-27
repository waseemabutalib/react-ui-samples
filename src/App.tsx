import { useMemo, useState } from 'react';
import { FilterTabs } from './components/FilterTabs';
import { ProjectCard } from './components/ProjectCard';
import { filters, projects } from './data/projects';
import type { FilterOption } from './types';

const railItems = [
  { number: '01', label: 'Overview', accent: 'teal' },
  { number: '02', label: 'Implementation', accent: 'rust' },
  { number: '03', label: 'UX / Web', accent: 'blue' },
  { number: '04', label: 'Systems', accent: 'green' },
  { number: '05', label: 'Archive', accent: 'brown' },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterOption['id']>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="archive-shell">
      <aside className="index-rail" aria-label="Project archive index">
        <div className="index-plate">
          <span>Index</span>
          <strong>CS-04</strong>
        </div>

        <nav className="rail-nav" aria-label="Archive sections">
          {railItems.map((item) => (
            <a key={item.number} className={`rail-link rail-link--${item.accent}`} href="#project-grid">
              <span>{item.number}</span>
              <b>{item.label}</b>
            </a>
          ))}
        </nav>

        <div className="rail-tools" aria-label="Current archive settings">
          <p>// Filters</p>
          <strong>[{activeFilter}]</strong>
          <p>// Sort</p>
          <strong>Recent</strong>
          <p>// View</p>
          <div className="view-buttons" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>

        <div className="rail-version">
          <span>v1.0.0</span>
          <b>Public safe</b>
          <em>Archive mode read only</em>
        </div>
      </aside>

      <main className="archive-main">
        <section className="archive-header" aria-labelledby="page-title">
          <div className="title-block">
            <p className="file-label">Project Archive File</p>
            <h1 id="page-title">Case Study Card Explorer</h1>
            <p className="intro-copy">
              React + TypeScript sample using typed project data, reusable cards, filters, and
              accessible UI patterns.
            </p>
            <div className="hero-tags" aria-label="Sample highlights">
              <span>React</span>
              <span>TypeScript</span>
              <span>Accessible UI</span>
              <span>Public-safe data</span>
            </div>
          </div>

          <dl className="archive-meta" aria-label="Archive metadata">
            <div>
              <dt>Archive Code</dt>
              <dd>CS-04</dd>
            </div>
            <div>
              <dt>Module</dt>
              <dd>01</dd>
            </div>
            <div>
              <dt>Created</dt>
              <dd>2026-05-27</dd>
            </div>
            <div>
              <dt>Updated</dt>
              <dd>2026-05-27</dd>
            </div>
          </dl>
        </section>

        <FilterTabs
          activeFilter={activeFilter}
          filters={filters}
          resultCount={filteredProjects.length}
          onChange={setActiveFilter}
        />

        <section id="project-grid" className="project-grid" aria-label="Filtered project samples">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </section>

        <footer className="blueprint-footer" aria-label="Layout specifications">
          <span>Grid: 12 col</span>
          <span>Gutter: 24px</span>
          <span>Baseline: 8px</span>
          <span>Records: {projects.length}</span>
        </footer>
      </main>

      <aside className="details-panel" aria-label="Sample details">
        <div className="panel-menu" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h2>Sample Details</h2>

        <div className="detail-list">
          <div>
            <span className="detail-icon detail-icon--records" aria-hidden="true" />
            <p>4 typed project records</p>
          </div>
          <div>
            <span className="detail-icon detail-icon--components" aria-hidden="true" />
            <p>3 reusable components</p>
          </div>
          <div>
            <span className="detail-icon detail-icon--layout" aria-hidden="true" />
            <p>Responsive layout</p>
          </div>
          <div>
            <span className="detail-icon detail-icon--access" aria-hidden="true" />
            <p>Accessibility states</p>
          </div>
          <div>
            <span className="detail-icon detail-icon--safe" aria-hidden="true" />
            <p>Fake / sanitized data</p>
          </div>
        </div>

        <section className="system-notes" aria-labelledby="system-notes-title">
          <div className="note-heading">
            <h3 id="system-notes-title">System Notes</h3>
            <span>[SN-01]</span>
          </div>
          <p>
            Built as a portfolio-safe React + TypeScript sample focused on component structure,
            typed data, UI states, and accessibility.
          </p>
          <dl>
            <div>
              <dt>Framework</dt>
              <dd>React</dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>TypeScript</dd>
            </div>
            <div>
              <dt>Styling</dt>
              <dd>CSS</dd>
            </div>
            <div>
              <dt>Data Source</dt>
              <dd>/data/projects.ts</dd>
            </div>
            <div>
              <dt>State Mgmt</dt>
              <dd>useState / props</dd>
            </div>
            <div>
              <dt>A11y</dt>
              <dd>ARIA / keyboard</dd>
            </div>
            <div>
              <dt>Visibility</dt>
              <dd>Public-safe</dd>
            </div>
          </dl>
        </section>

        <p className="panel-footnote">All content is fictionalized or sanitized for public viewing.</p>
      </aside>
    </div>
  );
}
