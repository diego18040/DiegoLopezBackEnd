import { Router } from "express";
import {allStore,Storebyname,Storebyadress} from "../controllers/Stores/read.js";
import { create,createMany } from "../controllers/Stores/create.js";
import conflictMiddleware from "../middlewares/conflict_Middleware.js";
const router = Router()

router.get('/all', allStore)
router.get('/name/:name',Storebyname)
router.get('/address/:address', Storebyadress);
router.post('/create',conflictMiddleware,create);
router.post('/createMany',conflictMiddleware,createMany);

 


export default router