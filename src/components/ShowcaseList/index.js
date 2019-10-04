import React from 'react';
import ShowcaseItem from '../ShowcaseItem';
import BarChart from '../BarChart';
import ScatterPlot from '../ScatterPlot';
import * as S from './styles';

const width = 500;
const height = 400;
const paddingX = 50;
const paddingY = 35;

const ShowcaseList = () => (
    <S.Wrapper>
        <ShowcaseItem
            description={[
                'This is a fictitious scatter plot representing coffee consumption vs hours of sleep.',
                'At some point, I would like to actually track these data points and see if there is indeed a negative correlation.'
            ]}
            thumbnail={<ScatterPlot height={height} paddingX={paddingX} paddingY={paddingY} width={width} />}
            title="Scatter Plot"
        />
        <ShowcaseItem
            description={[
                'Here is a sample of my recent gym session durations in minutes.',
                'This bar chart was built with raw SVGs and only using the scale functions from the D3 library.'
            ]}
            thumbnail={
                <BarChart
                    data={[58, 67, 58, 63, 63, 62, 52, 53]}
                    height={height}
                    paddingX={paddingX}
                    paddingY={paddingY}
                    xAxisLabel="Index"
                    yAxisLabel="Minutes"
                    width={width}
                />
            }
            title="Gym Session Duration"
        />
    </S.Wrapper>
);

export default ShowcaseList;
