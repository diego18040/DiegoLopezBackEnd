import { Router } from "express";
import { allEmployee, Employeebyname} from "../controllers/Employees/read.js";

const router = Router();

router.get('/all', allEmployee); 
router.get('/name/:name', Employeebyname); 


export default router;