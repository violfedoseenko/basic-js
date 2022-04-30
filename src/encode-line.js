const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result = '';
  let counter = 0;
  arr.forEach(function(element, index){
    if(element === arr[index+1]){
      counter++;
    }
    if(element !== arr[index+1]){
      if(counter !== 0){
        counter++;
        result += counter+element;
        counter = 0;
      }
      else{
        counter = 0;
        result += element;
      }
    }
  })
  return result;


}

module.exports = {
  encodeLine
};
