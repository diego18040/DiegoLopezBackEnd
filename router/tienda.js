import { Router } from "express";
import {allTienda,TiendabyNombre,} from "../controllers/Tienda/read.js";

const routerUser = Router()

routerUser.get('/all', allTienda)
routerUser.get('/name/:x',TiendabyNombre)



export default routerUser