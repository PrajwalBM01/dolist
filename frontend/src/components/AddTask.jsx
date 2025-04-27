import React, { useState } from 'react'
import {
    IconCalendarWeek,
    IconFlag
  } from "@tabler/icons-react";

import PriorityDropdown from './PriorityDropdown';
import DateDropdown from './DateDropdown';
import DropdownButton from './DropdownButton';

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [priority, setpriority] = useState(4)
  return (
    <div className='border rounded-xl p-2 border-stone-300 w-auto h-auto '>
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
                    className='border-none w-md focus:outline-none focus:ring-0 resize-none text-stone-700 
                                [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300' />
            </div>

            <div className='flex flex-col gap-3 p-2 '>
                <DropdownButton 
                    title="Due date" 
                    icon={<IconCalendarWeek size={20} stroke={1} />}
                    Dropdown={DateDropdown}
                />

                <DropdownButton 
                    title="Priorties" 
                    icon={<IconFlag size={20} stroke={1} />}
                    Dropdown={PriorityDropdown}
                />
            </div>
        </div>

        

        <div className='flex justify-center p-2 gap-2 border-t border-stone-300'>
            <button 
                className='cursor-pointer bg-stone-200 rounded px-5 py-[0.4rem] text-sm font-semibold text-stone-600 hover:bg-stone-300'

            >Cancel
            </button>
            <button 
                disabled={title.length===0}
                className='cursor-pointer bg-orangeRed/90 rounded px-5 py-[0.4rem] text-sm font-semibold hover:bg-orangeRed text-white disabled:opacity-50 disabled:cursor-not-allowed'
            >Add
            </button>
        </div>
    </div>
  )
}

export default AddTask