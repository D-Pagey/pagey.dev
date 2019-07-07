import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0 0 1rem 0;
`;

export const Name = styled(NavLink)`
    color: initial;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
`;

export const Link = styled(NavLink)`
    color: initial;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
`;
