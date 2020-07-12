import React from 'react';

import { WorkExperience } from '../WorkExperience';
import LinkedInLogo from './assets/LI-Logo.png';
import data from './data';
import * as S from './styles';

export const PageCV = () => (
    <S.Wrapper data-testid="pageCV">
        <S.Title>Dan Page</S.Title>
        <p>
            I am a Software Developer that loves building applications in JavaScript. I’m always thinking about coding,
            whether that is what I want to learn next or what I’m going to build next.{' '}
        </p>

        <S.List>
            {data.map((item) => (
                <WorkExperience
                    key={item.website}
                    dates={item.dates}
                    description={item.description}
                    height={item.height}
                    imageAlt={item.imageAlt}
                    image={item.image}
                    jobTitle={item.jobTitle}
                    technologies={item.technologies}
                    website={item.website}
                    width={item.width}
                />
            ))}
        </S.List>

        <S.LinkedInLinkWrapper>
            <S.ItalicSpan>For further career history, check out my profile on: </S.ItalicSpan>
            <S.Link href="https://www.linkedin.com/in/dan-page/" target="_blank" rel="noopener noreferrer">
                <S.Image src={LinkedInLogo} alt="linked in" />
            </S.Link>
        </S.LinkedInLinkWrapper>
    </S.Wrapper>
);
