import { render } from '@testing-library/react';
import Banner from '../components/Banner';
import { IntroTitle, Logo } from '../Banner.style';
import userEvent from '@testing-library/user-event';

describe('Banner', () => {
  it('should display a logo', () => {
    render(<Banner />);
    const { getByTestId } = render(
      <img data-testid='logo' src='orgimil'></img>
    );
    expect(getByTestId('logo')).toHaveAttribute('img', 'origamil');
  });

  it('should display the website title', () => {
    render(<Banner />);
    const websiteTitle = screen.getByText(/Discover my paper creations/i);
    expect(websiteTitle).toBeInTheDocument();
  });
});
