const printFilesByExtension = require('./exercice5')

const [ a, b, dir, ext] = process.argv

function callback (err, list) {
  if (err) {
    return cb(err)
  }
  list.forEach(file => console.log(file))
  cb(null, list)
}

printFilesByExtension(dir, ext, callback)
