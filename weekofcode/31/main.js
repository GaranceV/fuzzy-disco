const $ = require("jquery");
const BigNumber = require('bignumber.js');
var _ = require('lodash');

const day1 = function(word) {
    let beautiful = 'No';
    const consecutiveVowels = /[aeiouy]+[aeiouy]/g.exec(word);
    if (consecutiveVowels !== null) {
        return beautiful;
    }
    const identicalLetters = /([a-z])\1/g.exec(word);
    if (identicalLetters !== null) {
        return beautiful;
    }
    return 'Yes';
};

const day2 = function () {
    return('day2');
};


const day3 = function (pwdLength) {
    return('day3');
};

const day4 = function(nbOfPoles, nbOfStacks, arrayPoles) {
    return('day4');
}

const day5 = function (pwdLength) {
    return('day5');
};

const day6 = function(nbOfPoles, nbOfStacks, arrayPoles) {
    return('day6');
}

const day7 = function(nbOfPoles, nbOfStacks, arrayPoles) {
    return('day7');
}

module.exports.day1 = day1;
module.exports.day2 = day2;
module.exports.day3 = day3;
module.exports.day4 = day4;
module.exports.day5 = day5;
module.exports.day6 = day6;
module.exports.day7 = day7;

