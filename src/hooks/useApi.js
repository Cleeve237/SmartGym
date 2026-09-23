import { useState, useCallback } from 'react';

export default function useApi(apiFn) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await apiFn(...args);
        setData(result);
        return result;
      } catch (err) {
        const message = err?.message || 'Une erreur est survenue.';
        setError(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [apiFn]
  );

  const reset = useCallback(() => {
    setData(null);
    setIsLoading(false);
    setError(null);
  }, []);

  return { data, isLoading, error, execute, reset };
}
