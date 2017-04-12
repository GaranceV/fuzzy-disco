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

const day2 = function(arraySize, array) {
    let possible = 'Yes';
    for (let i = 1; i < arraySize; i++) {
        const previous = array[i - 1],
            current = array[i];
        if (current < previous && Math.abs(current - previous) === 1) {
            array[i - 1] = current;
            array[i] = previous;
        }
    }
    for (let i = 1 ; i < arraySize; i++) {
        const previous = array[i - 1],
            current = array[i];
        if (current < previous) {
            possible = 'No';
            i = arraySize;
        }
    }
    return(possible);
};

//4
//1 0 0 1
const day3 = function (arraySize, stringOfNbs) {
    const firstPlayer = 'Alice',
        secondPlayer = 'Bob';
    let winner = secondPlayer,
        ongoingGame = stringOfNbs;
    const regex = /0[0-1]0/g;
    //next player can't play if ongoing game is under 3 chars
    while (true) {
        let newHand = ongoingGame;
        const arrayResult = ongoingGame.match(regex);
        const replaced = arrayResult === null ? 0 : arrayResult.length;
        if (replaced > 0) {
            ongoingGame = newHand.replace(regex, '00');
            if (replaced % 2 === 1) {
                winner = winner === secondPlayer ? firstPlayer : secondPlayer;
            }
        }
        else {
            console.log(winner);
            return winner;
        }
    }
    // return(winner);
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

