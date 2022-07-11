const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})


app.all('*', (req, res) => {
    res.status(404).send("Page not found")
})




app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})





// app.get('/', (req, res) => {
//     console.log('user hit the resource')
//     res.status(200).send('home page')
// })

// app.get('/about', (req, res) => {
    
//     res.status(200).send('About page')
// })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1> resource not found <h1/>')
// })


