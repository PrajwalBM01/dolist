import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import TaskList from '../components/TaskList'
import {
  IconPlus,
} from "@tabler/icons-react";
import AddTask from '../components/AddTask';


const Dashboard = () => {
  const [list, setlist] = useState([])
  const today = new Date();
  today.setDate(today.getDate()); 
  today.setUTCHours(0, 0, 0, 0); 
  const isoString = today.toISOString();

  const filterLogic = (task) => {
    if(task.dueDate.split('T')[0] == isoString.split('T')[0]){
      if(task.completed == false){
        return task
      }
    }
  }

  useEffect(()=>{
    async function fetchTask() {
      const res = await axios.get(
        'http://localhost:5000/api/v1/task/list',
        {headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }}
      )
      setlist(res.data.list)
    }
    fetchTask();

  },[])

  return (
    <div className='relative container p-2 flex gap-1 justify-between items-center-2xl h-[600px]'>
      <ToastContainer theme='dark'/>{console.log(isoString.split('T')[0])}
      <div className=' h-full w-full flex flex-col items-center'>
        <div>all</div>
        <div>completed</div>
        <div>search</div>
      </div>
      <div className='border border-stone-200'></div>
      <div className='  h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300'>
        <h1 className=''>Today {isoString.split("T")[0]}</h1>
        {list.filter(filterLogic).map((list,idx)=>(
          <TaskList 
            key={idx}
            title={list.title} 
            description={list.description} 
            duedate={list.dueDate} 
            priority={list.priority}
          />
        ))}
        {/* <button 
          className=' flex gap-1 items-center m-2 text-xs text-orangeRed cursor-pointer group'
          onClick={()=>{AddTask}}
        ><IconPlus className='group-hover:bg-orangeRed group-hover:text-white group-hover:rounded-full' size={15} stroke={2}/>
          <div>Add Task</div></button> */}
      </div>
    </div>
  )
}

export default Dashboard