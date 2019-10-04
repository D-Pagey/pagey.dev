import React from 'react';
import { storiesOf } from '@storybook/react';
import ScatterPlot from '.';

const props = {
    height: 400,
    paddingX: 50,
    paddingY: 35,
    width: 500
};

storiesOf('ScatterPlot', module).add('default', () => <ScatterPlot {...props} />);
