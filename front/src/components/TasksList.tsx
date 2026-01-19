import  {useEffect, useState } from "react"
import api from "../../api/axios.ts"

interface Task {
  title:string;
  day:number;
  time:string;
  status:string;
  timer:number
}
const TasksList = () => {
  const [tasks,setTasks] = useState<Task[]>([])
  useEffect(()=>{
    const getTasks = async ()=>{
      const response = await api.get("/api/task/tasks")
      setTasks(response.data)
    }
    getTasks()
  },[])
  return (
    <div className="flex flex-col w-full mt-6">
      <h1 className="mx-auto font-serif text-xl font-semibold">--Today--</h1>
      <div className="grid grid-cols-3">
        {tasks.length > 0 ? (tasks.map((task,idx)=>(
          <div key={idx} className="flex flex-col px-5 py-4 border rounded-xl mx-auto ">
            <h2 className="text-3xs font-semibold mx-auto">{task.title}</h2>
            <div className="flex text-sm font-sans gap-1 mx-auto">
              <p className="text-center">{(task.time).split(":")[0]}:{(task.time).split(":")[1]}</p>
            </div>
            <div className="flex mx-auto justify-between w-full">
              <p>{task.timer}</p>
              <p>{task.status}</p>
            </div>
          </div>
        ))):(<p>All clear!</p>)}
      </div>
      
    </div>
  )
}

export default TasksList
