import { Router } from "express";
import { allProduct, Productbyname, Productbyprice, Productbytype} from "../controllers/Products/read.js";
import { create, createMany } from "../controllers/Products/create.js";

const router = Router();

router.get('/all', allProduct); 
router.get('/name/:name', Productbyname); 
router.get ('/price/:x',Productbyprice);
router.get('/type/:type', Productbytype);
router.post('/create',create);
router.post('/createMany',createMany);

export default router;