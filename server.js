import express from "express";
import "dotenv/config";
import "./config/database.js"

const server = express()
const PORT = process.env.PORT || 8080 // por default el # puerto//
const ready = ()=> console.log("server ready in port :"+PORT);

server.listen(PORT,ready)

server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})

console.log(process.env.PORT)