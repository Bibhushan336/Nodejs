const express = require('express')
const app = express()



const reqFilter=(req,res,next) => {
    // console.log('reqFilter')
    if(!req.query.age)
    {
        res.send('Please provide age')
    }
    else if (req.query.age<18) 
    {
        res.send('You can not acess this page')
    }
    else {
        next()
    }
    
}

// app.use(reqFilter)


app.get('/', reqFilter, (req, res) => {
    res.send('home dragon')
})


app.get('/about', (req, res) => {
    res.send('about dragon')
})

app.listen(3000)