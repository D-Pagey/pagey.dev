import styled from 'styled-components/macro';

export const SVG = styled.svg`
    max-width: 500px;
`;

export const Bar = styled.rect`
    fill: skyblue;
    transition: 0.3s;

    &:hover {
        fill: navy;
    }
`;
