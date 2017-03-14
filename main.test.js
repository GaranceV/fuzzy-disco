const main = require('./main');
const begin = 'nb of candies';
const minus =  'the nb of candies removed';
describe(`With ${begin} = 5`, () => {
    test(`If ${minus} is always <`, () => {
      expect(main.candiesRobot(5, 3, [0, 0, 1])).toBe(0);
    });

    test(`If ${minus} is always =`, () => {
      expect(main.candiesRobot(5, 5, [0, 0, 0, 0, 1])).toBe(0);
    });

    test(`If ${minus} is always at the limit`, () => {
      expect(main.candiesRobot(5, 5, [1, 1, 1, 1, 1])).toBe(4);
    });
});

describe(`With ${begin} = 100`, () => {
    test(`If ${minus} is always <`, () => {
      expect(main.candiesRobot(100, 3, [50, 10, 1])).toBe(0);
    });

    test(`If ${minus} removes everything`, () => {
      expect(main.candiesRobot(100, 5, [40, 20, 20, 20, 1])).toBe(100);
    });

    test(`If ${minus} is always at the limit`, () => {
      expect(main.candiesRobot(100, 5, [100, 100, 100, 100, 100])).toBe(400);
    });
});

describe(`With temps = 100`, () => {
    test(`If ${minus} is always <`, () => {
      expect(main.candiesRobot(100, 100, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(96);
    });

    test(`If ${minus} removes everything`, () => {
      expect(main.candiesRobot(100, 100, [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100])).toBe(9900);
    });
});

describe(`With temps = 1`, () => {
    test(`If ${minus} is always <`, () => {
        expect(main.candiesRobot(5, 1, [1])).toBe(0);
    });

    test(`If ${minus} removes everything`, () => {
        expect(main.candiesRobot(5, 1, [5])).toBe(0);
    });
});

describe(`With temps = 2`, () => {
    test(`If ${minus} is always <`, () => {
        expect(main.candiesRobot(5, 2, [1, 1])).toBe(1);
    });

    test(`If ${minus} removes everything`, () => {
        expect(main.candiesRobot(5, 2, [5, 5])).toBe(5);
    });

    test(`If ${minus} removes everything`, () => {
        expect(main.candiesRobot(10, 2, [6, 5])).toBe(6);
    });
});

describe('Sample input', () => {
    test('8 candies and 4 minutes', () => {
        expect(main.candiesRobot(8, 4, [3, 1, 7, 5])).toBe(11);
    })
});