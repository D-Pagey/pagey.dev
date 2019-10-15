import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-row-gap: 1rem;
    margin: 0 0 3rem;

    @media (min-width: 600px) {
        grid-column-gap: 2rem;
        grid-template-columns: minmax(auto, 550px) minmax(auto, 350px);
        justify-content: space-between;
    }
`;

export const TitleLink = styled.a`
    color: blue;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
`;

export const Summary = styled.p`
    font-style: italic;
    grid-column: 1;
    margin: 0;
`;

export const DescriptionWrapper = styled.div`
    grid-column: 1;
`;

export const Description = styled.p`
    margin: 0;

    &:first-child {
        margin: 0 0 1rem;
    }
`;

export const FeatureWrapper = styled.div`
    @media (min-width: 600px) {
        grid-column: 2;
        grid-row: 2 / 4;
    }
`;

export const SubTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0.5rem;
`;

export const List = styled.ul`
    margin: 0 0 2rem;
`;

export const Footnote = styled.p`
    font-style: italic;
    margin: 0;
`;

export const Bold = styled.span`
    font-weight: 600;
`;

export const Link = styled.a`
    color: blue;
`;
