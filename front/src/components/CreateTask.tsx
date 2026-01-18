import { useState } from "react";
import toast from "react-hot-toast";
import { GrFormAdd } from "react-icons/gr";
import api from "../../api/axios";

interface TaskData {
    title:string;
    date:string;
    time:string;
    timer:number | null;
}
const CreateTask = () => {
    const [task,setTask]= useState<TaskData>({title:"",date:"", time:"",timer:null})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setTask({...task,[name]:name==="timer"? Number(value):value})
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!task.title || !task.date || !task.time){
            return toast.error("NOOOOO NAUGHTY BOI!")
        }
        const scheduledAt = `${task.date}T${task.time}:00`;
        try {
            await api.post("/api/task/createTask",{
            title:task.title,
            scheduledAt:scheduledAt,
            timer:task.timer
            })
            toast.success("Task Added!")
            setTask({title:"",date:"",time:"",timer:null})
        } catch (error) {
            toast.error("Failed to Add Task.")
            console.log((error as Error).message)
        }

    }
  return (
    <div className="mt-10 w-[50%] mx-auto h-[50%] bg-amber-50 rounded-2xl">
      <div className="grid grid-cols-[4fr_2fr] h-full w-full">
        <div className="order-1 flex flex-col gap-2 w-full">
        <div className="flex mt-10 ml-5">
            <GrFormAdd className="text-5xl my-auto text-blue-500" />
            <h2 className="my-auto text-2xl text-zinc-900 font-semibold border-b border-r pr-1 pb-1 shadow-[3px_6px_12px_rgba(0,0,0,0.09)] ">Add New Task</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 ml-6 mt-15  w-full">
            <div className="flex w-full ">
                <input value={task.title} onChange={handleChange} placeholder="What needs to be done?"  type="text" name="title" className="focus:border-red-500 h-10 my-auto  w-[70%] rounded-lg  bg-white text-black pl-2" />
            </div>
            <div className="flex w-full  mt-2">
                <label className="my-auto text-amber-900 text-2xl pr-2">Date: </label><input value={task.date} onChange={handleChange}  type="date" placeholder="Date" name="date" className="focus:border-red-500 h-8 text-sm my-auto  w-[20%] rounded-lg  bg-white text-black pl-2" />
                <label className=" text-amber-900 text-2xl mx-2 my-auto">time: </label><input value={task.time} onChange={handleChange}  type="time" name="time" className="focus:border-red-500 h-8 text-sm my-auto  w-[15%] rounded-lg  bg-white text-black pl-2" />
            </div>
            <div className="flex w-full ml-6">
                <label className="my-auto text-amber-900 text-2xl pr-2">duration: </label><input value={task.timer ?? ""} onChange={handleChange}  type="number" name="timer" className="focus:border-red-500 h-10 my-auto  w-[35%] rounded-lg  bg-white text-black pl-2" />
            </div>

        </div>
        </form>

      </div>
        <div className="order-2 flex flex-col mt-10 text-black border-l mb-3">
            <h3 className=" text-center text-2xl font-semibold font-serif">BE EFFICIENT!</h3>
            <p className="text-xs text-zinc-600 font-mono text-center">Always decompose into simpler tasks.</p>
        </div>
      </div>
    </div>
  )
}

export default CreateTask
