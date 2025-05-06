import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useStore } from '../store'
import { FloatingDockDemo } from '../components/FlotingDockDemo'
import {
    IconUserFilled,
    IconLogout,
    IconChecklist,
    IconMinusVertical
  } from "@tabler/icons-react";

const Header = () => {
    const isAuth = useStore((state) => state.isAuth);
    const setAuth = useStore((state) => state.setAuth);

    useEffect(() => {
        const isToken = localStorage.getItem("token");
        if(isToken) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [isAuth]);
    

  return (
    <header className='w-full '>
        <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {isAuth ? (
                <div className='flex justify-center items-center h-16 my-3'>
                    <div className='flex gap-1 font-semibold rounded-2xl px-3 py-2'>
                        <IconUserFilled className='text-orangeRed'/>
                        {localStorage.getItem("user")}
                    </div>

                    <FloatingDockDemo/>
                    
                    <Link 
                        className=' flex gap-2 rounded-2xl px-3 py-2 font-semibold hover:bg-stone-100'
                        onClick={()=>{
                            localStorage.removeItem("token")
                            localStorage.removeItem("user")
                            Navigate("/")
                        }}
                    >Logout
                    <IconLogout stroke={1}/>
                    </Link>
                    
                </div>
            ) : (
            <div className='flex justify-between items-center h-16'>
                <div>
                    <Link to={"/"} 
                    className='flex font-bold text-3xl text-orangeRed '>
                        Dolist
                    </Link>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <p className='font-semibold text-xl text-mateBlack'>Time & Tide wait for none</p>
                    <IconMinusVertical size={40} stroke={1} />

                    <Link to={"/login"}>
                        <div className=' py-3 px-4 text-mateBlack cursor-pointer border border-transparent rounded-xl font-semibold hover:bg-stone-200 hover:text-black'>
                            Login
                        </div>
                    </Link>
                    
                    <Link to={"/signup"}>
                        <div className='bg-orangeRed text-white py-3 px-4 rounded-xl cursor-pointer font-semibold hover:bg-orange-700'>
                            Start for free
                        </div>
                    </Link>
                </div>
            </div>)}
           
        </nav>
    </header>
  )
}

export default Header