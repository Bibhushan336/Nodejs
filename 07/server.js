const http = require("http");

const server = http.createServer((req, res) =>{
    
    if (req.url == '/') {
        res.end("hello from home")
    }else if (req.url == "/userapi"){

    }
});


server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000")
});