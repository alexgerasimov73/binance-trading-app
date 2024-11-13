import { memo } from 'react';
import { Table } from '~/components/ui/table';
import { SymbolsTableCell } from './SymbolsTableCell';
import { useGetSymbolPrices } from '../hooks/useGetSymbolPrices';

interface Props {
  readonly symbol: string;
}

export const SymbolsTableRow = memo(({ symbol }: Props) => {
  const { askPrice, bidPrice, isLoading, spread } = useGetSymbolPrices(symbol);

  return (
    <Table.Row cursor="pointer" datatype={symbol}>
      <SymbolsTableCell fontWeight="semibold" isLoading={isLoading} value={symbol} />
      <SymbolsTableCell isLoading={isLoading} value={bidPrice} />
      <SymbolsTableCell isLoading={isLoading} value={askPrice} />
      <SymbolsTableCell isLoading={isLoading} value={spread} />
    </Table.Row>
  );
});
