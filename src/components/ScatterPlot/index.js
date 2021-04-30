/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { number } from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { useSprings, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import data from './data';
import * as S from './styles';

const ScatterPlot = ({ height, paddingX, paddingY, width }) => {
    const [dataId, setDataId] = useState();
    const [isVisible, setIsVisible] = useState(true);

    const onVisibilityChange = (isShowing) => setIsVisible(isShowing);

    const handleHover = (id) => () => setDataId(id);

    // hard code the min and max points for x axis
    const xScale = scaleLinear()
        .domain([4, 10])
        .range([paddingX, width - paddingX]);

    // hard code the min and max points for y axis
    const yScale = scaleLinear()
        .domain([0, 10])
        .range([height - paddingY, paddingY]);

    const springs = useSprings(
        data.length,
        data.map((item) => ({
            from: { cy: height - paddingY, cx: paddingX },
            cy: isVisible ? yScale(item.y) : height - paddingY,
            cx: isVisible ? xScale(item.x) : paddingX,
            config: { friction: isVisible ? 100 : 0 },
            delay: 1750
        }))
    );

    return (
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <S.SVG viewBox={`0 0 ${width} ${height}`}>
                {/* Y Axis */}
                <line x1={paddingX} y1={height - paddingY} x2={paddingX} y2={paddingY} stroke="grey" strokeWidth="1" />

                <text x={paddingX - 5} y={paddingY + 5} textAnchor="end">
                    10
                </text>

                <text x={xScale(10) + 4} y={height - 19} textAnchor="end">
                    10
                </text>

                <text x={paddingX - 75} y={height / 2} transform="rotate(270) translate(-225, -180)">
                    Cups of coffee ☕️ ️
                </text>

                <text x={paddingX - 5} y={height - paddingY + 5} textAnchor="end">
                    0
                </text>

                <text x={width / 2 - 60} y={height - 5}>
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
                        {dataId === item.id && (
                            <>
                                <line
                                    x1={paddingX}
                                    y1={yScale(item.y)}
                                    x2={xScale(item.x)}
                                    y2={yScale(item.y)}
                                    stroke="green"
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
                                    stroke="green"
                                    strokeWidth="1"
                                    strokeDasharray="2"
                                />

                                <text x={xScale(item.x) + 4} y={height - 19} textAnchor="end">
                                    {item.x}
                                </text>
                            </>
                        )}

                        <animated.circle
                            cx={springs[index].cx}
                            cy={springs[index].cy}
                            r="9"
                            fill="green"
                            onMouseEnter={handleHover(item.id)}
                            onMouseLeave={handleHover()}
                            data-testid={`scatterPlotPoint${index}`}
                        />
                    </g>
                ))}
            </S.SVG>
        </VisibilitySensor>
    );
};

ScatterPlot.propTypes = {
    height: number.isRequired,
    paddingX: number.isRequired,
    paddingY: number.isRequired,
    width: number.isRequired
};

export default ScatterPlot;
