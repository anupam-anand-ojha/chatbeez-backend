import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected sucessfully");
    }
    catch(err){
        console.error("databe connection error", err)
    }
}

export default connectDB