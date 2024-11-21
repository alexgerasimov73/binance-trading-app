import { SymbolsTableSkeleton } from './SymbolsTableSkeleton';
import { SymbolsTableRow } from './SymbolsTableRow';
import { SymbolInfo } from '../types/types';
import { useGetTickers } from '../hooks/useGetTickers';

interface Props {
  readonly symbols: SymbolInfo[];
}

export const SymbolsTableContent = ({ symbols }: Props) => {
  const { isLoading } = useGetTickers(symbols);

  if (isLoading) return <SymbolsTableSkeleton />;

  return symbols.map((symbol) => <SymbolsTableRow key={symbol.symbol} symbol={symbol.symbol} />);
};
