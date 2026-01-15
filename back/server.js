import express from "express";
import dotenv from "dotenv";
import { connectDB, tasksTable, userTable, uuidGen } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import { protectedRoutees } from "./middleware/authMiddleware.js";
import taskRouter from "./routes/taskRoutes.js";
import cors from 'cors';
dotenv.config()

const app = express()
const PORT = process.env.APP_PORT || null

app.use(express.json())
app.use(cors())

await connectDB()
await uuidGen()

await userTable()
await tasksTable()

app.get("/", (req, res) => {
    res.json({ message: "Wassup!" })
})
app.use("/api/auth", userRouter)
app.use("/api/task", protectedRoutees, taskRouter)
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})

