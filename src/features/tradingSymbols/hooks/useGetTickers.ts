import { useGetTickersStreamQuery } from '../services/binanceApi';
import { SymbolInfo } from '../types/types';

export const useGetTickers = (symbols: SymbolInfo[]) => {
  const symbolTitles = symbols.map((symbol) => symbol.symbol);
  const { isLoading } = useGetTickersStreamQuery(symbolTitles);

  return { isLoading };
};
