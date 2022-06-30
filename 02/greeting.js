const fs = require('fs');
const readLine = require("readline");


const writeGreetingTofile = (name) => {
    fs.writeFile('greeting.txt', `Hello, ${name}!`, err =>{
        if (err) {
            console.log('error ocuured when writing to file');
        }
    });
}


const rl = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
});


rl.question('What is yur name ?', (name) =>{
    rl.close();
    writeGreetingTofile(name);
});