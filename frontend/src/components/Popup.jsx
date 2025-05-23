import React from 'react'

const Popup = ({
  isopen, 
  Compnent,
  setisopen,
  setref,
  tasktitle,
  taskdes,
  taskpriority,
  taskdue,
  id
}) => {
    if(!isopen) return null;
  return (
    <>
      {/* Backdrop with blur */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40" />
      
      {/* Popup content */}
      <div ref={setref} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-lg z-50 bg-white'>
        <Compnent 
          cancel={()=>setisopen(false)} 
          setisopen={setisopen}
          tasktitle={tasktitle}
          taskdes={taskdes}
          taskpriority={taskpriority}
          taskdue={taskdue}
          id={id}
          />
      </div>
    </>
  )
}

export default Popup