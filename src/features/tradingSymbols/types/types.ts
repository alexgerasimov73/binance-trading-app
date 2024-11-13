export interface ExchangeInfoResponse {
  symbols: SymbolInfo[];
}

export interface SymbolInfo {
  symbol: string;
  orderTypes: string[];
  status: string;
}

export interface TickerInfo {
  symbol: string;
  bidPrice: string;
  askPrice: string;
}
