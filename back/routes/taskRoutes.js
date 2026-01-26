import { Router } from 'express'
import { createTask, deleteTask, getFourTasks, getTasks, updateTask } from '../controllers/taskControllers.js'

const taskRouter = Router()

taskRouter.get('/tasks', getTasks)
taskRouter.get('/todaysTasks', getFourTasks)
taskRouter.post('/createTask', createTask)
taskRouter.patch('/updateTask/:id', updateTask)
taskRouter.delete('/deleteTask/:id', deleteTask)

export default taskRouter