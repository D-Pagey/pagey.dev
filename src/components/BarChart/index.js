import React from 'react';
import { arrayOf, number } from 'prop-types';
import { scaleLinear } from 'd3-scale';
import * as S from './styles';

const width = 500;
const height = 400;
const paddingX = 50;
const paddingY = 35;

const BarChart = ({ data }) => {
    const dataAvg = data.reduce((a, b) => a + b, 0) / data.length;

    const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([0 + paddingX, width - 25]);

    const yScale = scaleLinear()
        .domain([Math.min(...data) - 2, Math.max(...data)])
        .range([0, height - paddingY - paddingY]);

    return (
        <S.SVG viewBox={`0 0 ${width} ${height}`}>
            <line
                x1={paddingX}
                y1={yScale(dataAvg)}
                x2={width}
                y2={yScale(dataAvg)}
                stroke="red"
                strokeWidth="1"
                strokeDasharray="2"
            />
            <line x1={paddingX} y1={height - paddingY} x2={paddingX} y2={paddingY} stroke="grey" strokeWidth="1" />
            <text x={paddingX - 5} y={paddingY + 5} textAnchor="end">
                {Math.max(...data)}
            </text>

            <text x={paddingX - 50} y={height / 2} transform="rotate(270) translate(-225, -175)">
                Minutes
            </text>

            <text x={paddingX - 5} y={height - paddingY + 5} textAnchor="end">
                {Math.min(...data) - 2}
            </text>
            <text x={width / 2} y={height}>
                Index
            </text>

            <line
                x1={paddingX}
                y1={height - paddingY}
                x2={width}
                y2={height - paddingY}
                stroke="grey"
                strokeWidth="1"
            />
            <text x={width - 60} y={height / 2}>
                Average
            </text>

            {data.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <g key={index}>
                    <S.Bar height={yScale(item)} x={xScale(index)} y={height - yScale(item) - paddingY} width={30} />
                    <text x={xScale(index) + 8} y={height - paddingY + 15}>
                        {index}
                    </text>
                </g>
            ))}
        </S.SVG>
    );
};

BarChart.propTypes = {
    data: arrayOf(number).isRequired
};

export default BarChart;
