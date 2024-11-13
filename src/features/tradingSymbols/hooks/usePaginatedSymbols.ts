import { useMemo, useState } from 'react';
import { useGetExchangeInfoQuery } from '../services/binanceApi';
import { PAGE_SIZE } from '~/utils/constants';

export const usePaginatedSymbols = () => {
  const { data: symbols, isLoading, isError } = useGetExchangeInfoQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const currentSymbols = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;

    return symbols?.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, symbols]);

  return { currentSymbols, isLoading, isError, symbolsLength: symbols?.length, setCurrentPage };
};
