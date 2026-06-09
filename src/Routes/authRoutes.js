import express, { Router } from 'express';
import authController from '../controllers/authController';


const router = express.Router();

router.post('/register',authController.registerUser)

export default router

