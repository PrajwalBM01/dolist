import React from 'react'
import { useStore } from '../store'
import { Navigate, Outlet } from 'react-router-dom'

const Protectedroutes = () => {
    const isAuth = useStore((state=>state.isAuth))
    
  return isAuth ? <Outlet/> : <Navigate to={"/login"}/>
  
}

export default Protectedroutes