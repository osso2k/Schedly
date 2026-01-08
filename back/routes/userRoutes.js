import { Router } from "express";

const userRouter = Router()

userRouter.get("/auth/user")
userRouter.post("/auth/signup")
userRouter.post("/auth/login")

export default userRouter