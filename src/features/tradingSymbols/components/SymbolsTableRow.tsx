import { memo } from 'react';
import { Table } from '~/components/ui/table';
import { SymbolsTableCell } from './SymbolsTableCell';
import { TickerInfo } from '../types/types';
import { getSymbolPrices } from '~/utils/getSymbolPrices';

interface Props {
  readonly symbol: TickerInfo;
}

export const SymbolsTableRow = memo(({ symbol }: Props) => {
  const { askPrice, bidPrice, spread } = getSymbolPrices(symbol);

  return (
    <Table.Row cursor="pointer" datatype={symbol.symbol}>
      <SymbolsTableCell fontWeight="semibold" isLoading={false} value={symbol.symbol} />
      <SymbolsTableCell isLoading={false} value={bidPrice} />
      <SymbolsTableCell isLoading={false} value={askPrice} />
      <SymbolsTableCell isLoading={false} value={spread} />
    </Table.Row>
  );
});
