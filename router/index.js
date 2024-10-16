import { Router } from "express";
import usersTienda from './tienda.js';

const routerIndex = Router()

routerIndex.use('/users',usersTienda)


export default routerIndex;