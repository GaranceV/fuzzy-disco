const main = require('./main');

describe ('For MONDAY (candies robot)', () => {
    const begin = 'nb of candies',
        minus =  'the nb of candies removed';

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
});

describe ('For TUESDAY (minimumNb)', () => {
    const nb = 'nb of nb to compare',
        output = 'min(int, int)';

    describe(`Sample input`, () => {
        test(`If ${nb} = 2`, () => {
          expect(main.minimumNb(2)).toBe(output);
        });

        test(`If ${nb} = 4`, () => {
          expect(main.minimumNb(4)).toBe(`min(int, min(int, ${output}))`);
        });
    });

    describe(`With an odd number`, () => {
        test(`If ${nb} = 3`, () => {
          expect(main.minimumNb(3)).toBe(`min(int, ${output})`);
        });

        test(`If ${nb} = 5`, () => {
          expect(main.minimumNb(5)).toBe(`min(int, min(int, min(int, ${output})))`);
        });

        test(`If ${nb} = 7`, () => {
          expect(main.minimumNb(7)).toBe(`min(int, min(int, min(int, min(int, min(int, ${output})))))`);
        });

        test(`If ${nb} = 49`, () => {
          expect(main.minimumNb(49)).toBe(`min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, ${output})))))))))))))))))))))))))))))))))))))))))))))))`);
        });
    });

    describe(`With an even number`, () => {
        test(`If ${nb} = 6`, () => {
          expect(main.minimumNb(6)).toBe(`min(int, min(int, min(int, min(int, ${output}))))`);
        });

        test(`If ${nb} = 10`, () => {
          expect(main.minimumNb(10)).toBe(`min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, ${output}))))))))`);
        });

        test(`If ${nb} = 50`, () => {
            expect(main.minimumNb(50)).toBe(`min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, min(int, ${output}))))))))))))))))))))))))))))))))))))))))))))))))`);
        });
    });
});

