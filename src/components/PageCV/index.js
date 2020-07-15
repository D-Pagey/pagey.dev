import React from 'react';
import { PageExperience } from '../WorkExperience';
import { Exp } from '../WorkExperience/data';
import LinkedInLogo from '../WorkExperience/assets/LI-Logo.png';
import * as S from './styles';

export const PageCV = () => (
    <S.Wrapper data-testid="pageCV">
        <S.Title>Dan Page</S.Title>

        <p>
            I am a Software Developer that loves building applications in JavaScript. I’m always thinking about coding,
            whether that is what I want to learn next or what I’m going to build next.{' '}
        </p>

        <S.List>
            {Object.keys(Exp).map((key) => (
                <PageExperience key={key} {...Exp[key]} />
            ))}
        </S.List>

        <S.LinkedInLinkWrapper>
            <S.ItalicSpan>For further career history, check out my profile on: </S.ItalicSpan>
            <S.Link href="https://www.linkedin.com/in/dan-page/" target="_blank" rel="noopener noreferrer">
                <S.Image src={LinkedInLogo} alt="linkedin" />
            </S.Link>
        </S.LinkedInLinkWrapper>
    </S.Wrapper>
);
