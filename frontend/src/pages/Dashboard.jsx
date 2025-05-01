import React from 'react'
import AddTask from '../components/AddTask'
import Popup from '../components/Popup'
import { ToastContainer } from 'react-toastify'

const Dashboard = () => {
  return (
    <div className='relative container flex justify-center items-center border rounded-2xl h-[600px]'>
      <div>
        <ToastContainer/>
      </div>
    </div>
  )
}

export default Dashboard