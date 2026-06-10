import userModel from "../models/user.model.js";

export const getProfile = async (req, res) => {

    try {

        const user = await userModel
            .findById(req.user.id)
            .select("-password");

        return res.status(200).json(user);

    } catch (error) {

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};