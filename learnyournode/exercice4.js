const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', (err, file) => {
  if (err) {
    throw new Error(err)
  }
  console.log(file.split('\n').length -1)
})
