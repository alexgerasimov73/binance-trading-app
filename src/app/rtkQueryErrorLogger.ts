import { isRejectedWithValue, type Middleware, type MiddlewareAPI } from '@reduxjs/toolkit';
import { showErrorToast } from '~/components/Toaster';

export const rtkQueryErrorLogger: Middleware = (_: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn('RTK Query error:', action);

    const errorMessage =
      'data' in action.error
        ? (action.error.data as { message: string }).message
        : action.error.message;

    showErrorToast(errorMessage || 'An error occurred during the request.');
  }

  return next(action);
};
