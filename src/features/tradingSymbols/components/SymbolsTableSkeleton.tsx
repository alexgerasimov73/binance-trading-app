import { LoadingTableRow } from '~/components/LoadingTableRow';
import { PAGE_SIZE } from '~/utils/constants';

export const SymbolsTableSkeleton = () =>
  Array.from({ length: PAGE_SIZE }).map((_, index) => (
    <LoadingTableRow key={index} columnCount={4} />
  ));
