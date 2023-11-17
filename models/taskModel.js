const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task:{
        type:String,
    },
    status:{
        type:Boolean,
        default:false,
    },
})
module.exports = mongoose.model('task' , TaskSchema);