const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
//  Количество перекладываний в зависимости от количества колец вычисляется по формуле 2^{n}-1
function calculateHanoi( disksNumber, turnsSpeed) {
  return {
    turns: ( 2 ** disksNumber) - 1,
    seconds: Math.floor( ( ( 2 ** disksNumber) - 1 ) / turnsSpeed * 3600 )
  }
}

module.exports = {
  calculateHanoi
};
