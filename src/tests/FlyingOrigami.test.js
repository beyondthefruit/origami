import { render, screen } from '@testing-library/react';
import FlyingOrigami from '../components/FlyingOrigami';
import userEvent from '@testing-library/user-event';

describe('Flying Origami component', () => {
  it('should display the color mode button', () => {
    const mockColorClick = jest.fn();

    render(<FlyingOrigami />);
    const colorButton = screen.getByText(/black/i);

    expect(colorButton).toBeInTheDocument();
    userEvent.click(colorButton);
    // expect(mockColorClick).toHaveBeenCalled();
  });
});
