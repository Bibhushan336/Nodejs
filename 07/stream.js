const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on('request', (req, res) =>{
   
    // fs.readFile('stream.txt', function(err, data) {
    //     if (err) return console.error(err);
    //     res.end(data.toString()); 
    // })


    const rstream = fs.createReadStream("stream.txt")
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    })
    rstream.on("end", () => {
        res.end();
    })
    rstream.on("error", () =>{
        console.log(err);
        res.end("file not found")
    })
    
})

server.listen(8000, "127.0.0.1")