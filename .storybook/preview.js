import React from 'react';
import * as S from '../src/components/App/styles';

export const decorators = [
    (Story) => (
        <div>
            <S.GlobalStyle />
            <Story />
        </div>
    )
];
