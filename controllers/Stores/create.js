import Store from "../../models/Store.js";
import conflictMiddleware from "../../middlewares/conflict_Middleware.js";
let create  = async (req, res, next) => {
    try {
        let store = req.body;
        let newStore = await Store.create(store);
        return res.status(201).json({
            response: newStore,
            message: "Store successfully registered."
        });
    } catch (error) {
        next(error);
    }
};

let createMany = async (req, res, next) => {
    try {
        let stores = req.body;
        let newStores = await Store.insertMany(stores);
        return res.status(201).json({
            response: newStores,
            message: "Store successfully registered."
        });
    } catch (error) {
        next(error);
    }
};

export { create, createMany };