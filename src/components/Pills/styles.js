import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
`;

export const Pill = styled.li`
    background-color: ${({ colour }) => colour || 'skyblue'};
    border-radius: 5px;
    font-size: 12px;
    padding: 0.25rem 0.5rem;
    margin: 0 0 0.5rem 0.5rem;
    text-transform: uppercase;
`;
