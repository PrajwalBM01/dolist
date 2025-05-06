import React from 'react'
import TaskList from './TaskList'
import taskimage from '../assets/task.png'

const AllTask = ({list}) => {
  const alltasklist = list.filter((task)=>(task.completed == false))
  return (
    <div className='py-4 h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-1
                         [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                          [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300'>
  <div>All Tasks</div>
  {(alltasklist.length==0) ? (
          <div className='flex flex-col py-15 items-center opacity-30 h-full w-full'>
            <img className='size-40 ' src={taskimage} alt="" />
            <p className='font-bold'>Havn't added any tasks yet</p>
        </div>
        ):(
          alltasklist.map((task,idx)=>(
            <TaskList
              key={idx}
              id={task._id}
              title={task.title}
              description={task.description}
              duedate={task.dueDate}
              priority={task.priority}
              completed={task.completed}/>
          ))
        )}
    </div>
  )
}

export default AllTask
