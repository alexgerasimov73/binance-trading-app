import { type MouseEvent, useState } from 'react';
import { Pagination } from '~/components/ui/pagination';
import { Table } from '~/components/ui/table';
import { OrderTypesModal } from './OrderTypesModal';
import { TableContent } from './TableContent';
import { TableSkeleton } from './TableSkeleton';
import { usePaginatedSymbols } from '../hooks/usePaginatedSymbols';
import type { SymbolInfo } from '../types/types';
import { PAGE_SIZE } from '~/utils/constants';

export const SymbolsTable = () => {
  const { currentSymbols, isLoading, symbolsLength, setCurrentPage } = usePaginatedSymbols();
  const [isOpen, setIsOpen] = useState(false);
  const [clickedSymbol, setClickedSymbol] = useState<SymbolInfo>();

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleOpenModal = (event: MouseEvent<HTMLTableSectionElement>) => {
    const row = (event.target as HTMLElement).closest('tr');

    if (!row || !currentSymbols) return;
    const symbolName = row.getAttribute('datatype');
    const symbol = currentSymbols.find((sym) => sym.symbol === symbolName);

    if (!symbol) return;
    setIsOpen((prev) => !prev);
    setClickedSymbol(symbol);
  };

  return (
    <>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.Header w="1/4">Symbol</Table.Header>
            <Table.Header w="1/4">Bid price</Table.Header>
            <Table.Header w="1/4">Ask price</Table.Header>
            <Table.Header w="1/4">Spread</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body color="textColor" onClick={handleOpenModal}>
          {isLoading || !currentSymbols ? (
            <TableSkeleton />
          ) : (
            <TableContent symbols={currentSymbols} />
          )}
        </Table.Body>
      </Table.Root>

      <Pagination
        count={symbolsLength ?? 0}
        pageSize={PAGE_SIZE}
        siblingCount={1}
        alignSelf="flex-end"
        mt={8}
        onPageChange={({ page }) => handlePageChange(page)}
      />

      {clickedSymbol && (
        <OrderTypesModal clickedSymbol={clickedSymbol} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};
