import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tracker } from './Tracker';

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
            <h1>Tracker page</h1>
            <h2>Keeping track of Andy + Joe&apos;s github work</h2>

            {andyData && <Tracker details={andyData} name="Andy" />}
            {huntData && <Tracker details={huntData} name="Joe" />}
        </div>
    );
};
