import styled from 'styled-components';

export const Text = styled.p`
    font-size: 1.2rem;
    margin: 1rem 0 2rem;
`;

export const List = styled.ul`
    margin: 0;
    list-style: none;
    font-size: 1.2rem;
`;

export const Checkbox = styled.input.attrs(() => ({
    type: 'checkbox'
}))`
    margin: 0 1rem 0 0;
`;
