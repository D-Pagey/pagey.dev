import React from 'react';
import { PageChecklist } from '.';

describe('PageChecklist component', () => {
    it('should render', () => {
        const { container } = render(<PageChecklist />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
