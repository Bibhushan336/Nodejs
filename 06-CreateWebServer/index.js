const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == '/')
    {
        res.end('hello from the home side');
    }else if (req.url == '/about'){
        res.end("hello from the aboutUs side")
    }else if (req.url == '/contact'){
        res.end("hello from the contact side")
    }else {
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("<h1>404 error. It donesnt exist</h1>")
    }
  
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000")
})
