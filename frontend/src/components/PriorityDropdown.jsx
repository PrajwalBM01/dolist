import React from 'react'
import {
    IconFlag
  } from "@tabler/icons-react";

const PriorityDropdown = ({onClick}) => {

    const items = ["Priority 1", "Priority 2", "Priority 3", "Priority 4"]

  return (
    <div className='absolute z-30 mt-1 w-30 bg-white rounded border border-blue-300 '>
        {items.map((title,idx)=>(
            <div 
                key={idx} 
                className='flex gap-2 p-1 w-full justify-center text-sm cursor-pointer hover:bg-stone-100'
                onClick={onClick}
            >
                <IconFlag stroke={1} size={20}/>{title}
            </div>
        ))}
    </div>
  )
}

export default PriorityDropdown