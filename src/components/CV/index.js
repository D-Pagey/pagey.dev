import React from 'react';
import cytora from './assets/cytora.svg';
import * as S from './styles';

const CV = () => (
  <S.Wrapper>
    <h1>Curriculum Vitae</h1>
    <h2>Dan Page</h2>

    <p>
      I am a Software Developer that loves building applications in JavaScript. I’m always thinking about coding,
      whether that is what I want to learn next or what I’m going to build next.{' '}
    </p>

    <h2>Where I have worked:</h2>
    <S.List>
      <S.Item>
        <S.CompanyLink href="https://cytora.com/" target="_blank">
          <img src={cytora} alt="cytora" />
        </S.CompanyLink>
        <p>
          I joined as the first Front End Developer to build out UIs from scratch on top of the API platform. I&apos;m
          also creating a reusable component library to be able to build future UIs quickly and consistently.
        </p>
      </S.Item>
      <S.Item>
        <S.CompanyLink href="https://www.joindrover.com/" target="_blank">
          Drover
        </S.CompanyLink>
        <p>
          I joined Drover as a Junior Front End Developer and my first project was working solo on rebuilding Ruby on
          Rails pages into React. Whilst I was confident working in React, I quickly learnt how to work in a large
          codebase with lots of shared components (and minimal tests!).
        </p>

        <p>
          After 6 months I have been promoted to a mid-level Developer and I believe that I have shown myself to be an
          equal part of the Front End team. I am constantly looking for ways to improve our codebase and workflow. I
          have taken advantage of working in a small team by suggesting and implementing improvements quickly.
          Currently, I am the flag bearer for doing more unit testing and I spend a lot of my free time improving myself
          in this area.
        </p>
      </S.Item>
    </S.List>
  </S.Wrapper>
);

export default CV;
