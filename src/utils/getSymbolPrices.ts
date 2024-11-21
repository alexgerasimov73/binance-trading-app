import Big from 'big.js';
import { useAppSelector } from '~/hooks/appHooks';

export const getSymbolPrices = (symbol: string) => {
  const data = useAppSelector((state) => state.symbols[symbol]);

  const askPrice = Big(data?.askPrice).toFixed();
  const bidPrice = Big(data?.bidPrice).toFixed();
  const spread = Big(data?.askPrice).minus(Big(data?.bidPrice)).toFixed();

  return { askPrice, bidPrice, spread };
};
