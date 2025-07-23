import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.model.js';

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({
            message: "No token provided, access denied"
        });
    }
    
    try {
       var decoded = jwt.verify(token, 'secret');
       const userID = decoded.data;
       console.log(userID)
       const matchUser = await userModel.findOne({_id: userID});
       if (matchUser) {
        next();
       }
       else{
        return res.status(400).json({msg: "user not authorized"});
       }
        
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
            error: error.message
        });
    }
};

export { auth };