describe ('For WEDNESDAY (melodiousPwd)', () => {
    const nb = 'password length';

    describe(`Sample input`, () => {
        test(`If ${nb} = 1`, () => {
          expect(main.melodiousPwd(1).sort()).toEqual(['a', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'e', 'i', 'o', 'u'].sort());
          expect(main.melodiousPwd(1).length).toBe(25);
        });

        test(`If ${nb} = 2`, () => {
          expect(main.melodiousPwd(2).sort()).toEqual(["ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qa", "qe", "qi", "qo", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xu", "za", "ze", "zi", "zo", "zu", "ab", "ac", "ad", "af", "ag", "ah", "aj", "ak", "al", "am", "an", "ap", "aq", "ar", "as", "at", "av", "aw", "ax", "az", "eb", "ec", "ed", "ef", "eg", "eh", "ej", "ek", "el", "em", "en", "ep", "eq", "er", "es", "et", "ev", "ew", "ex", "ez", "ib", "ic", "id", "if", "ig", "ih", "ij", "ik", "il", "im", "in", "ip", "iq", "ir", "is", "it", "iv", "iw", "ix", "iz", "ob", "oc", "od", "of", "og", "oh", "oj", "ok", "ol", "om", "on", "op", "oq", "or", "os", "ot", "ov", "ow", "ox", "oz", "ub", "uc", "ud", "uf", "ug", "uh", "uj", "uk", "ul", "um", "un", "up", "uq", "ur", "us", "ut", "uv", "uw", "ux", "uz"].sort());
        });
        test(`If ${nb} = 3`, () => {
          expect(main.melodiousPwd(3).sort()).toEqual(["ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qa", "qe", "qi", "qo", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xu", "za", "ze", "zi", "zo", "zu", "ab", "ac", "ad", "af", "ag", "ah", "aj", "ak", "al", "am", "an", "ap", "aq", "ar", "as", "at", "av", "aw", "ax", "az", "eb", "ec", "ed", "ef", "eg", "eh", "ej", "ek", "el", "em", "en", "ep", "eq", "er", "es", "et", "ev", "ew", "ex", "ez", "ib", "ic", "id", "if", "ig", "ih", "ij", "ik", "il", "im", "in", "ip", "iq", "ir", "is", "it", "iv", "iw", "ix", "iz", "ob", "oc", "od", "of", "og", "oh", "oj", "ok", "ol", "om", "on", "op", "oq", "or", "os", "ot", "ov", "ow", "ox", "oz", "ub", "uc", "ud", "uf", "ug", "uh", "uj", "uk", "ul", "um", "un", "up", "uq", "ur", "us", "ut", "uv", "uw", "ux", "uz"].sort());
        });
        test(`If ${nb} = 4`, () => {
          expect(main.melodiousPwd(4).sort()).toEqual(["ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qa", "qe", "qi", "qo", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xu", "za", "ze", "zi", "zo", "zu", "ab", "ac", "ad", "af", "ag", "ah", "aj", "ak", "al", "am", "an", "ap", "aq", "ar", "as", "at", "av", "aw", "ax", "az", "eb", "ec", "ed", "ef", "eg", "eh", "ej", "ek", "el", "em", "en", "ep", "eq", "er", "es", "et", "ev", "ew", "ex", "ez", "ib", "ic", "id", "if", "ig", "ih", "ij", "ik", "il", "im", "in", "ip", "iq", "ir", "is", "it", "iv", "iw", "ix", "iz", "ob", "oc", "od", "of", "og", "oh", "oj", "ok", "ol", "om", "on", "op", "oq", "or", "os", "ot", "ov", "ow", "ox", "oz", "ub", "uc", "ud", "uf", "ug", "uh", "uj", "uk", "ul", "um", "un", "up", "uq", "ur", "us", "ut", "uv", "uw", "ux", "uz"].sort());
        });
        // test(`If ${nb} = 5`, () => {
        //   expect(main.melodiousPwd(5).sort()).toEqual(["ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qa", "qe", "qi", "qo", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "xa", "xe", "xi", "xo", "xu", "za", "ze", "zi", "zo", "zu", "ab", "ac", "ad", "af", "ag", "ah", "aj", "ak", "al", "am", "an", "ap", "aq", "ar", "as", "at", "av", "aw", "ax", "az", "eb", "ec", "ed", "ef", "eg", "eh", "ej", "ek", "el", "em", "en", "ep", "eq", "er", "es", "et", "ev", "ew", "ex", "ez", "ib", "ic", "id", "if", "ig", "ih", "ij", "ik", "il", "im", "in", "ip", "iq", "ir", "is", "it", "iv", "iw", "ix", "iz", "ob", "oc", "od", "of", "og", "oh", "oj", "ok", "ol", "om", "on", "op", "oq", "or", "os", "ot", "ov", "ow", "ox", "oz", "ub", "uc", "ud", "uf", "ug", "uh", "uj", "uk", "ul", "um", "un", "up", "uq", "ur", "us", "ut", "uv", "uw", "ux", "uz"].sort());
        // });
    });
});

describe ('For THURSDAY ()', () => {
    const nb = '';

    describe(`Sample input`, () => {
        test(`If ${nb} = 2`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });

        test(`If ${nb} = 4`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });
    });
});

describe ('For FRIDAY ()', () => {
    const nb = '';

    describe(`Sample input`, () => {
        test(`If ${nb} = 2`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });

        test(`If ${nb} = 4`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });
    });
});

describe ('For SATURDAY ()', () => {
    const nb = '';

    describe(`Sample input`, () => {
        test(`If ${nb} = 2`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });

        test(`If ${nb} = 4`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });
    });
});

describe ('For SUNDAY ()', () => {
    const nb = '';

    describe(`Sample input`, () => {
        test(`If ${nb} = 2`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });

        test(`If ${nb} = 4`, () => {
        //   expect(main.melodiousPwd()).toBe('');
        });
    });
});