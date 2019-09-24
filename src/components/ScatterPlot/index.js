/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import data from './data';
import * as S from './styles';

/** TO DO:
 * refactor the scale funcs for BarChart (maybe height func)
 * see if can reususe between barchart e.g. axis, constants - move up to showcase list
 */

const width = 500;
const height = 400;
const paddingX = 50;
const paddingY = 35;

const ScatterPlot = () => {
    const [dataId, setDataId] = useState();

    const handleHover = (id) => () => setDataId(id);

    const xScale = scaleLinear()
        .domain([4, 10])
        .range([paddingX, width - paddingX]);

    const yScale = scaleLinear()
        .domain([0, 10])
        .range([height - paddingY, paddingY]);

    return (
        <S.SVG viewBox={`0 0 ${width} ${height}`}>
            <line x1={paddingX} y1={height - paddingY} x2={paddingX} y2={paddingY} stroke="grey" strokeWidth="1" />

            <text x={paddingX - 5} y={paddingY + 5} textAnchor="end">
                10
            </text>

            <text x={paddingX - 75} y={height / 2} transform="rotate(270) translate(-225, -180)">
                Cups of coffee ☕️ ️
            </text>

            <text x={paddingX - 5} y={height - paddingY + 5} textAnchor="end">
                0
            </text>

            <text x={width / 2 - 60} y={height - 2}>
                Hours of sleep 😴
            </text>

            {/* X axis */}
            <line
                x1={paddingX}
                y1={height - paddingY}
                x2={width - paddingX}
                y2={height - paddingY}
                stroke="grey"
                strokeWidth="1"
            />

            {data.map((item, index) => (
                <g key={item.id}>
                    <circle
                        cx={xScale(item.x)}
                        cy={yScale(item.y)}
                        r="7"
                        fill="green"
                        onMouseEnter={handleHover(item.id)}
                        data-testid={`scatterPlotPoint${index}`}
                    />

                    {dataId === item.id && (
                        <>
                            <line
                                x1={paddingX}
                                y1={yScale(item.y)}
                                x2={xScale(item.x)}
                                y2={yScale(item.y)}
                                stroke="blue"
                                strokeWidth="1"
                                strokeDasharray="2"
                                data-testid={`scatterPlotLine${index}`}
                            />

                            <text x={paddingX - 5} y={yScale(item.y) + 5} textAnchor="end">
                                {item.y}
                            </text>

                            <line
                                x1={xScale(item.x)}
                                y1={yScale(item.y)}
                                x2={xScale(item.x)}
                                y2={height - paddingY}
                                stroke="blue"
                                strokeWidth="1"
                                strokeDasharray="2"
                            />

                            <text x={xScale(item.x) + 4} y={height - 19} textAnchor="end">
                                {item.x}
                            </text>
                        </>
                    )}
                </g>
            ))}
        </S.SVG>
    );
};

export default ScatterPlot;
