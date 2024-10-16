import Producto from '../../models/Producto.js';

let allProducto = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Producto.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let ProbuctobyNombre=async (req,res) =>{
    try {
        let nameQuery = req.params.x
        let all = await Producto.find( {Nombre:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export  { allProducto,ProbuctobyNombre }