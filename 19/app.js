const http = require('http')


const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/add-product', (req, res, next) => {
    console.log('in the middleware')
    res.send('<form action ="/product" method = "POST"> <input type= "text" name="title"> <button type="submit"> ADD</button></form>')
})


app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


app.use('/', (req, res, next) => {
    res.send('got data')
    
})




app.listen(3000)