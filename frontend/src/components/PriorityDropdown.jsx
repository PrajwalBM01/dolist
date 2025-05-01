import React from 'react'
import {
  IconFlag3Filled,
  IconFlag3
  } from "@tabler/icons-react";

const PriorityDropdown = ({onClick,state,setstate}) => {

  const items = [
    {
      title:"Priority 1",
      value:1,
      className:"flex gap-2 p-1 w-full justify-center text-sm cursor-pointer hover:bg-stone-100 ",
      flag:<IconFlag3Filled fill='oklch(57.7% 0.245 27.325)'/>
    },
    {
      title:"Priority 2",
      value:2,
      className:"flex gap-2 p-1 w-full justify-center text-sm cursor-pointer hover:bg-stone-100",
      flag:<IconFlag3Filled fill='oklch(70.4% 0.191 22.216)'/>
    },
    {
      title:"Priority 3",
      value:3,
      className:"flex gap-2 p-1 w-full justify-center text-sm cursor-pointer hover:bg-stone-100",
      flag:<IconFlag3Filled fill='oklch(80.8% 0.114 19.571)'/>
    },
    {
      title:"Priority 4",
      value:4,
      className:"flex gap-2 p-1 w-full justify-center text-sm cursor-pointer hover:bg-stone-100",
      flag:<IconFlag3 stroke={1} />
    },
  ]
  


  return (
    
    <div className='absolute z-30 mt-1 w-30 bg-white rounded border border-stone-400 '>
        {items.map((item,idx)=>(
            <div 
                key={idx} 
                className={item.className}
                onClick={()=>{
                  setstate(item.value)
                  onClick()
                }}
                value={state}     
            >
                {item.flag}{item.title}
            </div>
        ))}
    </div>
  )
}

export default PriorityDropdown