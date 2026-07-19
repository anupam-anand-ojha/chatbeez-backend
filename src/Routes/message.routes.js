import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {sendMessage,getMessages,markAsSeen} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send",authMiddleware,sendMessage);

router.get("/:userId", authMiddleware,getMessages);

router.put("/messages/seen/:userId",markAsSeen)

export default router;