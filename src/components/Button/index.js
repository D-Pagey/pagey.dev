import React from 'react';
import { oneOf, string } from 'prop-types';
import * as S from './styles';

const Button = ({ children, variant }) => {
    switch (variant) {
        default:
            return <S.Button>{children}</S.Button>;
    }
};

Button.propTypes = {
    children: string.isRequired,
    variant: oneOf([''])
};

Button.defaultProps = {
    variant: ''
};

export default Button;
