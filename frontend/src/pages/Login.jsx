import React, { useState } from 'react'
import loginImage from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import { useStore } from '../store';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const isAuth = useStore((state) => state.isAuth);
  const setAuth = useStore((state) => state.setAuth);
  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault()

    try{
      const res = await axios.post("http://localhost:5000/api/v1/auth/login",{
        email,
        password
      })

      toast(res.data.msg)

      if(res.status===201){
        setTimeout(() => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
          navigate("/dashboard")
          setAuth(true)
        }, 2000);
      }

    }catch(error){
      console.error(error);
      if (error.response) {
        // Server responded with an error status
        toast.error(error.response.data.msg || "Signup failed");
      } else if (error.request) {
        // Request was made but no response received
        toast.error("No response from server. Please try again later.");
      } else {
        // Something else caused the error
        toast.error("Error occurred. Please try again.");
      }
    }
  }



  return (
    <div className='flex justify-center items-center h-[600px] '>
      <div className='container flex justify-center items-center font-semibold size-auto my-6 gap-10'>
        <div>
          <img src={loginImage} alt="Login image" className='shadow-object' />
        </div>
        <div className='size-auto m-auto flex flex-col justify-center gap-4'>
            <div className='mb-6'>
              <h1 className='font-bold text-4xl text-orangeRed'>I know you would come back.</h1>
              <p className='text-black text-2xl font-semibold w-md'>You can not waste your time, Do what needs to be done.</p>
            </div>
            <div>
              <form onSubmit={handelSubmit} className='flex gap-4 flex-col'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="email">
                      Email:
                    </label>
                    <input 
                      type="email"
                      id='email'
                      required
                      value={email}
                      onChange={(e)=>{setemail(e.target.value)}}
                      className='border rounded p-1 w-3/5 hover:border-orangeRed'
                      placeholder='jessepinkman@gmail.com' 
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor="password">
                      Password:
                    </label>
                    <input 
                      type="password"
                      id='password'
                      required
                      value={password}
                      onChange={(e)=>{setpassword(e.target.value)}}
                      className='border rounded p-1 w-3/5 hover:border-orangeRed'
                      placeholder='itsbasicchemistry' />
                  </div>

                  <div className='flex items-center justify-center w-3/5'>
                    <button type='submit' className='bg-orangeRed rounded-xl cursor-pointer px-4 py-2 text-white hover:bg-orange-700'>Login</button>
                  </div>

                  <div className='flex items-center justify-center w-3/5 gap-2 text-sm'>
                    Dont have an account?
                    <Link to={"/signup"} className='text-orange-600 underline hover:text-orange-700'>Sign Up</Link>
                  </div>
              </form>
            </div>
            <div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login