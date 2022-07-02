const fs = require('fs')

// fs.writeFile('file.txt', 'hello my name is bibhushan', (err) =>{

// });

console.log('after write file');

fs.readFile('file.txt', 'utf-8', (err, data) =>{
    console.log(data);
});

console.log('after read file');

fs.rename('file.txt','readfile.txt', (err) =>{

})