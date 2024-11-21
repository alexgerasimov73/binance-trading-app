import { memo } from 'react';
import { Table } from '~/components/ui/table';
import { SymbolsTableCell } from './SymbolsTableCell';
import { getSymbolPrices } from '~/utils/getSymbolPrices';

interface Props {
  readonly symbol: string;
}

export const SymbolsTableRow = memo(({ symbol }: Props) => {
  const { askPrice, bidPrice, spread } = getSymbolPrices(symbol);

  return (
    <Table.Row cursor="pointer" datatype={symbol}>
      <SymbolsTableCell fontWeight="semibold" value={symbol} />
      <SymbolsTableCell value={bidPrice} />
      <SymbolsTableCell value={askPrice} />
      <SymbolsTableCell value={spread} />
    </Table.Row>
  );
});
