import React, { useEffect, useRef, useState } from 'react'

const DropdownButton = ({title, icon, Dropdown, state, setstate}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      }
      
      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open]);

  return (
    <div className='relative inline-block' ref={dropdownRef}>
        <div
            onClick={() => setOpen(prev => !prev)} 
            className=' flex gap-1.5 border px-2 py-[0.1rem] justify-center border-stone-500 rounded text-center text-sm cursor-pointer hover:bg-stone-100'>
            {icon}{title}
        </div>

        {open && <Dropdown onClick={()=>setOpen(false)} state={state} setstate={setstate}/>}
    </div>
  )
}

export default DropdownButton