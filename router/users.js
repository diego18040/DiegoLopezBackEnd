import { Router } from "express";
import {allUser ,userByRole } from "../controllers/users/read.js";

const routerUser = Router()

routerUser.get('/all', allUser)
routerUser.get('/role/:x',userByRole)

export default routerUser