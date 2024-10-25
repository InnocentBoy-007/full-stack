import express from 'express'
import { userSignUp, userSignIn } from '../controller/userController.js';

const route = express.Router();

route.post("/signUp", userSignUp);
route.post("/signIn", userSignIn);

export default route;
