import { useState, useMemo } from 'react';
import SearchHero from '../../components/coach-marketplace/SearchHero';
import FilterSidebar from '../../components/coach-marketplace/FilterSidebar';
import MobileFilters from '../../components/coach-marketplace/MobileFilters';
import FilterChip from '../../components/coach-marketplace/FilterChip';
import SortDropdown from '../../components/coach-marketplace/SortDropdown';
import CoachResults from '../../components/coach-marketplace/CoachResults';
import CoachGrid from '../../components/coach-marketplace/CoachGrid';
import Pagination from '../../components/coach-marketplace/Pagination';
import NoCoachFound from '../../components/coach-marketplace/NoCoachFound';
import '../../components/coach-marketplace/Marketplace.css';

const COACHES = [
  { id: 1, name: 'Jean Mbarga', photo: null, city: 'Yaounde', distance: '2 km', specialties: ['Musculation', 'Cardio & HIIT'], experience: 8, rating: 4.9, reviewsCount: 124, price: 8000, sessionDuration: 'seance', available: true, verified: true, premium: false, isNew: false },
  { id: 2, name: 'Sarah Nguema', photo: null, city: 'Douala', distance: '3 km', specialties: ['Fitness', 'Yoga'], experience: 5, rating: 4.8, reviewsCount: 98, price: 7000, sessionDuration: 'seance', available: true, verified: true, premium: false, isNew: false },
  { id: 3, name: 'Paul Fotso', photo: null, city: 'Bafoussam', distance: '5 km', specialties: ['CrossFit', 'Musculation'], experience: 10, rating: 4.9, reviewsCount: 154, price: 9000, sessionDuration: 'seance', available: true, verified: true, premium: true, isNew: false },
  { id: 4, name: 'Claire Bella', photo: null, city: 'Douala', distance: '1 km', specialties: ['Yoga', 'Pilates'], experience: 4, rating: 4.7, reviewsCount: 82, price: 6500, sessionDuration: 'seance', available: false, verified: true, premium: false, isNew: false },
  { id: 5, name: 'Marc Tchinda', photo: null, city: 'Yaounde', distance: '4 km', specialties: ['Boxe', 'Cardio & HIIT'], experience: 6, rating: 4.8, reviewsCount: 112, price: 10000, sessionDuration: 'seance', available: true, verified: false, premium: false, isNew: false },
  { id: 6, name: 'Amina Bello', photo: null, city: 'Bamenda', distance: '7 km', specialties: ['Musculation', 'Fitness'], experience: 3, rating: 4.6, reviewsCount: 67, price: 5500, sessionDuration: 'seance', available: false, verified: true, premium: false, isNew: true },
  { id: 7, name: 'David Nguele', photo: null, city: 'Yaounde', distance: '6 km', specialties: ['Musculation', 'CrossFit'], experience: 7, rating: 4.7, reviewsCount: 91, price: 8500, sessionDuration: 'seance', available: true, verified: true, premium: false, isNew: false },
  { id: 8, name: 'Fatima Souley', photo: null, city: 'Douala', distance: '2 km', specialties: ['Cardio & HIIT', 'Danse'], experience: 4, rating: 4.5, reviewsCount: 56, price: 6000, sessionDuration: 'seance', available: false, verified: false, premium: false, isNew: false },
  { id: 9, name: 'Patrick Kamga', photo: null, city: 'Bafoussam', distance: '3 km', specialties: ['CrossFit', 'Boxe'], experience: 9, rating: 4.9, reviewsCount: 138, price: 9500, sessionDuration: 'seance', available: true, verified: true, premium: true, isNew: false },
  { id: 10, name: 'Nadia Fouda', photo: null, city: 'Yaounde', distance: '1 km', specialties: ['Yoga', 'Pilates'], experience: 6, rating: 4.8, reviewsCount: 103, price: 7000, sessionDuration: 'seance', available: true, verified: true, premium: false, isNew: false },
  { id: 11, name: 'Samuel Atangana', photo: null, city: 'Douala', distance: '5 km', specialties: ['Boxe', 'Musculation'], experience: 12, rating: 4.9, reviewsCount: 145, price: 11000, sessionDuration: 'seance', available: true, verified: true, premium: true, isNew: false },
  { id: 12, name: 'Carine Messi', photo: null, city: 'Bamenda', distance: '4 km', specialties: ['Fitness', 'Danse'], experience: 3, rating: 4.6, reviewsCount: 72, price: 5000, sessionDuration: 'seance', available: true, verified: true, premium: false, isNew: true },
  { id: 13, name: 'Olivier Nkou', photo: null, city: 'Yaounde', distance: '3 km', specialties: ['Musculation', 'Cardio & HIIT'], experience: 5, rating: 4.4, reviewsCount: 45, price: 7500, sessionDuration: 'seance', available: true, verified: false, premium: false, isNew: false },
  { id: 14, name: 'Helene Mbida', photo: null, city: 'Douala', distance: '2 km', specialties: ['Yoga', 'Bien-etre'], experience: 8, rating: 4.8, reviewsCount: 118, price: 8000, sessionDuration: 'seance', available: false, verified: true, premium: false, isNew: false },
  { id: 15, name: 'Bruno Essomba', photo: null, city: 'Bafoussam', distance: '6 km', specialties: ['CrossFit', 'Musculation'], experience: 11, rating: 4.9, reviewsCount: 162, price: 12000, sessionDuration: 'seance', available: true, verified: true, premium: true, isNew: false },
];

