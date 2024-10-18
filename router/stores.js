import { Router } from "express";
import {allStore,Storebyname,} from "../controllers/Stores/read.js";

const routerUser = Router()

routerUser.get('/all', allStore)
routerUser.get('/name/:x',Storebyname)



export default routerUser