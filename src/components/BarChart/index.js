import React, { useState } from 'react';
import { arrayOf, number, string } from 'prop-types';
import { scaleLinear } from 'd3-scale';
import * as S from './styles';

const BarChart = ({ data, height, paddingX, paddingY, xAxisLabel, yAxisLabel, width }) => {
    const [showIndex, setShowIndex] = useState();

    const handleMouseOver = (value) => () => setShowIndex(value);

    const average = Math.round(data.reduce((a, b) => a + b, 0) / data.length);

    const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([paddingX, width - paddingX]);

    const yScale = scaleLinear()
        .domain([Math.min(...data) - 2, Math.max(...data) + 1])
        .range([height - paddingY, paddingY]);

    return (
        <S.SVG viewBox={`0 0 ${width} ${height}`}>
            <text x={width - 80} y={yScale(average) - 5}>
                Average
            </text>

            {/* Average line */}
            <line
                x1={paddingX}
                y1={yScale(average)}
                x2={width - paddingX}
                y2={yScale(average)}
                stroke="green"
                strokeWidth="1"
                strokeDasharray="2"
            />

            {/* Y Axis */}
            <line x1={paddingX} y1={paddingY} x2={paddingX} y2={height - paddingY} stroke="grey" strokeWidth="1" />

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

            <text x={width / 2} y={height - 2}>
                {xAxisLabel}
            </text>

            {/* X axis */}
            <line
                x1={paddingX}
                y1={height - paddingY}
                x2={width - paddingX + 30}
                y2={height - paddingY}
                stroke="grey"
                strokeWidth="1"
            />

            {data.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <g key={index}>
                    {showIndex === index && (
                        <text x={xScale(index) + 5} y={yScale(item) - 5} data-testid="barChartText">
                            {item}
                        </text>
                    )}

                    <S.Bar
                        data-testid="barChart"
                        height={height - paddingY - yScale(item)}
                        onMouseEnter={handleMouseOver(index)}
                        onMouseLeave={handleMouseOver()}
                        rx="3"
                        width={30}
                        x={xScale(index)}
                        y={yScale(item)}
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
    height: number.isRequired,
    paddingX: number.isRequired,
    paddingY: number.isRequired,
    width: number.isRequired,
    xAxisLabel: string.isRequired,
    yAxisLabel: string.isRequired
};

export default BarChart;
