import { Schema, model } from "mongoose";

let collection ='autos'
let schema = new Schema({
    marca:{type:String,required:true},
    modelo:{type:String,required:true}
},{
    timestamps: true
})

let Autos = model(collection,schema)
export default Autos