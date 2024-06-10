const model = require('../Model/Schema');
const bcrypt = require('bcrypt');


exports.Signup = async (req, res) => {
    const { Name, Email, Password, Role } = req.body;
    let hashedPassword; 
    // console.log(req.body);
    try {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(Password, salt); 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error hashing password",
        });
        return;
    }

    try {
        const user = await model.findOne({ Email });
        if (user) {
            res.status(409).json({
                success: false,
                message: "Email already exists. Please login or create using a different email.",
            });
        } else {
            const newUser = await model.create({
                Name, Email, Password: hashedPassword, Role
            });
            res.status(200).json({
                success: true,
                message: "Account Created Successfully",
                data: newUser,
            });
        }
    } catch (error) {
        console.log( error); 
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
    
};
