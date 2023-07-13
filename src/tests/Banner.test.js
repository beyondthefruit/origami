import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

describe('Banner', () => {
  it('should display a logo', () => {
    render(<Banner />);
    const { getByTestId } = render(
      <img data-testid='logo' src='origamil'></img>
    );

    expect(getByTestId('logo')).toHaveAttribute('src', 'origamil');
  });

  it('should display the website title', () => {
    render(<Banner />);
    const websiteTitle = screen.getByText(/origami/i);
    expect(websiteTitle).toBeInTheDocument();
  });
});
