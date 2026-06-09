import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:[true, "Please enter unique username"]   
    },
    email: {
        type: String,
        require: true,

    },
    password: {
        type: String,
        require: true
    }
})

const userModel = mongoose.model("user", userSchema);

export default userModel