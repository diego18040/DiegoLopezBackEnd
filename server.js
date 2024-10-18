import express from "express";
import "dotenv/config";
import "./config/database.js"
import cors from 'cors';
import morgan from "morgan";
import indexRouter from "./router/index.js";

const server = express()
const PORT = process.env.PORT || 8080 // por default el # puerto//
const ready = ()=> console.log(`Server running on port: ${PORT}`);

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use (cors()) // Controla para que pueda acceder es decir condicciones
server.use(morgan('dev')) //Registra de peticiones 

server.listen(PORT,ready)

//router
server.use('/api',indexRouter)


console.log(process.env.PORT)