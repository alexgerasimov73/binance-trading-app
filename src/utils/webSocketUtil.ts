export const setupWebSocket = (url: string): WebSocket => {
  const ws = new WebSocket(url);

  // Left the console.logs to visually monitor WebSocket open/close connection in logs.
  ws.onopen = () => console.log(`WebSocket connection opened to ${url}`);
  ws.onclose = () => console.log(`WebSocket connection closed to ${url}`);

  return ws;
};
