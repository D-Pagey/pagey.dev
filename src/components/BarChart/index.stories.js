import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '.';

const props = {
    height: 400,
    paddingX: 50,
    paddingY: 35,
    width: 500
};

storiesOf('BarChart', module).add('default', () => <BarChart {...props} />);
