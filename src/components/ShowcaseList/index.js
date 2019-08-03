import React from 'react';
import ShowcaseItem from '../ShowcaseItem';
import BarChart from '../BarChart';
import * as S from './styles';

const ShowcaseList = () => (
    <S.Wrapper>
        <ShowcaseItem
            description="This is my gym usage"
            title="Gym Usage"
            thumbnail={<BarChart data={[58, 67, 58, 63, 63, 62, 52]} />}
        />
    </S.Wrapper>
);

export default ShowcaseList;
