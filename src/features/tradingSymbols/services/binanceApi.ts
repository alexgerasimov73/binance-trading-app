import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setupWebSocket } from '~/utils/webSocketUtil';
import { handleWebSocketError } from '~/utils/errorHandlers';
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
    getTickerStream: build.query<TickerInfo, string>({
      query: (symbol) => `${API_URL.BOOK_TICKER_URL}${symbol}`,
      keepUnusedDataFor: 10,
      onCacheEntryAdded: async (
        symbol,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },
      ) => {
        const ws = setupWebSocket(
          `wss://stream.binance.com:443/ws/${symbol.toLowerCase()}@bookTicker`,
        );

        try {
          await cacheDataLoaded;

          ws.onmessage = (event) => {
            const messageData = JSON.parse(event.data);

            if (messageData && messageData.s === symbol) {
              updateCachedData((drift) => {
                drift.bidPrice = messageData.b;
                drift.askPrice = messageData.a;
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

export const { useGetExchangeInfoQuery, useGetTickerStreamQuery } = binanceApi;
