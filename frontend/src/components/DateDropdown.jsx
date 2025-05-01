import React, { useState } from 'react'


const DateDropdown = ({state,setstate}) => {

  return (
    <div className='absolute z-30 mt-1 px-1 py-[0.1rem] bg-white  border border-stone-400 rounded  '>
          <label htmlFor="date-time"></label>
          <input 
            id='date-time'
            type="datetime-local"
            value={state}
            onChange={(e)=>setstate(e.target.value)}
          />
    
    </div>
    
  )
}

export default DateDropdown