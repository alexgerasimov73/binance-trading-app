import { LoadingTableRow } from '~/components/LoadingTableRow';
import { PAGE_SIZE } from '~/utils/constants';

export const TableSkeleton = () =>
  Array.from({ length: PAGE_SIZE }).map((_, index) => (
    <LoadingTableRow key={index} columnCount={4} />
  ));
