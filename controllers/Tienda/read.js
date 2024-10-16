import Tienda from '../../models/Tienda.js';

let allTienda = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Tienda.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let TiendabyNombre=async (req,res) =>{
    try {
        let nameQuery = req.params.x
        let all = await Tienda.find( {Nombre:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


export  { allTienda,TiendabyNombre }