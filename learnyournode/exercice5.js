const fs = require('fs')
const path = require('path')
// const [ a, b, dir, ext] = process.argv
function printFilesByExtension(dir, ext, cb) {
  if (!dir) {
    cb('requires first argument (directory)')
  }
  
  fs.readdir(dir, (err, list) => {
    if (err) {
      return cb(err)
    }
    const filteredList = list
      .filter(file => path.extname(file) === `.${ext}`)

    // filteredList.forEach(file => console.log(file))

    return cb(null, filteredList)
  })
}

module.exports = printFilesByExtension
