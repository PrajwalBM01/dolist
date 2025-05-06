import React from 'react'
import TaskList from './TaskList'
import crossedArms from '../assets/crossedArms.png'

const CompletedTasks = ({list}) => {
  const completedtasklist = list.filter((task)=>(task.completed == true)).reverse()
  return (
      <div className='py-4 h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-1
                         [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                          [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300'>
  <div>Completed Tasks</div>
  {(completedtasklist.length==0) ? (
          <div className='flex flex-col py-15 items-center opacity-30 h-full w-full'>
            <img className='size-40 ' src={crossedArms} alt="" />
            <p className='font-bold'>Completed all or none?</p>
        </div>
        ):(
          completedtasklist.map((task,idx)=>(
            <TaskList
              key={idx}
              id={task._id}
              title={task.title}
              description={task.description}
              duedate={task.dueDate}
              priority={task.priority}
              completed={task.completed}
              lastupdate={task.updatedAt}/>
          ))
        )}
    </div>
  )
}

export default CompletedTasks