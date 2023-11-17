const task = require('../models/taskModel')
async function getAllTasks(req , res){
    let AllTasks = await task.find({});
    res.json({message:AllTasks});
}

async function CreateTask(req , res){
    console.log(req.body);
let NewTask = await task.create({task:req.body.task})
res.json({task:NewTask});
}

// find by id
async function FindSingleTask(req,res){
    const{id} = req.params;
    let SingleTask = await task.findById({_id:id})
    console.log(SingleTask)
    res.json({SingleTask});
}
// findy and update
async function UpdateTask(req, res){
    const{id} = req.params;
    let newTask = req.body.task;
    let oldTask = await task.findByIdAndUpdate({_id:id} ,{task:newTask},{new:true} );
    console.log(oldTask);
    res.json({oldTask});
}
module.exports = {getAllTasks,CreateTask,FindSingleTask,UpdateTask}