import styled from 'styled-components';

export const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1rem 0;
    width: 100%;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0.5rem 0 1rem;
    text-align: center;
`;

export const List = styled.ul``;

export const Date = styled.span`
    color: ${(props) => props.color};
`;
