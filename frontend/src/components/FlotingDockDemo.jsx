import React, { useState } from "react";
import { FloatingDock } from "../components/FloatingDock";
import {
  IconCheck,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import AddTask from "./AddTask"
import Popup from "./Popup";


export function FloatingDockDemo() {
  const currentDate = new Date();
  const [isopen, setisopen] = useState(false)
  const links = [
    {
      title: "Completed",
      icon: (
        <IconCheck className="h-full w-full text-white" />
      ),
      href: "#",
    },

    {
      title: "Search",
      icon: (
        <IconSearch className="h-full w-full text-white" />
      ),
      href: "#",
    },
    {
      title: "Today",
      icon: (
        <span className="text-white">{currentDate.getDate()}</span>
      ),
      href: "#",
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
          <Popup isopen={isopen} Compnent={AddTask} setisopen={setisopen}/>
        </div>
    </div>
  );
}
