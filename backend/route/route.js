import express from 'express'
import { userSignUp, userSignIn } from '../controller/userController.js';
import { fetchUsers } from '../controller/crudUsers.js';

const route = express.Router();

route.post("/signUp", userSignUp);
route.post("/signIn", userSignIn);

route.get("/fetchUsers", fetchUsers);

export default route;
