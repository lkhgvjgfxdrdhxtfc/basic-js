const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(Number) {
  // throw new NotImplementedError('Not implemented');
  let sum = 0;

while (Number > 0) {
    sum += Number % 10
    Number = Math.floor(Number/10)
}

console.log(sum);

if (sum < 10) {
  console.log(sum);
  return sum;
} else {
let sum1 = 0;
  while (sum > 0) {
    sum1 += sum % 10
    sum= Math.floor(sum/10)
}
  console.log(sum1);
  return sum1;
}
}

module.exports = {
  getSumOfDigits
};
