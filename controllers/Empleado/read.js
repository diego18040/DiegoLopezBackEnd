import Empleado from "../../models/Empleado";

let allEmpleado = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Empleado.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let EmpleadobyNombre=async (req,res) =>{
    try {
        let nameQuery = req.params.x
        let all = await Empleado.find( {Nombre:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export  { allEmpleado,EmpleadobyNombre }