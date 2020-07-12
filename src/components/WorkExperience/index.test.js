import React from 'react';

import deliveroo from '../PageCV/assets/deliveroo.png';
import { WorkExperience } from '.';

const props = {
    dates: `Jan '20 - July '20`,
    description: [
        `I joined the Consumer Pricing team as a Software Engineer, our team works on anything to do with costs to our customers. This involves doing pieces of work in a variety of Deliveroo products and quickly getting to grips with the nuances of each team's project.`,
        `I've recently shipped a large project that allows our restaurant partners to set unique fees for different postcodes. I was the sole Front End Developer, and I was also involved in the ideation process, user-testing, managing the project prioritisation and workload within the team.`,
        `Outside of my team's project work, I'm involved in: implementing Cypress as an end-to-end testing library, advocating for better testing strategies, regularly contributing to our multiple component libraries and design systems, and addressing tech debt where appropriate.`
    ],
    height: 'auto',
    imageAlt: 'deliveroo',
    image: deliveroo,
    jobTitle: 'Software Engineer',
    technologies: ['react', 'typescript', 'redux', 'jest', 'enzyme', 'css-modules', 'circle ci'],
    website: 'https://deliveroo.co.uk',
    width: '200px'
};

describe('WorkExperience component', () => {
    it('should render', () => {
        const { container } = render(<WorkExperience {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
