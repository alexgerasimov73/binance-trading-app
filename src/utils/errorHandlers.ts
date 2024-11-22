import type { BinanceError } from '../types/types';
import { showErrorToast } from '~/components/Toaster';

const isBinanceApiError = (error: unknown): error is BinanceError =>
  typeof error === 'object' &&
  error !== null &&
  'code' in error &&
  'msg' in error &&
  typeof (error as BinanceError).code === 'number' &&
  typeof (error as BinanceError).msg === 'string';

export const handleError = (error: unknown) => {
  let message = 'An unexpected error occurred.';

  if (isBinanceApiError(error)) {
    message = `Binance error: ${error.msg} (code: ${error.code})`;
  } else if (error instanceof Event) {
    message = 'Network issue: Unable to establish connection.';
  } else if (error instanceof Error) {
    message = error.message;
  }

  console.error('Error:', error);
  showErrorToast(message);
};
