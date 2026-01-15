import { useEffect, useState } from "react"
import api from '../api/axios.ts';


const App = () => {
  const [data ,setData] = useState<string>('')
  useEffect(()=>{
    const getData = async ()=>{
      const response = await api.get("/")
      setData(response.data.message)
    }
    getData()
  },[])
  const logout=()=>{
    localStorage.removeItem("token")
  }
  return (
    <div>
      <h1>Schedly</h1>
      <p>{data}</p>
      <button onClick={logout}>logout</button>

    </div>
  )
}

export default App
