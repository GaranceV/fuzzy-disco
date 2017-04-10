const main = require('./main');

describe.only('For MONDAY (day1)', () => {
    describe(`Sample input`, () => {
        test(`it is beautiful`, () => {
          expect(main.day1('abacaba')).toBe('Yes');
        });
    });
    describe(`With consecutive vowels`, () => {
        test(`at the beginning it is NOT beautiful`, () => {
          expect(main.day1('aabedfg')).toBe('No');
        });
    });
    describe(`With consecutive vowels`, () => {
        test(`in the middle it is NOT beautiful`, () => {
          expect(main.day1('abetresiudfg')).toBe('No');
        });
    });
    describe(`With consecutive vowels`, () => {
        test(`in the end it is NOT beautiful`, () => {
          expect(main.day1('abetresdiudfgoi')).toBe('No');
        });
    });
    describe(`With consecutive vowels`, () => {
        test(`right at the end of the longest possible word`, () => {
          expect(main.day1('wqertyuioplkjhgfdsazxcvbnmnbvcxzasdwqertyuioplkjhgfdsazxcvbnmnbvcxzasui')).toBe('No');
        });
    });
    describe(`With consecutive identical letters`, () => {
        test(`in the beginning it is NOT beautiful`, () => {
          expect(main.day1('bbetresiudfg')).toBe('No');
        });
    });
    describe(`With consecutive identical letters`, () => {
        test(`in the middle it is NOT beautiful`, () => {
          expect(main.day1('abbetressiudfg')).toBe('No');
        });
    });
    describe(`With consecutive identical letters`, () => {
        test(`in the end it is NOT beautiful`, () => {
          expect(main.day1('abbetressiudfgg')).toBe('No');
        });
    });
    describe(`With consecutive vowels`, () => {
        test(`right at the end of the longest possible word`, () => {
          expect(main.day1('wqertyuioplkjhgfdsazxcvbnmnbvcxzasdwqertyuioplkjhgfdsazxcvbnmnbvcxzasupp')).toBe('No');
        });
    });
});

describe('For MONDAY (day2)', () => {
    describe(`on init`, () => {
        test(`it always returns the day`, () => {
          expect(main.day2()).toBe('day2');
        });
    });
});

describe('For MONDAY (day3)', () => {
    describe(`on init`, () => {
        test(`it always returns the day`, () => {
          expect(main.day3()).toBe('day3');
        });
    });
});

describe('For MONDAY (day4)', () => {
    describe(`on init`, () => {
        test(`it always returns the day`, () => {
          expect(main.day4()).toBe('day4');
        });
    });
});

describe('For MONDAY (day5)', () => {
    describe(`on init`, () => {
        test(`it always returns the day`, () => {
          expect(main.day5()).toBe('day5');
        });
    });
});

describe('For MONDAY (day6)', () => {
    describe(`on init`, () => {
        test(`it always returns the day`, () => {
          expect(main.day6()).toBe('day6');
        });
    });
});

describe('For MONDAY (day7)', () => {
    describe(`on init`, () => {
        test(`it always returns the day`, () => {
          expect(main.day7()).toBe('day7');
        });
    });
});