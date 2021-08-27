// @ts-check
// Formatting, Linting, Type Checking
// Formatting: Prettier
// Linting: ESlint
// Type Checking: TypeScript

/* eslint-disable-next-line no-console */
// console.log('Hello')

// const someString = 'hello'
// const result = Math.log(someString)

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello World!')
})
const PORT = 3000
server.listen(PORT, () => {
  console.log('The server is listening at port ', PORT)
})
