import type { FilterOption } from '../types';

type FilterTabsProps = {
  activeFilter: FilterOption['id'];
  filters: FilterOption[];
  resultCount: number;
  onChange: (filterId: FilterOption['id']) => void;
};

export function FilterTabs({ activeFilter, filters, resultCount, onChange }: FilterTabsProps) {
  return (
    <section className="filters" aria-labelledby="filter-heading">
      <div className="command-prompt" aria-hidden="true">
        &gt;_
      </div>

      <div className="filter-tabs" aria-label="Filter project samples">
        <h2 id="filter-heading" className="sr-only">
          Project Filters
        </h2>
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <button
              key={filter.id}
              className="filter-tab"
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(filter.id)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="view-mode" aria-live="polite">
        View: grid / {resultCount} shown
      </p>
    </section>
  );
}
