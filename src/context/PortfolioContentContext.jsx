import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fallbackPortfolioContent, fetchPortfolioContent } from '@/data/portfolioContent';

const PortfolioContentContext = createContext({
  content: fallbackPortfolioContent,
  isLoading: false,
  error: null,
});

export function PortfolioContentProvider({ children }) {
  const [content, setContent] = useState(fallbackPortfolioContent);
  const [isLoading, setIsLoading] = useState(Boolean(import.meta.env.VITE_PORTFOLIO_API_URL));
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadContent() {
      try {
        const nextContent = await fetchPortfolioContent(import.meta.env.VITE_PORTFOLIO_API_URL);

        if (!cancelled) {
          setContent(nextContent);
          setError(null);
        }
      } catch (contentError) {
        if (!cancelled) {
          setError(contentError);
          setContent(fallbackPortfolioContent);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      content,
      isLoading,
      error,
    }),
    [content, error, isLoading],
  );

  return <PortfolioContentContext.Provider value={value}>{children}</PortfolioContentContext.Provider>;
}

export function usePortfolioContent() {
  return useContext(PortfolioContentContext);
}
