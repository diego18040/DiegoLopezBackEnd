import { Schema, model } from "mongoose";

let collection ='empleado'
let schema = new Schema({
    Id:{type:String,required:true},
    Nombre:{type:String,required:true},
    Cargo:{type:String,required:true},
    Salario:{type:Number,required:true},

},{
    timestamps: true
})
let Empleado = model(collection,schema)

export default Empleado