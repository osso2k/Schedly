import { useEffect, useState } from "react"
import api from '../api/axios.ts';
import { useNavigate } from "react-router-dom";


const App = () => {
  const [data ,setData] = useState<string>('')
  const navigate = useNavigate()
  useEffect(()=>{
    const getData = async ()=>{
      const response = await api.get("/")
      setData(response.data.message)
    }
    getData()
  },[])
  const logout=()=>{
    localStorage.removeItem("token")
    navigate("/login")
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
