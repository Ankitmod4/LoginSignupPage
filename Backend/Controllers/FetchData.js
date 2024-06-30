const model = require('../Model/Schema');

exports.FetchData = async (req,res) => {
    try {
        
        const { Email } = req.body;
        
        let data = await model.find({})
        if (!data) {
            res.status(400).json({
                success: false, 
                message:error.message
            })
        }
        res.status(200).json({
            success: true,
            data: data,
            message:"Data found"
        })
    }
    catch(error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
}
}