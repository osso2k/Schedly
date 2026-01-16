import React, { useState } from "react"
import api from "../../api/axios.ts"
import toast from "react-hot-toast"


const CreateTask = () => {
    const [task,setTask] = useState({title:"",scheduledAt:"",timer:0})
    const [loading, setLoading] = useState(false)


    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setTask({...task, [name]: name === "timer" ? Number(value) : value})
}
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (!task.title || !task.scheduledAt){
            return toast.error("Fill both fields")
        }
        try {
            setLoading(true)
            await api.post("/api/task/createTask", task)
            setLoading(false)

            setTask({ title: "", scheduledAt: "", timer: 0 })
            toast.success("Task added!")
        } catch (error) {
            toast.error("Failed to create task")
            console.log((error as Error).message)
        }

    }
  return (
    <div className="flex flex-col mx-auto bg-linear-to-br mt-20 from-pink-100 via-green-100 to-blue-100 max-h-1/1 w-[50%] rounded-4xl text-black">
        <h1 className="text-4xl font-extrabold mx-auto p-4">Add your task</h1>
      <form className="flex h-[50%] mt-10 flex-col text-xl" action="" onSubmit={handleSubmit}>
        <div className="ml-8 my-auto h-full gap-2" >
            <label className="text-2xl ">Title:</label>
            <input className="bg-white rounded-2xl text-lg h-12 pl-2 ml-3 " onChange={handlechange} type="text" name="title" value={task.title} />
        </div>
        <div className="ml-8 my-auto h-full gap-2" >
            <label className="text-2xl ">Scheduled At:</label>
            <input className="bg-white rounded-2xl text-lg h-12 pl-2 ml-3 " onChange={handlechange} type="datetime-local" name="scheduledAt" value={task.scheduledAt} />
        </div>    
        <div className="ml-8 my-auto h-full gap-2" >
            <label className="text-2xl ">timer:</label>
            <input className="bg-white rounded-2xl text-lg h-12 pl-2 ml-3 " onChange={handlechange} type="number" name="timer" value={task.timer} />
        </div>    
         <button disabled={loading}> {loading ? "Adding..." : "Add task"}</button>
      </form>
    </div>
  )
}

export default CreateTask
