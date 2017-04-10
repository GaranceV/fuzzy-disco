const $ = require("jquery");
const BigNumber = require('bignumber.js');
var _ = require('lodash');

const tShirts = function(nbOfShirts, sizes, nbOfSellers) {
    let result = 0;
    return result;

    var result = '';

        var resultForQ = 0;
        for (var a1 = nbOfSellers - 1; a1 >=0; a1--) {
            var smallest_temp = readLine().split(' ');
            var smallest = parseInt(smallest_temp[0]);
            var largest = parseInt(smallest_temp[1]);
            // your code goes here
            var sizeIndex = nbOfShirts;
            while (sizeIndex > 0 ) {
                sizeIndex = sizeIndex - 1;
                if (sizes[sizeIndex] >= smallest && sizes[sizeIndex] <= largest) {
                    resultForQ += 1;
                    sizes.splice(sizeIndex, 1); //no need to keep it then
                    nbOfShirts = nbOfShirts - 1;
                }

            }


            //you code end here
        }
        if (query === 0) {
            result = resultForQ;
        }
        else {
           result = result + '\n' + resultForQ;
        }

};


module.exports.tShirts = tShirts;
