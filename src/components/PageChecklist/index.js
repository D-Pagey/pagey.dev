import React from 'react';
import data from './data';

export const PageChecklist = () => (
    <div>
        <h1>React Developer Checklist</h1>
        {data.map((item) => (
            <React.Fragment key={item.title}>
                <h2>{item.title}</h2>
                <ul>
                    {item.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                    ))}
                </ul>
            </React.Fragment>
        ))}
    </div>
);
