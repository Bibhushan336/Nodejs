const express = require('express')
const reqFilter =require('./middleware')
const route  = express.Router()




const app = express()




route.use(reqFilter)

// app.use(reqFilter)


route.get('/', (req, res) => {
    res.send('home dragon')
})


app.get('/about', (req, res) => {
    res.send('about dragon')
})


app.get('/contact', (req, res) => {
    res.send('about contact')
})


app.use('/', route)

app.listen(3000)