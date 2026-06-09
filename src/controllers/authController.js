import userModel from "../models/user.model";

const registerUser = async (req, res) => {
    try{
        const {username, email, password}= req.body;
        console.log("user registered sucessfully")

    }
    catch(err){
        
    }
}