import { useMemo, useState } from 'react';
import { FilterTabs } from './components/FilterTabs';
import { ProjectCard } from './components/ProjectCard';
import { filters, projects } from './data/projects';
import type { FilterOption } from './types';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterOption['id']>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="app-shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">React + TypeScript Sample</p>
        <h1 id="page-title">Case Study Card Explorer</h1>
        <p>
          A small public-safe UI sample showing typed project data, reusable cards, filter controls,
          responsive layout, and accessible interface patterns.
        </p>
      </section>

      <FilterTabs
        activeFilter={activeFilter}
        filters={filters}
        resultCount={filteredProjects.length}
        onChange={setActiveFilter}
      />

      <section className="project-grid" aria-label="Filtered project samples">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
