import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '.';

const props = {
    data: [58, 67, 58, 63, 63, 62, 52],
    xAxisLabel: 'Index',
    yAxisLabel: 'Minutes'
};

storiesOf('BarChart', module).add('default', () => <BarChart {...props} />);
