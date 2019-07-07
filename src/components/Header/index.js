import React from 'react';
import * as S from './styles';

const Header = () => {
    return (
        <S.Header>
            <S.Name to="/">pagey</S.Name>
            <S.Link to="/cv">cv</S.Link>
        </S.Header>
    );
};

export default Header;
