import { Router } from "express";
import {allUser ,userByRole } from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";

const routerUser = Router()

routerUser.get('/all', allUser)
routerUser.get('/role/:x',userByRole)
routerUser.post('/create',create)

export default routerUser