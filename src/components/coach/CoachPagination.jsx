function CoachPagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="coaches-pagination" aria-label="Pagination des coachs">
      <button
        type="button"
        className="coaches-pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Page precedente"
      >
        <i className="bi bi-chevron-left" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`coaches-pagination-btn ${page === currentPage ? 'coaches-pagination-btn--active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="coaches-pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Page suivante"
      >
        <i className="bi bi-chevron-right" />
      </button>
    </nav>
  );
}

export default CoachPagination;
