import { useState } from "react"
import api from "../../api/axios.ts"
import toast from "react-hot-toast"

interface FormData  {
    username:string,
    email:string,
    password:string,
}

const SignupPage = () => {
    const [form,setForm] = useState<FormData>({username:"",email:"",password:""})
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            if (!form.username || !form.email || !form.password){
                return toast.error("PLease fill all fields")
            } 
            const response = await api.post('/auth/signup',form)
            localStorage.setItem("userId",response.data.userId)
            localStorage.setItem("token", response.data.token) 
        } catch (error) {
            console.log((error as Error).message)
        }
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>username</label>
            <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
            <label>email</label>
            <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
            <label>password</label>
            <input type="text" name="password" onChange={handleChange} />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default SignupPage
