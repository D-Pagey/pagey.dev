import React from 'react';
import { coloursByFunction } from '../../tokens';
import Pills from '.';

const props = {
    items: [
        { colour: coloursByFunction.javascript, value: 'react' },
        { colour: coloursByFunction.javascript, value: 'react-context' },
        { colour: coloursByFunction.javascript, value: 'jest' },
        { colour: coloursByFunction.javascript, value: 'react-testing-library' }
    ]
};

describe('Pill component', () => {
    it('should render', () => {
        const { container } = render(<Pills {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
