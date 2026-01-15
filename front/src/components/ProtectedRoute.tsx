import type { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"



type ProtectedRouteProps = PropsWithChildren

export const ProtectedRoute1 = ({ children }: ProtectedRouteProps) => {
    const token = localStorage.getItem("token")
    if (!token){
        return  <Navigate to='/login' replace />
    }
    return children
}

export const ProtectedRoute2 = ({children}:ProtectedRouteProps)=>{
    const token = localStorage.getItem("token")
    if (token){
        return <Navigate to="/" replace />
    }
    return children
}
