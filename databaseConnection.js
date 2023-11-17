const  mongoose  = require("mongoose")

function connectDB(uri){

    mongoose.connect(uri)
    .then(()=> console.log("DB CONNECTED"))
    .catch((error)=>console.log(error));
}

module.exports = connectDB;