// Rest API

// const http = require('http')

// const server = http.createServer((req, res) => {

// })

// server.listen(3000);

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('hello world')

})

app.get('/api/courses', (req, res) =>{
    res.send([1,2,3]);
})
// app.post('/', (req, res) => {

// })
// app.put('/', (req, res) => {

// })
// app.delete('/', (req, res) => {

// })


app.listen(3000, () => {
    console.log('listening on port 3000')
})