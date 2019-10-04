import React from 'react';
import { fireEvent } from '@testing-library/react';
import BarChart from '.';

const props = {
    data: [58, 67, 58, 63, 63, 62, 52],
    height: 400,
    paddingX: 50,
    paddingY: 35,
    xAxisLabel: 'Index',
    yAxisLabel: 'Minutes',
    width: 500
};

describe('BarChart component', () => {
    it('should render', () => {
        const { container } = render(<BarChart {...props} />);
        expect(container.firstChil).toMatchSnapshot();
    });

    it('should render text on mouseover', () => {
        const { queryAllByTestId, getByTestId } = render(<BarChart {...props} />);
        fireEvent.mouseEnter(queryAllByTestId('barChart')[0]);
        getByTestId('barChartText');
    });
});
