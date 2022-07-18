// Rest API

// const http = require('http')

// const server = http.createServer((req, res) => {

// })

// server.listen(3000);
// app.post('/', (req, res) => {

// })
// app.put('/', (req, res) => {

// })
// app.delete('/', (req, res) => {

// })

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('hello world')

})

app.get('/api/courses', (req, res) =>{
    res.send([1,2,3]);
})

app.get('/api/course/:id',(req, res) => {
    res.send(req.params.id)
})

// environment variable
//PORT

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`listening on port ${port}`)
})