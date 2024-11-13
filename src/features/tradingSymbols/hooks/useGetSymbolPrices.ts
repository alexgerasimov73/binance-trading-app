import Big from 'big.js';
import { useMemo } from 'react';
import { useGetTickerStreamQuery } from '../services/binanceApi';

export const useGetSymbolPrices = (symbol: string) => {
  const { data, isLoading } = useGetTickerStreamQuery(symbol);

  const { askPrice, bidPrice, spread } = useMemo(() => {
    const askPrice = data?.askPrice ? Big(data.askPrice).toFixed() : 'N/A';
    const bidPrice = data?.bidPrice ? Big(data.bidPrice).toFixed() : 'N/A';
    const spread =
      data?.askPrice && data?.bidPrice
        ? Big(data.askPrice).minus(Big(data.bidPrice)).toFixed()
        : 'N/A';

    return { askPrice, bidPrice, spread };
  }, [data]);

  return { askPrice, bidPrice, isLoading, spread };
};
