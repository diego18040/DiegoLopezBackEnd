import { Router } from "express";
import { allProduct, Productbyname} from "../controllers/Products/read.js";

const router = Router();

router.get('/all', allProduct); 
router.get('/name/:name', Productbyname); 


export default router;