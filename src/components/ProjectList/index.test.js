import React from 'react';
import ProjectList from '.';

const props = {};

describe('ProjectList component', () => {
    it('should render', () => {
        const { container } = render(<ProjectList {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
