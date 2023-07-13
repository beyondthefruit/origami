import { render, screen } from '@testing-library/react';
import OrigamiListPart from '../components/OrigamisList';

describe('Origamis List', () => {
  const mockData = [
    {
      id: 1,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFEvUi1XNsRvcG_K4TkKYVWwDiKrumqNj5g&usqp=CAU',
      name: 'Bird',
      difficulty: 1,
    },
  ];

  // it('should render a photo', () => {
  //   const { getAllByText } = render(<OrigamiListPart paperData={mockData} />);
  //   expect(toHaveAttribute('img')).toBeTruthy();
  // });

  it('should render a name', () => {
    const { getByText } = render(<OrigamiListPart paperData={mockData} />);
    expect(getByText('Bird')).toBeInTheDocument();
  });
});
