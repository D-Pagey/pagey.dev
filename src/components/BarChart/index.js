import React from 'react';
import { scaleLinear } from 'd3-scale';

const data = [1, 3, 7, 10, 7, 4, 3];

const width = 500;
const height = 300;
const padding = 30;

const BarChart = () => {
    const xScale = scaleLinear()
        .domain([0, data.length - 1])
        .range([0 + padding, width - 25]);

    const yScale = scaleLinear()
        .domain([0, Math.max(...data)])
        .range([0, height]);

    // console.log('here', Math.max(...data));

    return (
        <svg width={width} height={height} style={{ border: '1px solid black' }}>
            {data.map((item, index) => (
                <rect width={25} height={yScale(item)} x={xScale(index)} y={height - yScale(item)} fill="red" />
            ))}
        </svg>
    );
};

export default BarChart;
