// @ts-check

const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200
  res.end('Hello World!')
})
const PORT = 3000
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is listening at port ${PORT}`)
})
