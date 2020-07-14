import styled from 'styled-components';

export const Title = styled.h1`
    margin: 0;
    padding: 0 0 2rem;
`;

export const TrackerWrapper = styled.div`
    display: grid;
    grid-gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`;
