import React from 'react';
import BarChart from '.';

describe('BarChart component', () => {
    it('should render', () => {
        const { container } = render(<BarChart />);
        expect(container.firstChil).toMatchSnapshot();
    });
});
