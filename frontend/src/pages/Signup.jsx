import React, { useState } from 'react'
import signupImage from '../assets/signup.png'
import { Link } from 'react-router-dom'
import { Password } from '@phosphor-icons/react'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  


  function handleSubmit(e){
    e.preventDefault(); // Prevent default form submission (page reload)
    console.log('Form submitted with value:', email,username,password);
  }


  return (
    <div className=' flex items-center justify-center h-[600px]'>
      <div className='   container flex items-center justify-center gap-5'>
        <div className='  size-auto m-auto flex flex-col'>
          <div className='flex flex-col justify-center my-6'>
            <h1 className='text-5xl font-bold text-orangeRed'>Welcome to Dolist</h1>
            <p className='text-xl font-semibold'>Create an account and stop procrastinating.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center gap-2 font-semibold '>
              <div className='flex flex-col'>
                <label htmlFor="username">
                  Username:
                </label>
                <input 
                  type="text"
                  id='username'
                  value={username}
                  onChange={(e)=>{setUsername(e.target.value)}}
                  required
                  className='border rounded p-1 my-1 w-3/4 transition-all duration-300 hover:border-orangeRed '
                  placeholder='Walter_White' />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="email">
                  Email:
                </label>
                <input 
                  type="email"
                  id='email'
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                  className='border rounded p-1 my-1 w-3/4 transition-all duration-300 hover:border-orangeRed'
                  placeholder='breakingbad@gmail.com' />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="password">
                  Password:
                </label>
                <input 
                  type="password"
                  id='password'
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required  
                  className='border rounded p-1 my-1 w-3/4 transition-all duration-300 hover:border-orangeRed '
                  placeholder='watchmecook'/>
              </div>

              <div className='flex items-center justify-center w-3/4'>
                <button 
                  type='submit'
                  className='bg-orangeRed cursor-pointer px-4 py-2 rounded-xl text-white hover:bg-orange-700'>Sign Up</button>
              </div>

              <div className='flex items-center justify-center w-3/4 gap-2 text-sm text-stone-700'>
                <p>Already have an account?</p>
                <Link className='text-orange-600 underline hover:text-orange-700' to={"/login"}>Login</Link>
              </div>
            </div>
          </form>
        </div>
        <div className=' m-auto'>
          <img className='size-auto' src={signupImage} alt="signup illustration" />
        </div>
      </div>
    </div>
  )
}

export default Signup