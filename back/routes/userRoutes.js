import { Router } from "express";
import { getUser, login, signup } from "../controllers/authcontroller.js";

const userRouter = Router()

userRouter.get("/user", getUser)
userRouter.post("/signup", signup)
userRouter.post("/login", login)

export default userRouter