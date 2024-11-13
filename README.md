# Binance Trading App

**Binance Trading App** is a Vite + React application built with TypeScript that interacts with the Binance API. It allows users to view trading symbols, subscribe to price updates via WebSockets, and see available order types for each symbol. This project demonstrates the use of real-time data streaming and effective state management with Redux Toolkit.

## Features

- **Symbol List Display**: Fetches and displays a list of available (status = 'TRADING') trading symbols from Binance.
- **Real-time Price Updates**: Subscribes to WebSocket streams to receive live bid and ask price updates.
- **WebSocket Unsubscription**: Automatically unsubscribes from WebSocket streams when the user navigates to another page. After 10 seconds, a `cacheEntryRemoved` event is triggered, calling the `ws.close()` method to terminate the connection.
- **Order Types View**: Allows users to view available order types for each symbol, such as LIMIT, LIMIT_MAKER, MARKET, TAKE_PROFIT, TAKE_PROFIT_LIMIT, STOP_LOSS, etc.
- **Error Handling**: Includes error handling for API calls and WebSocket connections, providing a smooth user experience.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching**: [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- **CSS-in-JS Styling**: [Panda CSS](https://panda-css.com/) with [Park UI](https://park-ui.dev/)

## Project Structure

This project is structured with a focus on scalability and maintainability. All API requests and WebSocket interactions are managed within Redux slices, and components are optimized for reusability and testing.

## Demo

You can open demo on [GitHub Pages](https://alexgerasimov73.github.io/binance-trading-app/).

### Prerequisites

- **Node.js** v16 or later
- **Yarn** or **npm**

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/alexgerasimov73/binance-trading-app.git
```

```bash
yarn install
```

Then, prepare Panda UI components:

```bash
yarn prepare
```

Finally, run the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the application.

To run the unit tests:

```bash
yarn test
```

## API Integration

This application integrates with Binance's REST API and WebSocket API to retrieve trading symbols and subscribe to real-time price updates.

- **REST API**: Fetches trading symbols and stores them in the Redux store.
  Endpoint: `GET /api/v3/exchangeInfo`
- **WebSocket API**: Subscribes to bid and ask price updates for each symbol.
  Endpoint: `wss://stream.binance.com:9443/ws/{symbol}@bookTicker`

## Error Handling

Error handling is implemented for both API calls and WebSocket connections. Any errors are displayed to users through toast notifications using Park UI, ensuring they’re informed of issues with data retrieval or connection problems.

## Styling

The application uses [Panda CSS](https://panda-css.com/) and [Park UI](https://park-ui.dev/) for styling and component management, providing a modern and responsive user interface.

## Areas for Improvement

- **Test Coverage**: This application requires expanded test coverage, particularly for components, Redux slices, and WebSocket interactions. Additional configuration is needed to ensure a robust test environment.
- **Bug Detection**: Thorough testing is required to identify and fix potential bugs, ensuring stable and reliable performance in various user scenarios.
- **Performance Enhancements**: Explore further optimizations to improve real-time data handling and minimize unnecessary re-renders.
