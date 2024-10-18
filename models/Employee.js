import { Schema, model } from "mongoose";

let collection ='employees'
let schema = new Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    position:{type:String,required:true},
    salary:{type:Number,required:true},

},{
    timestamps: true
})
let Employee = model(collection,schema);

export default Employee