import React from 'react';
import ShowcaseList from '../ShowcaseList';
import pagey from './assets/pagey.jpg';
import * as S from './styles';

export const PageHome = () => (
    <S.Wrapper data-testid="pageHome">
        <S.IntroGrid>
            <S.Image src={pagey} alt="pagey" />

            <S.Text>
                Yo, my name is Dan, I&apos;m a JavaScript Developer and I enjoy building apps to solve problems.
            </S.Text>

            <S.Text>
                I have always appreciated well done data visualisation and so I&apos;m always looking for an excuse to
                use raw SVGs and animate them. In my spare time, I am often either building a side project or looking up
                some cool new technology that I will likely never use.
            </S.Text>
        </S.IntroGrid>

        <ShowcaseList />
    </S.Wrapper>
);
