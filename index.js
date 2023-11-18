require('dotenv').config();
require('express-async-errors');
require('./databaseConnection')
const express = require('express');
const cors = require('cors')
const routes = require('./routes/taskRoutes');
const connectDB = require('./databaseConnection');
const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// error middleware
app.use((err,req,res,next)=>{
    console.log(err);
    res.json({message:'Something went wrong'});
})
// routes
app.use('/', routes);
app.listen(process.env.PORT , ()=>{
    connectDB(process.env.DATABSE_URI);
    console.log('server started',`${process.env.PORT}`);
})