export const transformArrayToURLEncoded = (inputArray: string[]): string =>
  encodeURIComponent(JSON.stringify(inputArray));
