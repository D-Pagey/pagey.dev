import React from 'react';
import { scaleLinear } from 'd3-scale';
import * as S from './styles';

const data = [58, 67, 58, 63, 63, 62, 52];

const width = 600;
const height = 400;
const padding = 50;

const BarChart = () => {
    const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([0 + padding, width - 25]);

    const yScale = scaleLinear()
        .domain([Math.min(...data) - 2, Math.max(...data)])
        .range([0, height - padding - padding]);

    return (
        <div>
            <h1>My Gym Usage:</h1>
            <svg width={width} height={height} style={{ border: '1px solid black' }}>
                <line x1={padding} y1={height - padding} x2={padding} y2={padding} stroke="green" strokeWidth="1" />
                <text x={padding - 5} y={padding + 5} textAnchor="end">
                    {Math.max(...data)}
                </text>
                <text x={padding} y={height / 2}>
                    Minutes
                </text>
                <text x={padding - 5} y={height - padding + 5} textAnchor="end">
                    {Math.min(...data) - 2}
                </text>

                <line
                    x1={padding}
                    y1={height - padding}
                    x2={width}
                    y2={height - padding}
                    stroke="blue"
                    strokeWidth="1"
                />

                {data.map((item, index) => (
                    <S.Bar
                        height={yScale(item)}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        x={xScale(index)}
                        y={height - yScale(item) - padding}
                        width={25}
                    />
                ))}
            </svg>
        </div>
    );
};

export default BarChart;
