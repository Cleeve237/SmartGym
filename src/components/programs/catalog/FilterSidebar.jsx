import CategoryFilter from './CategoryFilter';
import DifficultyFilter from './DifficultyFilter';
import DurationFilter from './DurationFilter';
import PriceFilter from './PriceFilter';
import CoachFilter from './CoachFilter';
import CityFilter from './CityFilter';
import RatingFilter from './RatingFilter';

function FilterSidebar({ filters, onChange, onClear }) {
  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="pc-filter-card">
      <div className="pc-filter-header">
        <h3><i className="bi bi-funnel" /> Filtres</h3>
        {activeCount > 0 && <button className="pc-filter-clear" onClick={onClear}>Tout effacer</button>}
      </div>
      <CategoryFilter value={filters.category} onChange={(v) => onChange({ ...filters, category: v })} />
      <DifficultyFilter value={filters.difficulty} onChange={(v) => onChange({ ...filters, difficulty: v })} />
      <DurationFilter value={filters.duration} onChange={(v) => onChange({ ...filters, duration: v })} />
      <PriceFilter value={filters.price} onChange={(v) => onChange({ ...filters, price: v })} />
      <CoachFilter value={filters.coach} onChange={(v) => onChange({ ...filters, coach: v })} />
      <CityFilter value={filters.city} onChange={(v) => onChange({ ...filters, city: v })} />
      <RatingFilter value={filters.minRating} onChange={(v) => onChange({ ...filters, minRating: v })} />
    </div>
  );
}
export default FilterSidebar;
