import React from 'react';
import mockAxios from 'axios';
import PageHome from '.';

describe('PageHome component', () => {
    beforeEach(() => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    html_url: 'github.com/namo',
                    description: 'Namo is an app...',
                    name: 'namo',
                    pushed_at: '2019-10-16T11:20:56Z',
                    homepage: 'https://namo.london'
                }
            })
        );
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    html_url: 'github.com/heidan',
                    description: 'Heidan is an app...',
                    name: 'heidan',
                    pushed_at: '2019-10-16T11:20:56Z',
                    homepage: 'https://heidan.london'
                }
            })
        );
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    html_url: 'github.com/pantry',
                    description: 'Pantry is an app...',
                    name: 'pantry',
                    pushed_at: '2019-10-16T11:20:56Z',
                    homepage: 'https://pantry.london'
                }
            })
        );
    });

    it('should render', () => {
        const { container } = render(<PageHome />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
