import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '.';

const props = {
    data: [58, 67, 58, 63, 63, 62, 52],
    xAxisLabel: 'Index',
    yAxisLabel: 'Minutes',
    height: 400,
    paddingX: 50,
    paddingY: 35,
    width: 500
};

storiesOf('BarChart', module).add('default', () => <BarChart {...props} />);