const DEFAULT_FILTERS = {
  city: '',
  distances: [],
  specialties: [],
  experience: [],
  maxPrice: 50000,
  minRating: null,
  availableToday: false,
  availableThisWeek: false,
};

const ITEMS_PER_PAGE = 9;

function CoachMarketplacePage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchFilters, setSearchFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchFilters({});
    setCurrentPage(1);
  };

  const handleHeroSearch = ({ city, discipline, goal }) => {
    const next = { ...DEFAULT_FILTERS };
    if (city) next.city = city;
    if (discipline) next.specialties = [discipline];
    setFilters(next);
    setSearchFilters({ city, discipline, goal });
    setCurrentPage(1);
  };

  const filteredCoaches = useMemo(() => {
    let result = [...COACHES];

    if (filters.city) {
      result = result.filter((c) => c.city === filters.city);
    }
    if (filters.specialties.length > 0) {
      result = result.filter((c) =>
        filters.specialties.some((s) => c.specialties.includes(s))
      );
    }
    if (filters.experience.length > 0) {
      result = result.filter((c) => {
        if (filters.experience.includes('debutant') && c.experience <= 2) return true;
        if (filters.experience.includes('intermediaire') && c.experience > 2 && c.experience <= 7) return true;
        if (filters.experience.includes('expert') && c.experience > 7) return true;
        return false;
      });
    }
    if (filters.maxPrice < 50000) {
      result = result.filter((c) => c.price <= filters.maxPrice);
    }
    if (filters.minRating) {
      result = result.filter((c) => c.rating >= filters.minRating);
    }
    if (filters.availableToday) {
      result = result.filter((c) => c.available);
    }

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'experience':
        result.sort((a, b) => b.experience - a.experience);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredCoaches.length / ITEMS_PER_PAGE);
  const paginatedCoaches = filteredCoaches.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const activeChips = [];
  if (filters.city) activeChips.push({ key: 'city', label: filters.city });
  if (filters.specialties.length > 0) {
    filters.specialties.forEach((s) => activeChips.push({ key: `spec-${s}`, label: s }));
  }
  if (filters.minRating) activeChips.push({ key: 'rating', label: `${filters.minRating}+ etoiles` });
  if (filters.maxPrice < 50000) activeChips.push({ key: 'price', label: `Max ${filters.maxPrice.toLocaleString('fr-FR')} FCFA` });
  if (filters.availableToday) activeChips.push({ key: 'today', label: 'Disponible aujourd\'hui' });

  const removeChip = (chip) => {
    if (chip.key === 'city') handleFilterChange('city', '');
    else if (chip.key.startsWith('spec-')) {
      const spec = chip.label;
      handleFilterChange('specialties', filters.specialties.filter((s) => s !== spec));
    }
    else if (chip.key === 'rating') handleFilterChange('minRating', null);
    else if (chip.key === 'price') handleFilterChange('maxPrice', 50000);
    else if (chip.key === 'today') handleFilterChange('availableToday', false);
  };

  return (
    <div>
      {/* Hero Search */}
      <SearchHero onSearch={handleHeroSearch} />

      <div className="container">
        {/* Mobile Filter Button */}
        <button
          type="button"
          className="mp-mobile-filter-btn"
          onClick={() => setShowMobileFilters(true)}
        >
          <i className="bi bi-funnel" />
          Afficher les filtres
        </button>

        {/* Mobile Filters Modal */}
        {showMobileFilters && (
          <MobileFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClear={handleClearFilters}
            onApply={() => setShowMobileFilters(false)}
            onClose={() => setShowMobileFilters(false)}
          />
        )}

        {/* Layout */}
        <div className="mp-layout">
          {/* Sidebar Filters (Desktop) */}
          <aside className="mp-layout-sidebar">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClear={handleClearFilters}
            />
          </aside>

          {/* Main Content */}
          <main>
            {/* Active Chips */}
            {activeChips.length > 0 && (
              <div className="mp-chips">
                {activeChips.map((chip) => (
                  <FilterChip
                    key={chip.key}
                    label={chip.label}
                    onRemove={() => removeChip(chip)}
                  />
                ))}
                <button
                  type="button"
                  className="mp-chip"
                  style={{ background: 'var(--color-gray-100)', color: 'var(--color-gray-600)' }}
                  onClick={handleClearFilters}
                >
                  Tout effacer
                </button>
              </div>
            )}

            {/* Results Header */}
            <div className="mp-results-header">
              <CoachResults total={filteredCoaches.length} />
              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
            </div>

            {/* Results */}
            {paginatedCoaches.length > 0 ? (
              <>
                <CoachGrid coaches={paginatedCoaches} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                />
              </>
            ) : (
              <NoCoachFound onReset={handleClearFilters} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default CoachMarketplacePage;
