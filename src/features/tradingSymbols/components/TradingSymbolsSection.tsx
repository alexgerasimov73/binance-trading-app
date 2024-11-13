import { vstack } from 'styled-system/patterns';
import { Heading } from '~/components/ui/heading';
import { SymbolsTable } from './SymbolsTable';

export const TradingSymbolsSection = () => (
  <section
    className={vstack({
      alignItems: 'flex-start',
      gap: '4',
      p: '6',
      rounded: 'lg',
      boxShadow: 'lg',
      bgColor: 'white',
    })}>
    <Heading as="h1">The list of trading symbols</Heading>
    <SymbolsTable />
  </section>
);
