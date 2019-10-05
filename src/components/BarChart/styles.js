import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const SVG = styled.svg`
    max-width: 500px;
`;

export const Bar = styled(animated.rect)`
    fill: skyblue;
    transition: 0.3s;

    &:hover {
        fill: navy;
    }
`;
