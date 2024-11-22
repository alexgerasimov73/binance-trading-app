import { memo } from 'react';
import { Table } from '~/components/ui/table';
import { TableCell } from './TableCell';
import { getSymbolPrices } from '~/utils/getSymbolPrices';

interface Props {
  readonly symbol: string;
}

export const TableRow = memo(({ symbol }: Props) => {
  const { askPrice, bidPrice, spread } = getSymbolPrices(symbol);

  return (
    <Table.Row cursor="pointer" datatype={symbol}>
      <TableCell fontWeight="semibold" value={symbol} />
      <TableCell value={bidPrice} />
      <TableCell value={askPrice} />
      <TableCell value={spread} />
    </Table.Row>
  );
});
