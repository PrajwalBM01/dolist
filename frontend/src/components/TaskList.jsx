import React, { useEffect, useRef, useState } from 'react'
import {
    IconCheck,
    IconTrash,
    IconRestore,
    IconPencil
} from "@tabler/icons-react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { taskStore } from '../store';
import Popup from './Popup';
import EditTask from './EditTask';


const TaskList = ({
  id,
  title,
  description,
  duedate,
  priority,
  completed,
  lastupdate
}) => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const [colour, setColour] = useState('border-stone-400 text-stone-50')
  const deleteOneTask = taskStore((state)=>state.deleteOneTask)
  const updateTask = taskStore((state)=>state.updateTask)
  const [isopen, setIsopen] = useState(false)
  const popupRef = useRef(null);

  useEffect(()=>{
    function handleClickOutside(event){
      if(popupRef.current && !popupRef.current.contains(event.target)){
        setIsopen(false);
      }
    }

    if(isopen){
      document.addEventListener("mousedown",handleClickOutside)
    } else {
      document.removeEventListener("mousedown",handleClickOutside)
    }
    
    return()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    };
  },[isopen])

  useEffect(()=>{
    if(priority==1){
      setColour("border-red-600 bg-red-600/10 text-red-600/0")
    } else if(priority==2){
      setColour("border-blue-600 bg-blue-600/10 text-blue-600/0")
    }else if(priority==3){
      setColour("border-yellow-400 bg-yellow-400/10 text-yellow-400/0")
    }
  },[priority])


  async function deleteTask() {
    try{
      const res = await axios.delete(
        `${BASE_URL}/api/v1/task/delete/${id}`,
        {headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }}
      )
      if(res.status==201){
        toast("Task deleted")
        deleteOneTask(id)
      }
    }catch(err){
      toast("somthing went wrong")
    }
  }

  async function restore() {
    try{
      const res = await axios.patch(
        `${BASE_URL}/api/v1/task/update/${id}`,
        {completed:false},
        {headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }}
      )
      if(res.status==201){
        toast("Task restored")
        updateTask(res.data.task)
      }
    }catch(err){
      toast("somthing went wrong")
    }
  }

  async function update() {
    try{
      const res = await axios.patch(
        `${BASE_URL}/api/v1/task/complete/${id}`,
        {},
        {headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }}
      )
      if(res.status==201){
        toast("way to go! you completed a task")
        updateTask(res.data.taskUpdate)
      }
    }catch(err){
      console.log(err)
      toast("somthing went wrong")
    }
  }
  return completed ? (<div className='flex group w-lg border-b border-stone-300 text-stone-400'>
    <div className='flex flex-col w-full justify-center h-auto p-2'>
        <div className='flex gap-2 text-[0.7rem]'>
            <div>{duedate.split("T")[0]}</div>
            <div>{duedate.split("T")[1].split(".")[0]}</div>
            <div>P{priority}</div>
            <div className='flex gap-1 text-orangeRed/50'>
              <p>completed on</p>
              <p>{lastupdate.split('T')[0]}</p>
              <p>{lastupdate.split('T')[1].split('.')[0]}</p>
            </div>
        </div>
        <div className='flex justify-between'>
            <p>{title}</p>
            <div className='flex gap-1 invisible group-hover:visible'>
            <IconRestore
              size={18} 
              stroke={1}
              className={`relative top-3 rounded-full text-black hover:border-black  hover:text-black cursor-pointer`}
              onClick={restore}/>
            <IconTrash 
                size={18} 
                stroke={1}
                className={`relative top-3 rounded-full text-black hover:border-black  hover:text-black cursor-pointer`}
                onClick={deleteTask}
              />
            </div>
        </div>
        <p className='text-md font-thin'>{description}</p>
    </div>
</div>) : (<div className='flex group w-lg border-b border-stone-300'>
    <IconCheck 
      size={15} 
      className={`relative top-3 border ${colour} h-3 w-3 rounded-full hover:border-black  hover:text-black cursor-pointer`}
      onClick={update}
    />
    <div className='flex  flex-col w-full justify-center h-auto p-2'>
        <div className='flex gap-2 text-[0.7rem] text-stone-500'>
            <div>{duedate.split("T")[0]}</div>
            <div>{duedate.split("T")[1].split(".")[0]}</div>
            <div>P{priority}</div>
        </div>
        <div className='flex justify-between px-2'>
            <p>{title}</p>
            <div className='flex gap-1 invisible group-hover:visible'>
            <IconPencil
              size={18} 
              stroke={1}
              className={`relative top-3 rounded-full text-black hover:border-black  hover:text-black cursor-pointer`}
              onClick={()=> setIsopen(true)}/>
            <IconTrash 
                size={18} 
                stroke={1}
                className={`relative top-3 rounded-full text-black hover:border-black  hover:text-black cursor-pointer`}
                onClick={deleteTask}
              />
            </div>
            <Popup 
              isopen={isopen} 
              Compnent={EditTask} 
              setisopen={setIsopen} 
              setref={popupRef}
              tasktitle={title}
              taskdes={description}
              taskpriority={priority}
              taskdue={duedate}
              id={id}
            />
        </div>
        <p className='text-md font-thin px-2'>{description}</p>
    </div>
</div>)
}

export default TaskList