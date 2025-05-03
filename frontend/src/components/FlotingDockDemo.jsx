import React, { useEffect, useRef, useState } from "react";
import { FloatingDock } from "../components/FloatingDock";
import {
  IconCheck,
  IconPlus,
  IconSearch,
  IconListCheck
} from "@tabler/icons-react";
import AddTask from "./AddTask"
import Popup from "./Popup";
import { globalStore } from "../store";
import CompletedTasks from '../components/CompletedTasks'
import AllTask from '../components/AllTask'
import SearchTask from '../components/SearchTask'

export function FloatingDockDemo() {

  const [isopen, setisopen] = useState(false);
  const today = new Date()
  const popupRef = useRef(null);
  const setSplitscreen = globalStore((state)=>state.setSplitscreen)
  const setShowcomponent = globalStore((state)=>state.setShowcomponent)

  useEffect(()=>{
    function handleClickOutside(event){
      if(popupRef.current && !popupRef.current.contains(event.target)){
        setisopen(false);
      }
    }

    if(isopen){
      document.addEventListener("mousedown",handleClickOutside)
    } else {
      document.removeEventListener("mousedown",handleClickOutside)
    }
    
    return()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    };
  },[isopen])

  const links = [
    {
      title: "Completed",
      icon: (
        <IconCheck className="h-full w-full text-white" />
      ),
      clickHandel:()=>{
        setSplitscreen(true);
        setShowcomponent(CompletedTasks)
      },
    },

    {
      title: "Search",
      icon: (
        <IconSearch className="h-full w-full text-white" />
      ),
      clickHandel:()=>{
        setSplitscreen(true);
        setShowcomponent(SearchTask)
      },
    },
    {
      title: "Today",
      icon: (
        <span className="text-white">{today.getDate()}</span>
      ),
      clickHandel:()=>{
        setSplitscreen(false);
      },
    },
    {
      title: "All Tasks",
      icon: (
        <IconListCheck className="h-full w-full text-white" />
      ),
      clickHandel:()=>{
        setSplitscreen(true);
        setShowcomponent(AllTask)
      },
    },
    {
      title: "Add Task",
      icon: (
        <IconPlus className="h-full w-full text-white" />
      ),
      clickHandel:()=>{setisopen(prev=>!prev)},
    },
    


  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        items={links} />
        <div>
          <Popup isopen={isopen} Compnent={AddTask} setisopen={setisopen} setref={popupRef}/>
        </div>
    </div>
  );
}
