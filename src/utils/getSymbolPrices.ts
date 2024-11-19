import Big from 'big.js';
import { TickerInfo } from '~/features/tradingSymbols/types/types';

export const getSymbolPrices = (symbol: TickerInfo) => {
  const askPrice = Big(symbol.askPrice).toFixed();
  const bidPrice = Big(symbol.bidPrice).toFixed();
  const spread = Big(symbol.askPrice).minus(Big(symbol.bidPrice)).toFixed();

  return { askPrice, bidPrice, spread };
};
