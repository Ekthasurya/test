const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

const TaskModel=mongoose.model("task",taskSchema)

module.exports=TaskModel