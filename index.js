require('dotenv').config();
require('express-async-errors');
require('./databaseConnection')
const express = require('express');
const routes = require('./routes/taskRoutes');
const connectDB = require('./databaseConnection');
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use('/', routes);
app.listen(process.env.PORT , ()=>{
    connectDB(process.env.DATABSE_URI);
    console.log('server started',`${process.env.PORT}`);
})