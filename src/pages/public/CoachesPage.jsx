import { useState } from 'react';
import '../../components/home/PopularCoaches/PopularCoaches.css';
import '../../components/coach/Coaches.css';
import CoachSearchBar from '../../components/coach/CoachSearchBar';
import CoachFilters from '../../components/coach/CoachFilters';
import CoachSort from '../../components/coach/CoachSort';
import CoachResults from '../../components/coach/CoachResults';
import CoachPagination from '../../components/coach/CoachPagination';

const coachesData = [
  { id: 1, name: 'Jean Mbarga', photo: null, speciality: 'Musculation', city: 'Yaounde', price: '8 000 FCFA/seance', rating: 4.9, reviewsCount: 124, verified: true, availability: "Aujourd'hui" },
  { id: 2, name: 'Sarah Nguema', photo: null, speciality: 'Fitness', city: 'Douala', price: '7 000 FCFA/seance', rating: 4.8, reviewsCount: 98, verified: true, availability: 'Demain' },
  { id: 3, name: 'Paul Fotso', photo: null, speciality: 'CrossFit', city: 'Bafoussam', price: '9 000 FCFA/seance', rating: 4.9, reviewsCount: 154, verified: true, availability: "Aujourd'hui" },
  { id: 4, name: 'Claire Bella', photo: null, speciality: 'Yoga', city: 'Douala', price: '6 500 FCFA/seance', rating: 4.7, reviewsCount: 82, verified: true, availability: 'Cette semaine' },
  { id: 5, name: 'Marc Tchinda', photo: null, speciality: 'Boxe', city: 'Yaounde', price: '10 000 FCFA/seance', rating: 4.8, reviewsCount: 112, verified: false, availability: 'Demain' },
  { id: 6, name: 'Amina Bello', photo: null, speciality: 'Perte de poids', city: 'Bamenda', price: '5 500 FCFA/seance', rating: 4.6, reviewsCount: 67, verified: true, availability: 'Cette semaine' },
  { id: 7, name: 'David Nguele', photo: null, speciality: 'Musculation', city: 'Yaounde', price: '8 500 FCFA/seance', rating: 4.7, reviewsCount: 91, verified: true, availability: "Aujourd'hui" },
  { id: 8, name: 'Fatima Souley', photo: null, speciality: 'Cardio', city: 'Douala', price: '6 000 FCFA/seance', rating: 4.5, reviewsCount: 56, verified: false, availability: 'Semaine prochaine' },
  { id: 9, name: 'Patrick Kamga', photo: null, speciality: 'CrossFit', city: 'Bafoussam', price: '9 500 FCFA/seance', rating: 4.9, reviewsCount: 138, verified: true, availability: 'Demain' },
  { id: 10, name: 'Nadia Fouda', photo: null, speciality: 'Yoga', city: 'Yaounde', price: '7 000 FCFA/seance', rating: 4.8, reviewsCount: 103, verified: true, availability: "Aujourd'hui" },
  { id: 11, name: 'Samuel Atangana', photo: null, speciality: 'Boxe', city: 'Douala', price: '11 000 FCFA/seance', rating: 4.9, reviewsCount: 145, verified: true, availability: 'Cette semaine' },
  { id: 12, name: 'Carine Messi', photo: null, speciality: 'Bien-etre', city: 'Bamenda', price: '5 000 FCFA/seance', rating: 4.6, reviewsCount: 72, verified: true, availability: 'Demain' },
];

function CoachesPage() {
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearFilters = () => {};

  return (
    <div className="coaches-page">
      {/* Header */}
      <div className="bg-white border-bottom py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
            <div>
              <h1 className="h3 mb-1">Trouvez votre coach sportif</h1>
              <p className="text-muted mb-0">
                Decouvrez des coachs qualifies pres de votre localisation.
              </p>
            </div>
            <span className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2">
              <i className="bi bi-people-fill me-1" />
              250 coachs disponibles
            </span>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        {/* Search Bar */}
        <CoachSearchBar />

        {/* Mobile Filter Button */}
        <button
          type="button"
          className="coaches-mobile-filter-btn"
          onClick={() => setShowMobileFilters(true)}
        >
          <i className="bi bi-funnel" />
          Afficher les filtres
        </button>

        {/* Mobile Filters Modal */}
        {showMobileFilters && (
          <div
            className="modal d-block coaches-filters-modal"
            tabIndex="-1"
            role="dialog"
            aria-label="Filtres de recherche"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title h5">
                    <i className="bi bi-funnel me-2" />
                    Filtres
                  </h2>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowMobileFilters(false)}
                    aria-label="Fermer"
                  />
                </div>
                <div className="modal-body">
                  <CoachFilters onClear={handleClearFilters} />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    Appliquer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Layout */}
        <div className="coaches-layout">
          {/* Sidebar Filters (Desktop) */}
          <aside className="coaches-layout-sidebar">
            <CoachFilters onClear={handleClearFilters} />
          </aside>

          {/* Main Content */}
          <main className="coaches-layout-main">
            <CoachSort
              total={coachesData.length}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
            <CoachResults coaches={coachesData} />
            <CoachPagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={handlePageChange}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default CoachesPage;
