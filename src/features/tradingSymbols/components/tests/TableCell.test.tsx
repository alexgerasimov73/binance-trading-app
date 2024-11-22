import { render, screen } from '@testing-library/react';
import { TableCell } from '../TableCell';

describe('TableCell', () => {
  const mockProps = {
    fontWeight: 'semibold',
    isLoading: false,
    value: 'ETHUSDT',
  };

  test('renders without errors and displays symbol names correctly', () => {
    render(<TableCell {...mockProps} />);
    expect(screen.getByText('ETHUSDT')).toBeInTheDocument();
  });

  test('applies the correct font weight if provided', () => {
    render(<TableCell {...mockProps} />);
    const cell = screen.getByText('ETHUSDT').closest('td');
    expect(cell).toHaveClass('fw_semibold');
  });

  test('renders an empty string if value is empty', () => {
    render(<TableCell {...mockProps} value="" />);
    expect(screen.queryByText('ETHUSDT')).not.toBeInTheDocument();
  });
});
