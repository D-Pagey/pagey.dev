import React from 'react';
import { arrayOf, string } from 'prop-types';
import * as S from './styles';

const Project = ({ codeLink, description, features, lastCommit, liveLink, name, status, summary }) => (
    <S.Wrapper data-testid={`project-${name}`}>
        {/* add the external icon */}
        <S.TitleLink href={liveLink} target="_blank" rel="noopener noreferrer">
            {name}
        </S.TitleLink>
        <S.Summary>{summary}</S.Summary>

        <S.DescriptionWrapper>
            <S.Description>{description}</S.Description>
            <S.Description>{status}</S.Description>
        </S.DescriptionWrapper>

        <S.FeatureWrapper>
            <S.SubTitle>Features built:</S.SubTitle>
            <S.List>
                {features.map((feature) => (
                    <li key={`${feature}-feature`}>{feature}</li>
                ))}
            </S.List>

            <S.Footnote>
                The last commit to this repo was on <S.Bold>{lastCommit}</S.Bold> and you can{' '}
                <S.Link href={codeLink} target="_blank" rel="noopener noreferrer">
                    view the code on Github
                </S.Link>
                .
            </S.Footnote>
        </S.FeatureWrapper>
    </S.Wrapper>
);

Project.propTypes = {
    codeLink: string.isRequired,
    description: string.isRequired,
    features: arrayOf(string).isRequired,
    lastCommit: string.isRequired,
    liveLink: string.isRequired,
    name: string.isRequired,
    summary: string.isRequired,
    status: string.isRequired
};

export default Project;
