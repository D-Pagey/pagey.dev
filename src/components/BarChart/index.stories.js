import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '.';

const props = {
    data: [58, 67, 58, 63, 63, 62, 52]
};

storiesOf('BarChart', module).add('default', () => <BarChart {...props} />);
