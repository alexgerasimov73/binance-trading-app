import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setupWebSocket } from '~/utils/webSocketUtil';
import { handleError } from '~/utils/errorHandlers';
import { transformArrayToURLEncoded } from '~/utils/transformArrayToURLEncoded';
import type { ExchangeInfoResponse, SymbolInfo, TickerInfo } from '../types/types';
import { API_URL, BINANCE_API } from '~/utils/constants';
import { setSymbols, updateSymbol } from '../symbolsSlices';

export const binanceApi = createApi({
  reducerPath: BINANCE_API,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL.BASE_URL,
  }),
  endpoints: (builder) => ({
    getExchangeInfo: builder.query<SymbolInfo[], void>({
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
    getTickersStream: builder.query<TickerInfo[], string[]>({
      query: (symbols) => {
        const bookTickersUrl = transformArrayToURLEncoded(symbols);
        return `${API_URL.BOOK_TICKER_URL}${bookTickersUrl}`;
      },
      keepUnusedDataFor: 1,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(setSymbols(data));
        } catch (error) {
          handleError(error);
        }
      },
      onCacheEntryAdded: async (symbols, { dispatch, cacheDataLoaded, cacheEntryRemoved }) => {
        const bookTickersUrl = symbols
          .map((symbol) => `${symbol.toLowerCase()}@bookTicker`)
          .join('/');

        const ws = setupWebSocket(`wss://stream.binance.com:443/stream?streams=${bookTickersUrl}`);

        try {
          await cacheDataLoaded;

          ws.onmessage = (event) => {
            const { data } = JSON.parse(event.data);

            if (data) {
              const { s: symbol, b: bidPrice, a: askPrice } = data;

              dispatch(updateSymbol({ symbol, bidPrice, askPrice }));
            }
          };
        } catch (error) {
          handleError(error);
        }

        await cacheEntryRemoved;
        ws.close();
      },
    }),
  }),
});

export const { useGetExchangeInfoQuery, useGetTickersStreamQuery } = binanceApi;
