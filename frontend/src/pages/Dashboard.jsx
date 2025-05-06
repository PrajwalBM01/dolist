import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodayTasks from '../components/TodayTasks'
import { globalStore, taskStore } from '../store'

const Dashboard = () => {
  const list = taskStore((state)=>state.list)
  const setList = taskStore((state)=>state.setList)
  const splitscreen = globalStore((state)=>state.splitscreen)
  const setSplitscreen = globalStore((state)=>state.setSplitscreen)
  const Showcomponent = globalStore((state)=>state.Showcomponent)
  

  useEffect(()=>{
    setSplitscreen(false)
    async function fetchTask() {
      const res = await axios.get(
        'http://localhost:5000/api/v1/task/list',
        {headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }}
      )
      setList(res.data.list)
    }
    fetchTask();

  },[])

  return (
    <div className='relative container p-1 h-[600px]'>
      {splitscreen? (
      <div className='flex h-[600px] gap-1 justify-between items-center-2xl'>
      <Showcomponent list={list}/>
      <div className='border border-stone-100'></div>
      <TodayTasks list={list}/>
      </div>
      ):(<TodayTasks list={list}/>)}
    </div>
  )
}

export default Dashboard