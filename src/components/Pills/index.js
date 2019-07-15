import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import * as S from './styles';

const Pills = ({ items }) => {
    return (
        <S.List>
            {items.map((item) => (
                <S.Pill colour={item.colour} key={item.value}>
                    {item.value}
                </S.Pill>
            ))}
        </S.List>
    );
};

Pills.propTypes = {
    items: arrayOf(
        shape({
            colour: string.isRequired,
            value: string.isRequired
        })
    ).isRequired
};

export default Pills;
