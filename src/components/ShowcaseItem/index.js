import React from 'react';
import { element, string } from 'prop-types';
import * as S from './styles';

const ShowcaseItem = ({ description, title, thumbnail }) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Thumbnail>{thumbnail}</S.Thumbnail>
    </S.Wrapper>
);

ShowcaseItem.propTypes = {
    description: string.isRequired,
    thumbnail: element.isRequired,
    title: string.isRequired
};

export default ShowcaseItem;
