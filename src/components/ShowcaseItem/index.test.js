import React from 'react';
import BarChart from '../BarChart';
import ShowcaseItem from '.';

const props = {
    description: ['A description of the showcase', 'Another paragraph'],
    thumbnail: <BarChart height={400} paddingX={50} paddingY={35} width={500} />,
    title: 'Showcase Title'
};

describe('ShowcaseItem component', () => {
    it('should render', () => {
        const { container } = render(<ShowcaseItem {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
