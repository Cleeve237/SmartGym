function ProgramPagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav className="pc-pagination" aria-label="Pagination">
      <button className="pc-page-btn" disabled={currentPage === 1} onClick={() => onChange(currentPage - 1)} aria-label="Page précédente">
        <i className="bi bi-chevron-left" />
      </button>
      {pages.map((p) => (
        <button key={p} className={`pc-page-btn ${p === currentPage ? 'active' : ''}`} onClick={() => onChange(p)} aria-label={`Page ${p}`} aria-current={p === currentPage ? 'page' : undefined}>
          {p}
        </button>
      ))}
      <button className="pc-page-btn" disabled={currentPage === totalPages} onClick={() => onChange(currentPage + 1)} aria-label="Page suivante">
        <i className="bi bi-chevron-right" />
      </button>
    </nav>
  );
}
export default ProgramPagination;
