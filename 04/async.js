const fs = require('fs')


fs.writeFileSync('read.txt','My name is bibhushan thapa')


const data = fs.readFileSync('read.txt','utf-8')
console.log(data)