const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (Array.isArray(members)){
    let commandName = [];
    for (let i = 0; i < members.length; i++) {
      let member = members[i];
      if ( typeof(member) == 'string'){
        let name = member.trim();
        commandName.push(name[0].toUpperCase());
      }
    }
  return commandName.sort().join('')
  }
  return false

}

module.exports = {
  createDreamTeam
};
