import express from 'express';
import { registerUser, registerWithGoogle } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);

// Route for Google Sign-In registration
router.post('/register/google', registerWithGoogle);

export default router;