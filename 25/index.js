const express = require('express')
const path = require('path')


const app = express()
const publicPath = path.join(__dirname, 'public')


// app.use(express.static(publicPath))

app.get('/', (re,res) => {
    res.sendFile(`${publicPath}/index.html`)
})


app.get('*', (re,res) => {
    res.send('404 not found')
})


app.listen(3000)