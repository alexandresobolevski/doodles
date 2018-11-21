const _ = require('lodash')

const newLineChar = '\n';

class LineGetter {
  constructor(someString) {
    this.someString = someString;
    this.newLineCache = [];
  }

  get(index) {
    const instance = this;
    // Check to see if we can find it from cache
    const lastNewLineFoundIndex = _.last(instance.newLineCache);
    if (lastNewLineFoundIndex > index) {
      return _.sortedIndex(instance.someString, index)
    }

    // If not, continue to go through it
    let i = lastNewLineFoundIndex || 0;
    let count = instance.newLineCache.length || 0;
    while (i < index) {
      if (instance.someString[i] === newLineChar) {
        instance.newLineCache.push(i);
        count += 1;
      }
      i += 1;
    }
    return count;
  }
}

const lineGetter = new LineGetter("abcdef\nghijklmnop\nqrst");

console.log(lineGetter.get(12));
console.log(lineGetter.get(10));
console.log(lineGetter.get(11));
console.log(lineGetter.get(1));
console.log(lineGetter.get(19));
