import React from 'react';

import data from './data';
import * as S from './styles';

export const PageChecklist = () => (
    <div>
        <h1>React Developer Checklist</h1>

        <S.Text>
            An opinionated checklist of topics that one should be familiar with when aspiring to be a Front End
            Developer. This is to be used to form the basis of a focussed learning curriculum.
        </S.Text>

        {data.map((item) => (
            <React.Fragment key={item.title}>
                <h2>{item.title}</h2>
                <S.List>
                    {item.topics.map((topic) => (
                        <li key={topic}>
                            <S.Checkbox />
                            {topic}
                        </li>
                    ))}
                </S.List>
            </React.Fragment>
        ))}
    </div>
);
