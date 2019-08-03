import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    border-top: 1px solid #d2d2d2;
    display: grid;
    grid-row-gap: 1rem;
    grid-template-columns: 1fr;
    padding: 1rem 0;

    @media (min-width: 700px) {
        grid-template-columns: 1fr 400px;
        grid-template-rows: max-content;
        padding: 1rem 0.5rem;
    }
`;

export const Title = styled.h4`
    margin: 0;
`;

export const Description = styled.p`
    margin: 0;
`;

export const Thumbnail = styled.div`
    grid-row: 1;
    max-width: 400px;

    @media (min-width: 700px) {
        grid-column: 2;
        grid-row: 1 / 3;
    }
`;
