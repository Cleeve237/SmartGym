import { useState, useCallback, useMemo } from 'react';
import { PAGINATION } from '../utils/constants';

export default function usePagination(totalCount = 0) {
  const [page, setPage] = useState(PAGINATION.DEFAULT_PAGE);
  const [limit, setLimit] = useState(PAGINATION.DEFAULT_LIMIT);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalCount / limit)),
    [totalCount, limit]
  );

  const hasNext = page < totalPages;
  const hasPrev = page > 1;

  const nextPage = useCallback(() => {
    if (hasNext) setPage((p) => p + 1);
  }, [hasNext]);

  const prevPage = useCallback(() => {
    if (hasPrev) setPage((p) => p - 1);
  }, [hasPrev]);

  const goToPage = useCallback(
    (p) => {
      const num = Math.max(1, Math.min(p, totalPages));
      setPage(num);
    },
    [totalPages]
  );

  const resetPage = useCallback(() => setPage(PAGINATION.DEFAULT_PAGE), []);

  const changeLimit = useCallback((newLimit) => {
    setLimit(newLimit);
    setPage(PAGINATION.DEFAULT_PAGE);
  }, []);

  const params = useMemo(() => ({ page, limit }), [page, limit]);

  return {
    page,
    limit,
    totalCount,
    totalPages,
    hasNext,
    hasPrev,
    nextPage,
    prevPage,
    goToPage,
    resetPage,
    changeLimit,
    params,
  };
}
