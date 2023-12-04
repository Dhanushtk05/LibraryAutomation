const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser')
const path = require('path')



app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","*");
    next();
})


app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname,'uploads') ) )

const books = require('./routes/book')
const auth = require('./routes/auth')


app.use('/api/v1/',books);
app.use('/api/v1/',auth);


app.use(errorMiddleware)

module.exports = app;
