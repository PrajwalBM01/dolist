import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const exampleTasks = [
  {
    "title": "Complete React Project",
    "description": "Finish the dashboard component and connect it to the backend by Friday."
  },
  {
    "title": "Study Data Structures",
    "description": "Revise linked lists, stacks, and queues for upcoming test."
  },
  {
    "title": "Submit Assignment",
    "description": "Upload the DBMS assignment to the college portal before 11:59 PM tonight."
  },
  {
    "title": "Team Meeting at 3 PM",
    "description": "Discuss project roadmap and assign tasks for the next sprint."
  },
  {
    "title": "Grocery Shopping",
    "description": "Buy milk, bread, eggs, and fruits from the local market."
  },
  {
    "title": "Clean the Room",
    "description": "Declutter desk, sweep floor, and organize bookshelf."
  },
  {
    "title": "Pay Electricity Bill",
    "description": "Due on the 5th. Pay via the online portal."
  },
  {
    "title": "Laundry Day",
    "description": "Wash and fold clothes before the weekend."
  },
  {
    "title": "Morning Jog",
    "description": "Run 3km around the park between 6–7 AM."
  },
  {
    "title": "Drink 2 Liters of Water",
    "description": "Track water intake and stay hydrated."
  },
  {
    "title": "Meditation",
    "description": "10-minute guided meditation for focus and calm."
  },
  {
    "title": "Read a Chapter from Atomic Habits",
    "description": "Focus on how small changes lead to big results."
  },
  {
    "title": "Practice LeetCode Problems",
    "description": "Solve at least 2 medium-level questions today."
  },
  {
    "title": "Watch AI/ML Tutorial",
    "description": "Learn about decision trees and model evaluation techniques."
  },
  {
    "title": "Weekly Review",
    "description": "Reflect on accomplishments, and set goals for next week."
  },
  {
    "title": "Plan Monthly Budget",
    "description": "Allocate funds for savings, food, bills, and other expenses."
  },
  {
    "title": "Organize Calendar",
    "description": "Add upcoming deadlines, meetings, and events to Google Calendar."
  },
  {
    "title": "Write Blog Post",
    "description": "Draft and publish your blog on JavaScript tips for beginners."
  },
  {
    "title": "Call Family",
    "description": "Catch up with parents and siblings over a video call tonight."
  },
  {
    "title": "Backup Laptop Files",
    "description": "Create a backup of all project files to external hard drive or cloud."
  }
]

export { exampleTasks };