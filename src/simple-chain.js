const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const point = `( ${value} )`;
    this.chain.push(point);
    return this;
  },
  removeLink(position) {
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    try {
      return this.chain.join('~~');
    }
    finally {
      this.chain = [];
    }
  }
};

module.exports = {
  chainMaker
};
