import React from 'react';
import { PageTracker } from '.';

describe('PageTracker component', () => {
    it('should render', () => {
        const { container } = render(<PageTracker />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it.todo('should render returned github data');
});
