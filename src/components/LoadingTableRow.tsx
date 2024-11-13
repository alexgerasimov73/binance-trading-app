import { Skeleton } from './ui/skeleton';
import { Table } from './ui/table';

interface Props {
  readonly columnCount: number;
}

export const LoadingTableRow = ({ columnCount }: Props) => (
  <Table.Row>
    {Array.from({ length: columnCount }).map((_, index) => (
      <Table.Cell key={index}>
        <Skeleton>{columnCount}</Skeleton>
      </Table.Cell>
    ))}
  </Table.Row>
);
