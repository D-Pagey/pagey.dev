import { differenceInDays } from 'date-fns';

export const getColourFromDate = (date) => {
    const repoDate = new Date(date);
    const currentDate = new Date();

    const difference = differenceInDays(currentDate, repoDate);

    if (difference <= 1) return 'green';
    if (difference <= 3) return 'orange';
    return 'red';
};
