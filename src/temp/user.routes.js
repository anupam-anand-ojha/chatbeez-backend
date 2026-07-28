import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import { getProfile,getAllUsers} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", authMiddleware,getProfile);

router.get("/",authMiddleware,getAllUsers);

export default router;