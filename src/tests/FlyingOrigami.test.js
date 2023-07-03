import { render, screen } from '@testing-library/react';
import FlyingOrigami from './FlyingOrigami';
import userEvent from '@testing-library/user-event';

describe('Flying Origami component', () => {
  it('should display the color mode button', () => {
    const mockColorClick = jest.fn();

    render(<FlyingOrigami colorClick={mockColorClick} />);
    const colorButton = screen.getByText(/color/i);
    // const colorButton = screen.getByRole('button', { name: /color/i });
    expect(colorButton).toBeInTheDocument();
    userEvent.click(colorButton);
    expect(mockColorClick).toHaveBeenCalled();
  });
});
