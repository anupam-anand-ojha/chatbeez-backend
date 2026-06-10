import userModel from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
    try{
        const {username, email, password}= req.body;
        console.log("user registered sucessfully")

        

        const isUserAlreadyExists = await userModel.findOne({
            $or:[
                {username},
                {email}
            ]
        })

        if(isUserAlreadyExists){
            console.log("user already exist")
           return res.status(401).json({message: "user already exists"})
        }
        
        const hash = await bcrypt.hash(password,10);

        const user = await userModel.create({
            username,
            email,
            password:hash
        })

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{ expiresIn: "7d"});
        res.cookie("token", token);

        res.status(201).json({
         success: true,
         token,
         user: {
          id: user._id,
          username: user.username,
          email: user.email
    }
});

    }
    catch(err){
        console.error("user not registered", err)
    }
}

export default {registerUser}