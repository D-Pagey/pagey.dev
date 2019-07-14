import '@storybook/addon-console';
import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';

addDecorator((storyFn) => <div style={{ margin: '1rem' }}>{storyFn()}</div>);

configure(() => {
    const req = requireContext('../src', true, /\.stories\.js$/);
    req.keys().forEach((filename) => req(filename));
}, module);
