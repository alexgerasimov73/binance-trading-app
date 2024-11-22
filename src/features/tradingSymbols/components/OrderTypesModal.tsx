import { Portal } from '@ark-ui/react';
import { grid, vstack } from 'styled-system/patterns';
import { Badge } from '~/components/ui/badge';
import { Dialog } from '~/components/ui/dialog';
import type { SymbolInfo } from '../types/types';

interface Props {
  readonly clickedSymbol: SymbolInfo;
  readonly isOpen: boolean;
  readonly setIsOpen: (isOpen: boolean) => void;
}

export const OrderTypesModal = ({ clickedSymbol, isOpen, setIsOpen }: Props) => (
  <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          className={vstack({
            alignItems: 'flex-start',
            gap: 6,
            p: 8,
            color: 'textColor',
          })}>
          <Dialog.Title>The list of the symbol {clickedSymbol.symbol} order types</Dialog.Title>

          <Dialog.Description className={grid({ columns: 3, gap: 3 })}>
            {clickedSymbol.orderTypes.map((order) => (
              <Badge key={order} justifyContent="center" variant="solid" bg="blueColor">
                {order}
              </Badge>
            ))}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
);
