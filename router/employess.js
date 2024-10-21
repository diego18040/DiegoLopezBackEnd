import { Router } from "express";
import { allEmployee, Employeebyname, Employeebyposition, Employeebysalary} from "../controllers/Employees/read.js";
import {create,createMany} from "../controllers/Employees/create.js"
import conflictMiddleware from "../middlewares/conflict_Middleware.js";
const router = Router();

router.get('/all', allEmployee); 
router.get('/name/:name', Employeebyname); 
router.get('/salary/:salary',Employeebysalary);
router.get('/position/:position',Employeebyposition);
router.post('/create',conflictMiddleware,create);
router.post('/createMany',conflictMiddleware,createMany); // todo en una sola operacion

export default router;