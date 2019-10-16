import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { titleCase } from 'change-case';
import Pills from '../Pills';
import Project from '../Project';
import * as S from './styles';

const ProjectList = () => {
    const [repos, setRepos] = useState();

    useEffect(() => {
        const fetchRepoData = async () => {
            const response = await Promise.all(
                ['namo', 'pantry', 'heidan'].map(async (item) => {
                    const { data } = await axios.get(`https://api.github.com/repos/d-pagey/${item}`);

                    // eslint-disable-next-line camelcase
                    const { html_url, description, name, pushed_at, homepage } = data;

                    return {
                        codeLink: html_url,
                        description,
                        name,
                        updated: pushed_at,
                        homepage
                    };
                })
            );

            setRepos({
                [response[0].name]: response[0],
                [response[1].name]: response[1],
                [response[2].name]: response[2]
            });
        };

        fetchRepoData();
    }, []);

    return (
        <S.Wrapper id="projects">
            <S.Title>Projects</S.Title>
            <S.Summary>
                Here are some of my recent side projects that I work on in my free time. None of them are a
                &quot;finished product&quot; but I have learnt a lot from working on each one. In terms of tech, here is
                a list of my common tech stack and then I add technologies as and when I am trying to learn them.
            </S.Summary>

            <Pills
                items={[
                    'react',
                    'node',
                    'jest',
                    'react-testing-library',
                    'styled components',
                    'storybook',
                    'firebase',
                    'typescript'
                ]}
                margin="0 0 1rem"
            />

            <S.Summary last>
                If you would like to see the codebase for this website, perhaps to look at the data visualisation code
                above, then you can{' '}
                <S.Link href="https://github.com/D-Pagey/pagey.dev" target="_blank" rel="noopener noreferrer">
                    view it on Github
                </S.Link>
                .
            </S.Summary>

            {repos && (
                <>
                    <Project
                        codeLink={repos.namo.codeLink}
                        description="Namo was a project where I wanted to build an app to review and share rent for new-build flats in London. An
            apt description would have been a cross between AirBnB and Glassdoor."
                        features={['Authentication', 'CRUD Buildings + Reviews', 'Contact email submission form']}
                        lastCommit={format(new Date(repos.namo.updated), 'do MMM yyy')}
                        liveLink={repos.namo.homepage}
                        name={titleCase(repos.namo.name)}
                        status="I decided to stop working on Namo after I realised that users would potentially only use the app once a year when they needed to move house."
                        summary={repos.namo.description}
                    />

                    <Project
                        codeLink={repos.pantry.codeLink}
                        description="The idea of Pantry is to simply have a list of your fridge contents with expiry dates accessible on your phone."
                        features={['CRD Foods']}
                        lastCommit={format(new Date(repos.pantry.updated), 'do MMM yyy')}
                        liveLink={repos.pantry.homepage}
                        name={titleCase(repos.pantry.name)}
                        status="I am currently working on Pantry and am using the project to learn TypeScript."
                        summary={repos.pantry.description}
                    />

                    <Project
                        codeLink={repos.heidan.codeLink}
                        description="This is a place to keep all the ideas you and your friends want to do, but haven't got round to yet"
                        features={['Renders a dad joke from Golang server']}
                        lastCommit={format(new Date(repos.heidan.updated), 'do MMM yyy')}
                        liveLink={repos.heidan.homepage}
                        name={titleCase(repos.heidan.name)}
                        status="I'm currently working on Heidan with a Golang Developer and am also using this project to learn TypeScript."
                        summary={repos.heidan.description}
                    />
                </>
            )}
        </S.Wrapper>
    );
};

export default ProjectList;
