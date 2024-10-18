import Employee from "../../models/Employee.js";

let create = async (req, res, next) => {
    try {
        let employee = req.body;
        let newEmployee = await Employee.create(employee);
        return res.status(201).json({
            response: newEmployee,
            message: "Employed create success."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let employees = req.body;
        let allEmployees = await Employee.insertMany(employees);
        return res.status(201).json({
            response: allEmployees,
            message: "Employed create success."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };