function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const delta = 2;
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) pages.push('...');

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push('...');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <nav className="mp-pagination" aria-label="Pagination">
      <button
        type="button"
        className="mp-pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Page precedente"
      >
        <i className="bi bi-chevron-left" />
      </button>

      {getPages().map((page, idx) =>
        page === '...' ? (
          <span key={`dots-${idx}`} className="mp-pagination-btn" style={{ cursor: 'default', border: 'none' }}>
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            className={`mp-pagination-btn ${page === currentPage ? 'mp-pagination-btn--active' : ''}`}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        className="mp-pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Page suivante"
      >
        <i className="bi bi-chevron-right" />
      </button>
    </nav>
  );
}

export default Pagination;
