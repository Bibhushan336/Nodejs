const http = require('http')


const express = require('express')
const app = express()


app.use('/', (req, res, next) => {
    console.log('this always runs')
    next()
})
app.use('/hello', (req, res, next) => {
    console.log('in the middleware')
    res.send('hello')
})






server.listen(3000)