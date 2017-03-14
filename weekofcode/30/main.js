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
    console.log(candiesAdded);
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

    console.log (totalCalls);
    return(totalCalls);
};

module.exports.candiesRobot = candiesRobot;
module.exports.minimumNb = minimumNb;

