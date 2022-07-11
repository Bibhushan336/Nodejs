const express = require('express')
const app = express()
const logger = require('./logger')



// req => middleware => res
// app.use(logger)
app.use('/', logger)

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('server is listening on  the port 5000')
})