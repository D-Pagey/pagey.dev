import React from 'react';
import App from '.';

it('should render', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
