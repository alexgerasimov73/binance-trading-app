import { SymbolsTableRow } from './SymbolsTableRow';
import { SymbolInfo } from '../types/types';
import { useGetTickers } from '../hooks/useGetTickers';

interface Props {
  readonly symbols: SymbolInfo[];
}

export const SymbolsTableContent = ({ symbols }: Props) => {
  const { data } = useGetTickers(symbols);

  return data && data.map((symbol) => <SymbolsTableRow key={symbol.symbol} symbol={symbol} />);
};
