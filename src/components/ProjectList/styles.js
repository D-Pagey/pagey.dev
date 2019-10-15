import styled from 'styled-components';

export const Wrapper = styled.div`
    border-top: 1px solid #f3f3f3;
    padding: 2rem 0;
`;

export const Title = styled.h2`
    margin: 0 0 1rem;
`;

export const Summary = styled.p`
    margin: ${({ last }) => (last ? '0 0 2rem' : '0 0 1rem')};
`;

export const Link = styled.a`
    color: blue;
`;
