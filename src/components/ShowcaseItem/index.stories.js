import React from 'react';
import BarChart from '../BarChart';
import { LineChart } from '../LineChart';
import ShowcaseItem from '.';

const props = {
    description: ['A description of the showcase', 'Another paragraph'],
    thumbnail: <BarChart height={400} paddingX={50} paddingY={35} width={500} />,
    title: 'Showcase Title'
};

export default {
    title: 'ShowcaseItem',
    component: ShowcaseItem
};

export const bar = () => <ShowcaseItem {...props} />;

const lineProps = {
    description: ['A description of the showcase', 'Another paragraph'],
    thumbnail: <LineChart />,
    title: 'Showcase Title'
};

export const line = () => <ShowcaseItem {...lineProps} />;
