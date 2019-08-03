import React from 'react';
import { storiesOf } from '@storybook/react';
import ShowcaseList from '.';

const props = {};

storiesOf('ShowcaseList', module).add('default', () => <ShowcaseList {...props} />);
