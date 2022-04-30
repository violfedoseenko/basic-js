const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // из условия
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let additionString = options.addition; 
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';                                                          

  let repeatedStr = [];

  for (let i = 0; i < repeatTimes; i++) {
    let result = str
    if (additionString !== undefined) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        if ( j + 1 < additionRepeatTimes) {
          result += additionString + additionSeparator
        } else if ( j + 1 == additionRepeatTimes) {
          result += additionString + ''
        }
      }
    }
    repeatedStr.push(result)
  }
  return repeatedStr.join(separator+'')
}

module.exports = {
  repeater
};
