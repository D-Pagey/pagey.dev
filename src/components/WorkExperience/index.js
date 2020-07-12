import React from 'react';
import { arrayOf, string } from 'prop-types';

import Pills from '../Pills';
import * as S from './styles';

export const WorkExperience = ({
    dates,
    description,
    height,
    imageAlt,
    image,
    jobTitle,
    technologies,
    website,
    width
}) => (
    <S.Item>
        <S.CompanyLink href={website} target="_blank">
            <S.Logo src={image} alt={imageAlt} height={height} width={width} />
        </S.CompanyLink>

        <S.FlexWrapper>
            <S.JobTitle>{jobTitle}</S.JobTitle>
            <S.ItalicSpan>{dates}</S.ItalicSpan>
        </S.FlexWrapper>

        {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
        ))}

        <Pills items={technologies} />
    </S.Item>
);

WorkExperience.propTypes = {
    dates: string.isRequired,
    description: arrayOf(string).isRequired,
    height: string,
    imageAlt: string.isRequired,
    image: string.isRequired,
    jobTitle: string.isRequired,
    technologies: arrayOf(string).isRequired,
    website: string.isRequired,
    width: string
};

WorkExperience.defaultProps = {
    height: '',
    width: ''
};
