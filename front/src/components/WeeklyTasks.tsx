import api from "../../api/axios";
import {useState, useEffect} from "react"

interface Task {
  id: string | number;
  title: string;
  day: number;
  time: string;
  status: string;
  timer?: number;
}
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const WeeklyTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const dayIndex = new Date().getDay()
  const [day,setDay] = useState<number>(dayIndex)
  
  useEffect(()=>{
    const getTasks = async ()=>{
      const response = await api.get("/api/task/tasks")
      setTasks(response.data.tasks)
    }
    getTasks()
  },[tasks])
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setDay(Number(e.target.value))
  }
  return (
   <div className="flex flex-col mt-8 mx-auto max-h-full w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] shadow">
    <div className="mx-auto">
      <h1 className="font-normal">Weekly Overview</h1>
      <div className="flex">
      <h2 className="font-bold font-serif mr-2">{days[day]}</h2>
      <select onChange={handleChange} className="pl-2 border bg-white">
        <option value="">-</option>
        <option value="0">Sun</option>
        <option value="1">Mon</option>
        <option value="2">Tue</option>
        <option value="3">Wed</option>
        <option value="4">Thu</option>
        <option value="5">Fri</option>
        <option value="6">Sat</option>
      </select>
    </div>
    </div>
   </div>
  )
}

export default WeeklyTasks