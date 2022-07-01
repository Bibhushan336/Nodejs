const fs = require('fs')


fs.writeFileSync('file.txt', 'my name is bibhushan thapa')


fs.appendFileSync('file.txt', 'I am very good')

const readfiledata = fs.readFileSync('file.txt', 'utf-8')

console.log(readfiledata)