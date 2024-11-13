import { Toast } from './ui/toast';

const toaster = Toast.createToaster({
  placement: 'top-end',
  overlap: true,
  gap: 16,
});

export const showErrorToast = (message: string) => {
  toaster.create({
    title: 'Houston, we have a problem',
    description: message,
    type: 'error',
  });
};

export const showSuccessToast = (message: string) => {
  toaster.create({
    title: 'Successful success',
    description: message,
    type: 'success',
  });
};

export const Toaster = () => (
  <Toast.Toaster toaster={toaster}>
    {(toast) => (
      <Toast.Root key={toast.id}>
        <Toast.Title>{toast.title}</Toast.Title>
        <Toast.Description>{toast.description}</Toast.Description>
      </Toast.Root>
    )}
  </Toast.Toaster>
);
