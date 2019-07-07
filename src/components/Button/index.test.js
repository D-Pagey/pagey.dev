import React from 'react';
import Button from '.';

describe('Button component', () => {
  it('should render', () => {
    const { container } = render(<Button>Click Me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
