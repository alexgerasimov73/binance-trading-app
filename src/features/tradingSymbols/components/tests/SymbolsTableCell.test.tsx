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
