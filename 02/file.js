const fs = require('fs')


fs.writeFile('file.txt', 'my name is bibhushan thapa', err => {
    if(err) {
        console.log("error occured when writing the file");
    }
    
});