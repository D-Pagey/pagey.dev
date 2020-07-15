import React from 'react';
import { arrayOf, string } from 'prop-types';
import * as S from './styles';
import Paragraphs from '../Paragraphs/index';
import Pills from '../Pills/index';

export const PageExperience = ({ company, image, link, role, workLength, bio, skills }) => (
    <S.Item>
        <S.CompanyLink href={link} target="_blank">
            <S.Logo src={image} alt={company} height="75px" width="auto" />
        </S.CompanyLink>
        <S.FlexWrapper>
            <S.JobTitle>{role}</S.JobTitle>
            <S.ItalicSpan>{workLength}</S.ItalicSpan>
        </S.FlexWrapper>
        <Paragraphs items={bio} />
        <Pills items={skills} />
    </S.Item>
);

PageExperience.propTypes = {
    company: string.isRequired,
    image: string.isRequired,
    link: string.isRequired,
    role: string.isRequired,
    workLength: string.isRequired,
    bio: arrayOf(string).isRequired,
    skills: arrayOf(string).isRequired
};
