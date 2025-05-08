import React, { useState } from 'react'


const DateDropdown = ({state,setstate,onClick}) => {

  return (
    <div className='flex gap-1 absolute z-30 mt-1 px-1 py-[0.1rem] bg-white  border border-stone-400 rounded  '>
          <label htmlFor="date-time"></label>
          <input 
            id='date-time'
            type="datetime-local"
            value={state}
            onChange={(e)=>setstate(e.target.value)}
          />
          <button
            onClick={onClick} 
            className='border rounded px-2 m-1 bg-orangeRed text-white cursor-pointer hover:bg-orange-700'>Ok</button>
    
    </div>
    
  )
}

export default DateDropdown