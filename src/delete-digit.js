const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNum = (''+n).split('');
  let result = 0;

  arrNum.forEach((element,index) => {
    let newArrNum = [...arrNum];
    let res = +newArrNum.join('');
    newArrNum.splice(index,1);
    if (res > result) {
      result = res;
    } 
  });
  return result
}

module.exports = {
  deleteDigit
};
