import React from 'react';
import { fireEvent } from '@testing-library/react';
import ScatterPlot from '.';

const props = {};

describe('ScatterPlot component', () => {
    it('should render', () => {
        const { container } = render(<ScatterPlot {...props} />);
        expect(container).toMatchSnapshot();
    });

    it('should render lines on hover', () => {
        const { getByTestId } = render(<ScatterPlot {...props} />);
        fireEvent.mouseEnter(getByTestId('scatterPlotPoint0'));
        getByTestId('scatterPlotLine0');
    });
});
