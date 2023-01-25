import { render } from '@testing-library/react';
import Presentation from './presentation';
import { IntroTitle } from './Presentation.style';

describe('Title', () => {
  it('should display the website title', () => {
    render(<IntroTitle />);
    const websiteTitle = screen.getByText(/Discover my paper creations/i);
    expect(websiteTitle).toBeInTheDocument();
  });
});
