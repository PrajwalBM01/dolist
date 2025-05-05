import React from 'react'
import TaskList from '../components/TaskList'

const TodayTasks = ({list}) => {
  const today = new Date();
  today.setDate(today.getDate()); 
  today.setUTCHours(0, 0, 0, 0); 
  const isoString = today.toISOString();

  const filterLogic = (task) => {
    if(task.dueDate.split('T')[0] == isoString.split('T')[0]){
      if(task.completed == false){
        return task
      }
    }
  }
  return (
        <div className=' h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-1
                                [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-gray-300'>
        <h1>Today {isoString.split("T")[0]}</h1>
        {list && list.filter(filterLogic).sort((a,b)=> a.priority - b.priority).map((list,idx)=>(
          <TaskList 
            key={idx}
            id={list._id}
            title={list.title} 
            description={list.description} 
            duedate={list.dueDate} 
            priority={list.priority}
            completed={list.completed}
          />
        ))}
      </div>
  )
}

export default TodayTasks