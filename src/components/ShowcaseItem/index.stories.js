import React from 'react';
import { storiesOf } from '@storybook/react';
import ShowcaseItem from '.';

const props = {};

storiesOf('ShowcaseItem', module).add('default', () => <ShowcaseItem {...props} />);
