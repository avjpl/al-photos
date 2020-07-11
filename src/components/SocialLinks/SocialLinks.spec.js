import React from 'react';
import { render } from '@testing-library/react';

import SocialLinks from './';

jest.mock('../../ui/SVGIcon', () => {
  const SVGIconMock = () => <div data-testid={'SVGIconMock'} />;

  return SVGIconMock;
});

describe('SocialLinks', () => {
  test('render a social link', () => {
    const defaultProps = {
      socials: [{ name: 'instagram', link: 'https://www.instagram.com/avjpl' }]
    };

    const { container, debug, baseElement, rerender, asFragment} = render(<SocialLinks {...defaultProps} />);
    // debug();
    // console.log(container);
    // console.log(baseElement);
    console.log(asFragment();
    // expect(getByText('Hello Jest!')).toBeInTheDocument();
  });
});
