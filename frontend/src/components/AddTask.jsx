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

const AddTask = ({cancel,isopen,setisopen}) => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [priority,setPriority] = useState(4);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); 
    tomorrow.setUTCHours(0, 0, 0, 0); 
    const isoString = tomorrow.toISOString();
    const [datetime,setdatetime] = useState(isoString);
    const [samedate,setSameDate] = useState(true)
    const dateArray = datetime ? datetime.split('T') : [];
    const finalDate = samedate? datetime :`${datetime}:00.000Z`


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
                'http://localhost:5000/api/v1/task/create',
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
            setisopen(false);
        } catch (error) {
            toast(error.response?.data?.message || "Something went wrong");
        }
    }

  return (
    <div className='border rounded-xl p-2 border-stone-300 w-auto h-auto '>
        <div className='flex gap-2 text-xs text-stone-400'>
                    <div>{samedate ? "Today" : (
                            <div className='flex gap-2'>
                                <div>{dateArray[0]}</div>
                                <div>{dateArray[1]}</div>
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
                placeholder='Go to gym'
                className='border-none w-full focus:outline-none focus:ring-0 text-lg font-semibold'
                 />
        </div>

        <div className='flex justify-between '>
            <div className=''>
                <label htmlFor="description"></label>
                <textarea 
                    type="text"
                    id='description'
                    placeholder='Details'
                    value={description}
                    rows={3}
                    onChange={e=> setdescription(e.target.value)}
                    className='border-none w-md focus:outline-none focus:ring-0 resize-none text-stone-800 
                                [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300'
                 /> 
                 

            </div>

            <div className='flex flex-col gap-3 p-2 '>
                <DropdownButton 
                    title="Due date" 
                    icon={<IconCalendarWeek size={20} stroke={1} />}
                    Dropdown={DateDropdown}
                    state={datetime}
                    setstate={setdatetime}
                />

                <DropdownButton 
                    title="Priorties" 
                    icon={<IconFlag size={20} stroke={1} />}
                    Dropdown={PriorityDropdown}
                    state={priority}
                    setstate={setPriority}
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