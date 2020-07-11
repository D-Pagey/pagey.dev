import React from 'react';
import * as S from './styles';

const Header = () => (
    <S.Header>
        <S.Name to="/">pagey</S.Name>

        <div>
            <S.Link to="/cv">cv</S.Link>
            <S.Link to="/tracker">tracker</S.Link>
            <S.Link to="/checklist">checklist</S.Link>
        </div>
    </S.Header>
);

export default Header;
