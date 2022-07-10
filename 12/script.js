var http = require('http')
var fs = require('fs')

// http.createServer(function (req, res){
//     const text =fs.readFileSync('bigger.txt', 'utf8')
//     res.end(text)
// })


http.createServer(function (req, res){
    const fileStream = fs.createReadStream('bigger.txt', 'utf8')
    fileStream.on('open', () => {
    fileStream.pipe(res)
    })
    fileStream.on('error', (err) =>{
        res.end(err)
    })
})
.listen(5000)