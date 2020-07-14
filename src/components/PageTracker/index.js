import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Tracker } from '../Tracker';
import * as S from './styles';

export const PageTracker = () => {
    const [andyData, setAndyData] = useState();
    const [huntData, setHuntData] = useState();

    // fetch github data
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

            setHuntData(pushEvents.slice(0, 3));
        }
        fetchData();
    }, []);

    return (
        <div>
            <S.Title>Github Tracking</S.Title>

            <S.Text>
                Two of my best mates,{' '}
                <S.Link href="https://www.linkedin.com/in/andyhuynh1/" target="_blank" rel="noopener noreferrer">
                    Andy
                </S.Link>{' '}
                and{' '}
                <S.Link href="https://www.linkedin.com/in/joe-hunt-75a435a0/" target="_blank" rel="noopener noreferrer">
                    Joe
                </S.Link>
                , are learning to code. This page allows me to shout at them when they aren&apos;t coding enough.
            </S.Text>

            <S.TrackerWrapper>
                {andyData && <Tracker details={andyData} name="Andy" />}
                {huntData && <Tracker details={huntData} name="Joe" />}
            </S.TrackerWrapper>
        </div>
    );
};
