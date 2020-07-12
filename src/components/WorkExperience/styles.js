import styled from 'styled-components';

export const Item = styled.li`
    margin: 2rem 0 0;
`;

export const CompanyLink = styled.a`
    cursor: pointer;
`;

export const Logo = styled.img`
    display: block;
    margin: 0 auto;
    height: ${({ height }) => height || '50px'};
    width: ${({ width }) => width || '150px'};
`;

export const FlexWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0;
`;

export const JobTitle = styled.h5`
    font-weight: 600;
    font-size: 1.125rem;
    margin: 0;
`;

export const ItalicSpan = styled.span`
    font-style: italic;
`;
