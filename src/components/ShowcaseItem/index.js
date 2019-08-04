import React from 'react';
import { arrayOf, element, string } from 'prop-types';
import * as S from './styles';

const ShowcaseItem = ({ description, title, thumbnail }) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>

        <div>
            {description.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <S.Description key={index}>{item}</S.Description>
            ))}
        </div>

        <S.Thumbnail>{thumbnail}</S.Thumbnail>
    </S.Wrapper>
);

ShowcaseItem.propTypes = {
    description: arrayOf(string).isRequired,
    thumbnail: element.isRequired,
    title: string.isRequired
};

export default ShowcaseItem;
