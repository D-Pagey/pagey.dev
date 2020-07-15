import memrise from './assets/memrise.png';
import deliveroo from './assets/deliveroo.png';
import cytora from './assets/cytora.svg';
import drover from './assets/drover.svg';
import clearscore from './assets/clearscore.png';

// Work Experience
export const Exp = {
    exp1: {
        company: 'memrise',
        image: memrise,
        link: 'https://www.memrise.com/',
        role: 'Software Engineer',
        workLength: "July '20 - Present",
        bio: [
            'I have joined the Web team to help the web experience have feature parity with the native mobile experience.'
        ],
        skills: ['react', 'typescript', 'styled components', 'jest', 'react-testing-library']
    },

    exp2: {
        company: 'deliveroo',
        image: deliveroo,
        link: 'https://deliveroo.co.uk',
        role: 'Software Engineer',
        workLength: "Jan '20 - July '20",
        bio: [
            "I joined the Consumer Pricing team as a Software Engineer, our team works on anything to do with costs to our customers. This involves doing pieces of work in a variety of Deliveroo products and quickly getting to grips with the nuances of each team's project.",
            "I've recently shipped a large project that allows our restaurant partners to set unique fees for different postcodes. I was the sole Front End Developer, and I was also involved in the ideation process, user-testing, managing the project prioritisation and workload within the team.",
            "Outside of my team's project work, I'm involved in: implementing Cypress as an end-to-end testing library, advocating for better testing strategies, regularly contributing to our multiple component libraries and design systems, and addressing tech debt where appropriate."
        ],
        skills: ['react', 'typescript', 'redux', 'jest', 'enzyme', 'css-modules', 'circle ci']
    },

    exp3: {
        company: 'cytora',
        image: cytora,
        link: 'https://cytora.com/',
        role: 'Front End Engineer',
        workLength: "May '19 - Jan '20",
        bio: [
            'I was hired to Cytora as the first Front End Developer to build out UIs from scratch on top of the API platform. In addition, I created a reusable component library to be able to build future UIs quickly and consistently.',
            'I wrote and deployed Node cloud functions on Google Cloud Platform to abstract and aggregate API calls from the Front End. This empowered my team to release new features without relying on other teams to amend their microservices.'
        ],
        skills: [
            'react',
            'node',
            'react-context',
            'jest',
            'react-testing-library',
            'styled components',
            'storybook',
            'cypress',
            'circle ci',
            'concourse',
            'gcp'
        ]
    },

    exp4: {
        company: 'drover',
        image: drover,
        link: 'https://www.joindrover.com/',
        role: 'Front End Developer',
        workLength: "Sept '18 - May '19",
        bio: [
            'I joined Drover as a Junior Front End Developer and my first project was working solo on rebuilding Ruby on Rails pages into React. Whilst I was confident working in React, I quickly learnt how to work in a large codebase with lots of shared components (and minimal tests!).',
            'After 6 months I was promoted to a mid-level Developer position. I took advantage of working in a small team by suggesting and implementing improvements quickly. For example, I was the flag bearer for doing more integration and end-to-end testing for critical user flows.'
        ],
        skills: ['react', 'redux', 'jest', 'enzyme', 'styled components', 'storybook', 'cypress', 'heroku', 'aws']
    },

    exp5: {
        company: 'clearscore',
        image: clearscore,
        link: 'https://clearscore.com/',
        role: 'Talent Acquisition',
        workLength: "May '17 - Sept '18",
        bio: [
            'I joined ClearScore as roughly employee #100 and, by the time I left, the company had grown to around 200 employees internationally.',
            'Beyond my day-to-day recruitment role, I created and ran a company-wide interview training programme that focused on bringing all interviewers on to the same page. This aimed to ensure the interview process was fair and unbiased, provided candidates with useful feedback and raised awareness around unconscious bias.',
            'I also made multiple contributions to the front-end production code base which varied from updating integrations on the careers page to bug fixes on the home page.'
        ],
        skills: ['es6', 'handlebars', 'css', 'jenkins']
    }
};
