import React, { useEffect, useState } from 'react'
import {
    IconCalendarWeek,
    IconFlag
  } from "@tabler/icons-react";

import PriorityDropdown from './PriorityDropdown';
import DateDropdown from './DateDropdown';
import DropdownButton from './DropdownButton';
import { toast } from 'react-toastify';
import axios from 'axios';
import { exampleTasks } from '../utils';
import { taskStore } from '../store';


const AddTask = ({cancel,setisopen}) => {
    const BASE_URL = import.meta.env.VITE_API_URL
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [priority,setPriority] = useState(4);
    const [exampleTitle, setExampleTitle] = useState("");
    const [exampleDetail, setExampleDetail] = useState("");
    const addToList = taskStore((state)=>state.addToList)
    const today = new Date();
    today.setDate(today.getDate()); 
    today.setUTCHours(23,59, 59, 0); 
    const isoString = today.toISOString();
    const [datetime,setdatetime] = useState(isoString);
    const [samedate,setSameDate] = useState(true)
    const dateArray = datetime ? datetime.split('T') : [];
    const finalDate = datetime ? datetime : isoString;

    useEffect(() => {
        const randomTask = exampleTasks[Math.floor(Math.random() * exampleTasks.length)];
        setExampleTitle(randomTask.title);
        setExampleDetail(randomTask.description);
    }, []);

    useEffect(()=>{
        if(isoString==datetime){
           setSameDate(true)
        }else{
            setSameDate(false)
        }
    },[datetime])

    async function addTask() {
        try {
            const res = await axios.post(
                `${BASE_URL}/api/v1/task/create`,
                {
                    title: title,
                    description: description,
                    priority: priority,
                    dueDate: finalDate
                },
                {
                    headers:{
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            toast(res.data.msg);
            if(res.status==201){
                addToList(res.data.task)
            }
            setisopen(false);
        } catch (error) {
            toast(error.response?.data?.message || "Something went wrong");
        }
    }

  return (
    <div className='rounded-xl p-2 w-auto h-auto '>
        <div className='flex gap-2 text-xs text-black'>
                    <div>{samedate ? "Today" : (
                            <div className='flex gap-2'>
                                <div>{dateArray[0]}</div>
                                <div>{dateArray[1] ? dateArray[1].split('.')[0] : ""}</div>
                            </div>
                        
                        )}
                    </div>
                    <div>P{priority}</div>
        </div>
        <div>
            <label htmlFor="title"></label>
            <input 
                type="text"
                id='title'
                value={title}
                onChange={e=> setTitle(e.target.value)}
                placeholder={exampleTitle}
                className='border-none w-full focus:outline-none focus:ring-0 text-lg placeholder:text-stone-300'
                 />
        </div>

        <div className='flex justify-between '>
            <div className=''>
                <label htmlFor="description"></label>
                <textarea 
                    type="text"
                    id='description'
                    placeholder={exampleDetail}
                    value={description}
                    rows={3}
                    onChange={e=> setdescription(e.target.value)}
                    className='border-none w-md focus:outline-none focus:ring-0 resize-none text-stone-800 
                                [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300 placeholder:text-stone-300'
                 /> 
                 

            </div>

            <div className='flex flex-col gap-3 p-2 '>
                <DropdownButton 
                    title="Due date" 
                    icon={<IconCalendarWeek size={20} stroke={1} />}
                    Dropdown={DateDropdown}
                    state={datetime}
                    setstate={setdatetime}
                    style='flex gap-1.5 border px-2 py-[0.1rem] justify-center border-stone-500 rounded text-center text-sm cursor-pointer hover:bg-stone-100'
                />

                <DropdownButton className
                    title="Priorties" 
                    icon={<IconFlag size={20} stroke={1} />}
                    Dropdown={PriorityDropdown}
                    state={priority}
                    setstate={setPriority}
                    style='flex gap-1.5 border px-2 py-[0.1rem] justify-center border-stone-500 rounded text-center text-sm cursor-pointer hover:bg-stone-100'
                />
            </div>
            
        </div>

        

        <div className='flex justify-center p-2 gap-2 border-t border-stone-300'>
            <button 
                className='cursor-pointer bg-stone-200 rounded px-5 py-[0.4rem] text-sm font-semibold text-stone-600 hover:bg-stone-300'
                onClick={cancel}
            >Cancel
            </button>
            <button 
                disabled={title.length===0}
                className='cursor-pointer bg-orangeRed/90 rounded px-5 py-[0.4rem] text-sm font-semibold hover:bg-orangeRed text-white disabled:opacity-50 disabled:cursor-not-allowed'
                onClick={addTask}
            >Add
            </button>
        </div>
    </div>
  )
}

export default AddTask