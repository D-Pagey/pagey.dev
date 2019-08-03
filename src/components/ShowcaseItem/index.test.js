import React from 'react';
import BarChart from '../BarChart';
import ShowcaseItem from '.';

const props = {
    description: 'A description of the showcase',
    thumbnail: <BarChart data={[58, 67, 58, 63, 63, 62, 52]} xAxisLabel="Index" yAxisLabel="Minutes" />,
    title: 'Showcase Title'
};

describe('ShowcaseItem component', () => {
    it('should render', () => {
        const { container } = render(<ShowcaseItem {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
