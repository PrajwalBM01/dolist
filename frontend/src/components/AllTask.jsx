import React from 'react'
import TaskList from './TaskList'

const AllTask = ({list}) => {
  return (
    <div className=' h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-2
//                           [&::-webkit-scrollbar-track]:rounded-full
//                       [&::-webkit-scrollbar-track]:bg-gray-100
//                           [&::-webkit-scrollbar-thumb]:rounded-full
//                       [&::-webkit-scrollbar-thumb]:bg-gray-300'>
  <div>All Tasks</div>
      {list.filter((task)=>(task.completed == false)).map((task,idx)=>(
        <TaskList
          key={idx}
          title={task.title}
          description={task.description}
          duedate={task.dueDate}
          priority={task.priority}/>
      ))}
      
    </div>
  )
}

export default AllTask
