import Product from '../../models/Product.js';

let allProduct = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Product.find()
            return res.status(200).json({
                response: all
            });
        } catch (error) {
            return res.status(500).json({
                response: error
            });
        }

    };

let Productbyname = async (req,res,next) =>{
    try {
        let nameQuery = req.params.name
        let product = await Product.find( {name: nameQuery} )
        if (product.length>0){
            return res.status(200).json({
                response: product
            });

        } else {
            return res.status(404).json({
               response: "Product not found"
            });

        }
    } catch (error) {
        next(error);
    }
};

let Productbyprice = async (req,res,next) =>{
    try {
        let priceQuery = req.params.price
        let product = await Product.find( {price: {$lte: priceQuery}} )
        if (product.length>0){
            return res.status(200).json({
                response: product
            });

        }else{
            return res.status(500).json({
                response: "Price not found"
            });

        }
    } catch (error) {
        next(error);
    }
};

let Productbytype = async (req,res, next) =>{
    try {
        let typeQuery = req.params.type
        let product = await Product.find ({type: typeQuery})
        if (product.length>0){
            return res.status(200).json({
                response: product
            });

        }else{
            return res.status(500).json({
                response: "Type not found"
            });

        }
    }catch (error){
        next (error);
    }
};

export  { allProduct,Productbyname, Productbyprice, Productbytype}