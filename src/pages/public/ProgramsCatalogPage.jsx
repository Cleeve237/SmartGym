import { useState, useMemo, useCallback } from 'react';
import '../../components/programs/catalog/ProgramsCatalog.css';
import ProgramsHero from '../../components/programs/catalog/ProgramsHero';
import FilterSidebar from '../../components/programs/catalog/FilterSidebar';
import FilterDrawer from '../../components/programs/catalog/FilterDrawer';
import SortDropdown from '../../components/programs/catalog/SortDropdown';
import ViewSwitcher from '../../components/programs/catalog/ViewSwitcher';
import ProgramGrid from '../../components/programs/catalog/ProgramGrid';
import ProgramList from '../../components/programs/catalog/ProgramList';
import ProgramPagination from '../../components/programs/catalog/ProgramPagination';
import PopularPrograms from '../../components/programs/catalog/PopularPrograms';
import RecommendedPrograms from '../../components/programs/catalog/RecommendedPrograms';
import ProgramsSkeleton from '../../components/programs/catalog/ProgramsSkeleton';
import EmptyPrograms from '../../components/programs/catalog/EmptyPrograms';
import ProgramsCTA from '../../components/programs/catalog/ProgramsCTA';
import { programs } from '../../components/programs/catalog/mockPrograms';

const ITEMS_PER_PAGE = 9;

function filterByPriceRange(program, range) {
  const map = { free: 0, budget: 10000, mid: 25000, premium: Infinity };
  const max = map[range];
  return range === 'premium' ? program.price >= 25000 : program.price <= max;
}

function ProgramsCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', difficulty: '', duration: '', price: '', coach: '', city: '', minRating: 0 });
  const [sortBy, setSortBy] = useState('popular');
  const [view, setView] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...programs];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.coach.toLowerCase().includes(q)
      );
    }

    if (filters.category) result = result.filter((p) => p.category === filters.category);
    if (filters.difficulty) result = result.filter((p) => p.difficulty === filters.difficulty);
    if (filters.duration) {
      result = result.filter((p) => {
        if (filters.duration === 'short') return p.weeks <= 4;
        if (filters.duration === 'medium') return p.weeks >= 5 && p.weeks <= 8;
        return p.weeks >= 9;
      });
    }
    if (filters.price) result = result.filter((p) => filterByPriceRange(p, filters.price));
    if (filters.coach) result = result.filter((p) => p.coach === filters.coach);
    if (filters.city) result = result.filter((p) => p.city === filters.city);
    if (filters.minRating) result = result.filter((p) => p.rating >= filters.minRating);

    switch (sortBy) {
      case 'popular': result.sort((a, b) => b.enrolled - a.enrolled); break;
      case 'newest': result.sort((a, b) => b.weeks - a.weeks); break;
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'duration': result.sort((a, b) => a.weeks - b.weeks); break;
      default: break;
    }

    return result;
  }, [searchQuery, filters, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const popular = useMemo(() => programs.filter((p) => p.popular), []);
  const recommended = useMemo(() => programs.filter((p) => p.recommended), []);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  }, []);

  const handleClearAll = useCallback(() => {
    setFilters({ category: '', difficulty: '', duration: '', price: '', coach: '', city: '', minRating: 0 });
    setSearchQuery('');
    setCurrentPage(1);
  }, []);

  const handleToggleFavorite = useCallback((id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  }, []);

  const handleToggleCompare = useCallback((id) => {
    setCompareList((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  }, []);

  const handleSearch = useCallback(() => {
    setCurrentPage(1);
  }, []);

  if (loading) {
    return (
      <div className="pc-page">
        <div className="pc-hero"><div className="pc-hero-blob pc-hero-blob--1" /><div className="pc-hero-blob pc-hero-blob--2" /></div>
        <div className="container"><ProgramsSkeleton count={6} /></div>
      </div>
    );
  }

  return (
    <div className="pc-page">
      <ProgramsHero searchQuery={searchQuery} onSearchChange={setSearchQuery} onSubmit={handleSearch} />

      <div className="container">
        {popular.length > 0 && (
          <PopularPrograms programs={popular} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
        )}
        {recommended.length > 0 && (
          <RecommendedPrograms programs={recommended} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
        )}

        <div className="pc-layout">
          <aside className="pc-sidebar">
            <FilterSidebar filters={filters} onChange={handleFilterChange} onClear={handleClearAll} />
          </aside>

          <div className="pc-content">
            <div className="pc-toolbar">
              <div className="pc-toolbar-left">
                <button className="pc-mobile-filter-btn" onClick={() => setDrawerOpen(true)}>
                  <i className="bi bi-funnel" /> Filtres
                </button>
                <span className="pc-toolbar-count">
                  <strong>{filtered.length}</strong> programme{filtered.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="pc-toolbar-right">
                <SortDropdown value={sortBy} onChange={(v) => { setSortBy(v); setCurrentPage(1); }} />
                <ViewSwitcher view={view} onChange={setView} />
              </div>
            </div>

            {paginated.length > 0 ? (
              view === 'grid' ? (
                <ProgramGrid programs={paginated} favorites={favorites} compareList={compareList} onToggleFavorite={handleToggleFavorite} onToggleCompare={handleToggleCompare} />
              ) : (
                <ProgramList programs={paginated} favorites={favorites} compareList={compareList} onToggleFavorite={handleToggleFavorite} onToggleCompare={handleToggleCompare} />
              )
            ) : (
              <EmptyPrograms onReset={handleClearAll} />
            )}

            <ProgramPagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
          </div>
        </div>

        <ProgramsCTA />
      </div>

      <FilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} filters={filters} onChange={handleFilterChange} onClear={handleClearAll} />
    </div>
  );
}

export default ProgramsCatalogPage;
