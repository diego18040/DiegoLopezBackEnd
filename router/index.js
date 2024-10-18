import { Router } from "express";
import storesRouter from "./stores.js";
import productsRouter from "./products.js"
import employeesRouter from "./employess.js"

const routerIndex = Router()

routerIndex.use('/stores', storesRouter); 
routerIndex.use('/products', productsRouter);
routerIndex.use('/employees', employeesRouter); 

export default routerIndex;