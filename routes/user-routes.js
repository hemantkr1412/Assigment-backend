import express from "express";
import { login } from "../controller/user-controller";
import { signup } from "../controller/user-controller";
import { getUsers } from "../controller/user-controller";



const userRouter = express.Router();

userRouter.get("/", getUsers,);
userRouter.post("/login", login);
userRouter.post("/signup", signup);

export default userRouter;


