import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export const PageTracker = () => {
    const [andyData, setAndyData] = useState();
    const [joeData, setJoeData] = useState();

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const { data } = await axios.get('https://api.github.com/users/andy-h1/events');
            // ...
            const pushEvents = data.filter((event) => event.type === 'PushEvent');

            setAndyData(pushEvents.slice(0, 3));
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const { data } = await axios.get('https://api.github.com/users/glitchhunt/events');
            // ...
            const pushEvents = data.filter((event) => event.type === 'PushEvent');

            setJoeData(pushEvents.slice(0, 3));
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Tracker page</h1>

            <h2>Keeping track of Andy + Joe&apos;s github work</h2>

            {andyData && (
                <>
                    <h2>Andy Github Data</h2>
                    <ul>
                        {andyData.map((commit) => {
                            // eslint-disable-next-line camelcase
                            const { id, repo, payload, created_at } = commit;

                            return (
                                <li key={id}>
                                    <p>Repo: {repo.name}</p>
                                    <p>
                                        Commit:{' '}
                                        <a
                                            href={`https://github.com/${repo.name}/commit/${payload.commits[0].sha}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {payload.commits[0].message}
                                        </a>
                                    </p>
                                    <p>Date: {format(new Date(created_at), 'do MMMM yyyy k:mm')}</p>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}

            {joeData && (
                <>
                    <h2>Joe Github Data</h2>
                    <ul>
                        {joeData.map((commit) => {
                            // eslint-disable-next-line camelcase
                            const { id, repo, payload, created_at } = commit;

                            return (
                                <li key={id}>
                                    <p>Repo: {repo.name}</p>
                                    <p>
                                        Commit:{' '}
                                        <a
                                            href={`https://github.com/${repo.name}/commit/${payload.commits[0].sha}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {payload.commits[0].message}
                                        </a>
                                    </p>
                                    <p>Date: {format(new Date(created_at), 'do MMMM yyyy k:mm')}</p>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};
