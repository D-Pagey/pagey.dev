import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '../BarChart';
import ShowcaseItem from '.';

const props = {
    description: 'A description of the showcase',
    thumbnail: <BarChart data={[58, 67, 58, 63, 63, 62, 52]} xAxisLabel="Index" yAxisLabel="Minutes" />,
    title: 'Showcase Title'
};

storiesOf('ShowcaseItem', module).add('default', () => <ShowcaseItem {...props} />);
