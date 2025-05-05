import React, { useEffect, useRef, useState } from 'react'

const DropdownButton = ({title, icon, Dropdown, state, setstate, style}) => {
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
            className={style}>
            {icon}{title}
        </div>

        {open && <Dropdown onClick={()=>setOpen(false)} state={state} setstate={setstate}/>}
    </div>
  )
}

export default DropdownButton