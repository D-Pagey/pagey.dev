import React from 'react';
import * as S from './styles';

const Header = () => (
    <S.Header>
        <S.Name to="/">pagey</S.Name>

        <div>
            <S.HashLink smooth to="/#projects">
                projects
            </S.HashLink>
            <S.Link to="/cv">cv</S.Link>
        </div>
    </S.Header>
);

export default Header;
