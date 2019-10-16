import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { HashLink as RouterHashLink } from 'react-router-hash-link';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0 0 2rem 0;
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

export const HashLink = styled(RouterHashLink)`
    color: initial;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1rem 0 0;
`;
