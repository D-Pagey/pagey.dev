import React from 'react';
import { arrayOf, string } from 'prop-types';
import * as S from './styles';

const Pills = ({ items, margin }) => {
    return (
        <S.List margin={margin}>
            {items.map((item) => (
                <S.Pill key={item}>{item}</S.Pill>
            ))}
        </S.List>
    );
};

Pills.propTypes = {
    items: arrayOf(string).isRequired,
    margin: string
};

Pills.defaultProps = {
    margin: ''
};

export default Pills;
