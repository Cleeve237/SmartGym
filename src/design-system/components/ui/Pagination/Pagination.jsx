import './Pagination.css';

export default function Pagination({
  current = 1, total = 1, onChange, size = 'md', showFirst = true, showLast = true,
  siblingCount = 1, className = '', ...props
}) {
  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const generatePages = () => {
    const totalPageNos = siblingCount * 2 + 5;
    if (total <= totalPageNos) return range(1, total);

    const leftSib = Math.max(current - siblingCount, 1);
    const rightSib = Math.min(current + siblingCount, total);
    const showLeftDots = leftSib > 2;
    const showRightDots = rightSib < total - 1;

    if (!showLeftDots && showRightDots) {
      const leftCount = 3 + 2 * siblingCount;
      return [...range(1, leftCount), '...', total];
    }
    if (showLeftDots && !showRightDots) {
      const rightCount = 3 + 2 * siblingCount;
      return [1, '...', ...range(total - rightCount + 1, total)];
    }
    return [1, '...', ...range(leftSib, rightSib), '...', total];
  };

  const pages = generatePages();

  const cls = ['ds-pagination', size !== 'md' ? `ds-pagination--${size}` : '', className].filter(Boolean).join(' ');

  return (
    <nav aria-label="Pagination" className={cls} {...props}>
      <ul className="ds-pagination">
        {showFirst && (
          <li>
            <button className={`ds-page-btn ${current === 1 ? 'ds-page-btn--disabled' : ''}`}
              onClick={() => onChange(1)} disabled={current === 1} aria-label="Première page">
              <i className="bi bi-chevron-double-left" />
            </button>
          </li>
        )}
        <li>
          <button className={`ds-page-btn ${current === 1 ? 'ds-page-btn--disabled' : ''}`}
            onClick={() => onChange(current - 1)} disabled={current === 1} aria-label="Page précédente">
            <i className="bi bi-chevron-left" />
          </button>
        </li>
        {pages.map((page, i) => (
          <li key={i}>
            {page === '...' ? (
              <span className="ds-page-ellipsis">&hellip;</span>
            ) : (
              <button className={`ds-page-btn ${page === current ? 'ds-page-btn--active' : ''}`}
                onClick={() => onChange(page)} aria-current={page === current ? 'page' : undefined}
                aria-label={`Page ${page}`}>
                {page}
              </button>
            )}
          </li>
        ))}
        <li>
          <button className={`ds-page-btn ${current === total ? 'ds-page-btn--disabled' : ''}`}
            onClick={() => onChange(current + 1)} disabled={current === total} aria-label="Page suivante">
            <i className="bi bi-chevron-right" />
          </button>
        </li>
        {showLast && (
          <li>
            <button className={`ds-page-btn ${current === total ? 'ds-page-btn--disabled' : ''}`}
              onClick={() => onChange(total)} disabled={current === total} aria-label="Dernière page">
              <i className="bi bi-chevron-double-right" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
