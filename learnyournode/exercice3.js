const fs = require('fs')
const nbLines = fs
  .readFileSync(process.argv[2], 'utf8')
  .split('\n')
  .length -1

console.log(nbLines)
