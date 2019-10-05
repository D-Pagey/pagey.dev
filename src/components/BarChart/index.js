import React, { useState } from 'react';
import { number } from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { useSprings } from 'react-spring';
import data from './data';
import * as S from './styles';

const minimumValue = data.reduce((acc, curr) => (acc < curr.value ? acc : curr.value), undefined);
const maximumValue = data.reduce((acc, curr) => (acc > curr.value ? acc : curr.value), undefined);

const BarChart = ({ height, paddingX, paddingY, width }) => {
    const [showIndex, setShowIndex] = useState();

    const handleMouseOver = (value) => () => setShowIndex(value);

    const average = Math.round(data.reduce((acc, curr) => acc + curr.value, 0) / data.length);

    const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([paddingX, width - paddingX]);

    const yScale = scaleLinear()
        .domain([minimumValue - 2, maximumValue + 1])
        .range([height - paddingY, paddingY]);

    const springs = useSprings(
        data.length,
        data.map((item, index) => ({
            from: { y: yScale(50), height: 0 },
            y: yScale(item.value),
            height: height - paddingY - yScale(item.value),
            delay: 200 * index
        }))
    );

    return (
        <S.SVG viewBox={`0 0 ${width} ${height}`}>
            <text x={width - 80} y={yScale(average) - 5}>
                Average
            </text>

            {/* Average line */}
            <line
                x1={paddingX}
                y1={yScale(average)}
                x2={width - paddingX + 30}
                y2={yScale(average)}
                stroke="green"
                strokeWidth="1"
                strokeDasharray="2"
            />

            {/* Y Axis */}
            <line x1={paddingX} y1={paddingY} x2={paddingX} y2={height - paddingY} stroke="grey" strokeWidth="1" />

            <text x={paddingX - 5} y={paddingY + 5} textAnchor="end">
                {maximumValue + 1}
            </text>

            <text x={paddingX - 5} y={yScale(average) + 5} textAnchor="end">
                {average}
            </text>

            <text x={paddingX - 50} y={height / 2} transform="rotate(270) translate(-225, -180)">
                Minutes
            </text>

            <text x={paddingX - 5} y={height - paddingY + 5} textAnchor="end">
                {minimumValue - 2}
            </text>

            <text x={width / 2} y={height - 2}>
                Index
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
                <g key={item.id}>
                    {showIndex === index && (
                        <text x={xScale(index) + 5} y={yScale(item.value) - 5} data-testid="barChartText">
                            {item.value}
                        </text>
                    )}

                    <S.Bar
                        data-testid="barChart"
                        height={springs[index].height}
                        onMouseEnter={handleMouseOver(index)}
                        onMouseLeave={handleMouseOver()}
                        rx="3"
                        width={30}
                        x={xScale(index)}
                        y={springs[index].y}
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
    height: number.isRequired,
    paddingX: number.isRequired,
    paddingY: number.isRequired,
    width: number.isRequired
};

export default BarChart;
