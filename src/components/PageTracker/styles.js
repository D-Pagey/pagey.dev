import styled from 'styled-components';

export const Title = styled.h1`
    margin: 0;
    padding: 0 0 1rem;
`;

export const Text = styled.p`
    font-size: 1.2rem;
    margin: 0;
    padding: 1rem 0 2rem;
`;

export const Link = styled.a`
    color: blue;
`;

export const TrackerWrapper = styled.div`
    display: grid;
    grid-gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`;
