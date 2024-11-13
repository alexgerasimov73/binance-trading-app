import { container } from 'styled-system/patterns';
import { Header } from './components/Header';
import { Toaster } from './components/Toaster';
import { TradingSymbolsSection } from './features/tradingSymbols/components/TradingSymbolsSection';

export const App = () => (
  <>
    <Header />
    <main className={container({ pt: '28' })}>
      <TradingSymbolsSection />
      <Toaster />
    </main>
  </>
);
