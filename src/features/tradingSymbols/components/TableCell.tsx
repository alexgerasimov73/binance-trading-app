import { memo } from 'react';
import { Table } from '~/components/ui/table';

interface Props {
  readonly fontWeight?: string;
  readonly value: string;
}

export const TableCell = memo(({ fontWeight, value }: Props) => (
  <Table.Cell fontWeight={fontWeight}>{value}</Table.Cell>
));
