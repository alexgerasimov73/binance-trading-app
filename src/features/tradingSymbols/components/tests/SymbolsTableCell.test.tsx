import { render, screen } from '@testing-library/react';
import { SymbolsTableCell } from '../SymbolsTableCell';

describe('SymbolsTableCell', () => {
  const mockProps = {
    fontWeight: 'semibold',
    isLoading: false,
    value: 'ETHUSDT',
  };

  test('renders without errors and displays symbol names correctly', () => {
    render(<SymbolsTableCell {...mockProps} />);
    expect(screen.getByText('ETHUSDT')).toBeInTheDocument();
  });

  test('displays a skeleton loader when isLoading is true', () => {
    render(<SymbolsTableCell {...mockProps} isLoading={true} />);
    const skeletonLoader = screen.getByTestId('skeleton-loader');
    expect(skeletonLoader).toBeInTheDocument();
  });

  test('displays value when isLoading is false', () => {
    render(<SymbolsTableCell {...mockProps} isLoading={false} />);
    expect(screen.getByText('ETHUSDT')).toBeInTheDocument();
  });

  test('applies the correct font weight if provided', () => {
    render(<SymbolsTableCell {...mockProps} />);
    const cell = screen.getByText('ETHUSDT').closest('td');
    expect(cell).toHaveClass('fw_semibold');
  });

  test('renders an empty string if value is empty', () => {
    render(<SymbolsTableCell {...mockProps} value="" />);
    expect(screen.queryByText('ETHUSDT')).not.toBeInTheDocument();
  });
});
