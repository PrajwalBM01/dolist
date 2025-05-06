import { IconSearch } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { taskStore } from '../store';
import TaskList from './TaskList';
import searchimage from '../assets/search.png' 
import notfound from '../assets/notfound.png'


const SearchTask = () => {
  const [searchtext, setsearchtext] = useState("");
  const list = taskStore((state)=>state.list);
  const [searchlist,setSearchlist]=useState([])
  const [isfocus,setIsfocus]=useState(false)

  function search(event) {
    const value = event.target.value;
    setsearchtext(value);
    setSearchlist(list.filter((item)=> item.title.toLowerCase().includes(value.toLowerCase())))
  }

  useEffect(()=>{
    if(isfocus==true && searchtext.length==0){
      setSearchlist([])
    }
  },[isfocus, searchtext])
  

  return (
    <div className='py-4 h-full w-full flex flex-col items-center overflow-auto [&::-webkit-scrollbar]:w-1
                         [&::-webkit-scrollbar-track]:rounded-full
                      [&::-webkit-scrollbar-track]:bg-gray-100
                          [&::-webkit-scrollbar-thumb]:rounded-full
                      [&::-webkit-scrollbar-thumb]:bg-gray-300'>
      <div className='my-1 w-3/4 relative'>
        <label htmlFor="search"></label>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
          <IconSearch size={18} />
        </div>
        <input 
          type="text"
          id='search'
          placeholder="Search"
          value={searchtext}
          onChange={(event) => search(event)}
          onFocus={() => setIsfocus(true)}
          className='border border-stone-200 rounded p-1 pl-8 w-full focus:outline-none focus:ring-0 focus:border-orangeRed' />
      </div>
      {(searchlist.length==0)?( 
        searchtext.length!=0? 
        <div className='flex flex-col py-15 items-center opacity-30 h-full w-full'>
          <img className='size-40 ' src={notfound} alt="" />
          <p className='font-bold'>Didn't find anything</p>
        </div> : 
          <div className='flex flex-col py-15 items-center opacity-30 h-full w-full'>
            <img className='size-40 ' src={searchimage} alt="" />
            <p className='font-bold'>What are you looking for?</p>
          </div>
        ):(
          searchlist.map((task,idx)=>(
          <TaskList
            key={idx}
            id={task._id}
            title={task.title}
            description={task.description}
            duedate={task.dueDate}
            priority={task.priority}
            completed={task.completed}
            lastupdate={task.updatedAt}/>
        )))}
      
    </div>
  )
}

export default SearchTask