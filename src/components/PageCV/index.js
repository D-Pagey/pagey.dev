import React from 'react';
import Pills from '../Pills';
import deliveroo from './assets/deliveroo.png';
import cytora from './assets/cytora.svg';
import drover from './assets/drover.svg';
import clearscore from './assets/clearscore.svg';
import LinkedInLogo from './assets/LI-Logo.png';
import * as S from './styles';

const PageCV = () => (
    <S.Wrapper data-testid="pageCV">
        <S.Title>Dan Page</S.Title>

        <p>
            I am a Software Developer that loves building applications in JavaScript. I’m always thinking about coding,
            whether that is what I want to learn next or what I’m going to build next.{' '}
        </p>

        <S.List>
            <S.Item>
                <S.CompanyLink href="https://deliveroo.co.uk" target="_blank">
                    <S.Logo src={deliveroo} alt="deliveroo" height="auto" width="200px" />
                </S.CompanyLink>
                <S.FlexWrapper>
                    <S.JobTitle>Software Engineer</S.JobTitle>
                    <S.ItalicSpan>Jan &apos;20 - Present</S.ItalicSpan>
                </S.FlexWrapper>
                <p>
                    I joined the Consumer Pricing team as a Software Engineer, our team works on anything to do with
                    costs to our customers. This involves doing pieces of work in a variety of Deliveroo products and
                    quickly getting to grips with the nuances of each team&apos;s project.
                </p>

                <p>
                    I&apos;ve recently shipped a large project that allows our restaurant partners to set unique fees
                    for different postcodes. I was the sole Front End Developer, and I was also involved in the ideation
                    process, user-testing, managing the project prioritisation and workload within the team.
                </p>

                <p>
                    Outside of my team&apos;s project work, I&apos;m involved in: implementing Cypress as an end-to-end
                    testing library, advocating for better testing strategies, regularly contributing to our multiple
                    component libraries and design systems, and addressing tech debt where appropriate.
                </p>

                <Pills items={['react', 'typescript', 'redux', 'jest', 'enzyme', 'css-modules', 'circle ci']} />
            </S.Item>

            <S.Item>
                <S.CompanyLink href="https://cytora.com/" target="_blank">
                    <S.Logo src={cytora} alt="cytora" />
                </S.CompanyLink>
                <S.FlexWrapper>
                    <S.JobTitle>Front End Engineer</S.JobTitle>
                    <S.ItalicSpan>May &apos;19 - Jan &apos;20</S.ItalicSpan>
                </S.FlexWrapper>

                <p>
                    I was hired to Cytora as the first Front End Developer to build out UIs from scratch on top of the
                    API platform. In addition, I created a reusable component library to be able to build future UIs
                    quickly and consistently.
                </p>

                <p>
                    I wrote and deployed Node cloud functions on Google Cloud Platform to abstract and aggregate API
                    calls from the Front End. This empowered my team to release new features without relying on other
                    teams to amend their microservices.
                </p>

                <Pills
                    items={[
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
                    ]}
                />
            </S.Item>

            <S.Item>
                <S.CompanyLink href="https://www.joindrover.com/" target="_blank">
                    <S.Logo src={drover} alt="drover" />
                </S.CompanyLink>
                <S.FlexWrapper>
                    <S.JobTitle>Front End Developer</S.JobTitle>
                    <S.ItalicSpan>Sept &apos;18 - May &apos;19</S.ItalicSpan>
                </S.FlexWrapper>
                <p>
                    I joined Drover as a Junior Front End Developer and my first project was working solo on rebuilding
                    Ruby on Rails pages into React. Whilst I was confident working in React, I quickly learnt how to
                    work in a large codebase with lots of shared components (and minimal tests!).
                </p>

                <p>
                    After 6 months I was promoted to a mid-level Developer position. I took advantage of working in a
                    small team by suggesting and implementing improvements quickly. For example, I was the flag bearer
                    for doing more integration and end-to-end testing for critical user flows.
                </p>

                <Pills
                    items={[
                        'react',
                        'redux',
                        'jest',
                        'enzyme',
                        'styled components',
                        'storybook',
                        'cypress',
                        'heroku',
                        'aws'
                    ]}
                />
            </S.Item>

            <S.Item>
                <S.CompanyLink href="https://clearscore.com/" target="_blank">
                    <S.Logo src={clearscore} alt="clearscore" />
                </S.CompanyLink>
                <S.FlexWrapper>
                    <S.JobTitle>Talent Acquisition</S.JobTitle>
                    <S.ItalicSpan>May &apos;17 - Sept &apos;18</S.ItalicSpan>
                </S.FlexWrapper>

                <p>
                    I joined ClearScore as roughly employee #100 and, by the time I left, the company had grown to
                    around 200 employees internationally.
                </p>

                <p>
                    Beyond my day-to-day recruitment role, I created and ran a company-wide interview training programme
                    that focused on bringing all interviewers on to the same page. This aimed to ensure the interview
                    process was fair and unbiased, provided candidates with useful feedback and raised awareness around
                    unconscious bias.
                </p>

                <p>
                    I also made multiple contributions to the front-end production code base which varied from updating
                    integrations on the careers page to bug fixes on the home page.
                </p>

                <Pills items={['es6', 'handlebars', 'css', 'jenkins']} />
            </S.Item>
        </S.List>

        <S.LinkedInLinkWrapper>
            <S.ItalicSpan>For further career history, check out my profile on: </S.ItalicSpan>
            <S.Link href="https://www.linkedin.com/in/dan-page/" target="_blank" rel="noopener noreferrer">
                <S.Image src={LinkedInLogo} alt="linked in" />
            </S.Link>
        </S.LinkedInLinkWrapper>
    </S.Wrapper>
);

export default PageCV;
