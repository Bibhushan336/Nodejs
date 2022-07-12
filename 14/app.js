const express = require('express')
const app = express()

let { people } = require('./data')



// static assests

app.use(express.static('./methods-public'))

// parse from data


app.get('/api/people', (req,res) => {
    resizeBy.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
    res.send('Post')
})




app.listen(5000, () => {
    console.log('server is listening on port 5000..')
}) 