const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(function(thing) {
      let depth = 1;
      if ( typeof thing == 'object') {
        if ( Array.isArray(thing) ) {
          const newdepthCalc = new DepthCalculator();
          depth = depth + newdepthCalc.calculateDepth(thing);
        }
      }
      if ( depth > maxDepth){
        maxDepth = depth; 
      }
    });
  return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
