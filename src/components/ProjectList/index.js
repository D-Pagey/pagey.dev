import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { titleCase } from 'change-case';
import Pills from '../Pills';
import Project from '../Project';
import * as S from './styles';

const ProjectList = () => {
    const [namo, setNamo] = useState();
    const [pantry, setPantry] = useState();
    const [heidan, setHeidan] = useState();

    console.log({ heidan });

    const fetchNamoData = async () => {
        const { data } = await axios.get('https://api.github.com/repos/d-pagey/namo');

        setNamo(data);
    };

    const fetchPantryData = async () => {
        const { data } = await axios.get('https://api.github.com/repos/d-pagey/pantry');

        setPantry(data);
    };

    const fetchHeidanData = async () => {
        const { data } = await axios.get('https://api.github.com/repos/d-pagey/heidan');

        setHeidan(data);
    };

    useEffect(() => {
        fetchNamoData();
        fetchPantryData();
        fetchHeidanData();
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

            {namo && (
                <Project
                    codeLink={namo.html_url}
                    description="Namo was a project where I wanted to build an app to review and share rent for new-build flats in London. An
            apt description would have been a cross between AirBnB and Glassdoor."
                    features={['Authentication', 'CRUD Buildings + Reviews', 'Contact email submission form']}
                    lastCommit={format(new Date(namo.pushed_at), 'do MMM yyy')}
                    liveLink={namo.homepage}
                    name={titleCase(namo.name)}
                    status="I decided to stop working on Namo after I realised that users would potentially only use the app once a year when they needed to move house."
                    summary={namo.description}
                />
            )}

            {pantry && (
                <Project
                    codeLink={pantry.html_url}
                    description="The idea of Pantry is to simply have a list of your fridge contents with expiry dates accessible on your phone."
                    features={['CRD Foods']}
                    lastCommit={format(new Date(pantry.pushed_at), 'do MMM yyy')}
                    liveLink={pantry.homepage}
                    name={titleCase(pantry.name)}
                    status="I am currently working on Pantry and am using the project to learn TypeScript."
                    summary={pantry.description}
                />
            )}

            {heidan && (
                <Project
                    codeLink={heidan.html_url}
                    description="This is a place to keep all the ideas you and your friends want to do, but haven't got round to yet"
                    features={['Renders a dad joke from Golang server']}
                    lastCommit={format(new Date(heidan.pushed_at), 'do MMM yyy')}
                    liveLink={heidan.homepage}
                    name={titleCase(heidan.name)}
                    status="I'm currently working on Heidan with a Golang Developer and am also using this project to learn TypeScript."
                    summary={heidan.description}
                />
            )}
        </S.Wrapper>
    );
};

export default ProjectList;
