const $ = require("jquery");
const BigNumber = require('bignumber.js');
var _ = require('lodash');

const candiesRobot = function(nbOfCandies, durationInM, minusCandiesArray) {
    let candiesAdded = 0,
        currentNbInJar = nbOfCandies;
    const minimum = 5,
        replenishTo = nbOfCandies;

    for (let timeSpent = 0; timeSpent < durationInM - 1; timeSpent++) {
        let toAdd = 0;
        currentNbInJar = currentNbInJar - minusCandiesArray[timeSpent];
        if (currentNbInJar < minimum) {
            toAdd = replenishTo - currentNbInJar;
            currentNbInJar = currentNbInJar + toAdd;
        }
        candiesAdded = candiesAdded + toAdd;
    }
    // console.log(candiesAdded);
    return candiesAdded;
};

const minimumNb = function (nbToCompare) {
    const middle = 'int',
        prefix = 'min(int, ',
        suffix = ')',
        nbOfSuffix = nbToCompare - 1,
        nbOfPrefix = nbToCompare - 1;
    let allPrefixes = prefix.repeat(nbOfPrefix);
    let allSuffixes = suffix.repeat(nbOfSuffix);
    const totalCalls = allPrefixes + middle + allSuffixes;

    // console.log (totalCalls);
    return(totalCalls);
};

/**
* Bad complexity, but is working very well for n < 4.
* Gets shaky at n=4 and impossible at n=5.
*/
const melodiousPwd = function (pwdLength) {
    const vowels = ['a', 'e', 'i', 'o', 'u'],
        consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'],
        vowelsNb = vowels.length,
        consonantsNb = consonants.length;
    let result = [];

    const addLetters = function(curr, nbMissing) {
        let lastIsVowel = (/^[aeiou]$/i).test(curr.substr(curr.length - 1));
        let oldCurr = curr;

        if (curr.length === pwdLength) {
            return result.push(curr);
        }
        else if (curr.length === 0) {
            for (let consonantIndex = 0; consonantIndex < consonantsNb; consonantIndex++) {
                curr = oldCurr + consonants[consonantIndex];
                addLetters(curr, nbMissing - 1);
            }
            for (let vowelIndex = 0; vowelIndex < vowelsNb; vowelIndex++) {
                curr = oldCurr + vowels[vowelIndex];
                addLetters(curr, nbMissing - 1);
            }
        }
        else if (lastIsVowel) {
            //add consonant
            for (let consonantIndex = 0; consonantIndex < consonantsNb; consonantIndex++) {
                curr = oldCurr + consonants[consonantIndex];
                addLetters(curr, nbMissing - 1);
            }
        }
        else {
            //add each vowels
            for (let vowelIndex = 0; vowelIndex < vowelsNb; vowelIndex++) {
                curr = oldCurr + vowels[vowelIndex];
                addLetters(curr, nbMissing - 1);
            }
        }

    };

    addLetters('', pwdLength);

    console.log(result.toString().split(',').join('\n'));

    return(result);
};

const poles = function() {
    let result = '';
    return (result);
}

module.exports.candiesRobot = candiesRobot;
module.exports.minimumNb = minimumNb;
module.exports.melodiousPwd = melodiousPwd;
module.exports.poles = poles;

