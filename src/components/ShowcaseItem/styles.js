import styled from 'styled-components';

export const Wrapper = styled.div`
    border-top: 1px solid grey;
    display: grid;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    padding: 1rem 0.5rem;
`;

export const Title = styled.h4`
    grid-column: 1;
    grid-row: 1;
    margin: 0;
`;

export const Copy = styled.p`
    grid-column: 1;
    margin: 0;
`;

export const Placeholder = styled.div`
    border: 1px solid blue;
    grid-column: 2;
    grid-row: 1 / 3;
    height: 150px;
    justify-self: end;
    width: 150px;
`;
