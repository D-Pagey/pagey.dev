import React from 'react';
import ShowcaseList from '../ShowcaseList';
// import ProjectList from '../ProjectList';
import pagey from './assets/pagey.jpg';
import * as S from './styles';

const PageHome = () => (
    <S.Wrapper data-testid="pageHome">
        <S.IntroGrid>
            <S.Image src={pagey} alt="pagey" />

            <S.Text>
                Yo, my name is Dan, I&apos;m a JavaScript Developer and I enjoy building apps to solve problems.
            </S.Text>

            <S.Text>
                I have always appreciated well done data visualisation and so I&apos;m learning to use raw SVGs to build
                data visualisations within React apps. Hopefully, I can build something cool and interactive. Until
                then, this is my playground.
            </S.Text>
        </S.IntroGrid>

        <ShowcaseList />
        {/* <ProjectList /> */}
    </S.Wrapper>
);

export default PageHome;
