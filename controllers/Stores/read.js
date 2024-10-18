import Store from '../../models/Store.js';

let allStore = async (req, res) => {
        try {
            console.log(req.params);

            let all = await Store.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }

    }

let Storebyname = async (req,res,next) =>{
    try {
        let nameQuery = req.params.name
        let store = await Store.findOne({name: nameQuery} );
        if (store){
            return res.status(200).json({
                response: store
            });
            
        }else {
            return res.status(404).json({
                response: "Name is missing"
            });

        }
    } catch (error) {
        next(error);
    }
};

let Storebyadress = async (req , res, next) =>{
    try {
        let addressQuery = req.params.address
        let store = await Store.findOne({address: addressQuery});
        if (store){
            return res.status(200).json({
                response: store
            });

        }else{
            return res.status(404).json({
                response: "Address not found"
            });

        }
    }catch (error){
        next(error)
    }
};

export  { allStore,Storebyname,Storebyadress }