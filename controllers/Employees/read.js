import Employee from "../../models/Employee.js";

let allEmployee = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Employee.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let Employeebyname = async (req,res, next) =>{
    try {
        let nameQuery = req.params.name
        let employee = await Employee.find( {name: nameQuery});
        if (employee.length >0){
            return res.status(200).json({
                response: employee
            });
            
        }else{
            return res.status(404).json({
                response: "Employess is not found"
            });
        }
    } catch (error) {
      next(error);
    }
};

let Employeebysalary = async (req,res, next)=>{
    try {
        let salaryQuery = req.params.salary;
        let employee = await Employee.find({salary:salaryQuery});
            return res.status(200).json({
                response: employee
            });
    } catch (error) {
        next(error);
    }
}

let Employeebyposition = async (req,res, next) =>{
    try {
        let positionQuery = req.params.position
        let employee = await Employee.find( {position: positionQuery} )
        if (employee.length>0){
            return res.status(200).json({
                response: employee
            });

        }else{
            return res.status(500).json({
                response: "There is no such position"
            });

        }
    } catch (error) {
        next(error)
    }
}

export  { allEmployee,Employeebyname, Employeebysalary, Employeebyposition }