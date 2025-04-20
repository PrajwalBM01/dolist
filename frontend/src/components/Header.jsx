import { CheckSquareOffset, LineVertical } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full '>
        <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <div>
                    <Link to={"/"} 
                    className='flex font-bold text-4xl text-orangeRed '>
                        <CheckSquareOffset size={48} color="rgb(222, 72, 58)" weight="duotone" />
                        Dolist
                    </Link>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <p className='font-semibold text-xl text-mateBlack'>Time & Tide wait for none</p>
                    <LineVertical size={35} color="#121212" weight="light" />

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
            </div>
        </nav>
    </header>
  )
}

export default Header