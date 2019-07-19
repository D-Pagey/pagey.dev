import React from 'react';
import Pills from '.';

const props = {
    items: ['react', 'react-context', 'jest', 'react-testing-library']
};

describe('Pill component', () => {
    it('should render', () => {
        const { container } = render(<Pills {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
