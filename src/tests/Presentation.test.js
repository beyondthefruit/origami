import { render } from '@testing-library/react';
import Presentation from './presentation';
import { IntroTitle, Logo } from './Presentation.style';
import userEvent from '@testing-library/user-event';

describe('Presentation', () => {
  it('should display a logo', () => {
    render(<Presentation />);
    const { getByTestId } = render(
      <img data-testid='logo' src='orgimil'></img>
    );
    expect(getByTestId('logo')).toHaveAttribute('img', 'origamil');
  });

  it('should display the website title', () => {
    render(<Presentation />);
    const websiteTitle = screen.getByText(/Discover my paper creations/i);
    expect(websiteTitle).toBeInTheDocument();
  });
});
