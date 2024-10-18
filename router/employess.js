import { Router } from "express";
import { allEmployee, Employeebyname, Employeebyposition, Employeebysalary} from "../controllers/Employees/read.js";
import {create,createMany} from "../controllers/Employees/create.js"
const router = Router();

router.get('/all', allEmployee); 
router.get('/name/:name', Employeebyname); 
router.get('/salary/:salary',Employeebysalary);
router.get('/position/:position',Employeebyposition);
router.post('/create',create);
router.post('/createMany',createMany);

export default router;