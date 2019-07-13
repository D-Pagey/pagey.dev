import React from 'react';
import cytora from './assets/cytora.svg';
import drover from './assets/drover.svg';
import clearscore from './assets/clearscore.svg';
import * as S from './styles';
import Pills from '../Pills';

const PageCV = () => (
    <S.Wrapper data-testid="pageCV">
        <S.Title>Mini CV</S.Title>

        <S.SubTitle>Dan Page</S.SubTitle>

        <p>
            I am a Software Developer that loves building applications in JavaScript. I’m always thinking about coding,
            whether that is what I want to learn next or what I’m going to build next.{' '}
        </p>

        <S.List>
            <S.Item>
                <S.CompanyLink href="https://cytora.com/" target="_blank">
                    <S.Logo src={cytora} alt="cytora" />
                </S.CompanyLink>
                <S.FlexWrapper>
                    <S.JobTitle>Front End Engineer</S.JobTitle>
                    <S.ItalicSpan>May &apos;19 - Present</S.ItalicSpan>
                </S.FlexWrapper>

                <p>
                    I joined as the first Front End Developer to build out UIs from scratch on top of the API platform.
                    I&apos;m also creating a reusable component library to enable multiple teams to build UIs quickly
                    and consistently.
                </p>

                <Pills
                    items={[
                        'react',
                        'react-context',
                        'styled components',
                        'storybook',
                        'jest',
                        'react-testing-library',
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
                    I joined Drover as a Junior Front End Developer and my first project was working on rebuilding Ruby
                    on Rails pages in React. The main learning curve came from using shared components that had no unit
                    or integration tests, which made refactoring challenging.
                </p>

                <p>
                    After 6 months I was promoted to a mid-level Developer and put on a 3 month greenfield project to
                    rebuild the entire user booking flow. I was the flag bearer for doing more unit and integration
                    testing and so I spent a lot of my free time learning about Jest, Enzyme, React-Testing-Library and
                    Cypress.
                </p>

                <Pills
                    colour="pink"
                    items={[
                        'react',
                        'redux',
                        'styled components',
                        'storybook',
                        'jest',
                        'enzyme',
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

                <Pills colour="lightgreen" items={['es6', 'handlebars', 'css', 'jenkins']} />
            </S.Item>
        </S.List>
    </S.Wrapper>
);

export default PageCV;
