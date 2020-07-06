import { addDays } from 'date-fns';
import { getColourFromDate } from '.';

describe('getColourFromDate function', () => {
    it.each`
        colour      | daysAgo
        ${'green'}  | ${0}
        ${'green'}  | ${1}
        ${'orange'} | ${2}
        ${'orange'} | ${3}
        ${'red'}    | ${4}
        ${'red'}    | ${5}
        ${'red'}    | ${6}
    `('should return $colour for a date $daysAgo days ago', ({ colour, daysAgo }) => {
        const fiveDaysFromNow = addDays(new Date(), -daysAgo);

        const result = getColourFromDate(fiveDaysFromNow);

        expect(result).toBe(colour);
    });
});
