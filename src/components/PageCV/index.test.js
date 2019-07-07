import React from 'react';
import PageCV from '.';

describe('PageCV component', () => {
    it('should render', () => {
        const { container } = render(<PageCV />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
