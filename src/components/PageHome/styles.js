import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 0;
`;

export const IntroGrid = styled.div`
    display: grid;
    max-width: 365px;

    @media (min-width: 600px) {
        grid-column-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: max-content;
        max-width: none;
    }
`;

export const Image = styled.img`
    border-radius: 3px;
    margin: 0 auto;
    width: 325px;

    @media (min-width: 600px) {
        grid-row: 1 / 3;
    }
`;

export const Text = styled.p`
    margin: 1rem 0 0;
`;
