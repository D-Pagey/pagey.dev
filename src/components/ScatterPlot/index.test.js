import React from 'react';
import ScatterPlot from '.';

const props = {};

describe('ScatterPlot component', () => {
    it('should render', () => {
        const { container } = render(<ScatterPlot {...props} />);
        expect(container).toMatchSnapshot();
    });
});
