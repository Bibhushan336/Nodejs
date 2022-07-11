const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')



// req => middleware => res


// 1. use vs route
// 2. options - our won / express /third party

// app.use(logger)
app.use('/', [logger,authorize])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('server is listening on  the port 5000')
})