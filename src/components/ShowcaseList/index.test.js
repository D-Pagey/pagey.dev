import React from 'react';
import ShowcaseList from '.';

const props = {};

describe('ShowcaseList', () => {
    it('should render', () => {
        const { container } = render(<ShowcaseList {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
