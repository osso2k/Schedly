import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const [show,setShow] = useState(false)
    const logout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
  }
const toggleBar = () => {
  setShow(prev => !prev)
}
  return (
    <div className="flex flex-col h-screen">
        {show? 
            (
            <div className="flex md:hidden h-full bg-zinc-950">
                <p onClick={toggleBar} className="text-2xl pl-5">X</p>
                <div className="flex flex-col gap-3 pl-2 pt-4">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/schedule'>schedule</NavLink>
                    <NavLink to='/profile'>profile</NavLink>
                    <div className="mt-[100%]" onClick={logout}>logout</div>
                </div>
            </div>
        ):(
            <div className="md:hidden" onClick={toggleBar}>|||</div>
        )}
        
    </div>
  )
}

export default Navbar
