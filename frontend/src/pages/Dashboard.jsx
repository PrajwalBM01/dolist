import React from 'react'
import AddTask from '../components/AddTask'

const Dashboard = () => {
  return (
    <div className='container flex justify-center items-center border rounded-2xl h-[600px]'>
      <div><AddTask/></div>
    </div>
  )
}

export default Dashboard