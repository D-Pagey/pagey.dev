import React from 'react';
import { Tracker } from '.';

const props = {
    details: [
        {
            id: '123',
            repo: { name: 'Gaming Page' },
            payload: {
                commits: [{ message: 'This is my commit message', sha: '11111' }]
            },
            created_at: '2020-07-02T19:11:46Z'
        }
    ],
    name: 'Andy'
};

describe('Tracker component', () => {
    it('should render', () => {
        const { container } = render(<Tracker {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
