import { Router } from "express";
import { allProduct, Productbyname, Productbyprice, Productbytype} from "../controllers/Products/read.js";
import { create, createMany } from "../controllers/Products/create.js";
import conflictMiddleware from "../middlewares/conflict_Middleware.js";
const router = Router();

router.get('/all', allProduct); 
router.get('/name/:name', Productbyname); 
router.get ('/price/:x',Productbyprice);
router.get('/type/:type', Productbytype);
router.post('/create',conflictMiddleware,create);
router.post('/createMany',conflictMiddleware,createMany); // todo en una sola operacion

export default router;