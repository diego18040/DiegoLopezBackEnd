import { type } from "express/lib/response";
import { Schema, model } from "mongoose";

let collection ='producto'
let schema = new Schema({
    Nombre:{type:String,required:true},
    Marca:{type:String,required:true},
    Tipo:{type:String,required:true},
    Precio:{type:Number,required:true},

},{
    timestamps: true
})
let Producto = model(collection,schema)

export default Producto