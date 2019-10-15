import React from 'react';
import { storiesOf } from '@storybook/react';
import Project from '.';

const props = {
    codeLink: 'https://github.com/D-Pagey/namo',
    description:
        'Namo was a project where I wanted to build an app to review and share rent for new-build flats in London. An apt description would have been a cross between AirBnB and Glassdoor.',
    features: ['Sign in', 'CRUD Buildings + Reviews', 'Contact form'],
    lastCommit: '22nd June 2019',
    liveLink: 'https://namo.london',
    name: 'Namo',
    status:
        'I decided to stop working on Namo after I realised that users would potentially only use the app once a year when they needed to move house.',
    summary: 'Mix AirBnB with Glassdoor'
};

storiesOf('Project', module).add('default', () => <Project {...props} />);
