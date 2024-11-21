import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TickerInfo } from './types/types';

interface SymbolsState {
  [symbol: string]: TickerInfo;
}

const initialState: SymbolsState = {};

const symbolsSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {
    setSymbols(state, action: PayloadAction<TickerInfo[]>) {
      action.payload.forEach((symbol) => {
        state[symbol.symbol] = {
          symbol: symbol.symbol,
          bidPrice: symbol.bidPrice,
          askPrice: symbol.askPrice,
        };
      });
    },
    updateSymbol(state, action: PayloadAction<TickerInfo>) {
      const { symbol, bidPrice, askPrice } = action.payload;
      if (state[symbol]) {
        state[symbol].bidPrice = bidPrice;
        state[symbol].askPrice = askPrice;
      }
    },
  },
});

export const { setSymbols, updateSymbol } = symbolsSlice.actions;
export default symbolsSlice.reducer;
