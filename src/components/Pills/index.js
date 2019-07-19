import React from 'react';
import { string } from 'prop-types';
import * as S from './styles';

const Pills = ({ items }) => {
    return (
        <S.List>
            {items.map((item) => (
                <S.Pill key={item}>{item}</S.Pill>
            ))}
        </S.List>
    );
};

Pills.propTypes = {
    items: string.isRequired
};

export default Pills;
