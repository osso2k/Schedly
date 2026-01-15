import { useState } from "react"
import api from "../../api/axios.ts"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


interface FormData  {
    email:string,
    password:string,
}

const LoginPage = () => {
    const [form,setForm] = useState<FormData>({email:"",password:""})
    const navigate = useNavigate()
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            if (!form.email || !form.password){
                return toast.error("Please fill all fields")
            } 
            const response = await api.post('/api/auth/login',form)
            localStorage.setItem("user",response.data.user)
            localStorage.setItem("token", response.data.token) 

            toast.success("Logged in!")
            navigate('/')
        } catch (error) {
            console.log((error as Error).message)
        }
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col bg-zinc-800 p-4">
            <div>
                <label className="mr-2">email </label>
                <input type="text" name="email" onChange={handleChange} className="bg-white pl-2 rounded-2xl text-black text-lg" />
            </div>
            <div>
                <label className="mr-2">password </label>
                <input type="text" name="password" onChange={handleChange} className="bg-white pl-2 rounded-2xl text-black text-lg" />
        </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-zinc-400 rounded-3xl hover:scale-125 transition-all ease-out duration-1000 " >Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
