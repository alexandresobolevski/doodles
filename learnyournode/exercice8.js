const http = require('http')

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8')
  let data = ''
  response.on('data', (chunk) => {
    data += chunk
  })
  response.on('error', console.error)
  response.on('end', () => {
    console.log(data.length)
    console.log(data)
  })
}).on('error', console.error)
