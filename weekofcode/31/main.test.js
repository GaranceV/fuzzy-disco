const main = require('./main');

describe('For MONDAY (day1)', () => {
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

describe('For TUESDAY (day2)', () => {
    describe(`Sample input`, () => {
        test(`it should be Yes`, () => {
          expect(main.day2(4, [1, 0, 3, 2])).toBe('Yes');
        });
        test(`it should be No`, () => {
          expect(main.day2(3, [2, 1, 0])).toBe('No');
        });
    });
});

describe.only('For Zero One Game (day3)', () => {
    describe(`Sample Input`, () => {
        test(`Bob should win`, () => {
          expect(main.day3(4, '1001')).toBe('Bob');
        });
        test(`Alice should win`, () => {
          expect(main.day3(5, '10101')).toBe('Alice');
        });
        test(`Bob should win`, () => {
          expect(main.day3(6, '000000')).toBe('Bob');
        });
    });
    describe(`Additional Input`, () => {
        test(`Alice should win`, () => {
          expect(main.day3(6, '010111')).toBe('Alice');
        });
        test(`Bob should win`, () => {
          expect(main.day3(6, '010010')).toBe('Bob');
        });
        test(`Bob should win`, () => {
          expect(main.day3(6, '111111111111111111111111111111111')).toBe('Bob');
        });
        test(`Bob should win`, () => {
          expect(main.day3(6, '000010')).toBe('Bob');
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