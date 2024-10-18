import Product from '../../models/Product.js';

let allProduct = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Product.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let Productbyname = async (req,res) =>{
    try {
        let nameQuery = req.params.x
        let all = await Product.find( {name:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export  { allProduct,Productbyname }