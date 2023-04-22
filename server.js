const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');
const connectDB = require('./server/DB/connection');


const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('tiny'))
app.set("view engine","ejs")


app.listen(PORT,()=>{
    console.log("Server started http://localhost:%d",PORT );
})
connectDB()

app.use('/',require('./server/routes/router'))


