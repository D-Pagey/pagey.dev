import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 600px;
`;

export const Title = styled.h1`
    font-family: 'Merriweather', serif;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ItalicSpan = styled.span`
    font-style: italic;
`;

export const LinkedInLinkWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 2rem 0 1rem;
`;

export const Link = styled.a`
    margin: 0.5rem 0 0;

    @media (min-width: 500px) {
        margin-top: 1rem;
    }
`;

export const Image = styled.img`
    width: 125px;
`;
