import React from "react";
import Logo from "../assets/logo.svg"
import { FloatingDock } from "../components/FloatingDock";
import {
  IconCheck,
  IconPlus,
  IconSearch,
  IconCalendar
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const currentDate = new Date();
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
      href: "#",
    },
    


  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        items={links} />
    </div>
  );
}
