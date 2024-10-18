import Employee from "../../models/Employee.js";
import conflictMiddleware from "../../middlewares/conflict_Middleware.js";

let create = [
    conflictMiddleware, // Primero aplica el middleware de conflicto
    async (req, res, next) => {
        try {
            let employee = req.body;
            let newEmployee = await Employee.create(employee);
            return res.status(201).json({
                response: newEmployee,
                message: "Employee created successfully."
            });
        } catch (error) {
            next(error);
        }
    }
];

let createMany = [
    conflictMiddleware, // Aplica el middleware de conflicto para cada empleado
    async (req, res, next) => {
        try {
            let employees = req.body;
            let allEmployees = await Employee.insertMany(employees);
            return res.status(201).json({
                response: allEmployees,
                message: "Employees created successfully."
            });
        } catch (error) {
            next(error);
        }
    }
];

export { create, createMany };
