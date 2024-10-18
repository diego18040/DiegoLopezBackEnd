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

let Employeebyname = async (req,res) =>{
    try {
        let nameQuery = req.params.x
        let all = await Employee.find( {name:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export  { allEmployee,Employeebyname }