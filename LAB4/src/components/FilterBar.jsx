// Child Component — receives filter state and stats from Parent via props
const FilterBar = ({ filter, onFilterChange, stats, onClearCompleted }) => {
  const filters = ["all", "active", "completed"];

  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-tab ${filter === f ? "active" : ""}`}
            onClick={() => onFilterChange(f)} //Call parent handler via props
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            <span className="filter-count">
              {f === "all" ? stats.total : f === "active" ? stats.active : stats.completed}
            </span>
          </button>
        ))}
      </div>

      {stats.completed > 0 && (
        <button className="btn-clear" onClick={onClearCompleted}>
          Clear completed ({stats.completed})
        </button>
      )}
    </div>
  );
};

export default FilterBar;
