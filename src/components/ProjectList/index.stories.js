import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectList from '.';

const props = {};

storiesOf('ProjectList', module).add('default', () => <ProjectList {...props} />);
