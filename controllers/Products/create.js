import Product from '../../models/Product.js';
import conflictMiddleware from '../../middlewares/conflict_Middleware.js';
let create = async (req, res, next) => {
    try {
        let product = req.body;
        let newProduct = await Product.create(product);
        return res.status(201).json({
            response: newProduct,
            message: "New product success."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let products = req.body;
        let newProducts = await Product.insertMany(products);
        return res.status(201).json({
            response: newProducts,
            message: "New product success."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };