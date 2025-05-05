import React from 'react'
import TaskList from './TaskList'

const CompletedTasks = ({list}) => {
  return (
      <div className=' h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-1
                         [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                          [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300'>
  <div>Completed Tasks</div>
      {list.filter((task)=>(task.completed == true)).reverse().map((task,idx)=>(
        <TaskList
          key={idx}
          id={task._id}
          title={task.title}
          description={task.description}
          duedate={task.dueDate}
          priority={task.priority}
          completed={task.completed}
          lastupdate={task.updatedAt}/>
      ))}
      
    </div>
  )
}

export default CompletedTasks