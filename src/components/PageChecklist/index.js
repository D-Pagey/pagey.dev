import React, { useState } from 'react';

import data from './data';
import * as S from './styles';

export const PageChecklist = () => {
    const [completedTopics, setCompletedTopics] = useState({});

    const handleChange = (id) => () =>
        setCompletedTopics({
            ...completedTopics,
            [id]: !completedTopics[id]
        });

    return (
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
                            <li key={topic.id}>
                                <S.Checkbox onChange={handleChange(topic.id)} checked={!!completedTopics[topic.id]} />
                                {topic.text}
                            </li>
                        ))}
                    </S.List>
                </React.Fragment>
            ))}
        </div>
    );
};
