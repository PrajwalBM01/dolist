import React, { useState } from 'react'
import {
    IconCheck,
    IconDots
} from "@tabler/icons-react";
import DropdownButton from './DropdownButton';
import PriorityDropdown from './PriorityDropdown';
import TaskEditDropedown from './TaskEditDropedown';


const TaskList = ({
    title,
    description,
    duedate,
    priority
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='flex group w-lg border-b border-stone-300'>
        {/* <div className='relative border border-stone-400 rounded-full top-3 w-auto h-4 cursor-pointer hover:bg-red-400'></div> */}
        <IconCheck size={15} className='relative top-3 border border-stone-400 h-3 w-3 rounded-full hover:border-black text-stone-50 hover:text-black cursor-pointer'/>
        <div className='flex  flex-col w-full justify-center h-auto p-2'>
            <div className='flex gap-2 text-[0.7rem] text-stone-500'>
                <div>{duedate.split("T")[0]}</div>
                <div>{duedate.split("T")[1].split(".")[0]}</div>
                <div>P{priority}</div>
            </div>
            <div className='flex justify-between px-2'>
                <p>{title}</p>
                <DropdownButton 
                    icon={<IconDots size={15}/>}
                    style={`cursor-pointer ${isDropdownOpen ? 'block' : 'hidden group-hover:block'}`}
                    Dropdown={TaskEditDropedown}
                    onOpenChange={setIsDropdownOpen}
                />
            </div>
            
            <p className='text-md font-thin px-2'>{description}</p>
        </div>
    </div>
  )
}

export default TaskList