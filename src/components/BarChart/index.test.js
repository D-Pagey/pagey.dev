import React from 'react';
import BarChart from '.';

const props = {
    data: [58, 67, 58, 63, 63, 62, 52],
    xAxisLabel: 'Index',
    yAxisLabel: 'Minutes'
};

describe('BarChart component', () => {
    it('should render', () => {
        const { container } = render(<BarChart {...props} />);
        expect(container.firstChil).toMatchSnapshot();
    });
});
