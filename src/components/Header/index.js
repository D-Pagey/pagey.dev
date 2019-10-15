import React from 'react';
import * as S from './styles';

const Header = () => (
    <S.Header>
        <S.Name to="/">pagey</S.Name>

        <div>
            <S.Nav href="#projects">projects</S.Nav>
            <S.Link to="/cv">cv</S.Link>
        </div>
    </S.Header>
);

export default Header;
