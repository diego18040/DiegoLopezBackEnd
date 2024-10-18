import { Router } from "express";
import {allStore,Storebyname,Storebyadress} from "../controllers/Stores/read.js";
import { create,createMany } from "../controllers/Stores/create.js";
const router = Router()

router.get('/all', allStore)
router.get('/name/:name',Storebyname)
router.get('/address/:address', Storebyadress);
router.post('/create',create);
router.post('/createMany',createMany);

 


export default router