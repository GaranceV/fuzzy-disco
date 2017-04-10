const main = require('./main');

describe.skip('Hackathon tShirts', () => {
    describe(`Sample input`, () => {
        test(`it should always be 0`, () => {
          expect(main.tShirts(5, 3, [0, 0, 1])).toBe(0);
        });

    });
});