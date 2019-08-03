import React, { useState } from 'react';
import { arrayOf, number, string } from 'prop-types';
import { scaleLinear } from 'd3-scale';
import * as S from './styles';

const width = 500;
const height = 400;
const paddingX = 50;
const paddingY = 35;

const BarChart = ({ data, yAxisLabel, xAxisLabel }) => {
    const [showIndex, setShowIndex] = useState();

    const handleMouseOver = (value) => () => setShowIndex(value);

    const average = Math.round(data.reduce((a, b) => a + b, 0) / data.length);

    const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([paddingX, width - 25]);

    const yScale = scaleLinear()
        .domain([Math.min(...data) - 2, Math.max(...data) + 1])
        .range([0, height - paddingY - paddingY]);

    return (
        <S.SVG viewBox={`0 0 ${width} ${height}`}>
            <line
                x1={paddingX}
                y1={yScale(average)}
                x2={width}
                y2={yScale(average)}
                stroke="green"
                strokeWidth="1"
                strokeDasharray="2"
            />

            <line x1={paddingX} y1={height - paddingY} x2={paddingX} y2={paddingY} stroke="grey" strokeWidth="1" />

            <text x={paddingX - 5} y={paddingY + 5} textAnchor="end">
                {Math.max(...data) + 1}
            </text>

            <text x={paddingX - 5} y={yScale(average) + 5} textAnchor="end">
                {average}
            </text>

            <text x={paddingX - 50} y={height / 2} transform="rotate(270) translate(-225, -180)">
                {yAxisLabel}
            </text>

            <text x={paddingX - 5} y={height - paddingY + 5} textAnchor="end">
                {Math.min(...data) - 2}
            </text>

            <text x={width / 2} y={height}>
                {xAxisLabel}
            </text>

            <line
                x1={paddingX}
                y1={height - paddingY}
                x2={width}
                y2={height - paddingY}
                stroke="grey"
                strokeWidth="1"
            />
            <text x={width - 60} y={yScale(average) - 5}>
                Average
            </text>

            {data.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <g key={index}>
                    {showIndex === index && (
                        <text x={xScale(index) + 5} y={height - yScale(item) - paddingY - 5}>
                            {item}
                        </text>
                    )}

                    <S.Bar
                        onMouseEnter={handleMouseOver(index)}
                        onMouseLeave={handleMouseOver()}
                        height={yScale(item)}
                        x={xScale(index)}
                        y={height - yScale(item) - paddingY}
                        width={30}
                    />
                    <text x={xScale(index) + 8} y={height - paddingY + 15}>
                        {index}
                    </text>
                </g>
            ))}
        </S.SVG>
    );
};

BarChart.propTypes = {
    data: arrayOf(number).isRequired,
    xAxisLabel: string.isRequired,
    yAxisLabel: string.isRequired
};

export default BarChart;
