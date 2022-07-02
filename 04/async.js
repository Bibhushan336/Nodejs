const fs = require('fs')


// fs.writeFile('read.txt','My name is bibhushan thapa')


// const data = fs.readFileSync('read.txt','utf-8')

fs.readFile('read.txt','utf-8', (err, data) => {
    console.log(data);
});

console.log("my village is in Lamjung");