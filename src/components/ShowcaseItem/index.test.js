import React from 'react';
import ShowcaseItem from '.';

const props = {};

describe('ShowcaseItem component', () => {
    it('should render', () => {
        const { container } = render(<ShowcaseItem {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
