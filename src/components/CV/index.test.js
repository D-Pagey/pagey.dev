import React from 'react';
import CV from '.';

describe('CV component', () => {
  it('should render', () => {
    const { container } = render(<CV />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
