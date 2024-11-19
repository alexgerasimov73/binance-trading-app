import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setupWebSocket } from '~/utils/webSocketUtil';
import { handleWebSocketError } from '~/utils/errorHandlers';
import { transformArrayToURLEncoded } from '~/utils/transformArrayToURLEncoded';
import type { ExchangeInfoResponse, SymbolInfo, TickerInfo } from '../types/types';
import { API_URL, BINANCE_API } from '~/utils/constants';

export const binanceApi = createApi({
  reducerPath: BINANCE_API,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL.BASE_URL,
  }),
  endpoints: (build) => ({
    getExchangeInfo: build.query<SymbolInfo[], void>({
      query: () => API_URL.EXCHANGE_INFO_URL,
      transformResponse: (response: ExchangeInfoResponse) =>
        response.symbols
          .filter((symbol) => symbol.status !== 'BREAK')
          .map((symbol) => ({
            symbol: symbol.symbol,
            orderTypes: symbol.orderTypes,
            status: symbol.status,
          })),
    }),
    getTickersStream: build.query<TickerInfo[], string[]>({
      query: (symbols) => {
        const bookTickersUrl = transformArrayToURLEncoded(symbols);
        return `${API_URL.BOOK_TICKER_URL}${bookTickersUrl}`;
      },
      keepUnusedDataFor: 10,
      onCacheEntryAdded: async (
        symbols,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) => {
        const bookTickersUrl = symbols
          .map((symbol) => `${symbol.toLowerCase()}@bookTicker`)
          .join('/');

        const ws = setupWebSocket(`wss://stream.binance.com:443/stream?streams=${bookTickersUrl}`);

        try {
          await cacheDataLoaded;

          ws.onmessage = (event) => {
            const { data } = JSON.parse(event.data);

            if (data) {
              const symbol = data.s;

              updateCachedData((draft) => {
                const index = draft.findIndex((item) => item.symbol === symbol);
                if (index !== -1) {
                  draft[index].bidPrice = data.b;
                  draft[index].askPrice = data.a;
                }
              });
            }
          };
        } catch (error) {
          handleWebSocketError(error);
        }

        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { useGetExchangeInfoQuery, useGetTickersStreamQuery } = binanceApi;
