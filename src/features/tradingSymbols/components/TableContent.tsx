import { TableSkeleton } from './TableSkeleton';
import { TableRow } from './TableRow';
import { SymbolInfo } from '../types/types';
import { useGetTickers } from '../hooks/useGetTickers';

interface Props {
  readonly symbols: SymbolInfo[];
}

export const TableContent = ({ symbols }: Props) => {
  const { isLoading, isFetching } = useGetTickers(symbols);

  if (isLoading || isFetching) return <TableSkeleton />;

  return symbols.map((symbol) => <TableRow key={symbol.symbol} symbol={symbol.symbol} />);
};
