import React from 'react';
import { format } from 'date-fns';
import { arrayOf, shape, string } from 'prop-types';

export const Tracker = ({ details, name }) => (
    <div>
        <h2>{name} Github Data</h2>
        <ul>
            {details.map((commit) => {
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
    </div>
);

Tracker.propTypes = {
    details: arrayOf(
        shape({
            created_at: string,
            id: string,
            repo: shape({ name: string }),
            payload: shape({
                commits: arrayOf(
                    shape({
                        sha: string,
                        message: string
                    })
                )
            })
        })
    ).isRequired,
    name: string.isRequired
};
