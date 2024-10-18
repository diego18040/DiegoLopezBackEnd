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

let Storebyname = async (req,res) =>{
    try {
        let nameQuery = req.params.x
        let all = await Store.find( {name:nameQuery} )
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


export  { allStore,Storebyname }