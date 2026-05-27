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
      <div className="filter-header">
        <h2 id="filter-heading">Project Filters</h2>
        <p aria-live="polite">
          Showing {resultCount} {resultCount === 1 ? 'sample' : 'samples'}
        </p>
      </div>

      <div className="filter-tabs" aria-label="Filter project samples">
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
    </section>
  );
}
