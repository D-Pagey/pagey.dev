import React from 'react';
import { storiesOf } from '@storybook/react';
import ScatterPlot from '.';

const props = {};

storiesOf('ScatterPlot', module).add('default', () => <ScatterPlot {...props} />);
