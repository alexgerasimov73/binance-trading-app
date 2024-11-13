import { memo } from 'react';
import { Skeleton } from '~/components/ui/skeleton';
import { Table } from '~/components/ui/table';

interface Props {
  readonly fontWeight?: string;
  readonly isLoading: boolean;
  readonly value: string;
}

export const SymbolsTableCell = memo(({ fontWeight, isLoading, value }: Props) => (
  <Table.Cell fontWeight={fontWeight}>
    <Skeleton isLoaded={!isLoading} data-testid="skeleton-loader">
      {value}
    </Skeleton>
  </Table.Cell>
));
