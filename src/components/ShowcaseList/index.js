import React from 'react';
import ShowcaseItem from '../ShowcaseItem';
import BarChart from '../BarChart';
import * as S from './styles';

const ShowcaseList = () => (
    <S.Wrapper>
        <ShowcaseItem
            description="Here is a sample of my recent gym sessions with their durations. Everything was built with raw SVGs and using the scale functions from the D3 library."
            title="Gym Session Duration"
            thumbnail={<BarChart data={[58, 67, 58, 63, 63, 62, 52, 53]} xAxisLabel="Index" yAxisLabel="Minutes" />}
        />
    </S.Wrapper>
);

export default ShowcaseList;
